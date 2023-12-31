import BlogHeaderComponent from "@/components/blog/BlogHeaderComponent";
import BlogFooterComponent from "@/components/blog/BlogFooterComponent";

export const metadata = {
  title: "Blog Page",
  description: "Generated by create next app",
};

export default function BlogLayout({ children }) {
  return (
    <>
      <BlogHeaderComponent />
      <main className="min-h-screen">{children}</main>
      <BlogFooterComponent />
    </>
  );
}
