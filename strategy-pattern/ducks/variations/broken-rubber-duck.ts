import { NotEater } from '../shared/not-eater';
import { NotFlier } from '../shared/not-flier';
import { RubberDuck } from './rubber-duck';
import { SilentQuackable } from '../shared/silent-quackable';

export class BrokenRubberDuck extends RubberDuck {
  constructor(
    protected readonly notFlier: NotFlier,
    protected readonly notEater: NotEater,
    protected readonly silentQuackable: SilentQuackable,
  ) {
    super(notFlier, notEater);
  }

  protected initLog() {
    super.initLog();
    console.log('Broke...');
  }

  public quack() {
    return this.silentQuackable.quack();
  }
}
