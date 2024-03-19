interface FormFieldProps {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  register: any; // Unsure what type to make TS happy
  errors: any; // Unsure what type to make TS happy
}

const FormField: React.FC<FormFieldProps> = ({ label, type, placeholder, name, register, errors }) => {
  const hasError = errors[name]?.message;

  return (
    // The field
    <div className="mb-3">
      <label htmlFor={name} className="form-label">{label}:</label>
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        {...register(name)}
      />
      {/* The error printer for each field */}
      {hasError && (
        <ul className="mt-2 text-sm text-red-400">
          {Object.keys(errors[name].message).map((m, i) => {
            const { pass, message } = errors[name].message[m];
            return (
              <li key={i}>
                <span>{pass ? "✅" : "❌"}</span>
                <span>{message}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default FormField;