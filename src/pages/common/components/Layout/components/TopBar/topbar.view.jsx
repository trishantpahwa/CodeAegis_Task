export default function TopBar(props) {
    return (
        <div className="flex flex-row w-full justify-between">
            <nav className="text-left text-2xl mt-4 mb-4 ml-4">
                {props.heading}
            </nav>
            <div className="self-end mr-3 mb-4 flex">
                <img src={'https://toppng.com/uploads/preview/see-profile-gentlema-11563886739l6i9igwwuz.png'} className="rounded-full h-6" />
                <img src="/assets/down-arrow.png" className="h-1 mt-2 ml-1" />
            </div>
        </div>
    )
}