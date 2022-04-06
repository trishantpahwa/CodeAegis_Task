import { MenuTile } from './components';

export default function SideMenuView(props) {

    const tiles = [
        'Dashboard',
        'Contacts',
        'Calender',
        'Clients',
        'Template',
        'Activity',
        'Accounting',
        'Reports',
        'Settings',
    ];
    
    return (
        <div className="w-60 h-full shadow-md bg-white px-1 absolute">
            <img src={`assets/logo.png`} />
            <ul className="relative">
                {tiles.map((tile, index) => (
                    <MenuTile key={index} type={tile} active={tile === props.activeTile} />
                ))}
            </ul>
        </div>
    )
}