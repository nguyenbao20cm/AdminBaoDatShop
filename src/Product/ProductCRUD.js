import React from 'react';
import { variable } from '../Variable';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import "../Assets/css/shop.css"
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
function ProductCRUD(props) {


    var location = useLocation();
    var id = location.state;

    var [records, setRecords] = useState([])
    useEffect(() => {
        fetch(variable.API_URL + "Products/GetAllProduct")
            .then(response => response.json())
            .then(data => setRecords(data)).catch(err => console.log(err))
    }, [id])

    const [currentPage, setcurrentPage] = useState(1);
    const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;  
    const a = records.slice(firstIndex, lastIndex);
    const npage = Math.ceil(records.length / recordsPerPage)
    const numbers = Array.from({ length: npage }, (_, i) => i + 1);
    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>

            <div>
                <Typography
                    gutterBottom
                    variant="h3"
                    component="div"
                    sx={{ padding: "20px" }}
                >
                    Products List
                </Typography>
                <button type='button' className='btn btn-primary m-2 float-end' data-bs-toggle='modal' data-bs-target='#exampleModal'
                    onClick={() => this.addClick()}>
                    Add Product
                </button>
                <table id="example" className='table table-striped'>
                    <thead>
                        <tr>
                            <th>
                                Id
                            </th>
                            <th>
                                Name
                            </th>
                            <th>
                                Sku
                            </th>
                            <th>
                                Description
                            </th>
                            <th>
                                Price
                            </th>
                            <th>
                                Stock
                            </th>
                            <th>
                                Image
                            </th>
                            <th>
                                ProductTypeId
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {a.map(dep =>
                            <tr key={dep.id}>
                                <td>
                                    {dep.id}
                                </td>
                                <td>
                                    {dep.name}
                                </td>
                                <td>
                                    {dep.sku}
                                </td>
                                <td>
                                    {dep.description}
                                </td>
                                <td>
                                    {dep.price}
                                </td>
                                <td>
                                    {dep.stock}
                                </td>
                                <td>
                                    <img style={{ width: 50 }} src={require('../Assets/images/' + dep.image)} />
                                </td>
                                <td>
                                    {dep.productTypeId}
                                </td>
                                <td>
                                    <button type='button' className='btn btn-light mr-1' data-bs-toggle='modal' data-bs-target='#exampleModal'
                                        onClick={() => this.EditClick(dep)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                        </svg>
                                    </button>
                                </td>
                                <td>
                                    <button type='button' className='btn btn-light mr-1' onClick={() => this.DeleteClick(dep.id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <nav>
                    <ul className='pagination'>
                        <li className='page-item'>
                            <a href='#' className='page-link' onClick={PrePage}>Prev</a>
                        </li>
                        {
                            numbers.map((n, i) => (
                                <li className={`page-item  ${currentPage === n ? 'active' : ''}`} key={i}>
                                    <a href='#' className='page-link'
                                        onClick={() => changePage(n)}>{n}</a>
                                </li>
                            ))
                        }
                        <li className='page-item'>
                            <a href='#' className='page-link' onClick={NextPage}>Next</a>
                        </li>

                    </ul>
                </nav>

            </div>

        </Paper>
    )
    function changePage(id) {
        setcurrentPage(id)
    }
    function NextPage() {
        if (currentPage !== npage) {
            setcurrentPage(currentPage + 1)
        }
    }
    function PrePage() {
        if (currentPage !== 1) {
            setcurrentPage(currentPage - 1)
        }
    }
}
export default ProductCRUD;
