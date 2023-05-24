import React from 'react'
import Navbar from '../../Components/Navbar'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SideNav from "../../Components/SideNav"
import Typography from '@mui/material/Typography';
import InvoiceCRUD from '../../Components/Invoice/InvoiceCRUD';
export default function InvoiceList() {
    return (
        <div className="bgrcolor">
            <Navbar />
            <Box sx={{ display: 'flex' }}>
                <SideNav />
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3 }}
                >
                    <Toolbar />
                    <Typography paragraph>
                        <InvoiceCRUD />
                    </Typography>
                </Box>
            </Box>

        </div>
    )
}
