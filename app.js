
const express = require("express");
const cookieParser = require("cookie-parser");

const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const static_path = path.join(__dirname, "./public");
const template_path = path.join(__dirname, "./templates/views");

app.set("view engine", "ejs");
app.use(express.static(static_path));
app.set("views", template_path);

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/quoteapi/", (req,res)=>{
    res.send({
        "id": 1,
        "quote_en" : "Talk is cheap. Show me the code.",
        "quote_sr" : "Причање је јефтино. Покажи ми код.",
        "author" : "Linus Torvalds",
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
