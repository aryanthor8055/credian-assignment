import React from 'react'
import NumberOfTransaction from '../Components/NumberOfTransaction'
import Table from '../Components/Table'
import TotalAmount from '../Components/TotalAmount'
import NOTInThirdState from '../Components/NOTInThirdState'

const HomePage = ({Data}) => {
  return (
    <>
    <div className='Card-Components d-flex justify-content-around'> 
      <NumberOfTransaction/>
      <TotalAmount/>
      <NOTInThirdState/>
      </div>
      <Table Data={Data}/>
    </>
  )
}

export default HomePage