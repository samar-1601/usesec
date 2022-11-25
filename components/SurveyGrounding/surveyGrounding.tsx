import { Radio, Button } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useState } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import TextBox from "../TextBox/textBox";
import styles from "./style.module.css";

interface Props {
  setDone: Function;
}
const SurveyGrounding = ({ setDone }: Props) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");

  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>Survey Grounding</div>
        <div className={styles.questions}>
          <Radio.Group
            value={value1}
            onChange={setValue1}
            size="lg"
            className={styles.questionContainer}
            name="1"
            label="1. Are you familiar with the term doxxing?
            "
          >
            <Radio value="Yes" label="Yes" />
            <Radio value="No" label="No" />
            <Radio value="never heard the term" label="Never heard the term" />
            <Radio value="have a little idea" label="Have a little idea" />
          </Radio.Group>
          <Radio.Group
            value={value2}
            onChange={setValue2}
            size="lg"
            className={styles.questionContainer}
            name="2"
            label="2. In terms of information about risks involved with doxxing, do you consider yourself to be: 
            "
          >
            <Radio value="Not at all skilled " label="Not at all skilled " />
            <Radio value="Not very skilled " label="Not very skilled " />
            <Radio value="Fairly skilled  " label="Fairly skilled  " />
            <Radio value="Very skilled  " label="Very skilled  " />
            <Radio value="Very skilled  " label="Very skilled  " />
          </Radio.Group>
          <TextBox
            question={
              "3. If your close friend or someone completely anonymous to you would share your personal information on Facebook. With what purpose do you think they would do it?"
            }
            setValue={setValue3}
          />
          <Radio.Group
            value={value4}
            onChange={setValue4}
            size="lg"
            className={styles.questionContainer}
            name="4"
            label="4. Would you ever share personal information about someone on Facebook to satisfy your own needs/grudges or take revenge?
            "
          >
            <Radio value="Yes" label="Yes" />
            <Radio value="No" label="No" />
            <Radio
              value="might be possible depending on situation"
              label="Might be possible depending on situation"
            />
            <Radio
              value="Don’t want to specify"
              label="Don’t want to specify"
            />
          </Radio.Group>
          <Radio.Group
            value={value5}
            onChange={setValue5}
            size="lg"
            className={styles.questionContainer}
            name="5"
            label="5. Has your personal information ever been shared on Facebook without your consent?"
          >
            <Radio value="Yes" label="Yes" />
            <Radio value="No" label="No" />
            <Radio value="don’t know" label="Don’t know" />
          </Radio.Group>
        </div>
      </div>
      <div style={{ marginTop: "20px", marginLeft: "auto", float: 'right'}}>
        <Button
          radius="lg"
          size="lg"
          onClick={() => {
            if (value1 && value2 && value3 && value4 && value5) {
              const surveyGroundingData={
                '1. Are you familiar with the term doxxing?':value1,
                '2. In terms of information about risks involved with doxxing, do you consider yourself to be:':value2,
                '3. If your close friend or someone completely anonymous to you would share your personal information on Facebook. With what purpose do you think they would do it?':value3,
                '4. Would you ever share personal information about someone on Facebook to satisfy your own needs/grudges or take revenge?':value4,
                '5. Has your personal information ever been shared on Facebook without your consent?':value5,
              }
              localStorage.setItem('surveyGroundingData',JSON.stringify(surveyGroundingData));
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
export default SurveyGrounding;
