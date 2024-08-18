import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {v1} from 'uuid';
import {Button} from "./Button";
import {Control} from "./Сontrol";
import {Scoreboard} from "./Scoreboard";

function App() {
    const [minValue, setMinValue] = React.useState(0)
    const [maxValue, setMaxValue] = React.useState(0)

    useEffect(() => {
        setMinValue(Number(localStorage.getItem('minValue')))
        setMaxValue(Number(localStorage.getItem('maxValue')))
    }, [])

    const setLocalStorage = () => {
        localStorage.setItem('minValue', String(minValue))
        localStorage.setItem('maxValue', String(maxValue))
    }

    const maxValueOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.currentTarget.value))
    }


    const minValueOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(Number(e.currentTarget.value))
    }

    const minValueCheck = minValue >= 0
    const maxValueCheck = maxValue > minValue
    const correctValueCheck = minValueCheck && maxValueCheck

    // логика в App, потому что correctValueCheck надо передать в Scoreboard,если бы в localStage обновляли значение minValue и maxValue без кнопки set,
    // то логика была бы в Control
    return <div className="App">
        <div className="Center">
            <Control setLocalStorage={setLocalStorage} maxValueOnChangeHandler={maxValueOnChangeHandler} minValueOnChangeHandler={minValueOnChangeHandler}
                     minValueCheck={minValueCheck} maxValueCheck={maxValueCheck} minValue={minValue} maxValue={maxValue}/>
            <Scoreboard correctValueCheck={correctValueCheck}/>
        </div>
    </div>;
}

export default App;
