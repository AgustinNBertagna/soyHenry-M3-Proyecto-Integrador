export default function LoginInputField({
  label,
  name,
  type,
  value,
  placeholder,
  handleInputChange,
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
    </div>
  );
}
