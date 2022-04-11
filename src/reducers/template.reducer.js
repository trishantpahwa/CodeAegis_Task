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

        case TemplateConstants.UPLOAD_WORD_DOC_REQUEST:
            return { ...state };
        case TemplateConstants.UPLOAD_WORD_DOC_SUCCESS:
            return { ...state };
        case TemplateConstants.UPLOAD_WORD_DOC_FAILURE:
            return { ...state };

        case TemplateConstants.SAVE_TEMPLATE_REQUEST:
            return { ...state };
        case TemplateConstants.SAVE_TEMPLATE_SUCCESS:
            return { ...state };
        case TemplateConstants.SAVE_TEMPLATE_FAILURE:
            return { ...state };

        case TemplateConstants.GET_QUESTIONNAIRE_CATEGORIES_REQUEST:
            return { ...state };
        case TemplateConstants.GET_QUESTIONNAIRE_CATEGORIES_SUCCESS:
            return { ...state, templates: { ...state.templates, categories: action.categories } };
        case TemplateConstants.GET_QUESTIONNAIRE_CATEGORIES_FAILURE:
            return { ...state };

        case TemplateConstants.GET_QUESTIONNAIRE_FROM_TEMPLATE_REQUEST:
            return { ...state };
        case TemplateConstants.GET_QUESTIONNAIRE_FROM_TEMPLATE_SUCCESS:
            return { ...state, templates: { ...state.templates, questionnaires: { ...state.templates.questionnaires, [action.template]: action.questionnaire } } };
        case TemplateConstants.GET_QUESTIONNAIRE_FROM_TEMPLATE_FAILURE:
            return { ...state };

        case TemplateConstants.SAVE_QUESTIONNAIRE_REQUEST:
            return { ...state };
        case TemplateConstants.SAVE_QUESTIONNAIRE_SUCCESS:
            return { ...state };
        case TemplateConstants.SAVE_QUESTIONNAIRE_FAILURE:
            return { ...state };

        default:
            return state;
    }
};