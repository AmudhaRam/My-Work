import React, { Component } from 'react';
class Training extends Component {

    constructor() {
        super();
        this.state = {
            details: [],
            topic: "",
            trainingMode: "",
            batch: "",
            timing: "",
            btnDisabled: true
        }
    }

    saveitem = () => {
        let newitem = {
            topic: this.state.topic,
            trainingMode: this.state.trainingMode,
            batch: this.state.batch,
            timing: this.state.timing
        };
        this.setState({
            details: [...this.state.details, newitem],
            topic: "",
            trainingMode: "",
            batch: "",
            timing: "",
            btnDisabled: true,

        })
    }

    deleteItem = (index) => {
        this.state.details.splice(index, 1);
        this.setState(
            {
                details: this.state.details,
            }
        )
    }

    componentDidUpdate() {
        if (this.state.topic !== "" && this.state.trainingMode !== "" && this.state.batch !== "" && this.state.timing !== "") {
            if (this.state.btnDisabled) {
                this.setState({ btnDisabled: false })
            }
        }
        console.log("componentDidUpdate:Training.js")
    }


    render() {
        return (
            <div className="container mt-4">
                <div className="row m-2">
                    <div className="col-lg-3 pt-5 text-danger">
                        <div>
                            <label>Training Topic<sub className="text-muted p-3">Reactjs\Angular.</sub></label>
                            <input type="text" className="form-control" value={this.state.topic} onChange={(obj) => this.setState({topic: obj.target.value})}></input>
                        </div>
                        <div>
                            <label>Mode of Training<sub className="text-muted p-3">Online\Offline.</sub></label>
                            <input type="text" className="form-control" value={this.state.trainingMode} onChange={(obj) => this.setState({trainingMode: obj.target.value})}></input>
                        </div>
                        <div>
                            <label>Batch<sub className="text-muted p-3">Weekday\Weekend.</sub></label>
                            <input type="text" className="form-control" value={this.state.batch} onChange={(obj) => this.setState({batch: obj.target.value})}></input>
                        </div>
                        <div>
                            <label>Timing<sub className="text-muted p-3">Duration any1 hr in 9am-6pm </sub></label>
                            <input type="text" className="form-control" value={this.state.timing} onChange={(obj) => this.setState({timing: obj.target.value})}></input>
                        </div>
                        <div>
                            <button disabled={this.state.btnDisabled} className="btn btn-primary" onClick={this.saveitem}>Save Item</button>
                        </div>
                    </div>

                    <div className="col-lg-9 pt-5">
                        <h3> Training Details</h3>
                        <table className="table table-bordered table-sm">
                            <thead>
                                <tr className="bg-light text-danger">
                                    <th>Topic</th>
                                    <th>Mode</th>
                                    <th>Batch</th>
                                    <th>Timing</th>
                                    <th>Action</th>
                                </tr>

                            </thead>
                            <tbody>
                                {
                                    this.state.details.map((item, index) => {
                                        return (
                                            <tr key="index">
                                                <td>{item.topic}</td>
                                                <td>{item.trainingMode}</td>
                                                <td>{item.batch}</td>
                                                <td>{item.timing}</td>
                                                <td><button className="btn btn-danger btn-sm" onClick={this.deleteItem.bind(this, index)}>Delete</button></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default Training;