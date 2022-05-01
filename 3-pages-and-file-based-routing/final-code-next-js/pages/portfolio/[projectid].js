import { useRouter } from "next/router";

const PortfolioProject = () => {
  const router = useRouter();
  console.log(router.pathname);
  console.log(router.query);

  return (
    <div>
      <h1>Portfolio Project 1</h1>
    </div>
  );
};

export default PortfolioProject;
