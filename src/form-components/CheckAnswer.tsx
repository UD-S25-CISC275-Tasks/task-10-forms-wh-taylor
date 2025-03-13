import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer,
}: {
    expectedAnswer: string;
}): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    return (
        <div>
            <h3>Check Answer</h3>
            <Form.Group controlId="checkAnswer">
                <Form.Label>Answer:</Form.Label>
                <Form.Control
                    value={answer}
                    onChange={event => {setAnswer(event.target.value)}} />
            </Form.Group>
            <p>{answer == expectedAnswer ? "✔️" : "❌"}</p>
        </div>
    );
}
