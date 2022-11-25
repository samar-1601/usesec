import { Loader } from "@mantine/core";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Post from "../components/Post/Post";
import PostQuestion from "../components/PostQuestion/postQuestion";
import Router from "next/router";

const PostPage = () => {
  
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questionText, setQuestionText] = useState("");
  const [comment_1, setComment_1] = useState("");
  const [comment_2, setComment_2] = useState("");
  const [comment_3, setComment_3] = useState("");
  const [img_url, setImg_url] = useState("");
  
  const [isPost, setIsPost] = useState(true);
  const [done, setDone] = useState(false);
  const [postNext, setPostNext] = useState(false);

  let questions = [];

  if (typeof window !== 'undefined') {
    questions = JSON.parse(localStorage.getItem("questions")).data
  }


  useEffect(() => {
    if(done){
      setQuestionIndex(questionIndex + 1);
      if(questionIndex==questions.length){
        Router.push("/demographics");
      }
      setIsPost(true);
      setDone(false);
      setPostNext(false);
    }
  }, [done]);

  useEffect(() => {
    if(postNext){
      setIsPost(false);
      setPostNext(false);
      setDone(false);
    }
  }, [postNext]);

  useEffect(() => {
    if (questionIndex < questions.length) {
      setQuestionText(questions[questionIndex].main_text);
      setComment_1(questions[questionIndex].comment_1_girl);
      setComment_2(questions[questionIndex].comment_2);
      setComment_3(questions[questionIndex].comment_3);
      setImg_url("https://usesec-backend.herokuapp.com/" + questions[questionIndex].image);
    }else{
      Router.push("/demographics");
    }
  }, [, questionIndex]);

  return !isPost ? (
    <div className={styles.container}>
      <PostQuestion setDone={setDone} postIndex={questionIndex} />
    </div>
  ) : (
    <Post
      postHeading={"Post " + (questionIndex+1).toString()}
      setPostNext={setPostNext}
      post={questionText}
      name={"<<Name Redacted>>"}
      image={img_url}
      profilePic={"/assets/user.png"}
      comment_1_girl={comment_1}
      comment_2={comment_2}
      comment_3={comment_3}
    />
  );
};

export default PostPage;
