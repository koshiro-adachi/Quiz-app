import { Box, Flex, Heading } from "@chakra-ui/react";
import { FC, memo } from "react";
import { useHistory } from "react-router-dom";
import { AnswerButton } from "../atom/button/AnswerButton";

export const Question: FC = memo(() => {
  const history = useHistory();
  const onClickPinponPage = () => {
    history.push("/question/pinpon");
  };
  const onClickBubuPage = () => {
    history.push("/question/bubu");
  };

  return (
    <Flex bg="blue.200" height="100vh" m={4} borderRadius="20" justify="center">
      <Box>
        <Box textAlign="center" my="10px">
          <Heading color="white">問題</Heading>
        </Box>
        <Box
          bg="white"
          height="75vh"
          w="70vw"
          borderRadius="md"
          fontSize="large"
          fontWeight="1000"
          color="gray.500"
          p={5}
          textAlign="center"
        >
          <Box pt="10vh">
            さんに問題です。
            <br />
            Q.プログラミングは楽しいか否か？
            <Flex justify="space-around" mt="20vh">
              <AnswerButton onClick={onClickPinponPage} color={"red.300"}>
                〇
              </AnswerButton>
              <AnswerButton onClick={onClickBubuPage} color={"gray.600"}>
                X
              </AnswerButton>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
});
