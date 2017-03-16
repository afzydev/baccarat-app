import React, { Component } from 'react';
class PriceDragDrop extends Component {
        
        render() {

            return (
            <div>
                <div className="row ">
                        <div className="col-xs-4 col-sm-4">
                            <div className="circle" style={{background:this.props.playerWinner}}  onClick={this.props.playerDrop}>
                                <span className="icon" id="playerDivPosition">Player</span>
                            </div>
                        </div>

                        <div className="col-xs-4 col-sm-4">
                            <div className="tiecircle" style={{background:this.props.gameTied}} onClick={this.props.tieDrop}><span className="icon" id="tieDivPosition"> Tie</span></div>
                        </div>

                        <div className="col-xs-4 col-sm-4">
                            <div className="circle" style={{background:this.props.bankerWinner}} onClick={this.props.bankerDrop}> <span className="icon" id="bankerDivPosition">Banker</span></div>
                        </div>
		</div> 


		<div className="row">
                    <div className="col-xs-12  col-xs-offset-2 col-sm-8  col-sm-offset-4">
                                                
                        <div className="col-xs-2 col-sm-1 one-chip" id="one" onClick={this.props.selectOne}></div>        


                        <div className="col-xs-2 col-sm-1 ten-chip" id="ten" onClick={this.props.selectTen}></div>        


                        <div className="col-xs-2 col-sm-1 fifty-chip" id="fifty" onClick={this.props.selectFifty}></div>        


                        <div className="col-xs-2 col-sm-1 hundred-chip" id="hundred" onClick={this.props.selectHundred}></div>        


                        <div className="col-xs-2 col-sm-1 five-hundred-chip" id="five-hundred" onClick={this.props.selectFiveHundred}></div>        

                    </div>
		</div> 
                
                <div className={"row "+this.props.dealBtnShow} style={{marginBottom:'15px'}}>
                    <div className="col-xs-12 col-sm-12 text-right">
                         <button type="button" className="btn btn-primary btn-lg" onClick={this.props.deal}>Deal</button>  
                        
                    </div>
		</div>
                
                <div className={"row "+this.props.rebetBtnShow} style={{marginBottom:'15px'}}>
                    <div className="col-xs-12 col-sm-12 text-right">
                         
                         <button type="button" className="btn btn-primary btn-lg" onClick={this.props.rebet}>Rebet</button>
                    </div>
		</div>

            </div>
        );
    }
}
export default PriceDragDrop;