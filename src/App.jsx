
import Header from './component/header'
import Balance from './component/balance'
import './App.css'
import IncomeExpen from './component/incomeExpen'
import TransactionList from './component/transactionList'
import AddTransaction from './component/addTransaction'
import { GlobalProvider } from './context/GlobalState'
function App() {

  return (
    <GlobalProvider>
      <Header/>
      <div className="">
        <Balance/>
        <IncomeExpen/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  )
}

export default App
