import { useLocation } from 'react-router-dom';
import SideMenuView from "./sidemenu.view";

export default function SideMenuContainer() {

    const location = useLocation();
    const activeTile = location.pathname == '/' ? 'Dashboard' : location.pathname[1].toUpperCase() + location.pathname.substring(2);

    return (
        <div>
            <SideMenuView activeTile={activeTile} />
        </div>
    )
}