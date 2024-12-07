import React, { useState } from "react";

const PlugboardSettings = ({ config, setConfig }) => {
    const [pair, setPair] = useState(["", ""]);

    const handleAddPair = () => {
        if (pair[0] && pair[1] && pair[0] !== pair[1]) {
            setConfig({ ...config, [pair[0]]: pair[1], [pair[1]]: pair[0] });
            setPair(["", ""]);
        }
    };

    return (
        <div className="mt-4">
            <h2>Plugboard Settings</h2>
            <div className="d-flex">
                <input
                    type="text"
                    maxLength="1"
                    value={pair[0]}
                    onChange={(e) => setPair([e.target.value.toUpperCase(), pair[1]])}
                    placeholder="A"
                    className="form-control me-2"
                />
                <input
                    type="text"
                    maxLength="1"
                    value={pair[1]}
                    onChange={(e) => setPair([pair[0], e.target.value.toUpperCase()])}
                    placeholder="B"
                    className="form-control me-2"
                />
                <button className="btn btn-primary" onClick={handleAddPair}>
                    Add Pair
                </button>
            </div>
        </div>
    );
};

export default PlugboardSettings;