export default function TopBar(props) {
    return (
        <nav className="text-left text-2xl mt-4 mb-4 ml-4">
            {props.heading}
        </nav>
    )
}