import { Loader } from "@mantine/core";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Post from "../components/Post/Post";

const PostPage = () => {
  const [isPost, setLoading] = useState<boolean>(true);
  const [questionIndex,setQuestionIndex] = useState(0);

  const [questionText,setQuestionText] = useState("");
  const [comment_1,setComment_1] = useState("");
  const [comment_2,setComment_2] = useState("");
  const [comment_3,setComment_3] = useState("");
  const [img_url,setImg_url] = useState("");

  let questions = [];

  if (typeof window !== 'undefined') {
    questions = JSON.parse(localStorage.getItem("questions")).data
  }

  
  useEffect(() => {
    if(questionIndex < questions.length){
      setQuestionText(questions[questionIndex].main_text);
      setComment_1(questions[questionIndex].comment_1_girl);
      setComment_2(questions[questionIndex].comment_2);
      setComment_3(questions[questionIndex].comment_3);
      setImg_url("https://usesec-backend.herokuapp.com/" + questions[questionIndex].image);
    }    
  }, []);

  return !isPost ? (
    <div className={styles.container}>
      <Loader />
    </div>
  ) : (
    <Post
      post={questionText}
      name={"<<Name Redacted>>"}
      image={img_url}
      profilePic={"/user-icon.png"}
      comment_1_girl={comment_1}
      comment_2={comment_2}
      comment_3={comment_3}
    />
  );
};

export default PostPage;
