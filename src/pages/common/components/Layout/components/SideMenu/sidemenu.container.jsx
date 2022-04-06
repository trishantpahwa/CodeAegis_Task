import SideMenuView from "./sidemenu.view";

export default function SideMenuContainer(props) {
    return (
        <div className="col-start-1 col-span-2">
            <SideMenuView activeTile={props.activeTile} />
        </div>
    )
}