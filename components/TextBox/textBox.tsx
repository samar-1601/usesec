import { TextInput } from "@mantine/core";
import { useState } from "react";
import styles from "./style.module.css";

interface Props {
  question: string;
  setValue: Function;
}
const TextBox = ({ question, setValue }: Props) => {
  return (
    <div className={styles.questionContainer}>
      <TextInput
        radius="md"
        size="lg"
        variant="filled"
        placeholder={"Enter your answer here"}
        label={question}
        // value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
    </div>
  );
};

export default TextBox;
