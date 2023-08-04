import { createClient, groq } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "zctveqkg",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-06-22",
  token: process.env.SANITY_SECRET_TOKEN,
});

// uses GROQ
// get all posts
export async function getPosts() {
  const posts = await client.fetch(groq`*[_type == 'post']{
  _id,
  title,
  "slug": slug.current,
  "image": mainImage.asset->url,
  publishedAt,
  "body": pt::text(body),
  "author": *[_type == 'author' && _id == ^.author._ref][0]{
    _id,
    name,
    "slug": slug.current,
    },
    categories[]->{
    _id,
    title
  },
  "content": body,
}`);
  return posts;
}

// get all authors
export async function getAuthors() {
  const authors = await client.fetch(groq`*[_type == 'author']{
  _id,
  "image": image.asset->url,
    name,
    "slug": slug.current
  }`);
  return authors;
}
