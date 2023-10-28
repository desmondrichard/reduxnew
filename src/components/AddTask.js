import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function AddTask() {
    

    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [dept, setDept] = useState("");
    const [email, setEmail] = useState("");

    const Submit=(e)=>{
        e.preventDefault();
        console.log("submitted");
    }

    return (
        <div>
            <Form method="">
                <Form.Group className="mb-3" controlId="formGroupFName">
                    <Form.Label style={{ fontWeight: "bold" }}>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name" onChange={(event) => setFName(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupLName">
                    <Form.Label style={{ fontWeight: "bold" }}>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Second Name" onChange={(event) => setLName(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupLDepartment">
                    <Form.Label style={{ fontWeight: "bold" }}>Department</Form.Label>
                    <Form.Control type="text" placeholder="Enter Department" onChange={(event) => setDept(event.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label style={{ fontWeight: "bold" }}>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
                </Form.Group>

                <div className='text-end'>
                 <Button variant="success" type="submit" onClick={(e)=>Submit(e)}><i className="bi bi-person-plus"></i> ADD </Button>
                
                </div>

            </Form>
        </div>
    )
}

export default AddTask