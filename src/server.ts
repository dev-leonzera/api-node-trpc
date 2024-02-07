import * as trpcExpress from '@trpc/server/adapters/express';
import express from "express";

const app = express();
const PORT = 3000;
const apiEndpoint = "/trpc";
app.use(express.json());

app.listen(PORT, () => console.log("Tá rodando!"));
