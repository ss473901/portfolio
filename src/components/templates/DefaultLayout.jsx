import Header from "../Atoms/layout/Header";
import Footer from "../Atoms/layout/Footer";

const DefaultLayout = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
