import Card from "@/components/Card";
import CardLikeButton from "@/components/CardLikeButton";
import CategorySection from "@/components/CategorySection";
import ControlledCarousel from "@/components/ControlledCarousel";
import CountdownTimer from "@/components/CountdownTimer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IconCard from "@/components/IconCard";
import LikeButton from "@/components/LikeButton";
import Nav from "@/components/Nav";
import TodaySection from "@/components/TodaySection";
import Head from 'next/head';
import { Poppins } from 'next/font/google';
import phone from '/public/assets/CellPhone-icon.svg'
import BestSellingSection from "@/components/BestSellingSection";
import BillboardSection from "@/components/BillboardSection";
import ProductSection from "@/components/ProductSection";
import FeaturedSection from "@/components/FeaturedSection";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'], // Add desired weights
  style: ['normal', 'italic'], // Add desired styles
});

export default function Home() {
  return (
    <main className={`${poppins.className}`}>
    <Head>
        <title>My Website</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <meta name="description" content="This is a description of my website." />
      </Head>
    <div className="">
      <Hero />
      <TodaySection />
      <CategorySection />
      <BestSellingSection />
      <BillboardSection />
      <ProductSection />
      <FeaturedSection />
    </div>
    </main>
  );
}
