import TemplateTileView from './templatetile.view';

export default function TemplateTileContainer(props) {
    return(
        <div>
            <TemplateTileView name={props.name} index={props.index} />
        </div>
    )
}