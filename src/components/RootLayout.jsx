import { Outlet } from "react-router-dom";
import NavBarPanel from "./NavBarPanel";
import { Provider } from "react-redux";
import store from "../store/store";

const RootLayout = () => {
  return (
    <>
      <Provider store={store}>
        <NavBarPanel />

        <main>
          <Outlet /> 
          {/* here in this Outlet, all the components from the children components from the root route in App.js will render  */}
        </main>
      </Provider>
    </>
  );
};

export default RootLayout;
