document.addEventListener('DOMContentLoaded', function() {
    let temp = window.location.href.split("=")[1] || "6500"
    let hex = tempToHex(temp);
    document.getElementsByTagName("body")[0].style.backgroundColor = hex;
    window.history.pushState("", "", "?temp=" + temp);
    });
    
    function tempToHex(kelvin) {
    let temperature = kelvin / 100;
    let red, green, blue;

    // Calculate red
    if (temperature <= 66) {
        red = 255;
    } else {
        red = temperature - 60;
        red = 329.698727446 * Math.pow(red, -0.1332047592);
        red = Math.min(Math.max(0, red), 255);
    }

    // Calculate green
    if (temperature <= 66) {
        green = temperature;
        green = 99.4708025861 * Math.log(green) - 161.1195681661;
    } else {
        green = temperature - 60;
        green = 288.1221695283 * Math.pow(green, -0.0755148492);
    }
    green = Math.min(Math.max(0, green), 255);

    // Calculate blue
    if (temperature >= 66) {
        blue = 255;
    } else if (temperature <= 19) {
        blue = 0;
    } else {
        blue = temperature - 10;
        blue = 138.5177312231 * Math.log(blue) - 305.0447927307;
        blue = Math.min(Math.max(0, blue), 255);
    }

    // Convert RGB to hex
    const rgbToHex = (r, g, b) => {
        const toHex = (c) => {
            const hex = Math.round(c).toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        };
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    };

    return rgbToHex(red, green, blue);
}