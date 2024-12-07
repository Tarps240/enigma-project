import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="text-center">
            <h1>Welcome to the Enigma Machine Emulator</h1>
            <p>
                This app emulates the German Enigma machine used during World War II.
                You can encode or decode messages, configure the rotors and plugboard, and view your history.
            </p>
            <p>Navigate to the Emulator page to get started!</p>
            <Link to="/emulator">
                <button className="btn btn-primary mt-3">Go to Emulator</button>
            </Link>
        </div>
    );
};

export default HomePage;