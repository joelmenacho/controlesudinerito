import ManagerItem from "./ManagerItem";

const ManagerList = ({ budget, expenseList }) => {
  return (
    <ul className="list-group">
      {
        expenseList.length === 0 ?
          <li className="list-group-item d-flex justify-content-center align-items-center">
            <span className="badge bg-primary rounded-pill">Registre su primer egreso</span>
          </li>
          :
          expenseList.map((element, index) => {
            return (
              <ManagerItem
                key={index}
                element={element}
              />
            );
          })
      }
    </ul>
  );
};

export default ManagerList;