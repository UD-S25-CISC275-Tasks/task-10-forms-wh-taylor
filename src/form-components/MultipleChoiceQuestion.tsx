import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [choice, setChoice] = useState<string>('');
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="options">
                <Form.Label>Choice</Form.Label>
                <Form.Select
                    value={choice}
                    onChange={(event) => {
                        setChoice(event.target.value);
                    }}
                >
                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            <p>{choice == expectedAnswer ? "✔️" : "❌"}</p>
        </div>
    );
}
