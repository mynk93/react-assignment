/*
	React class for view header
*/

import React from 'react';
import Paper from 'material-ui/Paper';

export default class Header extends React.Component {

	constructor (props) {
		super(props);
		this.state = {};
	} 

  	render () {
    return (
		<Paper className="header" zDepth={2} rounded={false} style={{background: '#00487c'}}> 
			<div className="clearAfter1">
				<div className="logoHolder">
					<div className="logo">
				      <span className="logoText">Sample React Blog</span>
				    </div>
				</div>

				<div className="headerRight">
				</div>
			</div>
		</Paper>
    );
  }
}

export default Header;
