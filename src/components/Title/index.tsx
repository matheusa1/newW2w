import { Container, Text } from "./styles";

import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  text: string;
  px?: string;
}

const Title = (props: Props) => {
  return (
    <Container px={props.px}>
      <Text>{props.text}</Text>
    </Container>
  );
};

export default Title;
