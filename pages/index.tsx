import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import ScreeningPage from "./screening";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState({
    facebook: [],
    liker: [],
    text: [],
  });

  // useEffect(() => {
  //   fetch("https://usesec-backend.herokuapp.com/", {
  //     methods: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setQuestions({
  //         facebook: json.facebook,
  //         liker: json.liker,
  //         text: json.text,
  //       });
  //     })
  //     .catch((e) => console.log("error : ", e))
  //     .finally(setLoading(false));
  // }, []);
  // console.log("questions : ", questions);
  // return loading ? (
  //   <div className={styles.container}>
  //     <Loader />
  //   </div>
  // ) : (
  //   <div className={styles.container}>
  //     <List type="ordered">
  //       {questions?.text?.map(function (question, index) {
  //         return (
  //           <List.Item key={index}>
  //             <TextBox question={question["question"]} />
  //           </List.Item>
  //         );
  //       })}
  //       {questions?.liker?.map(function (question, index) {
  //         return (
  //           <List.Item key={index}>
  //             <LicherQues question={question["question"]} />
  //           </List.Item>
  //         );
  //       })}
  //       {questions?.facebook?.map(function (question, index) {
  //         return (
  //           <List.Item key={index}>
  //             <Post
  //             post={question["question"]}
  //             name={'Aryan Agarwal'}
  //             image={'/download.jfif'}
  //             profilePic={'/user-icon.png'}
  //             comment_1_girl={'@university rustigate <<your_name>>'}
  //             comment_2={'Hope your parents see this'}
  //             comment_3={'Dont do this man, its not good for your health. Need to tell your parents.'}
  //              />
  //           </List.Item>
  //         );
  //       })}
  //     </List>
  //   </div>
  // );

  return (
    <div className={styles.container}>
      <ScreeningPage />
    </div>
  );
}
