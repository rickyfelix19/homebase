import NewPost from "./pages/NewPost";
import Post from "./pages/Post";

/*
 * // /posts/:postId
 *  /posts/blog-post-1
 *  /posts/blog-post-2
 *  /posts/blog-post-3
 */

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="new" element={<NewPost />} /> {/* Nested route! */}
        <Route path=":postID" element={<Post />} /> {/* Dynamic route! */}
      </Routes>
    </Router>
  );
};

export default App;
