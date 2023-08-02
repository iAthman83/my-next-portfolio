import Link from "next/link";
import postImage from "../assets/robot.jpg";
import Image from "next/image";

const BlogCardComponent = ({ postData }) => {
  return (
    <Link href={`/blog`}>
      {/* <Link href={`/blog/${postData._id}`}> */}
      <div className="flex flex-col space-y-2 bg-primary-bg w-72 hover:cursor-pointer hover:scale-105 transition-transform duration-200 ease-out rounded overflow-hidden pb-4">
        <div>
          {/* <img src={postData.image} alt="image" height={50} width={300} /> */}
          <Image
            src="https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="image"
            height={50}
            width={300}
          />
        </div>
        <div className="flex flex-row px-2">
          <p className="font-semibold text-sm text-redPrimary">
            Abubakar Athman,
            {Date.now()}
            {/* {Date(postData.publishedAt).substring(0, 10)} */}
          </p>
        </div>
        <div>
          {/* <h1 className="text-xl font-bold px-2">{postData.title}</h1> */}
          <h1 className="text-xl font-bold">What is Robotics</h1>
        </div>
        <div>
          {/* <p className="line-clamp-3 px-2">{postData.body}</p> */}
          <p className="line-clamp-2">
            I'm baby tilde 8-bit taxidermy, cliche venmo mixtape farm-to-table
            narwhal yes plz.
          </p>
        </div>
        <div className="flex flex-row flex-wrap space-x-2 px-2">
          {/* {postData.categories.map((category) => (
            <p
              key={category._id}
              className="border bg-primary-dark text-primary-bg py-1 px-2 text-xs rounded-full"
            >
              {category.title}
            </p>
          ))} */}
        </div>
      </div>
    </Link>
  );
};

export default BlogCardComponent;
