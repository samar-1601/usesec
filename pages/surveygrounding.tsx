import Router from "next/router";
import { useState } from "react";
import SurveyGrounding from "../components/SurveyGrounding/surveyGrounding";
import styles from "../styles/Home.module.css";

const SurveyGroundingPage = () => {
  const [done, setDone] = useState(false);
  if (done) {
    Router.push("/demographics");
  }
  return (
    <div className={styles.container}>
      <SurveyGrounding setDone={setDone} />
    </div>
  );
};

export default SurveyGroundingPage;
