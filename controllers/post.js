import Post from '../model/post';

export const createPost = (req, res) => {
    console.log(req.body);
    res.json({
        message: "Post created successfully"
    })
}
export const getAllPosts = (req, res) => {
    res.send('hello world');
}