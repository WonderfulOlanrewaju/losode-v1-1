import React from 'react'
import Lerdict from '../assets/images/verdict.png';
import {Link} from 'react-router-dom';

import '../SCSS/Verdict.scss'
const Verdict = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={Lerdict} alt="verdict logo" width="500px" className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <p className="smallHeading">The Verdict special</p>
                    <h3 className="verdict-sub">THE 1970S CALLED: <br />
                        THEY WANT THEIR FASHION BACK!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam elit mi, varius vitae tincidunt quis, rutrum eget ante. Donec ipsum orci, varius nec dapibus nec, tincidunt quis leo. Quisque in diam sed urna dignissim ultricies. </p>
                    <br />
                    <Link to="/" className="but">READ THE VERDICT</Link>
                </div>
            </div>
        </div>
    )
}

export default Verdict