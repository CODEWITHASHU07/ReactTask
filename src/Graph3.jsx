import React from 'react'
import Img1 from "../Images/ticket.png"
function Graph3(){
 return (
<>
<div>
    <h3 className=' text-gray-600 font-light mt-4 text-lg'>Support Tracker</h3>
    <p className=' text-gray-500 text-sm'>Last 7 Days</p>
</div>
<div className=' flex items-center justify-between'>
    <div >
        <h2 className=' text-4xl text-gray-700 mt-6'>164</h2>
        <h5 className=' text-sm text-gray-500 mt-3'>Total Tickets</h5>
       <div className=' flex items-center justify-center  gap-x-3 py-2'><span className=' px-3 py-1 bg-green-100 '><img className=' w-6 h-6' src={Img1} alt="" /></span><div><h4 className=' text-gray-600 text-sm'>New Tickets</h4><p className=' text-gray-400 text-base'>142</p></div></div>
    </div>
    <div>Graph</div>
</div>
</>
)
}
export default Graph3