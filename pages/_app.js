import "@/styles/globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={`2xl:px-10 ${montserrat.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
