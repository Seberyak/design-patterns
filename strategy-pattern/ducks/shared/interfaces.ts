export interface IDuck extends IFlyable, IQuackable, IEatable {}
export interface IFlyable {
  fly(): void;
}
export interface IQuackable {
  quack(): void;
}
export interface IEatable {
  eat(): void;
}
