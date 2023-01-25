import React from 'react';
import './Rating.css'

// @ts-ignore
import   heart from '../../icons/heart.svg'

function Rating(props: {rate: number}) {

    let rating: JSX.Element[] = []
    let createRate = () => {
        for(let i = 0; i < Math.floor(props.rate); i++) {
            rating.push(
                <div className={'icon'} key={i}>
                    <img src={heart} alt="heart" />
                </div>
            )
        }
        return rating
    }

    return (
        <div className={'rating'}>
            {createRate()}
        </div>
    );
}

export default Rating;