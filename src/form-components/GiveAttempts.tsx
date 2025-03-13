import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");
    const req = parseInt(requestedAttempts) || 0;

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts: {attempts}</p>
            <Form.Group controlId="requestAttempts">
                <Form.Label>Request Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={(event) => {
                        setRequestedAttempts(event.target.value);
                    }}
                />
            </Form.Group>
            <Button
                onClick={() => {setAttempts(attempts-1)}}
                disabled={attempts <= 0}>use</Button>
            <Button
                onClick={() => {setAttempts(attempts+req)}}>gain</Button>
        </div>
    );
}