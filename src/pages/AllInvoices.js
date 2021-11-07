import React, { useContext } from "react";
import Invoice from "../components/Invoice/Invoice";
import { InvoiceContext } from "../context/invoice-context";
import styles from "./allInvoices.module.css";
const AllInvoices = () => {
  const invoiceCtx = useContext(InvoiceContext);
  const fallbackContent = (
    <div className={styles.fallback}>
      <h1>Looks like you haven't created any invoice yet!</h1>
    </div>
  );
  if (invoiceCtx.invoiceData.length === 0) {
    return fallbackContent;
  }
  return (
    <>
      {invoiceCtx.invoiceData.map((data) => {
        return <Invoice key={data.ID} id={data.ID} invoiceData={data} />;
      })}
    </>
  );
};

export default AllInvoices;
