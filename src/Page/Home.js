import React from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SideNav from "../Components/SideNav"
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Navbar from "../Components/Navbar"
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import "../Assets/Dash.css"
import Accordion from "../Components/Accordion"
export default function Home() {
    return (
        <>
            <div className="bgrcolor">
                <Navbar />
                <Box height={70}>
                    <Box sx={{ display: 'flex' }}>
                        <SideNav />
                        <Box component="main" sx={{ flexGrow: 1, p: 11 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={8}>
                                    <Stack spacing={2} direction='row'>
                                        <Card sx={{ minWidth: 49 + '%', height: 150 }} className='grandient'>
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                                                    $50 000
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1c1" }}>
                                                    Total
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                        <Card sx={{ minWidth: 49 + '%', height: 150 }} className='grandientlight'>
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#ffffff" }}>
                                                    $50 000
                                                </Typography>
                                                <Typography gutterBottom variant="body2" component="div" sx={{ color: "#ccd1c1" }}>
                                                    Total
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </Stack>
                                </Grid>
                                <Grid item xs={4}>
                                    <Stack spacing={2} >
                                        <Card sx={{ maxWidth: 345 }} className='grandientlight'>

                                            <div className='paddingall'>
                                                <span style={{ fontWeight: 600 }}>$203K</span>
                                                <br></br>
                                                <span style={{ fontSize: 14 }}>Total</span>
                                            </div>
                                        </Card>
                                        <Card sx={{ maxWidth: 345 }}>

                                            <div className='paddingall'>
                                                <span style={{ fontWeight: 600 }}>$203K</span>
                                                <br></br>
                                                <span style={{ fontSize: 14 }}>Total</span>
                                            </div>
                                        </Card>
                                    </Stack>
                                </Grid>
                            </Grid>
                            <Box height={20} />
                            <Grid container spacing={2}>
                                <Grid item xs={8}>
                                    <Card sx={{ height: 60 + 'vh' }}>
                                        <CardContent>

                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={4}>
                                    <Card sx={{ height: 60 + 'vh' }}>
                                        <CardContent>
                                            <span style={{ fontWeight: 600 }}>
                                                Popular Product
                                            </span>
                                            <Accordion />
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>

            </div>

        </>
    )
}
