import { useRouter } from "next/router";
import { version } from "react-dom";

const ClientProjectsPage = () => {
  const router = useRouter();
  console.log(router.query);

  const loadProjectButtonHandler = () => {
    //LOAD DATA...
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "vinoth", clientprojectid: "projecta" },
    });
  };
  return (
    <div>
      <h1>The Projects Of a Given Client</h1>
      <button onClick={loadProjectButtonHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectsPage;
