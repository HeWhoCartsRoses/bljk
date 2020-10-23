import React from 'react';
const Hand = props => {
    console.log(props)
    return (
        <div className="shopping-list">
            {props.card.map((item, i) => (
                <div key={'Hand' + i}>
                    <p>{item}</p>
                </div >
            ))}
        </div>

    );
};
export default Hand;