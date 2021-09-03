import React, { Component } from 'react';
import BookCounter from './BookCounter'

class Resource extends Component {
    constructor() {
        super();
        this.state = {
            booklist: [],
        }
    }

    getBookDetails = () => {
        fetch("books.json")
            .then(response => response.json())
            .then(result => this.setState({ booklist: result }))
    }
    booklist
    componentDidMount() {
        this.getBookDetails();
    }

    render() {
        return (
            <div className="container mt-5 ">
                <div className="row mt-3">
                    <div className="col-lg-12">
                        {/* <p></p> */}
                        <h3 className="text-danger"> Resource </h3>
                        <table className="table table-bordered">
                            {/* <thead>
                                <tr rowspan="2">
                                    <th rowspan="2"></th>
                                    <th className="text-center text-danger"> Book Name </th>
                                    <th className="text-center text-danger"> Author</th>
                                </tr>
                            </thead> */}
                            <tbody>
                                {
                                    this.state.booklist.map((book, index) => {
                                        return (
                                            <>
                                                <tr>
                                                    <td  rowSpan="3"><img src={book.image} alt="Book"></img></td>
                                                    <td className="lead text-center text-dark ">Book Name:<h5>{book.name}</h5></td>

                                                </tr>
                                                <tr>
                                                    <td  className="lead text-center text-dark">Author:<h5>{book.author}</h5></td>
                                                </tr>
                                                <tr>
                                                    <td  className="lead text-center"><BookCounter/></td>
                                                </tr>
                                            </>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Resource;
