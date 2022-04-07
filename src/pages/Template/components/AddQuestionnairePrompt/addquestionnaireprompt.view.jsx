export default function AddQuestionnairePromptView(props) {
    return (
        <div>
            <div className="bg-black absolute h-screen w-screen -top-16 -left-60 opacity-80"></div>
            <div className="w-1/3 m-auto fixed inset-0 z-10 h-1/4">
                <div className="h-5/6 bg-white p-6 rounded-md">
                    <div className="flex flex-col">
                        <div>
                            Do you want to Add Questionnaire?
                        </div>
                        <div className="flex justify-between mt-3 pr-10 pl-10 pt-3">
                            <button onClick={props.onSkip} className="bg-teal-100 w-32 rounded-full text-teal-500 border-2 border-teal-500">
                                Skip
                            </button>
                            <button onClick={props.onAddNow} className="bg-teal-500 w-32 rounded-full text-white">
                                Add Now
                            </button>
                        </div>
                    </div>
                </div>
                <div className="h-3 bg-teal-500 rounded-b-sm"></div>
            </div>
        </div>
    )
}