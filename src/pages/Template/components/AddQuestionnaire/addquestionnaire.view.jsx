export default function AddQuestionnaireView(props) {
    return (
        <div>
            <div className="flex justify-around">
                <div className="bg-white rounded-sm w-1/4">
                    <div className="text-left text-gray-400 text-md mt-5 ml-5">
                        Unnamed questions
                    </div>
                    <div className="text-left text-md text-teal-500 ml-5 mt-3 font-medium">
                        + Add Section
                    </div>
                </div>
                <div className="bg-white p-10 w-full rounded-sm ml-6">
                    <div className="ml-2 text-left text-lg font-bold">
                        Add Questionnaire
                    </div>
                    <div className="ml-2 mt-5 w-5/6">
                        <div className="text-left">
                            Section Title
                        </div>
                        <div className="flex">
                            <div className="w-full">
                                <input type="text" placeholder="Enter Title" className="mt-2 border-2 border-gray w-full rounded-sm" />
                            </div>
                            <div>
                                <button className="border-2 border-red-300 h-7 w-7 flex justify-center mt-2 ml-2 rounded-sm">
                                    <img className="h-5 w-5" src="https://freepikpsd.com/file/2020/12/delete-symbol-png-7.png" />
                                </button>
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="text-left">
                                Type Question
                            </div>
                            <div className="mt-2">
                                <textarea rows="4" className="w-full border-gray border-2" placeholder="There are no questions for this section.">
                                </textarea>
                            </div>
                        </div>
                        <div className="text-left mt-7 mb-5">
                            <button className="rounded-md pl-2 pr-2 pt-1 pb-1 text-sm text-white bg-teal-500"> + Select by Categories</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end mt-20">
                <button onClick={props.onDelete} className="bg-red-100 border-2 border-red-500 rounded-full p-1 w-40">Delete</button>
                <button onClick={props.onSave} className="bg-teal-100 border-2 border-teal-500 rounded-full p-1 w-40 ml-4">Save</button>
            </div>
        </div>
    )
};
