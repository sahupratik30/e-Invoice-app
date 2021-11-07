import { Fragment } from "react";
import { Route, Switch } from "react-router";
import MainContent from "./components/MainContent/MainContent";
import Navbar from "./components/Navbar/Navbar";
import NewInvoice from "./pages/NewInvoice";
import AllInvoices from "./pages/AllInvoices";

function App() {
  return (
    <Fragment>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <MainContent />
        </Route>
        <Route path="/new-invoice">
          <NewInvoice />
        </Route>
        <Route path="/all-invoices">
          <AllInvoices />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
