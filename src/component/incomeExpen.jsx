import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpen = () => {
  const { transaction } = useContext(GlobalContext);
  const amounts = transaction.map((transaction) => transaction.amount);
  //หาผลรวมรายรับ
  // filter ใช้กรอง ค่าที่มากกว่า 0
  //reduce หาผลรวมทั้งหมด ค่าเริ่มต้นเป็น 0
  const income = amounts
    .filter((item) => item > 0)
    .reduce((prev, item) => (prev += item), 0)
    .toFixed(2);
  //นำค่าที่ได้มา บวกกันก่อน แล้วเอาไป x กับ จำนวนลบ
  const expen = amounts
    .filter((item) => item < 0)
    .reduce((prev, item) => (prev += item), 0 * -1)
    .toFixed(2);

  console.log(amounts);

  return (
    <div className="flex text-center w-full my-4 justify-center  border-gray-300">
      <div className="px-10 py-3 m-auto w-[150px] rounded-lg bg-green-200 shadow-xl">
        <h4 className="text-gray-800 uppercase ">Income</h4>
        <p className="text-green-600 underline" id="money-plus">
          +${income}
        </p>
      </div>
      <div className="px-10 py-3 m-auto w-[150px] rounded-lg bg-red-200 shadow-xl">
        <h4 className="text-gray-800 uppercase ">Expense</h4>
        <p className="text-red-600 underline" id="money-minus">
          -${expen}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpen;
