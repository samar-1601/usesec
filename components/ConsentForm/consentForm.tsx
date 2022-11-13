import styled from "@emotion/styled";
import {
  Button,
  ButtonProps,
  Checkbox,
  createPolymorphicComponent,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useState } from "react";
import { FiAlertTriangle } from "react-icons/fi";

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;
const Heading = styled("div")`
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  color: #000000;
  text-align: center;
  padding-top: 20px;
`;
const Description = styled("div")`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #282828;
  max-width: 460px;
  padding-top: 14px;
  text-align: center;
`;

const _SubmitButton = styled(Button)`
  font-style: normal;
  font-weight: 500;
  font-size: 17.8384px;
  border-radius: 6px;
  &:hover {
    box-shadow: inset 0em 0em 0em 10em rgba(0, 0, 0, 0.01);
  }
  height: 58px;
  margin-top: 4px;
  width: 474px;
  & .mantine-Button-root {
    border: 0;
  }
`;
const SubmitButton = createPolymorphicComponent<"button", ButtonProps>(
  _SubmitButton
);

const StyledCheckBox = styled(Checkbox)`
  margin-top: 26px;
  margin-bottom: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  & .mantine-Checkbox-label {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    display: flex;
    align-items: center;
    color: #696f79;
  }
`;

const DocumentContainer = styled("iframe")`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 450px;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  zoom: 1;
`;

interface Props {
  setDone: Function;
}
const ConsentForm = ({ setDone }: Props) => {
  const [checked, setChecked] = useState(false);
  const handleSubmit = () => {
    if (checked) {
      setDone(true);
    } else {
      showNotification({
        icon: <FiAlertTriangle />,
        title: `Sorry`,
        message: "We cannot move forward in the survey without your consent !",
        color: "red",
      });
    }
  };
  return (
    <>
      <Container>
        <Heading>Consent Form</Heading>
        <Description>
          We require your consent to continue with the survey.
        </Description>
        <DocumentContainer src="/consent.pdf"></DocumentContainer>
        <StyledCheckBox
          size="sm"
          label="I’ve read the terms and conditions and give my consent for the survey."
          checked={checked}
          onChange={(event) => setChecked(event.currentTarget.checked)}
        />
        <SubmitButton size="xl" type="submit" radius={0} onClick={handleSubmit}>
          Submit
        </SubmitButton>
      </Container>
    </>
  );
};

export default ConsentForm;
