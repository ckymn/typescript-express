import express from 'express';

const app = express();

app.get("/", (req, res) => {
    return res.status(200).send({ msg: " Hello World" })
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Application running on http://localhost:${PORT}`)
})