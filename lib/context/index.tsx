import {
  FunctionComponent, ReactNode, createContext, useContext,
} from 'react';

type GlobalContent = {
};
type Props = {
  children?: ReactNode
};
const GlobalContext = createContext<GlobalContent>({
  categories: [],
});
const GlobalProvider:FunctionComponent<Props> = ({ children } : Props) => {
  const provider = {

  };
  return (
    <GlobalContext.Provider value={provider}>
      {children}
    </GlobalContext.Provider>
  );
};
GlobalProvider.defaultProps = {
  children: '',
};
export { GlobalContext };
export const useGlobalContext = ():GlobalContent => useContext(GlobalContext);

export default GlobalProvider;
