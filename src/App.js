import React from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { Switch } from "react-router-dom";
import Home from "./Container/Home";
import Departments from "./Container/Departments";
import Doctors from "./Container/Doctors";
import Medicine from "./Container/Medicine";
import About from "./Container/About";
import Contact from "./Container/Contact";
import BookAppointment from "./Container/Appoinment/BookAppointment";
import ListAppointment from "./Container/Appoinment/ListAppointment";
import Login from "./Container/Login";
import PublicRoute from "./Route/PublicRoute";
import PrivateRoute from "./Route/PrivateRoute";
import { ThemeProvider } from "./context/ThemeContext";
import { Provider } from "react-redux";
import { store } from './redux/Store';
import { SnackbarProvider } from 'notistack';
// import { PersistGate } from 'redux-persist/integration/react';
// import persistStore from "redux-persist/es/persistStore";



const App = () => {
  return (
    <>
      <SnackbarProvider maxSnack={3}>
        <Provider store={store}>
          {/* <PersistGate loading={null} persistor={persistor}> */}
            <ThemeProvider>
              <Header />
              <Switch>
                <PublicRoute exact path="/" component={Home} />
                <PublicRoute exact path="/departments" component={Departments} />
                <PublicRoute exact path="/doctors" component={Doctors} />
                <PublicRoute exact path="/medicine" component={Medicine} />
                <PublicRoute exact path="/about" component={About} />
                <PublicRoute exact path="/contact" component={Contact} />
                <PrivateRoute
                  exact
                  path="/book-appointment"
                  component={BookAppointment}
                />
                <PrivateRoute
                  exact
                  path="/list-appointment"
                  component={ListAppointment}
                />
                <PublicRoute
                  exact
                  path="/login"
                  restricted={true}
                  component={Login}
                />
              </Switch>
              <Footer />
            </ThemeProvider>
          {/* </PersistGate> */}
        </Provider>
      </SnackbarProvider>
    </>
  );
};

export default App;
