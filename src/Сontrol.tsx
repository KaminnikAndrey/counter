import React, {ChangeEvent, useEffect} from 'react';
import {Button} from "./Button";

type ControlPropsType = {
    minValue: number
    maxValue: number
    setLocalStorage: () =>void
    maxValueOnChangeHandler: (e:ChangeEvent<HTMLInputElement>) => void
    minValueOnChangeHandler: (e:ChangeEvent<HTMLInputElement>) => void
    minValueCheck:boolean
    maxValueCheck:boolean
}

export const Control = ({minValue, maxValue,setLocalStorage, maxValueOnChangeHandler, minValueOnChangeHandler, minValueCheck, maxValueCheck} : ControlPropsType) => {

    return (
        <div className="Scoreboard">
            <div className="Scoreboard-screen">
                <div className="Scoreboard-screen__item">
                    <p className="Scoreboard-screen__item-text">max value</p>
                    <input className={maxValueCheck ? "Scoreboard-screen__item-input" :
                        "Scoreboard-screen__item-input Scoreboard-screen__item-input--error"}
                           value={maxValue} type={'number'}
                           onChange={(event) => maxValueOnChangeHandler(event)}/>
                </div>
                <div className="Scoreboard-screen__item">
                    <p className="Scoreboard-screen__item-text">start value</p>
                    <input className={minValueCheck ? "Scoreboard-screen__item-input" :
                        "Scoreboard-screen__item-input Scoreboard-screen__item-input--error"}
                           value={minValue} type={'number'}
                           onChange={(event) => minValueOnChangeHandler(event)}/>
                </div>
            </div>
            <div className="Scoreboard-buttons">
                <Button className={'Button'} title={'set'} onClick={setLocalStorage} disabled={!minValueCheck}/>
            </div>
        </div>
    );
};
