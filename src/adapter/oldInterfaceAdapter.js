import { newInterface } from './newInterface';

/**
 * Adapter that makes the new interface compatible with the old one
 */
export class OldInterfaceAdapter {
  doSomethingOld() {
    return newInterface.doSomethingNew('new thing');
  }
}