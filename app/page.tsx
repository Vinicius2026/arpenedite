import dynamic from 'next/dynamic';
import Header from "@/components/Header";
import Hero from "@/components/Hero";

// Lazy load dos componentes menos críticos com SSR desabilitado para melhor performance
const LinkHub = dynamic(() => import("@/components/LinkHub"), {
  loading: () => <div className="h-96 bg-transparent" />,
  ssr: false
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="h-32 bg-transparent" />,
  ssr: false
});

export default function Home() {
  return (
    <main className="min-h-screen app-bg">
      <Header />
      <Hero />
      <LinkHub />
      <Footer />
    </main>
  );
}
