import React from "react";

const HistoryPage = ({ history }) => {
    return (
        <div className="container mt-4">
            <h2 className="text-center">Message History</h2>
            {history.length === 0 ? (
                <p className="text-center mt-4">No history available. Encode a messageto see it here</p>
            ) : (
                <table className="table table-striped mt-4">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Input</th>
                            <th>Output</th>
                        </tr>
                    </thead>
                    <tbody>
                        {history.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.input}</td>
                                <td>{item.output}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <p className="text-muted text-center mt-4">
                Messages are processed using the current rotor and plugboard configurations.
            </p>
        </div>
    );
};

export default HistoryPage;