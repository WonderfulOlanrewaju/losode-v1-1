import React from 'react';
import '../SCSS/SubMainNavbar.scss';
import   '../SCSS/Arrivals.scss';
import {Link} from 'react-router-dom'

const Arrivals = ()=> {
    return (
        <div className="contain">
            <div className="arrival-container">
                <div className="col-s men">
                    <Link href="" className="but">SHOP MEN</Link>
                </div>
                <div className="col-s pt-4 hide-small">
                    <ul className="arrivee">
                        <li><u>NEW ARRIVALS</u></li>
                        <li>SHIRTS</li>
                        <li>DRESSES</li>
                        <li>BAGS & PURSES</li>
                        <li>HEALTH & BEAUTY</li>
                    </ul>
                </div>
                <div className="col-s women">
                    <Link href="" className="but">SHOP WOMEN</Link>
                </div>
            </div>
        </div>
    )
}

export default Arrivals