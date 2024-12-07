// Example rotor wirings based on historical configurations.

const rotors = {
    I: "EKMFLGDQVZTOWYHXUSPAIBRCJ", // Rotor I wiring
    II: "AJDKSIRUXBLHWTMCQGZNPYFVOE", // Rotor II wiring
    III: "BDFHJLCPRTXVZNYEIWGAKMUSQO", // Rotor III wiring
};

// Reflector wiring (historical reflector B)
const reflectorB = "YRUHQSLDPXNGOKMIEBFZCWVJAT";

// Alphabet
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Helper: Create a plugboard substitution map
const createPlugboardMap = (config) => {
    const map = {};
    for (const [a, b] of Object.entries(config)) {
        map[a] = b;
        map[b] = a;
    }
    return map;
};

// Helper: Pass a letter through the plugboard
const plugboard = (letter, map) => {
    return map[letter] || letter; //If there is no substitution, return the letter itself.
};

// Helper: Encode a letter through a rotor
const encodeRotor = (letter, rotor, position, reverse = false) => {
    const offset = (alphabet.indexOf(letter) + position) % 26;
    const mappedLetter = reverse
        ? alphabet[rotor.indexOf(alphabet[offset])]
        : rotor[offset];
    return alphabet[(alphabet.indexOf(mappedLetter) - position + 26) % 26];
};

// Main Enigma Machine Function
export const enigmaMachine = (input, rotorConfig, plugboardConfig) => {
    const plugboardMap = createPlugboardMap(plugboardConfig);
    const { rotors: selectedRotors, positions } = rotorConfig;

    let rotorPositions = [...positions]; // Clone positions to update them.
    let output = "";

    for (let letter of input.toUpperCase()) {
        if (!alphabet.includes(letter)) {
            output += letter; // Preserve non-alphabetic characters.
            continue;
        }

        // Step rotors.
        rotorPositions[0] = (rotorPositions[0] + 1) % 26;
        if (rotorPositions[0] === 0) rotorPositions[1] = (rotorPositions[1] + 1) % 26;
        if (rotorPositions[1] === 0) rotorPositions[2] = (rotorPositions[2] + 1) % 26;

        // Pass through the plugboard.
        let encodedLetter = plugboard(letter, plugboardMap);

        // Pass through the Rotors (forward).
        for (let i = 0; i < selectedRotors.length; i++) {
            const rotorName = selectedRotors[i];
            encodedLetter = encodeRotor(encodedLetter, rotors[rotorName], rotorPositions[i]);
        }

        // Pass through the reflector.
        encodedLetter = reflectorB[alphabet.indexOf(encodedLetter)];

        // Pass through the rotors (reverse).
        for (let i = selectedRotors.length - 1; i >= 0; i--) {
            const rotorName = selectedRotors[i];
            encodedLetter = encodeRotor(
                encodedLetter,
                rotors[rotorName],
                rotorPositions[i],
                true
            );
        }

        // Passthrough the plugboard again.
        encodedLetter = plugboard(encodedLetter, plugboardMap);

        // Append the result to the output.
        output += encodedLetter;
    }

    return output;

};