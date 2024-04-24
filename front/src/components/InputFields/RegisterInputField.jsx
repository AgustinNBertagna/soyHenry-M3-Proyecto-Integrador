export default function RegisterInputField({
  label,
  name,
  type,
  value,
  placeholder,
  handleInputChange,
  error,
}) {
  return (
    <div>
      <label>
        {label}
        <input
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={handleInputChange}
          required
        />
      </label>
      <h4>{error}</h4>
    </div>
  );
}
