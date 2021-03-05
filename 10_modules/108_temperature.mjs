// -------- Start of inline exports -----------------
export const FREEZING_POINT = 0;

export function f2c(fahrenheit) {
  return (fahrenheit - 32) / 1.8;
}

export const temperaturePoints = { freezing: 0, boiling: 100 };

export class Thermostat {
  constructor() {
    //...initialization sequence
  }
}
// --------- End of inline exports ------------------

// not exported
const FREEZINGPOINT_IN_F = 32;

// --------- Start of explicit exports --------------

// Prefer inline exports over explicit exports, and in general, use explicit
// exports only when an inline export is not suitable.

function c2f(celsius) {
  return celsius * 1.8 + 32;
}

const FREEZINGPOINT_IN_K = 273.15, BOILINGPOINT_IN_K = 373.15;

export { c2f, FREEZINGPOINT_IN_K };
// --------- End of explicit exports ----------------

function c2k(celsius) {
  return celsius + 273.15;
}                         

// export explicitly with a different name
export { c2k as celsiusToKelvin };

// Inlining of default exports is permitted for functions and classes, but not for
// variables and constants.
// Only one default export allowed:
export default function unitsOfMeasures() {
  return ['Celsius', 'Delisle scale', 'Fahrenheit', 'Kelvin', /*...*/];
}

// Actually outside this function is known by the name 'default'.
// If you have no use of this function internally, just omit it.
// export default function {
//   return ['Celsius', 'Delisle scale', 'Fahrenheit', 'Kelvin', /*...*/];
// }

// 'default' can't be followed by 'const' or 'let'.
// This is how you would default export a variable or constant:
// const WHATEVER_TEMP_RELATED = 42;
// export default WHATEVER_TEMP_RELATED;
