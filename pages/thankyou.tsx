import Router from "next/router";
import { useState } from "react";
import ThankYou from "../components/ThankYou/thankYou";
import styles from "../styles/Home.module.css";

const ThankYouPage = () => {

  let jsonBody={}

  if (typeof window !== 'undefined') {
    jsonBody['surveyGroundingData'] = JSON.parse(localStorage.getItem("surveyGroundingData"))
    jsonBody['demographicsData'] = JSON.parse(localStorage.getItem("demographicsData"))
    jsonBody['postQuestion'] = []

    let len = JSON.parse(localStorage.getItem("questions")).data.length
    for(let i=0;i<len;i++){
      jsonBody['postQuestion'].push(JSON.parse(localStorage.getItem("postQuestion"+i)))
    }
  }

  console.log(jsonBody);
  
  fetch("https://usesec-backend.herokuapp.com/post_answer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonBody)
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("analysis : ", response);
      })
      .catch((e) => console.log("error : ", e))

  return (
    <div className={styles.container}>

      <ThankYou/>
    </div>
  );
};

export default ThankYouPage;
