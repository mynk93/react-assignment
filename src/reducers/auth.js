import * as types from 'constants';
import { createReducer } from 'redux-create-reducer';

const stateData = {
	userID: '',
	displayName: '',
	groupID: '',
	groupIDList: [],
	empType: '',
	firebase: {},
	firebaseToken: '',
};

const initialState = {...stateData};

export default createReducer(initialState, {
	[types.ADD_USERID](state, action) {
		let userID  = action.payload.userID;
		let groupID  = action.payload.groupID;
		let displayName = action.payload.displayName;
		let type = action.payload.type;
		return {
			...state,
			userID: userID,
			groupID: Object.keys(groupID)[0],
			groupIDList: Object.keys(groupID),
			displayName: displayName,
			empType: type,
		};
	},
	[types.ADD_FIREBASETOKEN](state, action) {
		let token  = action.payload;
		return {
			...state,
			firebaseToken: token,
		};
	},
	[types.CHANGE_GROUPID](state, action) {
		let groupID  = action.payload;
		return {
			...state,
			groupID: groupID,
		};
	},
	[types.ADD_USERID_FETCHGROUP](state, action) {
		let userID  = action.payload.userID;
		let displayName = action.payload.displayName;
		let groupID;
		base.fetch('employees/' + userID + '/groups', {
	      context: this,
	      }).then(group => {
			groupID = group;
			return {
				...state,
				userID: userID,
				groupID: groupID,
				displayName: displayName,
			};
	    }).catch(error => {
    		return {
				...state,
				userID: userID,
				groupID: '',
				displayName: displayName,
			};
	      console.log(error);
    	});
	},
});
