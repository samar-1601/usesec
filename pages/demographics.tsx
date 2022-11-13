import Router from "next/router";
import { useState } from "react";
import Demographics from "../components/Demographics/demographics";
import styles from "../styles/Home.module.css";

const DemographicsPage = () => {
  const [done, setDone] = useState(false);
  if (done) {
    Router.push("/");
  }
  return (
    <div className={styles.container}>
      <Demographics setDone={setDone} />
    </div>
  );
};

export default DemographicsPage;
