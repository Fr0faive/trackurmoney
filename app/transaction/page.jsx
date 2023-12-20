import Link from "next/link";

async function getTransactions() {
  const res = await fetch("http://localhost:3000/api/transaction", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  await new Promise((resolve) => setTimeout(resolve, 3000));
  return res.json();
}

const TransactionsPage = async () => {
  //   const Transactions = await getTransactions();
  const [transactions, users] = await Promise.all([
    getTransactions(),
    getUsers(),
  ]);

  return (
    <div>
      <h1 className="text-4xl mb-4">Transaction List</h1>
      <ul className="flex flex-col gap-5">
        {transactions.map((transaction) => (
          <Link href={`/transaction/${transaction.id}`} key={transaction.id}>
            <li className="bg-gray-100 p-5 cursor-pointer">
              <p className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20 w-fit">
                {transaction.kategori}
              </p>
              <h4 className="text-xl font-bold">{transaction.nama}</h4>
              <p>
                Rp
                {typeof transaction.jumlah === "number"
                  ? transaction.jumlah.toLocaleString("id-ID")
                  : transaction.jumlah}
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default TransactionsPage;
