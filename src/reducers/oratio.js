import * as types from 'constants';
import { createReducer } from 'redux-create-reducer';

const stateData = {
	sessionID: '',
	moduleKey: '',
	videoBlob: {},
	moduleData: {},
	isVideoReady: false
};

const initialState = {...stateData};

export default createReducer(initialState, {
	[types.ADD_SESSIONID](state, action) {
		let id  = action.payload;
		return {
			...state,
			sessionID: id,
			videoBlob: {},
		};
	}
});
