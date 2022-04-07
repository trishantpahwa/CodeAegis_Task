import { TemplateConstants } from '../constants';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case TemplateConstants.GET_ALL_ADMIN_TEMPLATES_REQUEST:
            return { ...state };
        case TemplateConstants.GET_ALL_ADMIN_TEMPLATES_SUCCESS:
            return { ...state, templates: { ...state.templates, admin: action.templates } };
        case TemplateConstants.GET_ALL_ADMIN_TEMPLATES_FAILURE:
            return { ...state };

        case TemplateConstants.GET_ALL_USER_TEMPLATES_REQUEST:
            return { ...state };
        case TemplateConstants.GET_ALL_USER_TEMPLATES_SUCCESS:
            return { ...state, templates: { ...state.templates, user: action.templates } };
        case TemplateConstants.GET_ALL_USER_TEMPLATES_FAILURE:
            return { ...state };

        default:
            return state;
    }
};