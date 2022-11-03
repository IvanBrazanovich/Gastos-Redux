export const transformDate = (date) => {
  const fecha = new Date(date);

  return fecha.toLocaleDateString("es-AR", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
};
