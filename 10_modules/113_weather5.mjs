// Re-export the default reference from temperature under a different name.
// Useful when a module reexports multiple modules and wants to make the defaults
// from more than one module available to the user.
export { Thermostat as Thermo, default as uom } from './108_temperature.mjs';
