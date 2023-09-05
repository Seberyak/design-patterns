import { DefaultDuck } from './variations/default-duck';
import { ForestDuck } from './variations/forest-duck';
import { BeansEater } from './shared/beans-eater';
import { CityDuck } from './variations/city-duck';
import { NotFlier } from './shared/not-flier';
import { NorthDuck } from './variations/north-duck';
import { SilentQuackable } from './shared/silent-quackable';
import { RubberDuck } from './variations/rubber-duck';
import { NotEater } from './shared/not-eater';
import { BrokenRubberDuck } from './variations/broken-rubber-duck';

const beansEater = new BeansEater();
const notFlier = new NotFlier();
const silentQuackable = new SilentQuackable();
const notEater = new NotEater();

const defaultDuck = new DefaultDuck();
defaultDuck.quack();
defaultDuck.fly();
defaultDuck.eat();
console.log('-'.repeat(50));

const forestDuck = new ForestDuck(beansEater);
forestDuck.quack();
forestDuck.fly();
forestDuck.eat();
console.log('-'.repeat(50));

const cityDuck = new CityDuck(beansEater, notFlier);
cityDuck.quack();
cityDuck.fly();
cityDuck.eat();
console.log('-'.repeat(50));

const northDuck = new NorthDuck(silentQuackable);
northDuck.quack();
northDuck.fly();
northDuck.eat();
console.log('-'.repeat(50));

const rubberDuck = new RubberDuck(notFlier, notEater);
rubberDuck.quack();
rubberDuck.fly();
rubberDuck.eat();
console.log('-'.repeat(50));

const brokenRubberDuck = new BrokenRubberDuck(
  notFlier,
  notEater,
  silentQuackable,
);
brokenRubberDuck.quack();
brokenRubberDuck.fly();
brokenRubberDuck.eat();
