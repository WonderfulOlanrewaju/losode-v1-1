import React from 'react'
import Search from './Search'
import {Link} from 'react-router-dom'

function CustomerHelp (){
        return(
            <>
                <Search/>
                <div className='container-fluid'>
                   <div className ='row'>
                     <div className='col-md-4 col-lg-4'>
                        <h3><Link to ='/'>Order Issues</Link></h3>
                     </div>
                     <div className='col-md-4 col-lg-4'>
                        <h3><Link to ='/'>Payment & Discounts</Link></h3>
                     </div>
                     <div className='col-md-4 col-lg-4'>
                        <h3><Link to ='/'>Delivery</Link></h3>
                     </div>
                     <div className='col-md-4 col-lg-4'>
                        <h3><Link to ='/'>Returns and Refunds</Link></h3>
                     </div>
                     <div className='col-md-4 col-lg-4'>
                        <h3><Link to ='/'>Products and Stock</Link></h3>
                     </div>
                     <div className='col-md-4 col-lg-4'>
                        <h3><Link to ='/'>Technical Support</Link></h3>
                     </div>
                    
                   </div>
                </div>
            </>
        )
}
export default CustomerHelp