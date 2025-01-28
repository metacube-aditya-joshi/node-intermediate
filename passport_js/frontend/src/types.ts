export interface User {
  id: string;
  email: string;
  name: string;
  profilePicture: string;
  socialProvider: 'google' | 'facebook' | 'twitter';
  socialId: string;
  createdAt: string;
}