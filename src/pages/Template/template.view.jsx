import './template.css';

import { AddTemplate, TemplateTile, EditTemplate, EditQuestionnaire } from './components';

export default function TemplateView(props) {

    return (
        <div className="template-view p-10 overflow-scroll flex">
            {props.editTemplate ?
                props.editQuestionnaire ?
                    (<EditQuestionnaire
                        cancelEditQuestionnaire={props.cancelEditQuestionnaire}
                        template={props.editTemplate}
                    />)
                    :
                    (<EditTemplate
                        template={props.editTemplate}
                        onCancel={props.cancelEditTemplate}
                        onClickQuestionnaireEdit={props.onClickQuestionnaireEdit}
                    />) : (!props.addTemplate ? (
                        <div>
                            <div>
                                <button onClick={props.clickAddTemplate} className="bg-cyan-600 rounded-lg text-white p-1 float-right">Add Template</button>
                            </div>
                            <div className="ml-4 text-left text-lg font-bold mb-3">
                                All Templates
                            </div>
                            <div className="grid grid-cols-4 gap-4 p-4">
                                {props.adminTemplates && props.adminTemplates.map((template, index) => (
                                    <TemplateTile onClick={props.onClickTile} template={template} key={index} index={index} />
                                ))}
                            </div>
                            <div className="mt-5 ml-4 text-left text-lg font-bold mb-3">
                                My Templates
                            </div>
                            <div className="grid grid-cols-4 gap-4 p-4">
                                {props.userTemplates && props.userTemplates.map((template, index) => (
                                    <TemplateTile onClick={props.onClickTile} template={template} key={index} index={index} />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="w-full flex">
                            <AddTemplate onCancel={props.cancelAddTemplate} onEditQuestionnaire={props.onClickQuestionnaireEdit} cancelQuestionnaireEdit={props.cancelQuestionnaireEdit} />
                        </div>
                    ))}
        </div>
    )
};