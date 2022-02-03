import React from 'react';
import './style.css';
export default class DashedLabelData extends React.Component {
    render() {
        let { labelInfo } = this.props;
        return (
            <div className='label-container'>
                <p className='label-underlined'>{labelInfo.label}</p>
                <p className='sub-label'>{labelInfo.subLabel} </p>
                {labelInfo.dataRows.map((data, index) => {
                    return (
                        <p className={data.size === 'S' ? 'label-data-small' : 'label-data-large'} key={index}> {data.title}</p>
                    )
                })}
            </div>
        )
    }
}