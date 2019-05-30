export  interface City {
  base: string;
  weather: object[];
  main: Main;
}


interface Main {
  temp: number;
}
