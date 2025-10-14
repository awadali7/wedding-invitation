import type { Metadata } from "next";
import {
    Playfair_Display,
    Source_Sans_3,
    Cormorant_Garamond,
} from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
    variable: "--font-elegant",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    display: "swap",
});

const sourceSansPro = Source_Sans_3({
    variable: "--font-body",
    subsets: ["latin"],
    weight: ["300", "400", "600"],
    display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
    variable: "--font-accent",
    subsets: ["latin"],
    weight: ["300", "400", "500"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Elegant Burgundy Romance",
    description:
        "A luxurious color palette inspired by deep burgundy and warm cream tones with metallic accents",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* Great Vibes font for script text */}
                <link
                    href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body
                className={`${playfairDisplay.variable} ${sourceSansPro.variable} ${cormorantGaramond.variable} antialiased`}
            >
                {children}
                weee
            </body>
        </html>
    );
}
