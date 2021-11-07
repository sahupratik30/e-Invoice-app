import React, { useContext, useEffect, useRef, useState } from "react";
import styles from "./invoiceForm.module.css";
import { getCurrentDate } from "./../../utils/date";
import { InvoiceContext } from "../../context/invoice-context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
const InvoiceForm = () => {
  const invoiceCtx = useContext(InvoiceContext);
  const [formIsValid, setFormIsValid] = useState(false);
  const [clientID, setClientID] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDueDate, setInvoiceDueDate] = useState("");
  const [materialCharges, setMaterialCharges] = useState("");
  const [transportationCharges, setTransportationCharges] = useState("");
  const [laborPerHour, setLaborPerHour] = useState("");
  const [totalHours, setTotalHours] = useState("");
  const [serviceCharges, setServiceCharges] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountHolderName, setAccountHolderName] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [formData, setFormData] = useState({
    id: "",
    client_ID: "",
    client_Name: "",
    client_Address: "",
    invoice_Number: "",
    invoice_Date: "",
    invoice_DueDate: "",
    material_Charges: "",
    transportation_Charges: "",
    labor_Charges: "",
    service_Charges: "",
    account_Number: "",
    account_HolderName: "",
    IFSC: "",
  });
  const {
    client_ID,
    client_Name,
    client_Address,
    invoice_Number,
    invoice_Date,
    invoice_DueDate,
    material_Charges,
    transportation_Charges,
    labor_Charges,
    service_Charges,
    account_Number,
    account_HolderName,
    IFSC,
  } = formData;
  let firstRender = useRef(true);
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    formIsValid && invoiceCtx.addInvoiceData(formData);
    // eslint-disable-next-line
  }, [
    client_ID,
    client_Name,
    client_Address,
    invoice_Number,
    invoice_Date,
    invoice_DueDate,
    material_Charges,
    transportation_Charges,
    labor_Charges,
    service_Charges,
    account_Number,
    account_HolderName,
    IFSC,
  ]);
  const customId = "toast";
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (
      clientID.trim().length === 0 ||
      clientAddress.trim().length === 0 ||
      accountHolderName.trim().length === 0 ||
      ifsc.trim().length === 0
    ) {
      toast.warning("All fields are required!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        toastId: customId,
      });
      return;
    }
    setFormIsValid(true);
    setFormData({
      ID: Date.now(),
      client_ID: clientID,
      client_Name: clientName,
      client_Address: clientAddress,
      invoice_Number: invoiceNumber,
      invoice_Date: getCurrentDate(),
      invoice_DueDate: new Date(invoiceDueDate).toDateString(),
      material_Charges: +materialCharges,
      transportation_Charges: +transportationCharges,
      labor_Charges: +laborPerHour * +totalHours,
      service_Charges: +serviceCharges,
      account_Number: accountNumber,
      account_HolderName: accountHolderName,
      IFSC: ifsc,
    });
    setClientID("");
    setClientName("");
    setClientAddress("");
    setInvoiceNumber("");
    setInvoiceDueDate("");
    setMaterialCharges("");
    setTransportationCharges("");
    setLaborPerHour("");
    setTotalHours("");
    setServiceCharges("");
    setAccountNumber("");
    setAccountHolderName("");
    setIfsc("");
  };
  return (
    <div className={styles.invoice__form}>
      <form onSubmit={handleFormSubmit}>
        <h1>Client Details</h1>
        <div className={styles.client__div}>
          <input
            type="text"
            onChange={(e) => setClientID(e.target.value)}
            value={clientID}
            placeholder="Client's ID..."
          />
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            placeholder="Client's Name..."
          />
        </div>
        <textarea
          placeholder="Client's Address..."
          value={clientAddress}
          onChange={(e) => setClientAddress(e.target.value)}
        />
        <h1>Invoice Details</h1>
        <div className={styles.invoice__div}>
          <input
            type="number"
            min="0"
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
            placeholder="Invoice Number..."
          />
          <label htmlFor="date">Due Date:</label>
          <input
            value={invoiceDueDate}
            onChange={(e) => setInvoiceDueDate(e.target.value)}
            type="date"
            id="date"
          />
        </div>
        <h1>Charges Details</h1>
        <div>
          <input
            type="number"
            min="0"
            placeholder="Material Charges(₹)..."
            value={materialCharges}
            onChange={(e) => setMaterialCharges(e.target.value)}
          />
          <input
            type="number"
            min="0"
            placeholder="Transortation(₹)..."
            value={transportationCharges}
            onChange={(e) => setTransportationCharges(e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            min="0"
            placeholder="Labor Per Hour(₹)..."
            value={laborPerHour}
            onChange={(e) => setLaborPerHour(e.target.value)}
          />
          <input
            type="number"
            min="0"
            placeholder="Total Hours..."
            value={totalHours}
            onChange={(e) => setTotalHours(e.target.value)}
          />
        </div>
        <input
          type="number"
          min="0"
          placeholder="Service Charges(₹)..."
          className={styles.service}
          value={serviceCharges}
          onChange={(e) => setServiceCharges(e.target.value)}
        />
        <h1>Account Details</h1>
        <div className={styles.account}>
          <input
            type="number"
            min="0"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            placeholder="Enter Account Number..."
          />
          <input
            type="text"
            value={accountHolderName}
            onChange={(e) => setAccountHolderName(e.target.value)}
            placeholder="Account Holder Name..."
          />
        </div>
        <input
          type="text"
          value={ifsc}
          onChange={(e) => setIfsc(e.target.value)}
          placeholder="Enter IFSC Code..."
          className={styles.ifsc}
        />
        <button type="submit" className={styles.submit__button}>
          Create
        </button>
      </form>
    </div>
  );
};

export default InvoiceForm;
