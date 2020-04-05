import React from 'react';
import TopBannerImage from '../assets/images/top-banner.png';

import '../SCSS/TopBanner.scss';

const TopBanner = ()=> {
    return (
        <div className="container topBan">
            <img src={TopBannerImage} alt="Beautiful clothes" className="img-fluid" />
        </div>
    )
}

export default TopBanner;