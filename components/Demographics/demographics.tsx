import { Radio, Button } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useState } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import TextBox from "../TextBox/textBox";
import styles from "./style.module.css";

interface Props {
  setDone: Function;
}
const Demographics = ({ setDone }: Props) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [value5, setValue5] = useState("");

  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>Demographics Questions</div>
        <div className={styles.questions}>
          <Radio.Group
            value={value1}
            onChange={setValue1}
            size="lg"
            className={styles.questionContainer}
            name="1"
            label="1. With what gender do you identify? 
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
            label="2. What is the highest level of education you have achieved? 
            "
          >
            <Radio value="Not at all skilled " label="Not at all skilled " />
            <Radio value="Not very skilled " label="Not very skilled " />
            <Radio value="Fairly skilled  " label="Fairly skilled  " />
            <Radio value="Very skilled  " label="Very skilled  " />
            <Radio value="Very skilled  " label="Very skilled  " />
          </Radio.Group>
          <Radio.Group
            value={value2}
            onChange={setValue2}
            size="lg"
            className={styles.questionContainer}
            name="3"
            label="3. What is your age group?"
          >
            <Radio value="Not at all skilled " label="Not at all skilled " />
            <Radio value="Not very skilled " label="Not very skilled " />
            <Radio value="Fairly skilled  " label="Fairly skilled  " />
            <Radio value="Very skilled  " label="Very skilled  " />
            <Radio value="Very skilled  " label="Very skilled  " />
          </Radio.Group>
          <Radio.Group
            value={value4}
            onChange={setValue4}
            size="lg"
            className={styles.questionContainer}
            name="4"
            label="4. How frequently do you visit Facebook on a daily basis?
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
            label="5. How frequently do you post on Facebook?
            "
          >
            <Radio value="Yes" label="Yes" />
            <Radio value="No" label="No" />
            <Radio value="don’t know" label="Don’t know" />
          </Radio.Group>
          <Radio.Group
            value={value5}
            onChange={setValue5}
            size="lg"
            className={styles.questionContainer}
            name="6"
            label="6. Where do you live?
            "
          >
            <Radio value="Yes" label="Yes" />
            <Radio value="No" label="No" />
            <Radio value="don’t know" label="Don’t know" />
          </Radio.Group>
        </div>
      </div>
      <div style={{ marginTop: "20px", marginLeft: "auto", float: "right" }}>
        <Button
          radius="lg"
          size="lg"
          onClick={() => {
            console.log("value1", value1);
            if (value1 && value2 && value3 && value4 && value5) {
              setDone(true);
            } else {
              showNotification({
                icon: <FiAlertTriangle />,
                title: `Answer All`,
                message: "Please answer all the questions to continue",
                color: "red",
              });
            }
          }}
        >
          Submit
        </Button>
      </div>
    </>
  );
};
export default Demographics;
