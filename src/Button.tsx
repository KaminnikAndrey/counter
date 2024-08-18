import React, {ButtonHTMLAttributes} from 'react';

type ButtonPropsType = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({className, title, onClick, disabled} :ButtonPropsType) => {
    return (
        <button className={className} onClick={onClick} disabled={disabled}>{title}</button>
    );
};