export interface User {
  id: string;
  email: string;
  name: string;
  profilePicture: string;
  socialProvider: 'google' ;
  socialId: string;
  createdAt: string;
}