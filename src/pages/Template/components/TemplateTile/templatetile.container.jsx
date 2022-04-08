import TemplateTileView from './templatetile.view';

export default function TemplateTileContainer(props) {
    return(
        <div>
            <TemplateTileView onClick={props.onClick} template={props.template} index={props.index} />
        </div>
    )
}