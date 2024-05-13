import { Calistoga, Nunito } from "next/font/google";
import "./globals.css";

export const nunito = Nunito({ 
  subsets: ["latin"] ,
  weight: "200",
  display: 'swap',
  variable: '--font-nunito'})

export const calistoga = Calistoga({ 
  subsets: ["latin"],
  weight: "400" ,
  variable: '--font-calistoga'});