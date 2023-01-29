import './CategorySelect.css'
import {useAppDispatch, useAppSelector} from "../../App/hooks";
import {Dispatch, SetStateAction} from "react";

interface IProps {
    category: string
    setCategory: Dispatch<SetStateAction<string>>
}

function CategorySelect(props: IProps) {
    const dispatch = useAppDispatch()
    const productsData = useAppSelector(state => state.productList.productsData)

    let options: JSX.Element[] = []

    const createOptions = () => {
        let allCategory:string[] = []
        for(let i = 0; i < productsData.length; i++) {
            if (!allCategory.includes(productsData[i].category)) {
                allCategory.push(productsData[i].category)
                options.push(
                    <option
                        key={productsData[i].id}
                        value={productsData[i].category}
                    >
                        {productsData[i].category}
                    </option>)
            }
        }
    }

    createOptions()

    let handleChange = (name: string) => {
        props.setCategory(name)
    }

    return (
        <div className='categorySelect'>
            <p>Category</p>
            <select
                className='categorySelect__select'
                value={props.category}
                onChange={(e) => handleChange(e.target.value)}
            >
                <option defaultValue={''}>none</option>
                {options}
            </select>
        </div>
    );
}


export default CategorySelect;