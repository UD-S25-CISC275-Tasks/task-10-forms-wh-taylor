import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [inEdit, setEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("");
    const [isStudent, setStudent] = useState<boolean>(true);

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="mode"
                label="Activate Edit Mode"
                checked={inEdit}
                onChange={event => {setEdit(event.target.checked)}}
            />
            {
                inEdit ?
                    <div>
                        <Form.Group controlId="checkAnswer">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                value={name}
                                onChange={event => {setName(event.target.value)}} />
                        </Form.Group>
                        <Form.Check
                            type="switch"
                            id="student"
                            label="Are you a student?"
                            checked={isStudent}
                            onChange={event => {setStudent(event.target.checked)}}
                        />
                    </div>
                : <div></div>
            }
            <p>{name || "Your Name"} is {isStudent ? '' : 'not'} a student.</p>
        </div>
    );
}
