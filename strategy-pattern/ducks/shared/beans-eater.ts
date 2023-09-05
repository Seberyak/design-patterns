import { IEatable } from './interfaces';

export class BeansEater implements IEatable {
  eat(): void {
    console.log('eats beans...');
  }
}
