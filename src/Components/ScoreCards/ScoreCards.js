import React, { Component } from 'react';

class ScoreCards extends Component {
        render() {
            return (
            <div>
                <div className="row" style={{marginLeft:'0px'}}>
                    <div className="col-sm-12 create-curve" >
                        <div className="col-xs-4 col-sm-4"><i className="count-balance">Player : {this.props.playerFinalScore}</i></div>
                        <div className="col-xs-4 col-sm-4">
                            <h4 className="bitcoin-title">BITCOIN BACCARAT</h4><br/>
                            <div id="cardsLocation" className="cardsDiv">
                            <div id="firstCard" className="cardHidden">
                                    <img src={'images/hidden.png'} className="img-responsive" role="presentation" height="100" style={{width: '70px'}} />
                                </div>
                                <div id="secondCard" className="cardHidden">
                                    <img src={'images/hidden.png'} className="img-responsive" role="presentation" height="100" style={{width: '70px'}} />
                                </div>
                                <div id="thirdCard" className="cardHidden">
                                    <img src={'images/hidden.png'} className="img-responsive" role="presentation" height="100" style={{width: '70px'}} />
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-4 text-right"><i className="count-balance">Banker : {this.props.bankerFinalScore}</i></div>
                    </div>
                </div>
            </div>
            );
    }
}
export default ScoreCards;