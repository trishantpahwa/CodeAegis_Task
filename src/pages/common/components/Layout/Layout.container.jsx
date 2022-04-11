import { useLocation } from 'react-router-dom';
import LayoutView from "./layout.view";

export default function LayoutContainer() {

    const location = useLocation();
    const active = location.pathname == '/' ? 'Dashboard' : location.pathname[1].toUpperCase() + location.pathname.substring(2);

    return (
        <div>
            <LayoutView active={active} />
        </div>
    )
}