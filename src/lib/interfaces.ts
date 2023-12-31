export interface Data {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  age: string;
  gender: string;
  passengers?: [Passenger];
}

export interface Passenger {
  name: string;
  age: string;
  gender: string;
  seatType: string;
}
