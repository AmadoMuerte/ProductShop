import React from 'react';
import './Rating.css'

// @ts-ignore
import   heart from '../../icons/heart.svg'
// @ts-ignore
import   heartMini from '../../icons/heartMini.svg'

function Rating(props: {rate: number}) {

    let rating: JSX.Element[] = []
    let createRate = () => {
        for(let i: number = 0; i < Math.floor(props.rate); i++) {
            rating.push(
                <div className={'icon'} key={i}>
                    <img src={heart} alt="heart" />
                </div>
            )
        }
        if (1 % props.rate !== 0) {
            rating.push(
                <div className={'icon'} key={6}>
                    <img src={heartMini} alt="heart"/>
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