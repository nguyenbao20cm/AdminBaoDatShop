import React from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SideNav from "../Components/SideNav"
import Typography from '@mui/material/Typography';
import Navbar from "../Components/Navbar"
import List from './Setting/List';
export default function Setting() {
    return (
        <>
            <div className="bgrcolor">
                <Navbar />
                <Box height={70}/>
                <Box sx={{ display: 'flex' }}>
                    <SideNav />
                    <Box
                        component="main"
                        sx={{ flexGrow: 1, p: 3 }}
                    >
                        <List />
                    </Box>
                </Box>
             </div>
          
        </>
    )
}
