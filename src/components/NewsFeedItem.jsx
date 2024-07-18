import React from 'react'

export default function NewsFeedItem({fpicurl ,ftitle ,fpprice ,fnprice}) {
  return (
    <div className='d-flex bg-white '>
      <div className='flex-shrink-0'>
<img src= {fpicurl}  alt="" className=''/>
      </div>
<div className='flex-grow-1  mt-5 justify-content-between'>
  <div className='fs-6 fw-bold'>{ftitle}</div>
  <div className="d-flex">
              <p className="text-secondary fs-6 fw-bold me-2">
                <del>{fpprice}</del>
              </p>
              <p className="text-danger fs-6 fw-bold">{fnprice}</p>
            </div>

</div>
    </div>
  )
}

