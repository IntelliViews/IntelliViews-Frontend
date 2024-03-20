interface FormFieldProps {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  register: any; // You can use a more specific type if available
}

const FormField: React.FC<FormFieldProps> = ({ label, type, placeholder, name, register }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">{label}:</label>
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        {...register(name)}
      />
    </div>
  );
};

export default FormField;