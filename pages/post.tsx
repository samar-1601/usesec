import { Loader } from "@mantine/core";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Post from "../components/Post/Post";

const PostPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [questions, setQuestions] = useState({
    facebook: [],
    liker: [],
    text: [],
  });

  useEffect(() => {
    fetch("https://usesec-backend.herokuapp.com/", {
      method: "GET",
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
      .finally(() => setLoading(false));
  }, []);
  console.log("questions : ", questions);
  return loading ? (
    <div className={styles.container}>
      <Loader />
    </div>
  ) : (
    <Post
      post={questions["question"]}
      name={"Aryan Agarwal"}
      image={"/download.jfif"}
      profilePic={"/user-icon.png"}
      comment_1_girl={"@university rustigate <<your_name>>"}
      comment_2={"Hope your parents see this"}
      comment_3={
        "Dont do this man, its not good for your health. Need to tell your parents."
      }
    />
  );
};

export default PostPage;
