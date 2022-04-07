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
            if (response && response.message === 'Success') {
                dispatch(success(response.user));
            } else {
                dispatch(failure());
            }
        };
    },
    uploadWordDoc: (form) => {
        const request = () => ({ type: TemplateConstants.UPLOAD_WORD_DOC_REQUEST });
        const success = () => ({ type: TemplateConstants.UPLOAD_WORD_DOC_SUCCESS });
        const failure = () => ({ type: TemplateConstants.UPLOAD_WORD_DOC_FAILURE });

        return async (dispatch) => {
            dispatch(request());
            const response = await TemplateService.uploadWordDoc(form);
            if (response) {
                dispatch(success());
                return response.path;
            } else {
                dispatch(failure());
                return false;
            }
        };
    },
    saveTemplate: (template) => {
        const request = () => ({ type: TemplateConstants.SAVE_TEMPLATE_REQUEST });
        const success = () => ({ type: TemplateConstants.SAVE_TEMPLATE_SUCCESS });
        const failure = () => ({ type: TemplateConstants.SAVE_TEMPLATE_FAILURE });

        return async (dispatch) => {
            dispatch(request());
            const response = await TemplateService.saveTemplate(template);
            if (response) {
                dispatch(success());
            } else {
                dispatch(failure());
            }
        };
    }
};

export default TemplateActions;