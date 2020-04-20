import { Action } from '@ngrx/store';
import { ActionTypes } from '../actions/counter';

export const initialState = 0;

export function counterReducer(state = initialState, action: Action) {
	switch (action.type) {
		case ActionTypes.Increment:
			return state + 1;

		case ActionTypes.Decrement:
			if (state > 0) {
				return state - 1;
			}

		default:
			return state;
	}
}
