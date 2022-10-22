import { Radio } from "@mantine/core";
import { useState } from "react";
import styles from "./style.module.css";

const LicherQues = ({ question }) => {
  const [value, setValue] = useState("not answered");
  return (
    <Radio.Group
      className={styles.questionContainer}
      name={question}
      label={question}
      offset="lg"
      size="lg"
      value={value}
      onChange={setValue}
    >
      <Radio value="1" label="1" />
      <Radio value="2" label="2" />
      <Radio value="3" label="3" />
      <Radio value="4" label="4" />
    </Radio.Group>
  );
};

export default LicherQues;
