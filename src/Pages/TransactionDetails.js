import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Data from '../Data';

function TransactionDetail() {
  const { id } = useParams();
  const [transaction, setTransaction] = useState(null);

  useEffect(() => {
    // Find the transaction with the matching id
    const selectedTransaction = Data.find((t) => t.id === id);

    if (selectedTransaction) {
      setTransaction(selectedTransaction);
    } else {
      // Handle the case where no transaction with the given id is found
    }
  }, [id]);

  if (!transaction) {
    // Handle the loading state or error state here
    return <div>Loading...</div>;
  }

  return (
    <>
    
   
    <div className='d-flex flex-column align-items-center'>
      <h1>Transaction Detail Page</h1>

      <div class="card" style={{width:'30rem'}}>
  <ul class="list-group list-group-flush border border-danger">
    <li class="list-group-item">Transaction Date: {transaction.TransactionDate}</li>
    <li class="list-group-item">Invoice No: {transaction.InvoiceNo}</li>
    <li class="list-group-item">Payer: {transaction.Payer}</li>
    <li class="list-group-item">Payee: {transaction.Payee}</li>
    <li class="list-group-item">Amount: {transaction.Amount}</li>
    <li class="list-group-item">USD Equivalent: {transaction.USDEquivalent}</li>
    <li class="list-group-item"> <div>
        <span>Status:</span>
        <progress id="file" value={transaction.Status.p1} max="100" className='pro mx-2'/>
        <progress id="file" value={transaction.Status.p2} max="100" className='pro mx-2'/>
        <progress id="file" value={transaction.Status.p3} max="100" className='pro mx-2'/>
      </div></li>
    
  </ul>
</div>
    
    </div>
    </>
  );
}

export default TransactionDetail;
