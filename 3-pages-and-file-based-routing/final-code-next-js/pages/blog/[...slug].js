import { useRouter } from "next/router";

const BlogPostspage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>Testing Blog Content</h1>
    </div>
  );
};

export default BlogPostspage;
