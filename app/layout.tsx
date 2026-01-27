import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VDA - Venda Direta Automática | Método Premium",
  description: "Acesse o método VDA e transforme sua forma de vender. Sistema de Venda Direta Automática criado por Thiago Lima.",
  keywords: ["VDA", "Venda Direta Automática", "Thiago Lima", "Método de Vendas"],
  authors: [{ name: "Thiago Lima" }],
  creator: "Thiago Lima",
  publisher: "VDA",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://vda.com.br",
    title: "VDA - Venda Direta Automática",
    description: "Transforme sua forma de vender com o método VDA",
    siteName: "VDA",
  },
  twitter: {
    card: "summary_large_image",
    title: "VDA - Venda Direta Automática",
    description: "Transforme sua forma de vender com o método VDA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
