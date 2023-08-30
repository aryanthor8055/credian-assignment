import React from 'react'

const TotalAmount = () => {
  return (
    <div className="card bg-info" style={{ width: '400px', height: '200px' }}>
    <div className="card-body d-flex">
        <div className='Image'>
        <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSymMytyAYNeN6tRSUo4DKoW2VhZnyLkZckWIzCpIYcPcfCdxteoq0k40b4WgH9rsNCwKE&usqp=CAU"
        alt="Icon"
        style={{ width: '50px', height: '50px',marginRight:'20px'}}
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