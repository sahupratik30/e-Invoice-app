import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
export const InvoiceContext = React.createContext({
  addInvoiceData: (data) => {},
  deleteInvoice: (id) => {},
  invoiceData: [],
});
const InvoiceContextProvider = (props) => {
  const [allInvoiceData, setAllInvoiceData] = useState([]);
  // Fetch Invoices from local storage
  useEffect(() => {
    const invoices = JSON.parse(localStorage.getItem("invoiceData"));
    if (invoices) {
      setAllInvoiceData(invoices);
    }
  }, []);
  const customId = "toast";
  const addInvoiceDataHandler = (data) => {
    setAllInvoiceData((prevInvoiceData) => {
      return [...prevInvoiceData, data];
    });
    toast.success("Invoice Created Successfully!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      toastId: customId,
    });
  };
  const customId1 = "toast1";
  const deleteInvoiceHandler = (id) => {
    setAllInvoiceData((prevInvoiceData) => {
      return prevInvoiceData.filter((invoice) => invoice.ID !== id);
    });
    toast.warning("Invoice Deleted!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      toastId: customId1,
    });
  };
  // Save Invoices to local storage
  useEffect(() => {
    localStorage.setItem("invoiceData", JSON.stringify(allInvoiceData));
  }, [allInvoiceData]);
  const invoiceContextValue = {
    addInvoiceData: addInvoiceDataHandler,
    deleteInvoice: deleteInvoiceHandler,
    invoiceData: allInvoiceData,
  };
  return (
    <InvoiceContext.Provider value={invoiceContextValue}>
      {props.children}
    </InvoiceContext.Provider>
  );
};
export default InvoiceContextProvider;
