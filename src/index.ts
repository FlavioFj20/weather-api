#!/usr/bin/env node
import axios from "axios";
//import type { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

// const response = await axios.get(
//   "https://jsonplaceholder.typicode.com/posts/1", {
//   timeout: 5000,}
// );

// console.log(response.data);

// type Post = {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// };

// const response = await axios.get<Post>("https://jsonplaceholder.typicode.com/posts/1");

// console.log(response.data.title); // TypeScript knows this is a string

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const getPost = async (id: number): Promise<Post> => {
  const response = await axios.get<Post>(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return response.data;
};

console.log(await getPost(1))