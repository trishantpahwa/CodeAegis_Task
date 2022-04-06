import { MenuTile } from './components';

export default function SideMenuView() {

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
            <ul className="relative">
                {tiles.map((tile, index) => (
                    <MenuTile key={index} type={tile} />
                ))}
            </ul>
        </div>
    )
}