import React from 'react'

const NumberOfTransaction = () => {
  return (
    <div className="card card-1">
    <div className="card-body d-flex align-items-center">
        <div className='Image'>
        <img
        src="../../assets/dollar.PNG"
        alt="Icon"
        style={{ width: '70px', height: '70px',marginRight:'20px'}}
      />
        </div>
        <div className='card-title'>
      <h3 className="card-title mt-3 card-300-text">300K <span className='fs-6 USD'>USD </span></h3>
        <h6>1.25%</h6>
        </div>
      
    </div>
  </div>
  )
}

export default NumberOfTransaction