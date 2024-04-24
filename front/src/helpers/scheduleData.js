export const initialAppointment = {
  date: "",
  time: "",
  description: "",
};

const actualDate = new Date();
actualDate.setHours(actualDate.getHours() - 3);
const minDate = actualDate.toISOString().split("T")[0];

export const formData = [
  {
    label: "Día",
    name: "date",
    type: "date",
    min: minDate,
  },
  {
    label: "Hora",
    name: "time",
    type: "time",
  },
  {
    label: "Descripción",
    name: "description",
    type: "text",
    placeholder: "Cita con el doctor.",
  },
];
