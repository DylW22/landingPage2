import ContactForm from "../../components/contactForm/ContactForm";
import styles from "./../../styles/contact.module.css";
const ContactPage = () => {
  return (
    <div className={styles.formWrapper}>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
