import { useState, useRef, useEffect } from 'react';
import AddTemplateView from "./addtemplate.view";
import AddQuestionnairePrompt from '../AddQuestionnairePrompt';
import AddQuestionnaire from '../AddQuestionnaire';
import { useDispatch } from 'react-redux';

import { TemplateActions } from '../../../../actions';
import { fromJSON } from 'postcss';

export default function AddTemplateContainer(props) {

    const dispatch = useDispatch();

    const [questionnairePrompt, setQuestionnairePrompt] = useState(false);
    const [addQuestionnaireVisible, setAddQuestionnaireVisible] = useState(false);
    const [templateID, setTemplateID] = useState(null);
    const [formErrors, setFormErrors] = useState([]);

    const [form, setForm] = useState({
        "name": "",
        "word_document": "",
        "description": "",
        "service_details": "",
        "published_to": "TEAM",
        "sign_fee": 0,
        "price": 0
    });

    const inputWordDocRef = useRef(null);

    const checkErrors = () => {
        ['name', 'price', 'sign_fee'].map(_field => {
            if (form[_field] === '' && !formErrors.includes(_field + " cannot be empty")) setFormErrors(_formErrors => [..._formErrors, _field + " cannot be empty"]);
            else setFormErrors(_formErrors => [..._formErrors.filter(f => f !== _field + " cannot be empty")]);
        });
    }

    const onAddTemplateUpdate = (e) => {
        const { name, value } = { name: e.target.name, value: e.target.value };
        setForm(_form => {
            return { ..._form, [name]: value };
        });
    }

    const onSave = async () => {
        checkErrors();
        if (formErrors.length === 0 && ['name', 'price', 'sign_fee'].filter(_f => form[_f] === '').length === 0) {
            const _templateID = await dispatch(TemplateActions.saveTemplate(form));
            setTemplateID(_templateID);
            setQuestionnairePrompt(true);
        }
    }

    const onSkip = () => {
        setQuestionnairePrompt(false);
    }

    const onAddNow = () => {
        setQuestionnairePrompt(false);
        setAddQuestionnaireVisible(true);
    }

    const onDelete = () => {

    }

    const uploadWordDoc = (e) => {
        inputWordDocRef.current.click();
    }

    const uploadDoc = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('media', file);
        const path = await dispatch(TemplateActions.uploadWordDoc(formData));
        onAddTemplateUpdate({ target: { name: "word_document", value: path } });
    }

    return (
        <div className="w-full">
            {questionnairePrompt &&
                (<AddQuestionnairePrompt
                    onSkip={onSkip}
                    onAddNow={onAddNow}
                />)
            }
            {addQuestionnaireVisible ?
                <AddQuestionnaire
                    templateID={templateID}
                    onDelete={onDelete}
                />
                :
                <AddTemplateView
                    onSave={onSave}
                    onCancel={props.onCancel}
                    onUpdate={onAddTemplateUpdate}
                    inputWordDocRef={inputWordDocRef}
                    uploadWordDoc={uploadWordDoc}
                    uploadDoc={uploadDoc}
                    formErrors={formErrors}
                />}
        </div>
    )
};