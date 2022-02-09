import React from 'react';
import '../Segments/segments.css'
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Card } from '@mui/material';
import { Box, display } from '@mui/system';
import { CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import {systemGeneratedSegments , customSegments , usedSegments} from '../../component/common/SegmentsData/index';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

export default function Segments() {


  return (<div className='container'>
            <>
            <div className='mainHeader'>
                <h3>All Segments</h3>
                <Stack spacing={2} direction="row" style={{paddingLeft:'30px'}}>
                    <Button variant="contained" className='mainHeaderBtn'>Create New Segment</Button>
                </Stack>

            </div>
            <Grid container>
                <Grid item>
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                    >
                    <InputBase
                        sx={{ ml: 1, flex: 6}}
                        placeholder="Search by segment name"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                  
                    </Paper>
                </Grid>

                    <Paper
                        component="form"
                        style={{marginLeft:'10px'}}
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 100 }}
                    >
                    <InputBase
                        sx={{ sm: 1, flex: 2 }}
                        placeholder="Tags"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                  
                    </Paper>

                    <Paper
                        component="form"
                        style={{marginLeft:'10px'}}
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 150 }}
                    >
                    <InputBase
                        sx={{ sm: 1, flex: 2 }}
                        placeholder="Behaviour"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                  
                    </Paper>
                    <Paper
                        component="form"
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 100 }}
                        style={{marginLeft:'10px'}}
                    >
                    <InputBase
                        sx={{ sm: 1, flex: 2 }}
                        placeholder="KPI"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                  
                    </Paper>

                    <Paper
                        component="form"
                        style={{marginLeft:'10px'}}
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 150 }}
                    >
                    <InputBase
                        sx={{ sm: 1, flex: 2 }}
                        placeholder="Customer-based"
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                  
                    </Paper>




            </Grid>
            <h4>Most Used Segments</h4>
                
                <Grid container>
                    {usedSegments.map((items)=>{
                            return(
                                    <Grid item md={2} style={{margin:'8px'}}>

                                        <Card className="segmentCards" >
                                                            <CardContent>
                                                                    <Typography sx={{ fontSize: 14 }} className="typography" color="#263238" gutterBottom>
                                                                    {items.title}
                                                                    </Typography>
                                                                    <Typography variant="body2" className="typography" style={{fontSize:'small'}} >
                                                                    {items.no_of_customers}
                                                                    <br />
                                                                    {items.revenue}
                                                                    <br/>
                                                                    {items.orders}
                                                                    </Typography>
                                                            </CardContent>
                                        </Card>
                                    </Grid>


                                        )})}
                </Grid>            
                <h4>Custom Segments</h4>
                <Grid container>
                    {customSegments.map((items)=>{
                            return(
                                    <Grid item sm={3} style={{margin:'8px'}}>

                                        <Card className="segmentCards" >
                                                            <CardContent>
                                                                    <Typography sx={{ fontSize: 14 }} className="typography" gutterBottom>
                                                                    {items.title}
                                                                    </Typography>
                                                                    <Typography variant="body2" className="typography" style={{fontSize:'small'}} >
                                                                    {items.no_of_customers}
                                                                    <br />
                                                                    {items.revenue}
                                                                    <br/>
                                                                    {items.orders}
                                                                    </Typography>
                                                            </CardContent>
                                        </Card>
                                    </Grid>
                            )
                            })}
                </Grid>

                <h4>System-generated Segments</h4>
                <Grid container>
                    {systemGeneratedSegments.map((items)=>{
                            return(
                                    <Grid item sm={3} style={{margin:'8px'}}>

                                        <Card className="segmentCards" >
                                                            <CardContent>
                                                                    <Typography sx={{ fontSize: 14 }} className="typography" gutterBottom>
                                                                    {items.title}
                                                                    </Typography>
                                                                    <Typography variant="body2" className="typography" style={{fontSize:'small'}} >
                                                                    {items.no_of_customers}
                                                                    <br />
                                                                    {items.revenue}
                                                                    <br/>
                                                                    {items.orders}
                                                                    </Typography>
                                                            </CardContent>
                                        </Card>
                                    </Grid>
                            )
                            })}
                </Grid>
                   
                            

</>


            
            </div>);
}
