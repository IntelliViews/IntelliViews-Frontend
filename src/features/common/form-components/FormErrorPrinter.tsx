interface FormErrorPrinterProps {
    name: string;
    errors: any; // You can use a more specific type if available
  }
  
  const FormErrorPrinter: React.FC<FormErrorPrinterProps> = ({ name, errors }) => {
    const errorMessages = errors[name]?.message;
  
    return (
      <>
        {errorMessages && (
          <ul className="mt-2 text-sm text-red-400">
            {Object.keys(errorMessages).map((key, i) => {
              const { pass, message } = errorMessages[key];
              return (
                <li key={i}>
                  <span>{pass ? "✅" : "❌"}</span>
                  <span>{message}</span>
                </li>
              );
            })}
          </ul>
        )}
      </>
    );
  };
  
export default FormErrorPrinter;