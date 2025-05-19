# Getting Started

Install the dependencies and run the project

```
npm install
npm start
```

Creating embeddings
https://platform.openai.com/docs/api-reference/embeddings

![alt text](image.png)

## Vector Databases

![alt text](image-1.png)

instead of looking for exact matches,
they use a similarity matches about the meaning of the words and phrases to find the vectors more similars

![alt text](image-2.png)

chroma pinecone supabase

### Store vector embeddings / set up vector database

https://supabase.com/

postgres pgvector

enable pgvector extension in supabase
copy url postgres

https://supabase.com/blog/openai-embeddings-postgres-vector

create table documents (
id bigserial primary key,
content text,
embedding vector(1536)
);

![alt text](image-3.png)
https://supabase.com/dashboard/project/enhchksytrfzdigyjodl/editor/17578
