import axios from "axios";
import { Image } from "../interfaces/Images";

export const fetchImages = async (): Promise<Image[]> => {
  try {
    const response = await axios.get<Image[]>(
      `https://jsonplaceholder.typicode.com/photos`
    );
    return response.data; // response.data is directly an array of images
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};