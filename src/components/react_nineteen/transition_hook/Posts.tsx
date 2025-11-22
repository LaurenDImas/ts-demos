const Posts = () => {
    // TODO: Generate a lot of posts
    const posts = Array.from({length: 100000}, (_, index) => `Post ${index}`);
    return (
        <div>
            {posts.map((post) => (
                <div key={post} className="post">{post}</div>
            ))}
        </div>
    )
}
export default Posts
