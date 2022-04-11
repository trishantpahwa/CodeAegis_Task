export default function EditTemplateView(props) {
    return (
        <div className="w-full flex flex-col">
            <div className="w-3/5 flex m-auto text-xl bg-white rounded-full cursor-pointer">
                <div className="bg-teal-500 text-white rounded-full h-10 m-auto w-64">Template</div>
                <div onClick={() => props.onClickQuestionnaireEdit(props.form)} className="bg-white rounded-full h-10 m-auto w-64">Questionnaire</div>
                <div className="bg-white rounded-full h-10 m-auto w-64">Summary</div>
            </div>
            <div className="w-5/6 m-auto mt-7">
                <div className="h-5/6 bg-white p-6">
                    <div className="w-5/6 flex flex-col ml-auto">
                        <div className="w-5/6 flex flex-col">
                            <div className="text-left text-lg mt-2">
                                Add Name
                            </div>
                            <div className="text-left w-full mt-1">
                                <input name="name" value={props.form.name} onChange={props.onUpdate} type="text" placeholder="Name" className="w-5/6 border-gray-200 rounded-md p-1 border-2" />
                            </div>
                        </div>
                        <div className="w-5/6 flex flex-col">
                            <div className="text-left text-lg mt-2">
                                Publish To
                            </div>
                            <div className="text-left w-full mt-2">
                                <select name="published_to" defaultValue={props.form.published_to} onChange={props.onUpdate} className="w-5/6 border-gray-200 rounded-md p-1 border-2">
                                    <option label="TEAM" value="TEAM">TEAM</option>
                                    <option label="DRAFT" value="DRAFT">DRAFT</option>
                                    <option label="PUBLISHED" value="PUBLISHED">PUBLISHED</option>
                                </select>
                            </div>
                        </div>
                        <div className="w-5/6 flex flex-col">
                            <div className="text-left text-lg mt-2">
                                Upload Word File
                            </div>
                            <div className="text-left w-full mt-2 flex">
                                <div onClick={props.uploadWordDoc} className="w-5/6 h-10 flex">
                                    {/* <img src="/assets/upload_icon.png" className="h-14 mt-2 ml-4" />
                                    <p className="mt-6 ml-3 text-sm">Please select or drag and drop image.</p> */}
                                    <button className="p-2 font-semibold bg-teal-500 rounded-lg text-white flex">
                                        <img className="h-8 -mt-1" src="/assets/word-icon.png" />
                                        Open in Word for the web view
                                    </button>
                                    <input type="file" className="hidden" name="word-file" onChange={props.uploadDoc} ref={props.inputWordDocRef} />
                                </div>
                            </div>
                        </div>
                        <div className="w-5/6 flex flex-col">
                            <div className="text-left text-lg mt-2">
                                Menu of Services
                            </div>
                            <div className="text-left w-5/6 mt-2 flex flex-col">
                                <div className="flex justify-between">
                                    <input type="text" name="price" defaultValue={props.form.price} onChange={props.onUpdate} placeholder="Price (Do it yourself)" className="w-full border-gray-200 rounded-md p-1 border-2 mr-1" />
                                    <input type="text" name="sign_fee" defaultValue={props.form.sign_fee} onChange={props.onUpdate} placeholder="Price (Do it together)" className="w-full border-gray-200 rounded-md p-1 border-2 ml-1" />
                                </div>
                                <div className="mt-2">
                                    <input type="text" name="description" defaultValue={props.form.description.trim()} onChange={props.onUpdate} placeholder="Description" className="w-full border-gray-200 rounded-md p-1 border-2" />
                                </div>
                            </div>
                        </div>
                        <div className="w-5/6 flex flex-col">
                            <div className="w-5/6 flex justify-between mt-6">
                                <button onClick={props.onCancel} className="bg-red-500 rounded-full w-48 h-8 text-white">
                                    Cancel
                                </button>
                                <button onClick={props.onSave} className="bg-teal-500 rounded-full w-48 h-8 text-white">
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}