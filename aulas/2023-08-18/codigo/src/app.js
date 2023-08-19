import express from "express";

import cidadeRoute from "./routes/cidadeRoute.js";
import estadoRoute from "./routes/estadoRoute.js";

const app = express();

app.use(express.json())

app.use(cidadeRoute);
app.use(estadoRoute);

app.listen(8080);
