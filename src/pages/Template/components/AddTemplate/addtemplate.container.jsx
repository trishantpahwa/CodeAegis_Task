import { useState } from 'react';
import AddTemplateView from "./addtemplate.view";
import AddQuestionnairePrompt from '../AddQuestionnairePrompt';
import AddQuestionnaire from '../AddQuestionnaire';

export default function AddTemplateContainer(props) {

    const [questionnairePrompt, setQuestionnairePrompt] = useState(false);
    const [addQuestionnaireVisible, setAddQuestionnaireVisible] = useState(false);

    const onSave = (data) => {
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

    return (
        <div className="w-full">
            {questionnairePrompt &&
                (<AddQuestionnairePrompt onSkip={onSkip} onAddNow={onAddNow} />)
            }
            {addQuestionnaireVisible ? <AddQuestionnaire onSave={onQuestionnaireSave} onDelete={onDelete} /> : <AddTemplateView onSave={onSave} onCancel={props.onCancel} />}
        </div>
    )
}