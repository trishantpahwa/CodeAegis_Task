import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import EditTemplateView from './edittemplate.view';

import { TemplateActions } from '../../../../actions';

export default function EditTemplateContainer(props) {

    const dispatch = useDispatch();

    const [form, setForm] = useState({
        "name": props.template.name,
        "word_document": props.template.word_document,
        "description": props.template.description,
        "service_details": props.template.service_details,
        "published_to": props.template.published_to,
        "sign_fee": props.template.sign_fee,
        "price": props.template.price,
        "_id": props.template._id
    });

    const inputWordDocRef = useRef(null);

    const onEditTemplateUpdate = (e) => {
        const { name, value } = { name: e.target.name, value: e.target.value };
        setForm(_form => {
            return { ..._form, [name]: value };
        });
    }

    const onSave = () => {
        dispatch(TemplateActions.updateTemplate(form));
        // setQuestionnairePrompt(true);
    }

    const uploadWordDoc = (e) => {
        inputWordDocRef.current.click();
    }

    const uploadDoc = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('media', file);
        const path = await dispatch(TemplateActions.uploadWordDoc(formData));
        onEditTemplateUpdate({ target: { name: "word_document", value: path } });
    }

    return (
        <div className="w-full">
            <EditTemplateView
                form={form}
                onCancel={props.onCancel}
                onSave={onSave}
                onUpdate={onEditTemplateUpdate}
                uploadWordDoc={uploadWordDoc}
                uploadDoc={uploadDoc}
                inputWordDocRef={inputWordDocRef}
                onClickQuestionnaireEdit={props.onClickQuestionnaireEdit}
            />
        </div>
    )
}