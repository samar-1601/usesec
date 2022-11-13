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
  const [value6, setValue6] = useState("");

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
            <Radio value="Female" label="Female" />
            <Radio value="Male" label="Male" />
            <Radio value="Non-binary" label="Non-binary" />
            <Radio value="I prefer not to answer" label="I prefer not to answer" />
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
            <Radio value="High school or less" label="High school or less" />
            <Radio value="Some college" label="Some college" />
            <Radio value="Bachelor's degree " label="Bachelor's degree " />
            <Radio value="Master's degree" label="Master's degree" />
            <Radio value="Doctoral degree" label="Doctoral degree" />
          </Radio.Group>
          <Radio.Group
            value={value3}
            onChange={setValue3}
            size="lg"
            className={styles.questionContainer}
            name="3"
            label="3. What is your age group?"
          >
            <Radio value="18 - 25" label="18 - 25" />
            <Radio value="26 - 35" label="26 - 35" />
            <Radio value="36 - 50" label="36 - 50" />
            <Radio value="> 50" label="> 50" />
            <Radio value="Do not wish to specify" label="Do not wish to specify" />
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
            <Radio value="1" label="1" />
            <Radio value="2-5" label="2-5" />
            <Radio value="6-10" label="6-10" />
            <Radio value="> 10" label="> 10" />
            <Radio value="Do not wish to specify" label="Do not wish to specify" />
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
            <Radio value="More than once a day" label="More than once a day" />
            <Radio value="Once a day" label="Once a day" />
            <Radio value="Once a week" label="Once a week" />
            <Radio value="Once a month" label="Once a month" />
            <Radio value="Once a year" label="Once a year" />
            <Radio value="Never posted on Facebook" label="Never posted on Facebook" />
            <Radio value="Do not wish to specify" label="Do not wish to specify" />
          </Radio.Group>
          <Radio.Group
            value={value6}
            onChange={setValue6}
            size="lg"
            className={styles.questionContainer}
            name="6"
            label="6. Where do you live?
            "
          >
            <Radio value="Rural: population less than 10,000" label="Rural: population less than 10,000" />
            <Radio value="Semi-Urban: 10,000 and above and less than 1 lakh" label="Semi-Urban: 10,000 and above and less than 1 lakh" />
            <Radio value="Urban: 1 lakh and above and less than 10 lakh" label="Urban: 1 lakh and above and less than 10 lakh" />
            <Radio value="Metropolitan: 10 lakh and above" label="Metropolitan: 10 lakh and above" />
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
