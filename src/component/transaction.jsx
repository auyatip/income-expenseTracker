import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <div className="border-b w-auto m-5">

      <li
        className=  {transaction.amount < 0 ? "text-red-400" : "text-green-500"}
      >
        {transaction.text}{" "}

        <span className="m-20">
          {sign}${Math.abs(transaction.amount)}
        </span>
      

        <button
          onClick={() => deleteTransaction(transaction.id)}
          className="m-2 w-[50px] ml-5 px-2 border rounded-lg items-end"
        >
          x
        </button>

      </li>
      </div>
  );
};

export default Transaction;

// Math.abs ใช้ในการ ตัด เครื่องหมาย + -
