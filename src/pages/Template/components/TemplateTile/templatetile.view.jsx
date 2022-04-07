export default function TemplateTile(props) {
    return (
        <div className="bg-white flex flex-row justify-between h-auto hover:border-2 hover:border-cyan-600 rounded-lg p-2 hover:text-cyan-600 cursor-pointer" key={props.index}>
            <div className="flex flex-col justify-start">
                <div className="text-left ml-2 mt-2 font-semibold">
                    {props.name}
                </div>
            </div>
            <div className="mt-2 mr-2">
                <img className="h-4" src="/assets/hamburger-dots.png" />
            </div>
        </div>
    )
}