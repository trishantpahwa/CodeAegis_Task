import EditTemplateView from './edittemplate.view';

export default function EditTemplateContainer(props) {
    return (
        <div>
            <EditTemplateView template={props.template} />
        </div>
    )
}