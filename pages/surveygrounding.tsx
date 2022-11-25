import Router from "next/router";
import { useState } from "react";
import SurveyGrounding from "../components/SurveyGrounding/surveyGrounding";
import styles from "../styles/Home.module.css";

const SurveyGroundingPage = () => {
  const [done, setDone] = useState(false);
  if (done) {

    fetch("https://usesec-backend.herokuapp.com/get_comments", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.text())
      .then((response) => {
        console.log("questions : ", response);
        localStorage.setItem("questions", response);
      })
      .catch((e) => console.log("error : ", e))
      .finally(() => Router.push("/post"));
  }
  return (
    <div className={styles.container}>
      <SurveyGrounding setDone={setDone} />
    </div>
  );
};

export default SurveyGroundingPage;
