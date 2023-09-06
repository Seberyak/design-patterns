import { WeatherStation } from './weather-station/weather-station';
import { Display } from './weather-station/display';
import { sleep } from '../common/sleep';

const station = new WeatherStation();
const display1 = new Display(station);
const display2 = new Display(station);
station.register(display1);
station.register(display2);

sleep(2000).then(() => station.unregister(display1));
sleep(1e4).then(() => station.unregister(display2));
