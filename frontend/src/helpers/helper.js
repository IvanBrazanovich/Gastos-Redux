export const transformDate = (date) => {
  const fecha = new Date(date);

  return fecha.toLocaleDateString("es-AR", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
};

export const transformCurrency = (cantidad) => {
  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  });

  return formatter.format(cantidad);
};
