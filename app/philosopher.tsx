import { Philosopher } from 'next/font/google';
import { NextFont } from 'next/dist/compiled/@next/font';


export const philosopher: NextFont = Philosopher({
  weight: "700",
  subsets: ['latin'],
  style: "normal",
});
