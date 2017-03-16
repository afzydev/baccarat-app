import React, { Component } from 'react';

class Cards extends Component {
        render() {
            return (
            <div>
                <div className="row" style={{marginLeft:'0px'}}>
                    <div className="col-md-12 create-curve" style={{height:'100px'}}>
                        <div className="col-xs-6 col-sm-6 ">
                            <div id="playerfirstCard" className="col-xs-2 col-sm-2"></div>
                            <div id="playersecondCard" className="col-xs-2 col-sm-2"></div>
                            <div id="playerthirdCard" className="col-xs-2 col-sm-2"></div>
                        </div>
                        <div className="col-xs-6 col-sm-6  col-sm-offset-9"  id="bankerHand">
                            <div id="bankerfirstCard" className="col-xs-2 col-sm-2"></div>
                            <div id="bankersecondCard" className="col-xs-2 col-sm-2"></div>
                            <div id="bankerthirdCard" className="col-xs-2 col-sm-2"></div>
                        </div>
                    </div>
                </div>
            </div>
            );
    }
};
export default Cards;