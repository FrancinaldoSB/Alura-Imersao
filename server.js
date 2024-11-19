import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 2,
        descricao: "Paisagem montanhosa",
        imagem: "https://source.unsplash.com/random/300x150/?mountains",
    },
    {
        id: 3,
        descricao: "Cachorro brincando",
        imagem: "https://placekitten.com/g/300/150",
    },
    {
        id: 4,
        descricao: "Cidades noturnas",
        imagem: "https://source.unsplash.com/random/300x150/?city,night",
    },
    {
        id: 5,
        descricao: "Comida deliciosa",
        imagem: "https://source.unsplash.com/random/300x150/?food",
    },
    {
        id: 6,
        descricao: "Natureza exuberante",
        imagem: "https://source.unsplash.com/random/300x150/?nature",
    },
    {
        id: 7,
        descricao: "Arte abstrata",
        imagem: "https://source.unsplash.com/random/300x150/?abstract",
    }
];

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});


app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorId(id) {
    return posts.findIndex((post) => post.id === Number(id));
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorId(req.params.id);
    res.status(200).json(posts[index]);
});
