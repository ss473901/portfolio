import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../components/pages/Home";
import { Users } from "../components/pages/Users";
import { DefaultLayout } from "../components/templates/DefaultLayout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/">
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        </Route>
        <Route exact path="/users">
          <DefaultLayout>
            <Users />
          </DefaultLayout>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
