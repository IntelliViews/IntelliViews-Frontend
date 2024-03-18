import React from 'react';

interface FormFieldProps {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  register: any; // Adjust this type according to the register function's type
  errors: any; // Adjust this type according to the errors object's type
}

const FormField: React.FC<FormFieldProps> = ({ label, type, placeholder, name, register, errors }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">{label}:</label>
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        {...register(name)}
      />
      {errors[name]?.message && (
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
