import { useState, useRef } from 'react';
import AddTemplateView from "./addtemplate.view";
import AddQuestionnairePrompt from '../AddQuestionnairePrompt';
import AddQuestionnaire from '../AddQuestionnaire';
import { useDispatch } from 'react-redux';

import { TemplateActions } from '../../../../actions';

export default function AddTemplateContainer(props) {

    const dispatch = useDispatch();

    const [questionnairePrompt, setQuestionnairePrompt] = useState(false);
    const [addQuestionnaireVisible, setAddQuestionnaireVisible] = useState(false);

    const [form, setForm] = useState({
        "name": "",
        "word_document": "",
        "description": "",
        "service_details": "",
        "published_to": "TEAM",
        "sign_fee": "",
        "price": ""
    });

    const inputWordDocRef = useRef(null);

    const onAddTemplateUpdate = (e) => {
        const { name, value } = { name: e.target.name, value: e.target.value };
        setForm(_form => {
            return { ..._form, [name]: value };
        });
    }

    const onSave = () => {
        dispatch(TemplateActions.saveTemplate(form));
        setQuestionnairePrompt(true);
    }

    const onSkip = () => {
        setQuestionnairePrompt(false);
    }

    const onAddNow = (data) => {
        setQuestionnairePrompt(false);
        setAddQuestionnaireVisible(true);
    }

    const onQuestionnaireSave = () => {
        window.location = '/template';
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
                    onSave={onQuestionnaireSave}
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
                />}
        </div>
    )
};