import React from 'react'
import Navbar from '../../Components/Navbar'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import SideNav from "../../Components/SideNav"
import Typography from '@mui/material/Typography';
import ProductTypeCRUD from "../../Product/ProductTypeCRUD"
import ProductCRUD from '../../Product/ProductCRUD';
export default function ProductList() {
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
                       <ProductCRUD/>
                    </Typography>
                </Box>
            </Box>

        </div>
    )
}
