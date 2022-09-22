// const ManagerSummary =({budget}) =>{
//   return (
//     <div>
//            <div class="alert alert-primary" role="alert">
//         <span className="fw-bold">Presupuesto:</span> {budget}
//     </div>
//     <div class="alert alert-success" role="alert">
//         <span className="fw-bold">Restante:</span> {budget}
//       </div>
//     </div>
//   );
// };

// export default ManagerSummary;

// aumentando el monto del soles

// const ManagerSummary = ({ budget, remaining }) => {
//   return (
//     <div>
//       <div className="alert alert-primary" role="alert">
//         <span className="fw-bold">Presupuesto:</span> {budget}
//       </div>
//       <div className="alert alert-success" role="alert">
//         <span className="fw-bold">Restante:</span> {remaining}
//       </div>
//     </div>
//   );
// };

// export default ManagerSummary;

import { currencyFormat } from "../../utils/format";

const ManagerSummary = ({ budget, remaining }) => {
  return (
    <div>
      <div className="alert alert-primary" role="alert">
        <span className="fw-bold">Presupuesto:</span> {currencyFormat(budget)}
      </div>
      <div className="alert alert-success" role="alert">
        <span className="fw-bold">Restante:</span> {currencyFormat(remaining)}
      </div>
    </div>
  );
};

export default ManagerSummary;