import { Radio, Button } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useState } from "react";
import { FiAlertTriangle } from "react-icons/fi";
import styles from "./style.module.css";

interface Props {
  setDone: Function;
}
const Screening = ({ setDone }: Props) => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");

  return (
    <>
      <div className={styles.container}>
        <div className={styles.heading}>Screening Questions</div>
        <div className={styles.questions}>
          <Radio.Group
            value={value1}
            onChange={setValue1}
            size="lg"
            className={styles.questionContainer}
            name="18-years"
            label="Are you above 18 years of age?"
            withAsterisk
          >
            <Radio value="Yes" label="Yes" />
            <Radio value="No" label="No" />
          </Radio.Group>
          <Radio.Group
            value={value2}
            onChange={setValue2}
            size="lg"
            className={styles.questionContainer}
            name="indian-resident"
            label=" Are you a resident of India?"
            withAsterisk
          >
            <Radio value="Yes" label="Yes" />
            <Radio value="No" label="No" />
          </Radio.Group>
          <Radio.Group
            value={value3}
            onChange={setValue3}
            size="lg"
            className={styles.questionContainer}
            name="use-facebook"
            label="Do you use Facebook?"
            withAsterisk
          >
            <Radio value="Yes" label="Yes" />
            <Radio value="No" label="No" />
          </Radio.Group>
        </div>
      </div>
      <div style={{ marginTop: "80px" }}>
        <Button
          radius="lg"
          size="lg"
          onClick={() => {
            console.log("value1", value1);
            if (value1 == "Yes" && value2 === "Yes" && value3 === "Yes") {
              setDone(true);
            } else {
              showNotification({
                icon: <FiAlertTriangle />,
                title: `Sorry`,
                message:
                  " You cannot move forward in this survey based on your screening answers.",
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

export default Screening;
