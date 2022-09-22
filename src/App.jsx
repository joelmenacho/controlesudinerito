// import { useEffect, useState } from 'react';
// import './App.css';
// import Footer from './components/sections/Footer';
// import Header from './components/sections/Header';
// import ManagerPage from './pages/ManagerPage';
// import RegisterPage from './pages/RegisterPage';

// function App() {
//   const company = {
//     name: '💸 Controle su Dinero 💸',
//     slogan: '💰 Si quieres lograr grandes metas, debes controlar tus gastos. 💰'
//   };

//   const credits = {
//     year: new Date().getFullYear(),
//     author: 'Joel Menacho'
//   };

//   const [budget, setBudget] = useState(0);
//   const [remaining, setRemaining] = useState(0);
//   const [expenseList, setExpenseList] = useState([]);

//   const recordAmount = (amount) => {
//     setBudget(amount);
//     setRemaining(amount);
//   };

//   useEffect(() => {
//     if (budget) {
//       setRemaining(remaining- expenseList[(expenseList.length - 1)].amount);
//     }
//   }, [expenseList]);

//   return (
//     <>
//       <Header company={company} />
//       <main>
//         {
//           budget <= 0 ?
//             <RegisterPage
//               recordAmount={recordAmount}
//             />
//             :
//             <ManagerPage
//               budget={budget}
//               remaining={remaining}
//               expenseList={expenseList}
//               setExpenseList={setExpenseList}
//             />
//         }
//       </main>
//       <Footer credits={credits} />
//     </>
//   );
// }

// export default App;

import { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/sections/Footer';
import Header from './components/sections/Header';
import ManagerPage from './pages/ManagerPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  const company = {
    name: '💸 Controle su dinero 💸',
    slogan: '💰 Si quiere lograr grandes resultados, debes controlar tus gastos. 💰'
  };

  const credits = {
    year: new Date().getFullYear(),
    author: 'Joel Menacho'
  };

  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [expense, setExpense] = useState({
    description: '',
    amount: ''
  });
  const [expenses, setExpenses] = useState([]);

  const recordAmount = (amount) => {
    setBudget(amount);
    setRemaining(amount);
  };

  useEffect(() => {
    if (expense.amount) {
      setExpenses([
        ...expenses,
        expense
      ]);
      setRemaining(remaining - expense.amount);
      setExpense({ description: '', amount: '' });
    }
  }, [expense]);

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
              setExpense={setExpense}
              expenses={expenses}
            />
        }
      </main>
      <Footer credits={credits} />
    </>
  );
}

export default App;