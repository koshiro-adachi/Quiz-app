import { createContext, FC, memo, useState } from "react";

export const NameContext = createContext({userName:'string',setUserName:()=>{});

export const UserNameContext: FC = memo((props) => {
  const { children } = props;
  const [userName, setUserName] = useState("");
  return (
    <NameContext.Provider value={{ userName, setUserName }}>
      {children}
    </NameContext.Provider>
  );
});
