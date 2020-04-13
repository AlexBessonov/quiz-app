import React from 'react'
import classes from './Select.module.css'

const Select = props => {
    const htmlFor = `${props.label}-${Math.random()}`

    return (
        <div className={classes.Select}>
            <label htmlFor=""></label>
            <select></select>
        </div>
    )
}

export default Select