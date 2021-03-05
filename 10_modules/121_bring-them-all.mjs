// Import everything - except the default reference - into a namespace.
import * as heat from './108_temperature.mjs';

const fpInK = heat.celsiusToKelvin(heat.FREEZING_POINT);
console.log(fpInK);
