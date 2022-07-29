import { Box, Flex, Heading, Input } from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useState } from "react";

import { PrimaryButton } from "../atom/button/PrimaryButton";

export const Home: FC = memo(() => {
  const [userName, setUserName] = useState("");
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  return (
    <>
      <Flex align="center" justify="center" height="100vh">
        <Box bg="blue.100" borderRadius="md" shadow="md" w="sm" p={8}>
          <Heading textAlign="center">Quiz!!</Heading>
          <Flex justify="center">
            <Input
              placeholder="名前を入力"
              bg="white"
              mr={2}
              value={userName}
              onChange={onChangeName}
            />
            <PrimaryButton>名前を登録</PrimaryButton>
          </Flex>
        </Box>
      </Flex>
    </>
  );
});
