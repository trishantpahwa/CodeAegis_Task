import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TemplateActions } from '../../actions';
import TemplateView from './template.view';


export default function TemplateContainer() {

    const dispatch = useDispatch();
    const adminTemplates = useSelector((state) => !!state && !!state.template && !!state.template.templates && !!state.template.templates && !!state.template.templates.admin && state.template.templates.admin) || [];
    const userTemplates = useSelector((state) => !!state && !!state.template && !!state.template.templates && !!state.template.templates && !!state.template.templates.user && state.template.templates.user) || [];

    const [addTemplate, setAddTemplate] = useState(false);
    const [editTemplate, setEditTemplate] = useState(null);
    const [editQuestionnaire, setEditQuestionnaire] = useState(null);

    useEffect(() => {
        dispatch(TemplateActions.getAllAdminTemplates());
        dispatch(TemplateActions.getAllUserTemplates());
    }, []);

    function clickAddTemplate() {
        setAddTemplate(true);
    }

    function cancelAddTemplate() {
        setAddTemplate(false);
    }

    function onClickTile(template) {
        setEditTemplate(template);
    }

    function cancelEditTemplate(template) {
        setEditTemplate(false);
    }

    function onClickQuestionnaireEdit(template) {
        setEditQuestionnaire(template);
    }

    function cancelEditQuestionnaire() {
        setEditQuestionnaire(false);
    }

    return (
        <div className="ml-60 relative">
            <TemplateView
                adminTemplates={adminTemplates}
                userTemplates={userTemplates}
                clickAddTemplate={clickAddTemplate}
                cancelAddTemplate={cancelAddTemplate}
                addTemplate={addTemplate}
                onClickTile={onClickTile}
                editTemplate={editTemplate}
                cancelEditTemplate={cancelEditTemplate}
                onClickQuestionnaireEdit={onClickQuestionnaireEdit}
                cancelEditQuestionnaire={cancelEditQuestionnaire}
                editQuestionnaire={editQuestionnaire}
            />
        </div>
    )
};