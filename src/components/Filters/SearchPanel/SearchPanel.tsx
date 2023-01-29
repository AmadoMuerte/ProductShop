
import './SearchPanel.css'
import {useAppDispatch} from "../../App/hooks";
import {searchByName} from "../../../slices/productsSlice";
import {useState} from "react";

const SearchPanel = () => {
    const dispatch = useAppDispatch()
    const [searchText, setSearchText] = useState<string>('')

    const changeProductInState = () => {
        setSearchText(searchText)
        if (searchText) {
            dispatch(searchByName(searchText.toLowerCase()))
        } else {
            dispatch(searchByName(''))
        }
    }

    return (
        <div className='searchPanel'>
            <input
                type="text"
                className="searchPanel__item"
                placeholder='Type product name'
                value = {searchText}
                onChange= {e => setSearchText(e.target.value)}
            />
            <button className="searchPanel__button" onClick={changeProductInState}>
                Search
            </button>
        </div>
    )
};

export default SearchPanel;