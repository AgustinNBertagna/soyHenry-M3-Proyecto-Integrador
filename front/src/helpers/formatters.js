export function formatDate(date) {
  const strToDate = new Date(date);

  const day = strToDate.getDate() + 1;
  const month = strToDate.getMonth() + 1;
  const year = strToDate.getFullYear();

  const formattedDay = day < 10 ? "0" + day : day;
  const formattedMonth = month < 10 ? "0" + month : month;

  const formattedDate = `${formattedDay}-${formattedMonth}-${year}`;

  return formattedDate;
}

export function sortAppointments(appointments) {
  return appointments.sort((a, b) => {
    if (a.status === "active" && b.status !== "active") return -1;
    if (b.status === "active" && a.status !== "active") return 1;
    return new Date(`${a.date}T${a.time}`) - new Date(`${b.date}T${b.time}`);
  });
}
