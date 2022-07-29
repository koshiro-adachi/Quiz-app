import { Button } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
  disabled: boolean;
};

export const PrimaryButton: FC<Props> = (props) => {
  const { children, onClick, disabled } = props;
  return (
    <Button
      bg="blue.200"
      color="gray.600"
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Button>
  );
};
