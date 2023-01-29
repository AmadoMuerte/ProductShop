
import './SearchPanel.css'
import {Dispatch, SetStateAction} from "react";

interface IProps {
    productName: string
    setProductName: Dispatch<SetStateAction<string>>
}

const SearchPanel = (props: IProps) => {
    return (
        <div className='searchPanel'>
            <input
                type="text"
                className="searchPanel__item"
                placeholder='Type product name'
                value = {props.productName}
                onChange= {e => props.setProductName(e.target.value)}
            />
        </div>
    )
};

export default SearchPanel;