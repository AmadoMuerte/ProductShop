import React, {useState} from 'react';
import './CategorySelect.css'
import {useAppDispatch, useAppSelector} from "../../App/hooks";
import {searchByCategory} from "../../../slices/productsSlice";

function CategorySelect() {
    const dispatch = useAppDispatch()
    const productsData = useAppSelector(state => state.productList.productsData)
    const [value, setValue] = useState('none')

    let options: JSX.Element[] = []

    const handleChange = (name: string) => {
        setValue(name)
        dispatch(searchByCategory(value))
    }

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


    return (
        <div className='categorySelect'>
            <p>Category</p>
            <select
                className='categorySelect__select'
                value={value}
                onChange={(e) => handleChange(e.target.value)}
            >
                <option defaultValue={'none'}>none</option>
                {options}
            </select>
        </div>
    );
}


export default CategorySelect;