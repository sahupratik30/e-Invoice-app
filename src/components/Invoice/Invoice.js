import React, { useContext } from "react";
import styles from "./invoice.module.css";
import { InvoiceContext } from "./../../context/invoice-context";
const Invoice = ({ invoiceData, id }) => {
  const invoiceCtx = useContext(InvoiceContext);
  const deleteHandler = () => {
    invoiceCtx.deleteInvoice(id);
  };
  return (
    <main className={styles.invoice} id="invoice">
      {/* Invoice Header */}
      <div className={styles.invoice__header}>
        <h1>INVOICE</h1>
        <div className={styles.invoice__buttons} id="button-section">
          <button
            type="button"
            onClick={() => window.print()}
            className={`${styles.btn} ${styles.btn__print}`}
          >
            Print{" "}
            <span>
              <i className="fas fa-print"></i>
            </span>
          </button>
          <a
            href="mailto:demo@demo.com"
            className={`${styles.btn} ${styles.btn__send}`}
          >
            Send{" "}
            <span>
              <i className="fas fa-paper-plane"></i>
            </span>
          </a>
        </div>
      </div>
      {/* Invoice Details */}
      <div className={styles.details}>
        <div className={styles.client__details}>
          <h2>Client Details:</h2>
          <p>
            <span>Client Id: </span>
            {invoiceData.client_ID}
          </p>
          <p>
            <span>Client Name: </span>
            {invoiceData.client_Name}
          </p>
          <p>
            <span>Client Address: </span>
            {invoiceData.client_Address}
          </p>
        </div>
        <div className={styles.invoice__details}>
          <h2>Invoice Details:</h2>
          <p>
            <span>Invoice Number: </span>
            {invoiceData.invoice_Number}
          </p>
          <p>
            <span>Invoice Date: </span>
            {invoiceData.invoice_Date}
          </p>
          <p>
            <span>Due Date: </span>
            {invoiceData.invoice_DueDate}
          </p>
        </div>
      </div>
      {/* Invoice amount description table */}
      <div className={styles.table__div}>
        <table>
          <thead>
            <tr>
              <td>Serial No.</td>
              <td>Description</td>
              <td>Amount</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Material Charges</td>
              <td>{invoiceData.material_Charges}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Transport Charges</td>
              <td>{invoiceData.transportation_Charges}</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Labor Charges</td>
              <td>{invoiceData.labor_Charges}</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Service Charges</td>
              <td>{invoiceData.service_Charges}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Total Amount section */}
      <p className={styles.total__amount}>
        <span>Total: &#8377;</span>
        {invoiceData.material_Charges +
          invoiceData.transportation_Charges +
          invoiceData.labor_Charges +
          invoiceData.service_Charges}
      </p>
      {/* Company Account Details */}
      <div className={styles.account}>
        <h2>Account Details: </h2>
        <ol>
          <li>
            Account Holder Name: <span>{invoiceData.account_HolderName}</span>
          </li>
          <li>
            Account Number: <span>{invoiceData.account_Number}</span>
          </li>
          <li>
            IFSC Code: <span>{invoiceData.IFSC}</span>
          </li>
        </ol>
      </div>
      {/* Notes Section */}
      <div className={styles.notes}>
        <h2>Notes: </h2>
        <ol>
          <li>All payments should be paid before the due date.</li>
          <li>
            Any checks for payment should be sent to the E-mail:
            payments@invoicer.com
          </li>
          <li>
            For any other queries, please contact us at: contact@invoicer.com
          </li>
          <li id="ignore-print1">
            <b>
              To send the PDF via mail, please click on print button and then
              save as PDF.
            </b>
          </li>
          <li id="ignore-print2">
            <b>
              After saving as PDF, click on send button, then enter the
              recipient's email address, then attach the saved file and send it.
            </b>
          </li>
        </ol>
      </div>
      <button
        type="button"
        className={styles.delete}
        onClick={deleteHandler}
        id="delete-btn"
      >
        Delete Invoice
      </button>
    </main>
  );
};

export default Invoice;
