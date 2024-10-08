import React from "react";
import { Container } from "../container/Container.tsx";
import { Button } from "../button/Button";
import styles from "./callToAction.module.css";
const CallToAction = () => {
  return (
    <Container className={styles.wrapper}>
      <h1>Get Sweet deals.</h1>
      <h3>Find out more.</h3>
      <Button
        onClick={() => console.log("Clicked.")}
        className={styles.ctaButton}
        mode="3d"
      >
        Get started!
      </Button>
    </Container>
  );
};

export default CallToAction;
