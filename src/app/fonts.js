import { Calistoga, Nunito } from "next/font/google";
import "./globals.css";

export const calistoga = Calistoga({ 
  subsets: ["latin"],
  weight: "400",
  display: 'swap',
  variable: '--font-calistoga'})

export const nunito = Nunito({ 
  subsets: ["latin"],
  weight: "400",
  display: 'swap',
  variable: '--font-nunito'})


