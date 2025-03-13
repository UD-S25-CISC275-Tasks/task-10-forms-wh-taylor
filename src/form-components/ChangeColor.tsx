import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("red");
    const colorList = ["red", "blue", "yellow", "green", "purple", "orange", "grey", "pink"];
    return (
        <div>
            <h3>Change Color</h3>
            <div>
                {colorList.map((c) => (
                    <Form.Check
                        key={c}
                        inline
                        type="radio"
                        name="colors"
                        label={<p style={{ backgroundColor: c }}>{c}</p>}
                        value={c}
                        onChange={(event) => {
                            setColor(event.target.value);
                        }}
                        checked={color === c}
                    ></Form.Check>
                ))}
                <p>
                    You have chosen{" "}
                    {<span data-testid="colored-box" style={{ backgroundColor: color }}>{color}</span>}.
                </p>
            </div>
        </div>
    );
}
