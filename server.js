import express from "express";
import { fileURLToPath } from "url";
import path, { dirname, resolve } from "path";

const app = express();

// Path & File Reader Constants
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set('views', path.join(__dirname, 'views'))
app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.render("index")
})

app.listen(3000, () => console.log("Server is running on 3000"))