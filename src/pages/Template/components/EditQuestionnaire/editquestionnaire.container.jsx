import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TemplateActions } from "../../../../actions";
import EditQuestionnaireView from "./editquestionnaire.view";

export default function EditQuestionnaireConatainer(props) {

    const dispatch = useDispatch();

    const categories = useSelector((state) => !!state && !!state.template && !!state.template.templates && !!state.template.templates.categories && state.template.templates.categories);
    const questionnaires = useSelector((state) => !!state && !!state.template && !!state.template.templates && !!state.template.templates.questionnaires && !!state.template.templates.questionnaires[props.template._id] && state.template.templates.questionnaires[props.template._id]) || [];

    const [selectingCategory, setSelectingCategory] = useState(false);
    const [typeQuestions, setTypeQuestions] = useState([]);
    const [question, setQuestion] = useState({
        name: "",
        question: [],
        template_id: props.template._id,
        section_id: ""
    });

    const handleQuestionChange = (e) => {
        const { name, value } = { name: e.target.name, value: e.target.value };
        if (['question_value', 'id_val', 'helper_value', 'isRequired'].includes(name.slice(0, -2))) {
            const _index = name.slice(-1);
            setQuestion(_question => {
                _question.question[parseInt(_index)][name.slice(0, -2)] = value;
                return { ..._question };
            })
        } else {
            setQuestion(_question => {
                return { ..._question, [name]: value };
            });
        }
    }


    const onSelectCategory = () => {
        setSelectingCategory(_selectingCategory => !_selectingCategory);
    }

    const selectTypeQuestionsCategory = (category) => {
        const _c = categories.filter(c => c._id === category._id)[0];
        setTypeQuestions(_typeQuestions => [..._typeQuestions, { name: _c.name, category_id: category._id, id_val: '', isRequired: false, question_value: '' }])
        setQuestion(_question => {
            return { ..._question, question: [..._question.question, { name: _c.name, category_id: category._id, id_val: '', isRequired: false, question_value: '' }] };
        });
    }

    const selectQuestion = (_question) => {
        _question.question.map(_q => {
            const _c = categories.filter(c => c._id === _q.category_id)[0];
            _q.name = _c.name
        })
        setQuestion({
            name: _question.name,
            question: _question.question,
            template_id: _question.template_id,
            section_id: _question._id
        });
        setTypeQuestions(_question.question);
    }

    const onSave = async () => {
        if (question.section_id) await dispatch(TemplateActions.updateQuestionnaire(question));
        else await dispatch(TemplateActions.saveQuestionnaire(question));
        window.location = '/template';
    }

    useEffect(() => {
        dispatch(TemplateActions.getQuestionnaireCategories());
        dispatch(TemplateActions.getQuestionnaireFromTemplate(props.template._id));
    }, []);

    return (
        <div className="w-full">
            <EditQuestionnaireView
                cancelEditQuestionnaire={props.cancelEditQuestionnaire}
                onSelectCategory={onSelectCategory}
                selectingCategory={selectingCategory}
                categories={categories}
                selectTypeQuestionsCategory={selectTypeQuestionsCategory}
                typeQuestions={typeQuestions}
                questionnaires={questionnaires}
                selectQuestion={selectQuestion}
                question={question}
                onSave={onSave}
                handleQuestionChange={handleQuestionChange}
            />
        </div>
    )
}