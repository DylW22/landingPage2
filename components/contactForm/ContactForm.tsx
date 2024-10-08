import { useEffect, useState } from "react";
import styles from "./contactForm.module.css";
import { Button } from "../button/Button";
import { FormData, ErrorData } from "../../types/types";
import FormInput from "./FormInput";

const initialFormData: FormData = { name: "", email: "", message: "" };
const initialErrorData: ErrorData = {
  nameError: false,
  emailError: false,
  messageError: false,
};
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<ErrorData>(initialErrorData);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nameError = formData.name.trim().length <= 3;
    const emailError = !formData.email.includes("@");
    const messageError =
      formData.message.trim().length <= 10 ||
      formData.message.trim().length > 255;

    if (nameError || emailError || messageError) {
      setErrors({ nameError, emailError, messageError });
      return;
    }

    setSubmitted(true);
    setErrors(initialErrorData);
    setFormData(initialFormData);
  };
  useEffect(() => {
    let timerId: NodeJS.Timeout | null = null;
    if (submitted) {
      timerId = setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [submitted]);

  return (
    <>
      {submitted && <div className={styles.popup}>Submitted!</div>}
      <form onSubmit={handleSubmit} className={styles.form}>
        <FormInput
          mode="input"
          label="Name"
          placeholder={"Enter your name here"}
          value={formData.name}
          onChange={handleChange}
          name={"name"}
          required
          className=""
          error={`${
            errors.nameError ? "Please enter more than 3 characters." : "\u00A0"
          }`}
        />
        <FormInput
          mode="input"
          label="Email address"
          placeholder={"Enter your email address here"}
          value={formData.email}
          onChange={handleChange}
          name={"email"}
          required
          className=""
          error={`${
            errors.emailError ? "Please enter a valid email." : "\u00A0"
          }`}
        />
        <FormInput
          mode="textarea"
          label="Your message"
          placeholder={"Enter your message here"}
          value={formData.message}
          onChange={handleChange}
          name={"message"}
          required
          className=""
          error={`${
            errors.messageError
              ? "Please enter a message between 10 and 255 characters."
              : "\u00A0"
          }`}
        />
        <Button type="submit" mode="3d">
          Submit
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
