import { TextInput } from "@mantine/core";
import { useState } from "react";
import styles from "./style.module.css";

const TextBox = ({ question }) => {
  const [value, setValue] = useState("");
  return (
    <div className={styles.questionContainer}>
      <TextInput
        radius="md"
        size="lg"
        variant="filled"
        placeholder={"Enter your answer here"}
        label={question}
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
    </div>
  );
};

export default TextBox;
