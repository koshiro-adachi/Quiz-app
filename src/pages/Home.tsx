import { Box, Heading, Input } from "@chakra-ui/react";
import { FC, memo } from "react";

export const Home: FC = memo(() => {
  return (
    <>
      <Box bg="blueviolet">
        <Heading>Quiz!!</Heading>
        <Input />
      </Box>
    </>
  );
});
