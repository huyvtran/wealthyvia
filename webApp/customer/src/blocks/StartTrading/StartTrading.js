import React, { Component } from 'react';
import $         from 'jquery';

import "./StartTrading.css";

export default class StartTrading extends Component {

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
  $(window).scroll(function() 
    {    
        var scroll = $(window).scrollTop();
        console.log(" scroll",scroll)
        if (scroll >= 2150) {
            $(".para2").addClass("paraeff4");
        } else {
            $(".para2").removeClass("paraeff4");
        }
        
    });
  } 

  render() {

    return (
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 backColorWhite mt20" id="safeHeven">
              <div className="row">

                <div className="col-lg-10 col-md-6 col-sm-12 col-xs-12 startTrandingContent backColorGray">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <label><span className="iceBlueColor">MF and safe heaven moats +  </span>alpha</label>
                    <p>Additional returns.<br/>
                        Algo based technical analysis<br/>
                        Regular monthly return possibilities<br/>
                        Algo system trades<br/>
                        </p>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pad50">
                       {/* <div className=" col-lg-3 col-md-6 col-sm-12 col-xs-12 "></div>*/}
                        <div className=" col-lg-3 col-md-6 col-sm-12 col-xs-12 learnMoreST row"> <a href="">Read More</a></div>
                    </div> 
                  </div>
                </div>
               <div className="col-lg-6 col-lg-offset-7 col-md-6  col-sm-12  col-xs-12  startTrandingImgContainer para2">
                  <div>
                    <img src="/images/img4.jpg"/>
                  </div>
                </div>
              </div>
            </div>
    );
  }
}
