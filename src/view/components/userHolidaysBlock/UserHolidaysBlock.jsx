import React from 'react';
import './userHolidaysBlock.scss'


function UserHolidaysBlock(props) {
    let randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);

    return (
        <div className="userholidays__block">
            <div className="userholidays__block-texts">
                <div className="userholidays__block-date"
                     style={{color: randomColor}}>{props.item.day + " " + props.item.month.toLowerCase()}</div>
                <div className="userholidays__block-name">{props.item.name}</div>
            </div>
        </div>
    );
}

export default UserHolidaysBlock;