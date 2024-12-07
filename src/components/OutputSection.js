import React from "react";

const OutputSection = ({ output }) => {
    return (
        <div>
            <h2>Output</h2>
            <textarea
                value={output}
                readOnly
                rows="5"
                className="form-control"
                placeholder="Encoded/Decoded message will appear here..."
            />
        </div>
    );
};

export default OutputSection;