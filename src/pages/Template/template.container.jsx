import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TemplateActions } from '../../actions';
import TemplateView from './template.view';


export default function TemplateContainer() {

    const dispatch = useDispatch();
    const adminTemplates = useSelector((state) => !!state && !!state.template && !!state.template.templates && !!state.template.templates && !!state.template.templates.admin && state.template.templates.admin) || [];
    const userTemplates = useSelector((state) => !!state && !!state.template && !!state.template.templates && !!state.template.templates && !!state.template.templates.user && state.template.templates.user) || [];

    useEffect(() => {
        dispatch(TemplateActions.getAllAdminTemplates());
        dispatch(TemplateActions.getAllUserTemplates());
    }, []);

    return (
        <div className="ml-60 relative">
            <TemplateView adminTemplates={adminTemplates} userTemplates={userTemplates} />
        </div>
    )
};