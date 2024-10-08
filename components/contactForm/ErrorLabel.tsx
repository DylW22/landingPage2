import styles from "./errorLabel.module.css";
interface ErrorLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  message: string;
}

const ErrorLabel: React.FC<ErrorLabelProps> = ({ message, ...props }) => {
  return (
    <div className={`${styles.container}`} {...props}>
      {message}
    </div>
  );
};

export default ErrorLabel;
