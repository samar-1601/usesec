import { Radio, Button } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useState } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import TextBox from "../TextBox/textBox";
import styles from "./style.module.css";

interface Props {
  setDone: Function;
  postIndex: Number;
}
const PostQuestion = ({ setDone,postIndex }: Props) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");
  const [value6, setValue6] = useState("");

  

  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>Post Question</div>
        <div className={styles.questions}>
          <Radio.Group
            value={value1}
            onChange={setValue1}
            size="lg"
            className={styles.questionContainer}
            name="1"
            label="1. With regard to the above post, how harmful/beneficial do you feel it is for your personal space?"
          >
            <Radio value="Very Harmful" label="Very Harmful" />
            <Radio value="Slightly Harmful" label="Slightly Harmful" />
            <Radio value="Neutral" label="Neutral" />
            <Radio value="Somewhat Beneficial" label="Somewhat Beneficial" />
            <Radio value="Very Beneficial" label="Very Beneficial" />
          </Radio.Group>
          <Radio.Group
            value={value2}
            onChange={setValue2}
            size="lg"
            className={styles.questionContainer}
            name="2"
            label="2. If the above post is shared by your close friend/family member/someone you closely know, how distressing/comfortable do you feel?"
          >
            <Radio value="Very Distressing" label="Very Distressing" />
            <Radio value="Slightly Distressing" label="Slightly Distressing" />
            <Radio value="Neutral" label="Neutral" />
            <Radio value="Somewhat Comfortable" label="Somewhat Comfortable" />
            <Radio value="Very Comfortable" label="Very Comfortable" />
          </Radio.Group>

          <Radio.Group
            value={value3}
            onChange={setValue3}
            size="lg"
            className={styles.questionContainer}
            name="3"
            label="3. If the above post is shared by someone completely unknown to you, how distressing/comfortable do you feel?"
          >
            <Radio value="Very Distressing" label="Very Distressing" />
            <Radio value="Slightly Distressing" label="Slightly Distressing" />
            <Radio value="Neutral" label="Neutral" />
            <Radio value="Somewhat Comfortable" label="Somewhat Comfortable" />
            <Radio value="Very Comfortable" label="Very Comfortable" />
          </Radio.Group>
          
          <Radio.Group
            value={value4}
            onChange={setValue4}
            size="lg"
            className={styles.questionContainer}
            name="4"
            label="4. How strongly do you believe that the author of the above post should be charged with criminal offenses?
            "
          >
			<Radio value="Very Agree" label="Very Agree" />
            <Radio value="Slightly Agree" label="Slightly Agree" />
            <Radio value="Neutral" label="Neutral" />
            <Radio value="Somewhat Disagree" label="Somewhat Disagree" />
            <Radio value="Very Disagree" label="Very Disagree" />
            
          </Radio.Group>

		  <TextBox
            question={
              "5. With what purpose do you think the author of the above post would have shared it on Facebook if the author is your close friend/family member/someone you closely know?"
            }
            setValue={setValue5}
          />

		  <TextBox
            question={
              "6. With what purpose do you think the author of the above post would have shared it on Facebook if the author is someone completely unknown to you?"
            }
            setValue={setValue6}
          />

        </div>
      </div>
      <div style={{ marginTop: "20px", marginLeft: "auto", float: 'right'}}>
        <Button
          radius="lg"
          size="lg"
          onClick={() => {
            if (value1 && value2 && value3 && value4 && value5 && value6) {

				const postQuestionData={
					'1. With regard to the above post, how harmful/beneficial do you feel it is for your personal space?':value1,
					'2. If the above post is shared by your close friend/family member/someone you closely know, how distressing/comfortable do you feel?':value2,
					'3. If the above post is shared by someone completely unknown to you, how distressing/comfortable do you feel?':value3,
					'4. How strongly do you believe that the author of the above post should be charged with criminal offenses?':value4,
					'5. With what purpose do you think the author of the above post would have shared it on Facebook if the author is your close friend/family member/someone you closely know?':value5,
					'6. With what purpose do you think the author of the above post would have shared it on Facebook if the author is someone completely unknown to you?':value6,
				  }

				  localStorage.setItem('postQuestion'+postIndex,JSON.stringify(postQuestionData));
              setDone(true);
            } else {
              showNotification({
                icon: <FiAlertTriangle />,
                title: `Answer All`,
                message:
                  "Please answer all the questions to continue",
                color: "red",
              });
            }
          }}
        >
          NEXT
        </Button>
      </div>
    </>
  );
};
export default PostQuestion;
