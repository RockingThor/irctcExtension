export interface Data {
  name: string;
  email: string;
  mobile: string;
  passengers: [Passenger];
}

export interface Passenger {
  name: string;
  age: number;
  gender: string;
  seatType: string;
}
