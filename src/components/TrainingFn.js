import React, { useState,useEffect } from 'react';
const TrainingFn = () => {
    const [details, setDetails] = useState([]);
    const [topic, setTopic] = useState("");
    const [trainingMode, setTrainingMode] = useState("");
    const [batch, setBatch] = useState("");
    const [timing, setTiming] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);

    const saveitem = () => {
        let newitem = { 
            "topic": topic, 
            "trainingMode": trainingMode, 
            "batch": batch, 
            "timing": timing 
        };
        setDetails([...details,newitem]);
        setTopic("");
        setTrainingMode("");
        setBatch("");
        setTiming("");
        setBtnDisabled(true);
     }

     const deleteItem = index => {
        details.splice(index, 1);
        setDetails([...details]);
    }

    useEffect(() => {
        if (topic!=="" && trainingMode!=="" && batch!=="" && timing!==""){
            setBtnDisabled(false);
            
        }
        console.log("useEffecte:TrainingFn.js")
    }, [topic,trainingMode,batch,timing]);

    return (
        <div className="container mt-4">
            <div className="row m-2">
                <div className="col-lg-3 pt-5 text-danger">
                    <div>
                        <label>Training Topic<sub className="text-muted p-3">Reactjs\Angular.</sub></label>
                        <input value={topic} type="text" className="form-control" onChange={(obj) => setTopic(obj.target.value)}></input>
                    </div>
                    <div>
                        <label>Mode of Training<sub className="text-muted p-3">Online\Offline.</sub></label>
                        <input value={trainingMode} type="text" className="form-control" onChange={(obj) => setTrainingMode(obj.target.value)}></input>
                    </div>
                    <div>
                        <label>Batch<sub className="text-muted p-3">Weekday\Weekend.</sub></label>
                        <input value={batch} type="text" className="form-control" onChange={(obj) => setBatch(obj.target.value)}></input>
                    </div>
                    <div>
                        <label>Timing<sub className="text-muted p-3">Duration any1 hr in 9am-6pm </sub></label>
                        <input value={timing} type="text" className="form-control" onChange={(obj) => setTiming(obj.target.value)}></input>
                    </div>
                    <div>
                        <button disabled={btnDisabled} className="btn btn-primary" onClick={saveitem}>Save Item</button>
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
                                details.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.topic}</td>
                                            <td>{item.trainingMode}</td>
                                            <td>{item.batch}</td>
                                            <td>{item.timing}</td>
                                            <td><button className="btn btn-danger btn-sm" onClick={()=>deleteItem(index)}>Delete</button></td>
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
export default TrainingFn;