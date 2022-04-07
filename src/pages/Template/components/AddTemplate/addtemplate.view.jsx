export default function AddTemplateView(props) {
    return (
        <div className="w-5/6 m-auto">
            <div className="h-5/6 bg-white p-6">
                <div className="w-5/6 flex flex-col ml-auto">
                    <div className="w-5/6 flex flex-col">
                        <div className="text-left text-lg mt-2">
                            Add Name
                        </div>
                        <div className="text-left w-full mt-1">
                            <input name="name" onChange={props.onUpdate} type="text" placeholder="Name" className="w-5/6 border-gray-200 rounded-md p-1 border-2" />
                        </div>
                    </div>
                    <div className="w-5/6 flex flex-col">
                        <div className="text-left text-lg mt-2">
                            Publish to Team
                        </div>
                        <div className="text-left w-full mt-2">
                            <select name="published_to" onChange={props.onUpdate} className="w-5/6 border-gray-200 rounded-md p-1 border-2">
                                <option value="TEAM">TEAM</option>
                                <option value="DRAFT">DRAFT</option>
                                <option value="PUBLISHED">PUBLISHED</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-5/6 flex flex-col">
                        <div className="text-left text-lg mt-2">
                            Upload Word File
                        </div>
                        <div className="text-left w-full mt-2 flex">
                            <div onClick={props.uploadWordDoc} className="w-5/6 h-20 border-2 border-dashed border-teal-500 flex">
                                <img src="/assets/upload_icon.png" className="h-14 mt-2 ml-4" />
                                <p className="mt-6 ml-3 text-sm">Please select or drag and drop image.</p>
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
                                <input type="text" name="price" onChange={props.onUpdate} placeholder="Price (Do it yourself)" className="w-full border-gray-200 rounded-md p-1 border-2 mr-1" />
                                <input type="text" name="sign_fee" onChange={props.onUpdate} placeholder="Price (Do it together)" className="w-full border-gray-200 rounded-md p-1 border-2 ml-1" />
                            </div>
                            <div className="mt-2">
                                <input type="text" name="description" onChange={props.onUpdate} placeholder="Description" className="w-full border-gray-200 rounded-md p-1 border-2" />
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
            <div className="h-3 bg-teal-500 rounded-b-sm"></div>
        </div>
    )
}