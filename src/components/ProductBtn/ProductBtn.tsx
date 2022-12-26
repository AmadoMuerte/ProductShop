import React from 'react';
import './ProductBtn.css'

function ProductBtn(props: {title: string, click(): undefined }) {
    return (
        <button className="btn" onClick={props.click}>
            {props.title}
        </button>
    );
}

export default ProductBtn;