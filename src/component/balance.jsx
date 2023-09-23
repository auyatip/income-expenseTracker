import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const {transaction} = useContext(GlobalContext)

  const amounts = transaction.map(transaction => transaction.amount)
  // reduce หาผลรวมทั้งหมดของ amount
  const total = amounts.reduce((prev, item)=> (prev += item), 0).toFixed(2);
  return (
    <div className="my-4 text-left uppercase bg-black/30 rounded-2xl p-3 px-4">
        <h4 className="text-gray-200 ">Your Balance</h4>
        <h1 id="balance" className='text-2xl font-bold'>$ {total}</h1>
    </div>
  )
}

export default Balance