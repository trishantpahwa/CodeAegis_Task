export default function EditQuestionnaireView(props) {
    return (
        <div className="m-auto w-full flex flex-col">
            <div className="w-3/5 flex m-auto text-xl bg-white rounded-full cursor-pointer">
                <div onClick={() => props.cancelEditQuestionnaire()} className="bg-white rounded-full h-10 m-auto w-64"><p className="mt-1">Template</p></div>
                <div className="bg-teal-500 text-white rounded-full h-10 m-auto w-64"><p className="mt-1">Questionnaire</p></div>
                <div className="bg-white rounded-full h-10 m-auto w-64"><p className="mt-1">Summary</p></div>
            </div>
            <div className="flex ml-6 h-full basis-0">
                <div className="h-full w-1/5 mt-7 bg-white font-semibold text-lg flex flex-col">
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
                    <div className="text-teal-500 text-lg">
                        + Add Section
                    </div>
                </div>
                <div className="w-4/5 m-auto ml-8">
                    <div className="w-full m-auto mt-7">
                        <div className="h-5/6 bg-white p-6">
                            <div className="text-3xl font-semibold text-left">
                                Add Questionnaire
                            </div>
                            <div className="flex mt-6">
                                <p className="text-xl">Section Title</p>
                                <p className="text-xl ml-1 -mt-1 text-red-500">*</p>
                            </div>
                            <div className="flex">
                                <input defaultValue={props.question.name} className="w-4/5 border-2 border-gray h-10 mt-2 indent-2" type="text" placeholder="Enter Title" />
                                <img className="h-10 ml-2 mt-2 border-2 border-red-500" src="https://freepikpsd.com/file/2020/12/delete-symbol-png-7.png" />
                            </div>
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
                                        <input className="text-md border-2 border-gray-200 mt-2 rounded-sm h-12 indent-2" type="text" name="question" placeholder="Question" defaultValue={typeQuestion.question_value} />
                                        <input className="text-md border-2 border-gray-200 mt-2 rounded-sm h-12 indent-2" type="text" defaultValue={typeQuestion.id_value} name="id" placeholder="ID*" />
                                        <div className="text-xs text-gray-500">An ID to reference the answer in the template</div>
                                        <div className="text-sm text-red-500 text-normal mt-1">Id Must be Unique</div>
                                        <input defaultValue={typeQuestion.helper_value} className="text-md border-2 border-gray-200 mt-2 rounded-sm h-12 indent-2 mt-4" type="text" name="helper" placeholder="Helper" />
                                        <div className="text-sm mt-3">
                                            <input className="mr-2" type="checkbox" />
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
                    </div>
                    <div className="w-5/6 text-left mt-2 -ml-2 p-2 text-lg">
                        <button onClick={props.onSelectCategory} className="relative bg-teal-500 h-9 p-1 w-48 text-white text-left rounded-md">
                            + Select By Categories
                        </button>
                        {props.selectingCategory && <div className="border-2 border-gray-100 sticky ml-52 -mt-60">
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
    )
}