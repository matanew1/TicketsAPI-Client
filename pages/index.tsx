// src/components/Home.tsx
import Header from "../components/Header";
import type { NextPage } from "next";
import Layout from "../components/Layout";
import { GetStaticProps } from "next";
import { Typography, Box, Grid } from "@mui/material";
import { fetchImages } from "../services/images";
import { Image } from "../interfaces/Images";
import Images from "../components/Images";

interface Props {
  images: Image[];
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const images = await fetchImages();
  return {
    props: {
      images,
    },
  };
};

const IndexPage: React.FC<Props> = ({ images }) => {
  return (
    <Layout>
      <Images images={images} />
    </Layout>
  );
};

export default IndexPage;