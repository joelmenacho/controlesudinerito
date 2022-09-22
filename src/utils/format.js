export const currencyFormat = (amount) => {
    return ((+amount).toLocaleString('es-PE', { style: 'currency', currency: 'PEN', minimumFractionDigits: 2 }));
  };