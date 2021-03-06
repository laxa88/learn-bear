import { ActionTypes, IAction, IState } from './types';

const defaultState: IState = {
  errorMessage: '',
  isLoading: false,
};

export function reducer(state: IState = defaultState, action: IAction): IState {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return {
        ...state,
        errorMessage: '',
        isLoading: true,
      };

    case ActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case ActionTypes.LOGIN_FAIL:
      return {
        ...state,
        errorMessage: action.payload.message,
        isLoading: false,
      };

    case ActionTypes.LOGOUT:
    default:
      return state;
  }
}
