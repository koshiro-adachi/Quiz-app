import {
  createContext,
  FC,
  memo,
  useState,
  Dispatch,
  SetStateAction
} from "react";

export type TypeContext = {
  userName: string | undefined;
  setUserName: Dispatch<SetStateAction<string | undefined>>;
};

export const NameContext = createContext<TypeContext>({} as TypeContext);

export const UserNameContext: FC = memo((props) => {
  const { children } = props;
  const [userName, setUserName] = useState<string | undefined>(undefined);
  return (
    <NameContext.Provider value={{ userName, setUserName }}>
      {children}
    </NameContext.Provider>
  );
});
