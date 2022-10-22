import { useEffect, useState } from "react";
import TextBox from "../components/TextBox/textBox";
import { List } from "@mantine/core";
import LicherQues from "../components/LichterQues/licher";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setQuestions(json);
      });
  }, []);
  console.log("questions : ", questions);
  return (
    // <Facebook/>
    <List className={styles.container} type="ordered">
      {questions.map(function (question, index) {
        return index % 2 ? (
          <List.Item key={question["id"]}>
            <TextBox question={question["title"]} />
          </List.Item>
        ) : (
          <List.Item key={question["id"]}>
            <LicherQues question={question["title"]} />
          </List.Item>
        );
      })}
    </List>
  );
}
