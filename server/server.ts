import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";


dotenv.config();

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({hello: "world"});
});

app.listen(PORT, () => {
    console.log('Server started on port ' + PORT);
});

module.exports = app;