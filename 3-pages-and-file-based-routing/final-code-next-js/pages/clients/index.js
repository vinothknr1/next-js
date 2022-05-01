import Link from "next/link";

const Clientpage = () => {
  const clients = [
    { id: "vinoth", name: "vinoth" },
    { id: "veera", name: "veera" },
    { id: "nivi", name: "nivi" },
  ];
  return (
    <div>
      <h1>Client Page</h1>
      <ul>
        {/* {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.name}`}>{client.name}</Link>
          </li>
        ))} */}
        {/* Alternative Approach */}
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={{ pathname: "clients/[id]", query: { id: client.id } }}>
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clientpage;
