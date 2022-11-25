import React from "react";
import styles from "./style.module.css";
import { Radio, Button } from "@mantine/core";


interface Props {
  postHeading?: string,
  profilePic?: string;
  name?: string;
  image?: string;
  post?: string;
  comment_1_girl?: string;
  comment_2?: string;
  comment_3?: string;
  setPostNext: Function;
}
const Post = ({
  postHeading,
  setPostNext,
  profilePic,
  name,
  image,
  post,
  comment_1_girl,
  comment_2,
  comment_3,
}: Props) => {

  return (
    <>

      {/* <div className={styles.container}> */}
      <div className={styles.content}>
        <div style={{ padding: '20px'}}>
          <div className={styles.heading}>{postHeading}</div>
          <Button
            radius="lg"
            size="lg"
            onClick={() => {
              setPostNext(true);
            }}
          >
            NEXT
          </Button>
        </div>
        <div className={styles.content_center}>
          <div className={styles.media_container}>
            <div className={styles.news_feed}>
              <div className={styles.news_feed_title}>
                <img src={profilePic} alt="user" />
                <div className={styles.news_feed_title_content}>
                  <p>{name}</p>
                </div>
              </div>
              <div className={styles.news_feed_description}>
                <p className={styles.news_feed_subtitle}>
                  {post}
                </p>
                <img src={image} />
              </div>

              <div className={styles.likes_area}>
                <div className={styles.emojis}>
                  <img src="assets/emoji_like.png" alt="like" />
                  <img src="assets/emoji_surprised.png" alt="surprised" />
                  <img src="assets/emoji_angry.png" alt="angry" />
                  <span>118</span>
                </div>
              </div>

              <div className={styles.divider}>
                <hr />
              </div>
              <div className={styles.likes_buttons}>
                <div className={styles.likes_buttons_links}>
                  <i className={`${styles.far}`}></i>
                  <span>Like</span>
                </div>
                <div className={styles.likes_buttons_links}>
                  <i className={styles.far}></i>
                  <span>Comment</span>
                </div>
                <div className={styles.likes_buttons_links}>
                  <i className={styles.fas}></i>
                  <span>Share</span>
                </div>
              </div>


              <div className={styles.news_feed_title}>
                <img src="assets/avatar4.png" alt="user" />
                <div className={styles.comment_content}>
                  <p>{comment_1_girl}</p>
                </div>
              </div>
              <div className={styles.news_feed_title}>
                <img src="assets/avatar2.png" alt="user" />
                <div className={styles.comment_content}>
                  <p>{comment_2}</p>
                </div>
              </div>
              <div className={styles.news_feed_title}>
                <img src="assets/avatar3.png" alt="user" />
                <div className={styles.comment_content}>
                  <p>{comment_3}</p>
                </div>
              </div>
            </div >
          </div >
        </div >
      </div >

      {/* </div> */}
    </>


  );
};

export default Post;
