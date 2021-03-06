"use strict";

import { SampleComponent } from './sample.component.mjs';
const metadataKeys = Reflect.getMetadataKeys(SampleComponent);
console.log(`MetadataKeys: ${metadataKeys}`);
const annotations = Reflect.getMetadata('annotations', SampleComponent);
console.log('Annotations:');
console.log(`selector: ${annotations.selector}`);
console.log(`templateUrl: ${annotations.templateUrl}`);