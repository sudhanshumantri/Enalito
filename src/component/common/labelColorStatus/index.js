import React from 'react';
import './style.css';

let colorCodeMapping = {
    1: '#F65252',
    2: '#72C0FD',
    3: '#FFC107',
    4: '#74C728',
    5: '#1D9338'
}

export default class StatusLabelData extends React.Component {
    render() {
        let { value } = this.props;
        return (
            <div>
                <div>{value}</div>
                <div className='color-indicator' style={{ 'borderColor': colorCodeMapping[value] }}></div>
            </div>
        )
    }
}