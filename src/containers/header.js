/*
	React class for view header
*/

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import * as Actions from '../actions/Actions';
import MenuItem from 'material-ui/MenuItem';

export default class Header extends React.Component {

	constructor (props) {
		super(props);
		this.state = {
			showPopover: false,
			groupId: 1,
			anchorEl: {},
		}
	} 

  	render () {
    return (
		<Paper className="header" zDepth={2} rounded={false} style={{background: '#00487c'}}> 
			<div className="clearAfter1">
				<div className="logoHolder">
					<div className="logo">
				      <span className="logoText">Header</span>
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
