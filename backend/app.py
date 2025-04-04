from fastapi import FastAPI, File, UploadFile

import json
from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import FAISS
from langchain.schema import Document
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.embeddings.openai import OpenAIEmbeddings
from langchain.vectorstores import Chroma
import json
from langchain.chains import RetrievalQA
from langchain.chat_models import ChatOpenAI
from graphviz import Source
from IPython.display import Image
from fastapi.middleware.cors import CORSMiddleware

import networkx as nx
from pyvis.network import Network
from langchain_openai import ChatOpenAI
import json

from langchain.document_loaders import PyPDFLoader
import re
import os
import shutil
from fastapi.staticfiles import StaticFiles

from load_dotenv import load_dotenv

load_dotenv()



app = FastAPI()
app.mount("/mindmaps", StaticFiles(directory="mindmaps"), name="mindmaps")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"], 
)

os.environ["OPENAI_API_KEY"] = os.getenv("OPENAI_API_KEY")

model = ChatOpenAI(model="gpt-4o-mini")

def fromPDF(pdf_path,pdf_name):
  loader = PyPDFLoader(pdf_path)
  documents = loader.load()

  text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=80)
  docs = text_splitter.split_documents(documents)

  total_chunks = len(docs)
  print(total_chunks)

  if total_chunks <17:
    relevant_text = " ".join([doc.page_content for doc in docs])

  else:
    embeddings = OpenAIEmbeddings()
    vector_store = FAISS.from_documents(docs, embeddings)

    def retrieve_relevant_chunks(query, vector_store, top_k = 45):
      retriever = vector_store.as_retriever(search_kwargs={"k": top_k})
      relevant_docs = retriever.get_relevant_documents(query)
      return [doc.page_content for doc in relevant_docs]

    query = """Extract the all concepts, all formulas, definitions, and relationships from the given document.
      Focus on retriving all important details.
      Extract all important details from the document as much as possible.
      Ensure that all retrieved content is relevant to understanding the subject deeply."""

    relevant_text = "\n\n".join(retrieve_relevant_chunks(query, vector_store))

  output_format = """
  {
    "Main Topic": ["Subtopic 1", "Subtopic 2"],
    "Subtopic 1": ["Detail A", "Detail B"],
    "Subtopic 2": ["Detail C"]
  }
  """

  # Step 1: Generate mind map structure
  query1 = f"""
  - You are an expert in generating structured mind maps for jee student.
  - You have to give only formula and main content data.
  - You should focus on main content only along with few example.
  - Make mindmap long as much you want but maintain logical flow.
  - The connections should be logical.
  - Make sure you covered all the important topics.

    The text of which mindmap needs to be generate is :

  {relevant_text}
  -----------------------------------------------------------------------

  - **GIVE AS DETAILED MINDMAP AS POSSIBLE**
  - **ALL NODES SHOULD HAVE CLEAR INFORMATIONS**
  The output format should strictly follow this Graphviz DOT structure:
  {output_format}

  strictly follow the provided output format and do *not* include extra intro or '''dot heading
  """
  response = model.invoke(query1)
  response1 = json.loads(response.content)

  

  # Create a NetworkX graph
  G = nx.DiGraph()

  for parent,children in response1.items():
    for child in children :
      G.add_edge(parent,child)

  # Create a Pyvis network
  net = Network(notebook=True, directed=True, height="1000px", width="100%",bgcolor="#FCFAF3")

  # Add nodes with colors
  for node in G.nodes:
      if G.in_degree(node) == 0:  # Root node (No incoming edges)
          color = "#00ffff"
          shape = "box"

      elif G.out_degree(node) > 0 and G.in_degree(node) > 0:  # Intermediate nodes (Has both incoming & outgoing edges)
        color = "#ffcc00"
        shape = "box"

      elif G.out_degree(node) == 0:  # Leaf node (No outgoing edges)
        color = "#00ff66"
        shape = "box"

      else:  # Fallback (shouldn't be necessary)
        color = "#00ff99"  # Cyan-Green
        shape = "box"  # Unclassified nodes

      net.add_node(node, label=node, color=color, shape=shape,
        size=30,)


  # Add edges
  for edge in G.edges:
      net.add_edge(*edge)

  # Save and show the visualization

  file_name = pdf_name.split(".")[0]
  net.show(f"mindmaps/{file_name}.html", notebook=True)
  host_file= f"mindmaps/{file_name}.html"
  return host_file
  



@app.post("/generateMindmap")
async def generateMindmap(pdf : UploadFile = File(...)):
    with open(f"uploads/{pdf.filename}","wb") as buffer:
        shutil.copyfileobj(pdf.file,buffer)

    filePath = fromPDF(f"uploads/{pdf.filename}",pdf.filename)

    return f"http://localhost:8000/{filePath}"

    

    
    



