import AddTransaction from "../component/AddTransaction";

async function getData() {
  const res = await fetch("http://localhost:3000/api/transaction");
  const data = await res.json();
  return data;
}
const AdminPage = () => {
  return (
    <div className="max-w-4xl mx-auto mt-4">
      <div className="my-5 flex flex-col gap-4">
        <h1 className="text-3xl font-bold">Admin CRUD</h1>
        <AddTransaction />
      </div>
    </div>
  );
};

export default AdminPage;
