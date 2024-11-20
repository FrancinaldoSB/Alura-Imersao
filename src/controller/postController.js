import getTodosPosts from "../models/postsModels.js";

async function ListarTodosPosts(req, res) {
    const posts = await getTodosPosts();
    res.status(200).json(posts);
}

export default ListarTodosPosts;