const TransactionList = ({ data }) => {
  return (
    <div>
      <ul className="flex flex-col gap-5">
        {data.map((datas) => (
          <li className="bg-gray-100 p-5 cursor-pointer" key={datas.id}>
            <h4 className="text-xl font-bold">{datas.nama}</h4>
            <p>
              Rp
              {typeof datas.jumlah === "number"
                ? datas.jumlah.toLocaleString("id-ID")
                : datas.jumlah}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
