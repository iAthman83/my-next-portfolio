import Image from "next/image";

const AuthorDetailsComponent = ({ singleAuthor, date }) => {
  return (
    <div className="flex mb-4 md:mb-0 md:flex-col md:space-y-4 items-center w-full">
      <h1 className="hidden md:block text-xl text-primary-dark font-normal drop-shadow-md">
        Author
      </h1>
      <div className="flex md:flex-col flex-row space-x-4 md:space-x-0 items-center md:items-start md:space-y-2">
        <div className="avatar">
          <div className="md:w-48 w-20 rounded">
            <Image
              src={singleAuthor.image}
              alt={singleAuthor.name}
              width={100}
              height={100}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-sm">
            <span className="text-redPrimary">{singleAuthor.name}</span>, <br />
            {Date(date).substring(0, 10)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthorDetailsComponent;
