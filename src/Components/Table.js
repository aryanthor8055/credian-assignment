import React from 'react'
import {CiMenuKebab} from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'


const Table = ({Data}) => {

  const navigate=useNavigate()
  return (
    <table class="table mt-5">
  <thead>
    <tr>
      <th scope="col">Transaction Date</th>
      <th scope="col">Invoice No.</th>
      <th scope="col"></th>
      <th scope="col">Payer</th>
      <th scope="col">Payee</th>
      <th scope="col">Amount</th>
      <th scope="col">USD Equivalent</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
      Data.map((d)=>(
      <tr key={d.id} onClick={() => navigate(`/transaction-detail/${d.id}`)} className='Table-row'>
      <th>{d.TransactionDate}</th>
      <td>{d.InvoiceNo}</td>
      <td></td>
      <td>{d.Payer}</td>
      <td>{d.Payee}</td>
      <td>{d.Amount}</td>
      <td>{d.USDEquivalent}</td>
      
      <td>
        <progress id="file" value={d.Status.p1} max="100"  className='pro'/>
        <progress id="file" value={d.Status.p2} max="100" className='pro'/>
        <progress id="file" value={d.Status.p3} max="100" className='pro'/>
      
      </td>
      <button><CiMenuKebab/></button>
    </tr>
      ))
    }
    
    
  </tbody>
</table>
  )
}

export default Table