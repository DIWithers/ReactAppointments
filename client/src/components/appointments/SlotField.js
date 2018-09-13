import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
    return (
        <div>
            <label>{label}</label>
            <select {...input} >
                <option>First, pick a day.</option>
                <option value="1">1PM</option>
                <option value="2">2PM</option>
                <option value="3">3PM</option>
            </select>
            {touched && error}
        </div>
    );
};