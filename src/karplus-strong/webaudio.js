export function getAudioContext() {
    if ('localAudioContext' in window) {
        return window.localAudioContext;
    }

    let constructor;
    if ('AudioContext' in window) {
        // Firefox, Chrome
        constructor = window.AudioContext;
    } else if ('webkitAudioContext' in window) {
        // Safari
        constructor = window.webkitAudioContext;
    } else {
        return null;
    }

    var audioContext = new constructor();
    window.localAudioContext = audioContext;
    return audioContext;
}
