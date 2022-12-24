import React from 'react';
import './Skeleton.css'

function Skeleton(props: {width: string, height: string}) {
    return (
        <div className={'product-skeleton'} style={{ width: props.width, height: props.height}}>
            <div className={'skeleton'}></div>
        </div>
    )
}

export default Skeleton;