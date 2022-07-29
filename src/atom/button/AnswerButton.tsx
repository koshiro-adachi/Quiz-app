import { Button } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
  color: string;
};

export const AnswerButton: FC<Props> = (props) => {
  const { children, onClick, color } = props;
  return (
    <Button
      bg="white"
      color={color}
      shadow="lg"
      onClick={onClick}
      borderRadius="full"
      p={6}
    >
      {children}
    </Button>
  );
};
