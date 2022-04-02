export interface Account {
  fname: string;
  lname: string;
  email: string;
  avatar: string;
  password: string;
  posts: post[];
}
export interface post {
  message: string;

  likes: number;
  fname: string;
  lname: string;
  avatar: string;
}
