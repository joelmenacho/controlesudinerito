import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/sections/Footer';
import Header from './components/sections/Header';
import ManagerPage from './pages/ManagerPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  const company = {
    name: '💸 Dinerito Feliz 💸',
    slogan: '💰 Si quieres ser estofado, paga por adelantado 💰'
  };

  const credits = {
    year: new Date().getFullYear(),
    author: 'Elliot Garamendi'
  };

  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [expenseList, setExpenseList] = useState([]);

  const recordAmount = (amount) => {
    setBudget(amount);
    setRemaining(amount);
  };

  useEffect(() => {
    if (budget) {
      setRemaining(remaining- expenseList[(expenseList.length - 1)].amount);
    }
  }, [expenseList]);

  return (
    <>
      <Header company={company} />
      <main>
        {
          budget <= 0 ?
            <RegisterPage
              recordAmount={recordAmount}
            />
            :
            <ManagerPage
              budget={budget}
              remaining={remaining}
              expenseList={expenseList}
              setExpenseList={setExpenseList}
            />
        }
      </main>
      <Footer credits={credits} />
    </>
  );
}

export default App;