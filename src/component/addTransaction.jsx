import { useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);

  const onSubmit= (e) =>{
      e.preventDefault();

      const newTransaction = {
        id: Math.floor(Math.random() * 1000000),
        text,
        amount: +amount
      }
      addTransaction(newTransaction);
  }
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-bold uppercase mb-4 ">Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text" className="text-xl">Your text : </label>
          <input
          className="p-2 rounded-lg bg-sky-200 mx-2 mb-2 text-black"
            type="text"
            placeholder="Enter text..."
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control flex items-center  justify-center">
          <label htmlFor="amount" className="text-xl">
            Amount : <br />
          </label>
          <input
          className="p-2 rounded-lg bg-sky-200 m-4 text-black"
            type="number"
            placeholder="Enter amount..."
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button
          
          className="bg-green-500 px-10 mt-2 py-5 uppercase font-semibold text-black/70 rounded-lg"
        >
          Add transaction
        </button>
      </form>
    </div>
  );
};

export default AddTransaction;
