import express from "express";
import path from "path";
const app = express();

//middlewares
app.use(express.static(path.join(__dirname,"..", "app/public")))// build in prod

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,".." ,"/app/public/index.html"))// include build for prod
})

app.listen(3000, () => {
    console.log("Listening to port 3000");
})

