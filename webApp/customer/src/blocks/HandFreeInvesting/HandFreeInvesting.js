import React, { Component } from 'react';
import $         from 'jquery';

import "./HandFreeInvesting.css";

export default class HandFreeInvesting extends Component {

  constructor(props) {
    super(props);
        this.state = {
        };
    }
  ScrollTop(event){
    window.scrollTo(0,0);
  }

  componentDidMount()
  {
 
  } 

  render() {

    return (
          
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 backColorWhite ">
                <div className="row">

                  <div className="col-lg-10 col-lg-offset-2 col-md-12 col-sm-12 col-xs-12 startTrandingContent backColorGray">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 pull-right">
                      <label><span className="iceBlueColor">Start trading. </span>No experience required.</label>
                      <p>Whether you’re trading full time or just on the side—if you can swipe right, you can swap stocks. With active investing, we make it easy to start making trades on your own.</p>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pad50 col-lg-offset-6">
                          <div className="startInterestingButton col-lg-3 col-md-6 col-sm-12 col-xs-12 "> Start active investing</div>
                          <div className=" col-lg-3 col-md-6 col-sm-12 col-xs-12 learnMore"> <a href="">Learn More &nbsp; <i class="fa fa-arrow-right"></i></a></div>
                      </div> 
                    </div>
                  </div>
                 <div className="col-lg-6 col-md-6  col-sm-12  col-xs-12 startTrandingImgContainer">
                    <div>
                      <img src="/images/img4.jpg"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    );
  }
}
