import { getPosts, getAuthors } from "@/lib/client";
import Image from "next/image";
import AuthorDetailsComponent from "@/components/blog/AuthorDetailsComponent";
import { PortableText } from "@portabletext/react";

const SingleBlogPage = async ({ params }) => {
  const posts = await getPosts();
  const authors = await getAuthors();
  const postID = params.id[0];

  const singlePost = posts.find((post) => post._id === postID);
  const singleAuthor = authors.find(
    (author) => author._id === singlePost.author._id
  );
  return (
    <div className="flex md:flex-row flex-col-reverse  my-8 md:space-x-4 lg:px-40 px-4 min-h-screen">
      <div className="md:w-3/4 space-y-8">
        <div className="w-full flex flex-col justify-center space-y-8 items-center ">
          <h1 className="text-3xl text-primary-dark font-semibold drop-shadow-md">
            {singlePost.title}
          </h1>
          <Image
            src={singlePost.image}
            width={800}
            height={200}
            alt={singlePost.title}
            className="backdrop-brightness-100 rounded"
          />
        </div>
        {/* <div>
          <p>
            By{" "}
            <span className="font-semibold text-redPrimary">
              {singlePost.author.name}
            </span>
          </p>
        </div> */}
        <div>
          <PortableText value={singlePost.content} />
        </div>
      </div>
      <div className="flex md:w-1/4">
        <AuthorDetailsComponent
          date={singlePost.publishedAt}
          singleAuthor={singleAuthor}
        />
      </div>
    </div>
  );
};

export default SingleBlogPage;
