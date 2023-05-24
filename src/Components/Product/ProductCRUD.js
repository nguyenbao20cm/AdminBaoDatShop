import * as React from 'react';
import { variable } from '../../Variable';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Axios from "axios"

class CRUDProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ProductType: [],
            modelTitle: "",
            Name: "",
            id: 0,
            currentPage: 1,
            sku: "",
            Description: "",
            price: 0,
            stock: 0,
            productTypeId: "",
            image: "",
            Iimage: "",
        }
    }
    refreshList() {
        fetch(variable.API_URL + "Products/GetAllProduct")
            .then(response => response.json())
            .then(data => {
                this.setState({ ProductType: data });
            })
    }
    componentDidMount() {
        this.refreshList();
    }
    ChangeProdcutTypeName = (e) => {
        this.setState({ Name: e.target.value });
    }
    ChangeProdcutSku = (e) => {
        this.setState({ sku: e.target.value });
    }
    ChangeProdcutDescription = (e) => {
        this.setState({ Description: e.target.value });
    }
    ChangeProdcutPrice = (e) => {
        this.setState({ price: e.target.value });
    }
    ChangeProdcutStock = (e) => {
        this.setState({ stock: e.target.value });
    }
    ChangeProdcutProductTypeId = (e) => {
        this.setState({ productTypeId: e.target.value });
    }
    ChangeProdcutImage = (e) => {

        this.setState({ image: e.target.files[0].name, Iimage: e.target.files[0] });

    }

    CreateClick() {
        if (this.state.image == "") {
            alert("Chua Nhap Image");
        } else {
            const formData = new FormData()
            var imagelName = this.state.sku + ".jpg"
            console.log(imagelName)
            console.log(this.state.Iimage.name)
            formData.append("model", this.state.Iimage, imagelName)
            fetch(variable.API_URL + "Products/CreateProduct", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body:
                    JSON.stringify({
                        sku: this.state.sku,
                        name: this.state.Name,
                        description: this.state.Description,
                        price: this.state.price,
                        stock: this.state.stock,
                        productTypeId: this.state.productTypeId,
                        image: imagelName
                    })
            }).then(res => res.json())
                .then(result => {
                    if (result === true) {
                        fetch(variable.API_URL + "Products/CreateImageProduct", {
                            method: "POST",
                            body: formData
                        }).then(res => res.json())
                    }
                    alert(result);
                    this.refreshList();
                },
                    (error) => {
                        console.error(error)
                        alert("Failed");
                    });
            this.refreshList();
            window.location.reload(false);
        }


    }
    // CreateClick() {
    //     const formData = new FormData()
    //     formData.append("sku", JSON.stringify(this.state.sku ))
    //     formData.append("name", JSON.stringify(this.state.Name ))
    //     formData.append("description", JSON.stringify(  this.state.Description ))
    //     formData.append("price", JSON.stringify(  this.state.price ))
    //     formData.append("stock", JSON.stringify( this.state.stock ))
    //     formData.append("productTypeId", JSON.stringify(

    //              this.state.productTypeId
    //     ))
    //     formData.append("image", this.state.Iimage)

    //         fetch(variable.API_URL + "Products/CreateProduct", {
    //             method: "POST",
    //             headers: {
    //                 "Accept": "application/json",
    //                 "Content-Type": "application/json"
    //             },
    //             body: formData

    //         }).then(res => res.json())
    //             .then(result => {
    //             alert(result);
    //             this.refreshList();
    //         }, (error) => {
    //             alert("Failed");
    //         }
    //         )
    //  }


    UpdateClick(id) {
        fetch(variable.API_URL + "ProductTypes/UpdateProductType/" + id, {
            method: "PUT",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: this.state.Name })
        }).then(res => res.json())
            .then(result => {
                alert(result);
                this.refreshList();
            }, (error) => {
                alert("Failed");
            }
            )
    }
    DeleteClick(id) {
        if (window.confirm('Are you sure?')) {
            fetch(variable.API_URL + "ProductTypes/DeleteProductType/" + id, {
                method: "PUT",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
            }).then(res => res.json())
                .then(result => {
                    alert(result);
                    this.refreshList();
                }, (error) => {
                    alert("Failed");
                }
                )
        }
    }

    addClick() {
        this.setState({
            modelTitle: "Add Product",
            id: 0,
            Name: "",
            sku: "",
            Description: "",
            price: 0,
            stock: 0,
            productTypeId: "",
            image: "",
        });
    }
    EditClick(dep) {
        this.setState({
            modelTitle: "Edit Product",
            id: dep.id,
            Name: dep.name,
            sku: dep.sku,
            Description: dep.description,
            price: dep.price,
            stock: dep.stock,
            productTypeId: dep.productTypeId,
            image: dep.image,
        });
    }
    NextPage(id, npage) {
        console.log(npage)
        if (id !== npage) {
            this.setState({
                currentPage: this.state.currentPage + 1
            });
        }
    }
    PrePage(id) {
        if (id !== 1) {
            this.setState({
                currentPage: this.state.currentPage - 1
            });
        }
    }
    changePage(id) {

        this.setState({
            currentPage: id
        });
    }

    render() {

        const {
            ProductType,
            modelTitle,
            id,
            Name,
            currentPage,
            sku,
            Description,
            price,
            stock,
            productTypeId,
            image
        } = this.state;
        const recordsPerPage = 5;
        const lastIndex = currentPage * recordsPerPage;
        const firstIndex = lastIndex - recordsPerPage;
        const a = ProductType.slice(firstIndex, lastIndex);
        const npage = Math.ceil(ProductType.length / recordsPerPage)
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
                        ProductTypes List
                    </Typography>
                    <button type='button' className='btn btn-primary m-2 float-end' data-bs-toggle='modal' data-bs-target='#exampleModal'
                        onClick={() => this.addClick()}>
                        Add ProductType
                    </button>
                    <table id="example" className='table table-striped'>
                        <thead>
                            <tr>

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
                                        <img style={{ width: 50 }} src={require('../../Assets/images' + dep.image)} />
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
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
                        <div className="modal-dialog modal-lg modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className='modal-title'>{modelTitle}</h5>
                                    <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'>
                                    </button>
                                </div>
                                <div className='modal-body'>
                                    <div className='input-group mb-3'>
                                        <span className='input-group-text'>
                                            Name
                                        </span>
                                        <input type='text' className='form-control' value={Name}
                                            onChange={(e) => this.ChangeProdcutTypeName(e)} />
                                        <span className='input-group-text'>
                                            Sku
                                        </span>
                                        <input type='text' className='form-control' value={sku}
                                            onChange={(e) => this.ChangeProdcutSku(e)} />
                                    </div>

                                    <div className='input-group mb-3'>
                                        <span className='input-group-text'>
                                            Description
                                        </span>
                                        <input type='text' className='form-control' value={Description}
                                            onChange={(e) => this.ChangeProdcutDescription(e)} />
                                    </div>
                                    <div className='input-group mb-3'>
                                        <span className='input-group-text'>
                                            Price
                                        </span>
                                        <input type='text' className='form-control' value={price}
                                            onChange={(e) => this.ChangeProdcutPrice(e)} />
                                        <span className='input-group-text'>
                                            Stock
                                        </span>
                                        <input type='text' className='form-control' value={stock}
                                            onChange={(e) => this.ChangeProdcutStock(e)} />
                                    </div>

                                    <div className='input-group mb-3'>
                                        <span className='input-group-text'>
                                            Image
                                        </span>
                                        <input type='text' className='form-control' value={image}
                                            onChange={(e) => this.ChangeProdcutImage(e)} />
                                        <input type="file" id="img" name="img" accept="image/*" onChange={(e) => this.ChangeProdcutImage(e)}></input>
                                    </div>
                                    <div className='input-group mb-3'>
                                        <span className='input-group-text'>
                                            ProductTypeId
                                        </span>
                                        <input type='text' className='form-control' value={productTypeId}
                                            onChange={(e) => this.ChangeProdcutProductTypeId(e)} />
                                    </div>
                                    {id == 0 ?// eslint-disable-next-line
                                        <button type='button' className='btn btn-primary float-start' onClick={() => this.CreateClick()}>Create</button> : null
                                    }
                                    {id != 0 ?// eslint-disable-next-line
                                        <button type='button' className='btn btn-primary float-start' onClick={() => this.UpdateClick(this.state.id)}>Update</button> : null
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav>
                        <ul className='pagination'>
                            <li className='page-item'>
                                <a href='#' className='page-link' onClick={() => this.PrePage(this.state.currentPage)}>Prev</a>
                            </li>
                            {
                                numbers.map((n, i) => (
                                    <li className={`page-item  ${currentPage === n ? 'active' : ''}`} key={i}>
                                        <a href='#' className='page-link'
                                            onClick={() => this.changePage(n)}>{n}</a>
                                    </li>
                                ))
                            }
                            <li className='page-item'>
                                <a href='#' className='page-link' onClick={() => this.NextPage(this.state.currentPage, npage)}>Next</a>
                            </li>

                        </ul>
                    </nav>
                </div>

            </Paper>
        )
    }
}



export default CRUDProduct;

