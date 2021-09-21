import { Compute } from './compute';
import divide from './divide';
import { multiply } from './multiply';

const compute = new Compute();

console.log('Is the calculator turned on? ', compute.isTurnedOn);

console.log('5 + 4 = ', compute.sum(5, 4));

console.log('100 / 10 = ', divide(100, 10));

console.log('4 * 5 = ', multiply(4, 5));
