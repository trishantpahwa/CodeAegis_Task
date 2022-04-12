import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddQuestionnaireView from './addquestionnaire.view';
import { TemplateActions } from '../../../../actions';

export default function AddQuestionnaireContainer(props) {
    const dispatch = useDispatch();

    const categoriesRef = useRef(null);

    const [selectingCategory, setSelectingCategory] = useState(false);
    const [typeQuestions, setTypeQuestions] = useState([]);
    const [formErrors, setFormErrors] = useState([]);
    const [question, setQuestion] = useState({
        name: "",
        question: [],
        template_id: props.templateID,
    });

    const categories = useSelector((state) => !!state && !!state.template && !!state.template.templates && !!state.template.templates.categories && state.template.templates.categories);
    const questionnaires = useSelector((state) => !!state && !!state.template && !!state.template.templates && !!state.template.templates.questionnaires && !!state.template.templates.questionnaires[props.templateID] && state.template.templates.questionnaires[props.templateID]) || [];

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

    const checkErrors = () => {
        if (question.name === "" && !formErrors.includes("name cannot be empty")) setFormErrors((_formErrors => [..._formErrors, "name cannot be empty"]));
        else setFormErrors(_formErrors => [..._formErrors.filter(f => f !== "name cannot be empty")]);
        question.question.map((q) => {
            ['question_value', 'id_val', 'helper_value'].map(_key => {
                if (q[_key] === '' && !formErrors.includes(_key + " cannot be empty")) setFormErrors((_formErrors => [..._formErrors, _key + " cannot be empty"]))
                else setFormErrors(_formErrors => [..._formErrors.filter(f => f !== _key + " cannot be empty")]);
            });
        });
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
            _id: _question._id
        });
        setTypeQuestions(_question.question);
    }

    const onSave = () => {
        checkErrors();
        if (formErrors.length === 0 && question.name !== '' && question.question.filter(_q => {
            var flag = false;
            ['question_value', 'helper_value', 'id_val'].map(_k => {
                if (_q[_k] == '') flag = true;
            });
            return flag;
        }).length === 0) {
            dispatch(TemplateActions.saveQuestionnaire(question));
            dispatch(TemplateActions.getQuestionnaireFromTemplate(props.templateID));
        }
    }

    const addSection = () => {
        setQuestion({
            name: "",
            question: [],
            template_id: props.templateID,
        });
        setTypeQuestions([]);
    }

    useEffect(() => {
        dispatch(TemplateActions.getQuestionnaireCategories());
        dispatch(TemplateActions.getQuestionnaireFromTemplate(props.templateID));
    }, []);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, false);
        return () => {
            document.removeEventListener("click", handleClickOutside, false);
        };
    }, []);

    const handleClickOutside = event => {
        if (categoriesRef.current && event.target.innerHTML.trim() != '+ Select By Categories' && !categoriesRef.current.contains(event.target)) {
            setSelectingCategory(false);
        }
    };

    return (
        <div>
            <AddQuestionnaireView
                onSave={onSave}
                onDelete={props.onDelete}
                onSelectCategory={onSelectCategory}
                selectingCategory={selectingCategory}
                categories={categories}
                selectTypeQuestionsCategory={selectTypeQuestionsCategory}
                typeQuestions={typeQuestions}
                questionnaires={questionnaires}
                selectQuestion={selectQuestion}
                question={question}
                handleQuestionChange={handleQuestionChange}
                addSection={addSection}
                categoriesRef={categoriesRef}
            />
        </div>
    )
}