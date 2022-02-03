import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import DashedLabelData from '../common/labelData'
import './style.css';
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: '30px',
    minHeight: '337px',
    maxHeight: '338px',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    // paddingTop:'35px',
    textAlign: 'left',
    background: '#FCFCFC',
    boxshadow: '0px 1px 4px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.02), 0px 1px 12px rgba(0, 0, 0, 0.12)',
    borderradius: '4px',
}));
export default class CustomGrid extends React.Component {
    render() {
        let { count, gridInfo } = this.props;
        return (
            <Box sx={{ flexGrow: 1 }}>
                <Grid container className='grid-row-container' spacing={gridInfo.length}>
                    {gridInfo.map((value, index) => {
                        return (
                            <Grid item xs={value.width} className='grid-child-container' key={index}>
                                <h3>{value.title}</h3>
                                <Item className='grid-item-container'>
                                    {value.data.map((labelInfo, j) => {
                                        return (
                                            <DashedLabelData labelInfo={labelInfo} key ={j}/>
                                        )
                                    })}
                                </Item>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        );
    }
}