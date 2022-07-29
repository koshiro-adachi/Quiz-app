import { Box, Flex, Heading } from "@chakra-ui/react";
import { FC, memo } from "react";

export const Question: FC = memo(() => {
  return (
    <Flex bg="blue.200" height="100vh" m={4} borderRadius="20" justify="center">
      <Box>
        <Box textAlign="center">
          <Heading color="white">問題</Heading>
        </Box>
        <Flex
          bg="white"
          height="75vh"
          w="70vw"
          borderRadius="md"
          fontSize="large"
          fontWeight="1000"
          color="gray.500"
          p={5}
          textAlign="center"
          justify="center"
        >
          Q.プログラミングは楽しいか否か？
        </Flex>
      </Box>
    </Flex>
  );
});
