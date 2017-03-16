import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
        <div>
                <div id="Stats" className="container">
                    <div className="row">
                            <div className="col-xs-4 col-sm-4"><b className="value">{this.props.playerOverAllbalance}</b><i className="info">Balance</i></div>
                            <div className="col-xs-4 col-sm-4"><b className="value">{this.props.totalbet}</b><i className="info">Total Bet</i></div>
                            <div className="col-xs-4 col-sm-4"><b className="value">0</b><i className="info">Win</i></div>
                    </div>
                </div>
        </div>
        );
    }
}

export default Header;