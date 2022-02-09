import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "../components/pages/Home";
import DefaultLayout from "../components/templates/DefaultLayout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <DefaultLayout>
          <Home />
        </DefaultLayout>
      </Route>
    </BrowserRouter>
  );
};
