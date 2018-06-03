export function getControlsValues() {
    return {
        body: "simple",
        characterVariation: 0.5,
        pluckDamping: 0.5,
        pluckDampingVariation: 0.25,
        stereoSpread: 0.2,
        stringDamping: 0.5,
        stringDampingCalculation: "magic",
        stringDampingVariation: 0.25,
        stringTension: 0
    };
}

// calculate the constant used for the low-pass filter
// used in the Karplus-Strong loop
export function calculateSmoothingFactor(string, tab, options) {
    var smoothingFactor;
    if (options.stringDampingCalculation === "direct") {
        smoothingFactor = options.stringDamping;
    } else if (options.stringDampingCalculation === "magic") {
        // this is copied verbatim from the flash one
        // is magical, don't know how it works
        const noteNumber = parseInt((string.semitoneIndex + tab - 19)/44, 10);
        smoothingFactor =
            options.stringDamping +
            Math.pow(noteNumber, 0.5) * (1 - options.stringDamping) * 0.5 +
            (1 - options.stringDamping) *
                Math.random() *
                options.stringDampingVariation;
    }
    return smoothingFactor;
}
