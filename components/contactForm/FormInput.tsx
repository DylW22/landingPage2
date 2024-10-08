import ErrorLabel from "./ErrorLabel";
import { FormInputProps } from "../../types/types";

const FormInput: React.FC<FormInputProps> = ({
  mode = "input",
  label,
  name,
  error,
  ...props
}) => {
  return mode === "input" ? (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
      />
      {error && <ErrorLabel message={error} />}
    </>
  ) : (
    <>
      <label htmlFor={name}>{label}</label>
      <textarea
        name={name}
        {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
      {error && <ErrorLabel message={error} />}
    </>
  );
};

export default FormInput;
