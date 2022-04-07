import AddQuestionnairePromptView from "./addquestionnaireprompt.view";

export default function AddQuestionnairePromptContainer(props) {

    return (
        <div className="w-full">
            <AddQuestionnairePromptView onSkip={props.onSkip} onAddNow={props.onAddNow} />
        </div>
    )
}