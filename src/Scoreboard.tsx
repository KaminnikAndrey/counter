import React, {useState} from 'react';
import {Button} from "./Button";

type ScoreboardPropsType = {
    correctValueCheck: boolean
}

export const Scoreboard = ({correctValueCheck}: ScoreboardPropsType) => {
    const [value, setValue] = useState(Number(localStorage.getItem("minValue")))

    const incValue = () => {
        if (Number(localStorage.getItem("maxValue")) > value) {
            setValue(value + 1)
        } else {

        }
    }

    const resetValue = () => {
        setValue(Number(localStorage.getItem("minValue")))
    }
    const goodNumberCheck = (Number(localStorage.getItem("maxValue")) > value)
    // хз как двойное условие для кнопки inc
console.log(correctValueCheck)
    return (
        <div className="Scoreboard">
            <div className="Scoreboard-screen">
                {correctValueCheck ?
                    <span
                        className={goodNumberCheck ? "" : "Scoreboard-screen-value--max"}>{correctValueCheck ? value : "Incorrect value!"}</span>
                    : <span
                        className={"Scoreboard-screen-value--max"}>Incorrect value!</span>
                }

            </div>
            <div className="Scoreboard-buttons">
                {correctValueCheck ?
                    <Button className={'Button'} title={'inc'} onClick={incValue} disabled={!goodNumberCheck}/>
                :
                    <Button className={'Button'} title={'inc'} onClick={incValue} disabled={true}/>
                }

                <Button className={'Button'} title={'reset'} onClick={resetValue} disabled={!correctValueCheck}/>
            </div>
        </div>
    );
};