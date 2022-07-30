import { Box, Flex, Heading, Input } from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useContext } from "react";
import { useHistory } from "react-router-dom";

import { PrimaryButton } from "../atom/button/PrimaryButton";
import { NameContext } from "../privider/UserNameContext";

export const Home: FC = memo(() => {
  const { userName, setUserName } = useContext(NameContext);
  const history = useHistory();

  const onChangeUserName = (e: ChangeEvent<HTMLInputElement>) =>
    setUserName(e.target.value);
  const onClickQuestionPage = () => history.push("/question");
  return (
    <Flex align="center" justify="center" height="100vh">
      <Box bg="blue.100" borderRadius="md" shadow="md" w="sm" p={8}>
        <Heading textAlign="center">Quiz!!</Heading>
        <Flex justify="center">
          <Input
            placeholder="名前を入力"
            bg="white"
            mr={2}
            value={userName}
            onChange={onChangeUserName}
          />
          <PrimaryButton
            onClick={onClickQuestionPage}
            disabled={userName === undefined || userName === ""}
          >
            名前を登録
          </PrimaryButton>
        </Flex>
      </Box>
    </Flex>
  );
});
