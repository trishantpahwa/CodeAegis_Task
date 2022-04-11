import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TemplateActions } from "../../../../actions";
import EditQuestionnaireView from "./editquestionnaire.view";

export default function EditQuestionnaireConatainer(props) {

    const dispatch = useDispatch();

    const categories = useSelector((state) => !!state && !!state.template && !!state.template.templates && !!state.template.templates.categories && state.template.templates.categories);

    const [selectingCategory, setSelectingCategory] = useState(false);
    const [typeQuestions, setTypeQuestions] = useState([]);

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
        <div className="w-full">
            <EditQuestionnaireView
                cancelEditQuestionnaire={props.cancelEditQuestionnaire}
                onSelectCategory={onSelectCategory}
                selectingCategory={selectingCategory}
                categories={categories}
                selectTypeQuestionsCategory={selectTypeQuestionsCategory}
                typeQuestions={typeQuestions}
            />
        </div>
    )
}