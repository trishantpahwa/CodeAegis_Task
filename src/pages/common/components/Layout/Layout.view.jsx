import { SideMenu, TopBar } from './components';

export default function LayoutView(props) {
    return (
        <div className="grid grid-cols-12">
            <SideMenu activeTile={props.active} />
            <TopBar text={props.active} />
        </div>
    )
}