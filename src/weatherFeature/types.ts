// Define a type for the slice state
export interface Weather {
    description: string;
    icon: string;
    id: number;
    main: string;
}

export interface WeatherData {
    base: string;
    coord : {
        lon: number;
        lat: number;
    }
    id: number;
    main: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
      };
      name: string;
      sys: {
        country: string;
        id: number;
        sunrise: number;
        sunset: number;
        type: number;
      };
      timezone: number;
      visibility: number;
      weather: Weather[];
      wind: {
        speed: number;
        deg: number;
      };
}

export interface WeatherState {
    data: WeatherData | null;
    loading: boolean;
    err: string;
}
