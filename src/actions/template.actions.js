import { TemplateConstants } from '../constants';
import { TemplateService } from '../services';

const TemplateActions = {
    getAllAdminTemplates: () => {
        const request = () => ({ type: TemplateConstants.GET_ALL_ADMIN_TEMPLATES_REQUEST });
        const success = (templates) => ({ type: TemplateConstants.GET_ALL_ADMIN_TEMPLATES_SUCCESS, templates: templates });
        const failure = () => ({ type: TemplateConstants.GET_ALL_ADMIN_TEMPLATES_FAILURE });

        return async (dispatch) => {
            dispatch(request());
            const response = await TemplateService.getAllAdminTemplates();
            if (response && response.message === 'Success') {
                dispatch(success(response.user));
            } else {
                dispatch(failure());
            }
        };
    },
    getAllUserTemplates: () => {
        const request = () => ({ type: TemplateConstants.GET_ALL_USER_TEMPLATES_REQUEST });
        const success = (templates) => ({ type: TemplateConstants.GET_ALL_USER_TEMPLATES_SUCCESS, templates: templates });
        const failure = () => ({ type: TemplateConstants.GET_ALL_USER_TEMPLATES_FAILURE });

        return async (dispatch) => {
            dispatch(request());
            const response = await TemplateService.getAllUserTemplates();
            console.log(response)
            if (response && response.message === 'Success') {
                dispatch(success(response.user));
            } else {
                dispatch(failure());
            }
        };
    }
};

export default TemplateActions;