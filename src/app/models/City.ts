export  interface City {
  base: string;
  weather: object[];
  main: Main;
  name: string;
}


interface Main {
  temp: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp_max: number;
  temp_min: number;
}
