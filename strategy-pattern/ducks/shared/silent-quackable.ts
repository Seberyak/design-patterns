import { IQuackable } from './interfaces';

export class SilentQuackable implements IQuackable {
  quack(): void {
    console.log('...');
  }
}
