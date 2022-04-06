import MenuTileView from "./menutile.view";

export default function MenuTileContainer(props) {

    const link = props.type === 'Dashboard' ? '/' : props.type.toLowerCase();

    return (
        <div>
            <MenuTileView icon={`assets/${props.type}.png`} text={props.type} active={props.active} link={link}/>
        </div>
    )
};