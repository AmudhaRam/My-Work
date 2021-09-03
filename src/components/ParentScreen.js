import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Form, FormGroup, Input, Label } from "reactstrap";
const ModalExample = (props) => {


    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [reason, setReason] = React.useState("");

    const handleArchivalSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${reason}`);
    };

    return (
        <div className="container mt-4">
            <div className="row m-2">

                <div>
                    <label>Create Space</label>
                </div>

            </div>
            <div className="mp-4">
                <Button id="archive" color="danger" onClick={toggle}>Archive</Button>
                <Modal  fade={true} centered={true} isOpen={modal} toggle={toggle} backdrop="static">
                    
                        <ModalHeader toggle={toggle}>Duplicate Records - For Archival</ModalHeader>
                        <Form onSubmit={handleArchivalSubmit}>
                        <ModalBody>
                            <FormGroup>
                                <Label for="reason">Reason for Archival</Label>{' '}
                                <Input id="reason" name="reason" onChange={e => setReason(e.target.value)}></Input>
                            </FormGroup>
                            <Button type="submit" color="primary" onClick={toggle}>Archive</Button>{' '}
                            <Button color="secondary" onClick={toggle}>Cancel</Button>
                        </ModalBody>
                    </Form>
                </Modal>
            </div>
        </div>
    );
}

export default ModalExample;