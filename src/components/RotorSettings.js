import React from "react";

const RotorSettings = ({ config, setConfig }) => {
    const handleRotorChange = (index, value) => {
        const newRotors = [...config.rotors];
        newRotors[index] = value;
        setConfig({ ...config, rotors: newRotors });
    };


const handlePositionChange = (index, value) => {
    const newPositions = [...config.positions];
        newPositions[index] = parseInt(value, 10);
        setConfig({ ...config, positions: newPositions });
    };


    return (
        <div className="mt-4">
            <h2>Rotor Settings</h2>
            {[0, 1, 2].map((index) => (
                <div key={index} className="mb-3">
                    <label>Rotor {index + 1}:</label>
                    <select
                        value={config.rotors[index]}
                        onChange={(e) => handleRotorChange(index, e.target.value)}
                        className="form-select"
                    >
                        <option value="I">I</option>
                        <option value="II">II</option>
                        <option value="III">III</option>
                    </select>
                    <label>Position:</label>
                    <input
                        type="range"
                        value={config.positions[index]}
                        onChange={(e) => handlePositionChange(index, e.target.value)}
                        min="0"
                        max="25"
                        className="form-range"
                    />
                    <p>Current Position: {config.positions[index]}</p>
                </div>
            ))}
        </div>
    );
};

export default RotorSettings;