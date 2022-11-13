import Router from "next/router";
import { useState } from "react";
import Screening from "../components/Screening/screening";

const ScreeningPage = () => {
  const [done, setDone] = useState(false);
  if (done) {
    Router.push("/consent");
  }
  return <Screening setDone={setDone} />;
};

export default ScreeningPage;
