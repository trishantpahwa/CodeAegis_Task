import { MenuTile } from './components';

export default function SideMenuView() {
    return (
        <div className="w-60 h-full shadow-md bg-white px-1 absolute">
            <ul className="relative">
                <MenuTile type={'Dashboard'} />
                <MenuTile type={'Contacts'} />
                <MenuTile type={'Calender'} />
                <MenuTile type={'Clients'} />
                <MenuTile type={'Template'} />
                <MenuTile type={'Activity'} />
                <MenuTile type={'Accounting'} />
                <MenuTile type={'Reports'} />
                <MenuTile type={'Settings'} />
            </ul>
        </div>
    )
}