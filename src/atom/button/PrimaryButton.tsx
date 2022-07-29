import { Button } from "@chakra-ui/react";
import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const PrimaryButton: FC<Props> = (props) => {
  const { children } = props;
  return (
    <Button bg="blue.200" color="gray.600">
      {children}
    </Button>
  );
};
