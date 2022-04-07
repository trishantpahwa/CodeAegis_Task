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
        <div className="w-60 h-full shadow-md bg-white px-1 absolute flex flex-col justify-between">
            <div>
                <img src={`assets/logo.png`} className="w-full h-19 mt-3 mb-7" />
                <ul className="relative">
                    {tiles.map((tile, index) => (
                        <MenuTile key={index} type={tile} active={tile === props.activeTile} />
                    ))}
                </ul>
            </div>
            <div className="flex justify-between p-6">
                <button className="bg-gray-200 rounded-full w-20 h-9">Support</button>
                <button className="bg-gray-200 rounded-full w-20 h-9">Logout</button>
            </div>
        </div>
    )
}