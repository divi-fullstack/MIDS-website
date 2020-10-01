import React from "react"
import bannerimage from "../static/images/big-data.jpg"
const PortfolioListItem =()=>{
    return(
        <div className="col-md-4">
            
            <div className="portfolio">
              <div className="row">
              <div
              className="image-portfolio"
              style={{ backgroundImage: `url(${bannerimage})` }}
            />
             <div className="pcontent-wrapper">
             <h4 className="heading-portfolio">Big Data & Analytics</h4>
              <p>
                Big data & Analytics analyzes a lot of information to reveal
                connections and other insights. connections and different
                experiences. With the present technological innovations, it’s
                conceivable to break down your information and finds solutions.
              </p>
              <button className="learn-more"><span>←</span> LEARN MORE</button>
             </div>
              </div>
            </div>
          </div>
    )
}

export default PortfolioListItem;