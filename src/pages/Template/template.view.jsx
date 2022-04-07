import { useState } from 'react';
import './template.css';

import { AddTemplate, TemplateTile } from './components';

export default function TemplateView(props) {

    const [addTemplate, setAddTemplate] = useState(false);

    function clickAddTemplate() {
        setAddTemplate(true);
    }

    function cancelAddTemplate() {
        setAddTemplate(false);
    }

    return (
        <div className="template-view p-10 overflow-scroll flex">
            {!addTemplate ? (
                <div>
                    <div>
                        <button onClick={clickAddTemplate} className="bg-cyan-600 rounded-lg text-white p-1 float-right">Add Template</button>
                    </div>
                    <div className="ml-4 text-left text-lg font-bold mb-3">
                        All Templates
                    </div>
                    <div className="grid grid-cols-4 gap-4 p-4">
                        {props.adminTemplates && props.adminTemplates.map((template, index) => (
                            <TemplateTile name={template.name} key={index} index={index} />
                        ))}
                    </div>
                    <div className="mt-5 ml-4 text-left text-lg font-bold mb-3">
                        My Templates
                    </div>
                    <div className="grid grid-cols-4 gap-4 p-4">
                        {props.userTemplates && props.userTemplates.map((template, index) => (
                            <TemplateTile name={template.name} key={index} index={index} />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="w-full flex">
                    <AddTemplate onCancel={cancelAddTemplate} />
                </div>
            )}
        </div>
    )
};