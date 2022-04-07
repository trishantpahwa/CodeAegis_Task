import { UserConstants } from '../constants';
import { UserService, SessionService } from '../services';

const UserActions = {
    setUser: (_id, token) => {
        const success = () => ({ type: UserConstants.LOGIN_SUCCESS });
        const setUserToken = (token) => ({ type: UserConstants.SET, token });
        
        return async (dispatch) => {
            SessionService.set('user-token', token);
            SessionService.set('user-id', id);
            dispatch(setUserToken());
            dispatch(success());
        }
    },
    login: () => {
        const request = () => ({ type: UserConstants.LOGIN_REQUEST });
        const failure = () => ({ type: UserConstants.LOGIN_FAILURE });

        return async (dispatch) => {
            dispatch(request());
            const response = await UserService.login({
                "countryCode": "+1",
                "mobileNumber": "7906504970",
                "password": "Vesta1234"
            });
            if (response) {
                dispatch(UserActions.setUser(response.data._id, response.data.access_token));
            } else {
                dispatch(failure());
            }
        };
    },
    isLoggedIn: () => {
        const request = () => ({ type: UserConstants.IS_LOGGED_IN_REQUEST });
        const success = (isLoggedIn) => ({ type: UserConstants.IS_LOGGED_IN_SUCCESS, isLoggedIn: isLoggedIn });
        const failure = () => ({ type: UserConstants.IS_LOGGED_IN_FAILURE });

        return async (dispatch) => {
            dispatch(request());
            const response = await UserService.isLoggedIn();
            if (response) {
                dispatch(success(response));
            } else {
                dispatch(failure());
                dispatch(UserActions.login());
            }
        };
    }
};

export default UserActions;