import React from 'react'

const TotalAmount = () => {
  return (
    <div className="card card-2">
    <div className="card-body d-flex">
        <div className='Image'>
        <img
        src="../../assets/Note.PNG"
        alt="Icon"
        style={{ width: '70px', height: '70px',marginRight:'20px'}}
      />
        </div>
        <div className='card-details'>
            <h6 className='mt-3 fs-5'>Total Amount</h6>

            <p className='mt-4'>Total Amount</p>
      <h4 className="card-title mt-3">300K <span className='fs-6'>USD </span></h4>
        
        </div>
      
    </div>
  </div>
  )
}

export default TotalAmount