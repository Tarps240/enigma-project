import React from "react";

const InputSection = ({ input, setInput }) => {
    return (
        <div>
            <h2>Input</h2>
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter your text here..."
                rows="5"
                className="form-control"
            />
        </div>
    );
};

export default InputSection;