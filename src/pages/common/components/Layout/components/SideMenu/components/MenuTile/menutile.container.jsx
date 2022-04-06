import MenuTileView from "./menutile.view";

export default function MenuTileContainer(props) {

    return (
        <div>
            <MenuTileView icon={`assets/${props.type}.png`} text={props.type} />
        </div>
    )
};