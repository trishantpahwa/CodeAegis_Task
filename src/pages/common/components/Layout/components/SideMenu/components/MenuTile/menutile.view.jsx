export default function MenuTileView(props) {
    return (
        <li className="relative">
            <a href="/" className="flex items-center text-md py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                <img src={props.icon} />
                <span>{props.text}</span>
            </a>
        </li>
    )
}