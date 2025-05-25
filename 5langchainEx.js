import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { promises as fs } from 'fs';

// LangChain text splitter
async function splitDocument() {
  const text = await fs.readFile('./langchainpodcast.txt', 'utf-8');

  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 150,
    chunkOverlap: 15
  });
  const output = await splitter.createDocuments([text]);
  console.log(output);
}
splitDocument();
