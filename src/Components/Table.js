import React from 'react'
import {CiMenuKebab} from 'react-icons/ci'

const Table = ({Data}) => {
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
      <tr>
      <th>{d.TransactionDate}</th>
      <td>{d.InvoiceNo}</td>
      <td></td>
      <td>{d.Payer}</td>
      <td>{d.Payee}</td>
      <td>{d.Amount}</td>
      <td>{d.USDEquivalent}</td>
      <td>
        <progress id="file" value="100" max="100"  className='pro'/>
        <progress id="file" value="32" max="100" className='pro'/>
        <progress id="file" value="0" max="100" className='pro'/>
      
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