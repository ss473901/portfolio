import { Header } from "../Header";

export const HeaderOnly = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default HeaderOnly;
