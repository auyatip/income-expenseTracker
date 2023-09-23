import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./transaction";

const TransactionList = () => {
  const { transaction } = useContext(GlobalContext);

  return (
    <div className=" m-auto">
      <h3 className="text-2xl font-bold mt-6">History</h3>
      <ul id="list" className="rounded-xl border-yellow-100 border my-4 p-2 w-full flex flex-col items-center bg-gray-800">
        {transaction.map((item) => (
        <Transaction key={transaction.id} transaction = {item}/>
))}
      </ul>
    </div>
  );
};

export default TransactionList;
