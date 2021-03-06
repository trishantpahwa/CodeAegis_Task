export default function AddQuestionnaireView(props) {
    return (
        <div>
            <div className="flex justify-around">
                <div className="bg-white rounded-sm w-1/4">
                    <ul className="list-none text-left p-3">
                        {props.questionnaires.map((question, index) => (
                            <li key={index}>
                                <button onClick={() => props.selectQuestion(question)}>
                                    {question.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                    {props.questionnaires.length === 0 ? <div>Unnamed Section</div> : null}
                    <div className="text-teal-500 text-lg cursor-pointer" onClick={props.addSection}>
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
                                <input name="name" onChange={props.handleQuestionChange} type="text" placeholder="Enter Title" className="mt-2 border-2 border-gray w-full rounded-sm" value={props.question.name} />
                            </div>
                            <div>
                                <button className="border-2 border-red-300 h-7 w-7 flex justify-center mt-2 ml-2 rounded-sm">
                                    <img className="h-5 w-5" src="https://freepikpsd.com/file/2020/12/delete-symbol-png-7.png" />
                                </button>
                            </div>
                        </div>
                        <div className="mt-2">
                            <div className="flex mt-4 mb-4">
                                <p className="text-2xl">Type Question</p>
                                <p className="text-2xl ml-1 -mt-1 text-red-500">*</p>
                            </div>
                            <div className="flex flex-col text-left">
                                {props.typeQuestions.length > 0 ? props.typeQuestions.map((typeQuestion, index) => (
                                    <div className="flex flex-col border-gray-200 roudned-md border-2 p-5 mb-4" key={index}>
                                        <div className="-mt-2 text-xl">
                                            {typeQuestion.name}
                                        </div>
                                        <input className="text-md border-2 border-gray-200 mt-2 rounded-sm h-12 indent-2" type="text" placeholder="Question" onChange={props.handleQuestionChange} name={"question_value-" + index.toString()} defaultValue={typeQuestion.question_value} />
                                        <input className="text-md border-2 border-gray-200 mt-2 rounded-sm h-12 indent-2" type="text" defaultValue={typeQuestion.id_val} onChange={props.handleQuestionChange} name={"id_val-" + index.toString()} placeholder="ID*" />
                                        <div className="text-xs text-gray-500">An ID to reference the answer in the template</div>
                                        <div className="text-sm text-red-500 text-normal mt-1">Id Must be Unique</div>
                                        <input defaultValue={typeQuestion.helper_value} onChange={props.handleQuestionChange} name={"helper_value-" + index.toString()} className="text-md border-2 border-gray-200 mt-2 rounded-sm h-12 indent-2 mt-4" type="text" placeholder="Helper" />
                                        <div className="text-sm mt-3">
                                            <input name={"isRequired-" + index.toString()} onChange={props.handleQuestionChange} defaultValue={typeQuestion.isRequired} className="mr-2" type="checkbox" />
                                            Required
                                        </div>
                                    </div>
                                ))
                                    :
                                    (<div className="h-28 text-gray-600 border-gray-200 rounded-md border-2 p-5">
                                        There are no questions for this section
                                    </div>)
                                }
                            </div>
                        </div>
                        <div className="text-left mt-7 mb-5">
                            <button onClick={props.onSelectCategory} className="rounded-md pl-2 pr-2 pt-1 pb-1 text-sm text-white bg-teal-500"> + Select By Categories</button>
                            {props.selectingCategory && <div ref={props.categoriesRef} className="border-2 border-gray-100 sticky ml-52 -mt-60">
                                <ul className="bg-white overflow-scroll h-60 w-48 list-none">
                                    {props.categories.map((category, index) => (
                                        <li className="cursor-pointer" key={index} onClick={() => props.selectTypeQuestionsCategory(category)}>{category.name}</li>
                                    ))}
                                </ul>
                            </div>}
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
