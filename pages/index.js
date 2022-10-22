import { useEffect, useState } from "react";
import { Loader } from "@mantine/core";

import TextBox from "../components/TextBox/textBox";
import { List } from "@mantine/core";
import LicherQues from "../components/LichterQues/licher";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState({
    facebook: [],
    liker: [],
    text: [],
  });
  useEffect(() => {
    fetch("http://127.0.0.1:5000/", {
      methods: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        setQuestions({
          facebook: json.facebook,
          liker: json.liker,
          text: json.text,
        });
      })
      .catch((e) => console.log("error : ", e))
      .finally(setLoading(false));
  }, []);
  console.log("questions : ", questions);
  return loading ? (
    <div className={styles.container}>
      <Loader />
    </div>
  ) : (
    <div className={styles.container}>
      <List type="ordered">
        {questions?.text?.map(function (question, index) {
          return (
            <List.Item key={index}>
              <TextBox question={question["question"]} />
            </List.Item>
          );
        })}
        {questions?.liker?.map(function (question, index) {
          return (
            <List.Item key={index}>
              <LicherQues question={question["question"]} />
            </List.Item>
          );
        })}
      </List>
    </div>
  );
}
