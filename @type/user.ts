export interface UserType {
  address: {
    city: string;
    geo: {
      lat: string;
      lng: string;
      street: string;
      suite: string;
      zipconde: string;
    };
    company: {
      bs: string;
      catchPhrase: string;
      name: string;
    };
  };
  name: string;
  email: string;
  id: number;
  phone: string;
  username: string;
  website: string;
}

export type UsersType = UserType[];
