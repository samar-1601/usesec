import Router from "next/router";
import { useState } from "react";
import ConsentForm from "../components/ConsentForm/consentForm";

const ConsentPage = () => {
  const [done, setDone] = useState(false);
  if (done) {
    Router.push("/surveygrounding");
  }
  return <ConsentForm setDone={setDone} />;
};

export default ConsentPage;
