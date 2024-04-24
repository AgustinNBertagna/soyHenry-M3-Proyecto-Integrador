export default function ScheduleInputField({
  label,
  name,
  type,
  min,
  value,
  placeholder,
  onChange,
  error,
}) {
  return (
    <div>
      <label>
        {label}
        <input
          name={name}
          type={type}
          min={min}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          required
        />
      </label>
      <h4>{error}</h4>
    </div>
  );
}
