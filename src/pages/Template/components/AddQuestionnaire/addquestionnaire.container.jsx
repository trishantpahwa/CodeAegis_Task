import AddQuestionnaireView from './addquestionnaire.view';

export default function AddQuestionnaireContainer(props) {
    return (
        <div>
            <AddQuestionnaireView onSave={props.onSave} onDelete={props.onDelete} />
        </div>
    )
}