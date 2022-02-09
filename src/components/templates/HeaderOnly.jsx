import Header from "../Header";

const HeaderOnly = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default HeaderOnly;
