import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddQuestionnaireView from './addquestionnaire.view';
import { TemplateActions } from '../../../../actions';

export default function AddQuestionnaireContainer(props) {
    const dispatch = useDispatch();

    const [selectingCategory, setSelectingCategory] = useState(false);
    const [typeQuestions, setTypeQuestions] = useState([]);
    const categories = useSelector((state) => !!state && !!state.template && !!state.template.templates && !!state.template.templates.categories && state.template.templates.categories);

    const onSelectCategory = () => {
        setSelectingCategory(_selectingCategory => !_selectingCategory);
    }


    const selectTypeQuestionsCategory = (category) => {
        setTypeQuestions(_typeQuestions => [..._typeQuestions, category])
    }

    useEffect(() => {
        dispatch(TemplateActions.getQuestionnaireCategories());
    }, []);

    return (
        <div>
            <AddQuestionnaireView
                onSave={props.onSave}
                onDelete={props.onDelete}
                onSelectCategory={onSelectCategory}
                selectingCategory={selectingCategory}
                categories={categories}
                selectTypeQuestionsCategory={selectTypeQuestionsCategory}
                typeQuestions={typeQuestions}
            />
        </div>
    )
}