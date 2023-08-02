import BlogCardComponent from "@/components/BlogCardComponent";
import { getPosts } from "@/lib/client";

const BlogPage = async () => {
  const posts = await getPosts();
  return (
    <main className="flex flex-col lg:px-24 px-4">
      <div className="flex justify-center my-4">
        <h1 className="capitalize text-5xl font-semibold">Blogs</h1>
      </div>
      <ul className="flex flex-row flex-wrap justify-evenly space-y-8">
        {posts.map((post) => (
          <li key={post._id} className="first:mt-8">
            <BlogCardComponent postData={post} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default BlogPage;
