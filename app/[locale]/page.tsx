import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Tools from "@/components/Tools";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default async function Home({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);
    return (
        <main className="min-h-screen relative selection:bg-black selection:text-white">
            <Navbar />
            <Hero />
            <Projects />
            <Services />
            <Experience />
            <Tools />
            <FAQ />
            <Footer />
        </main>
    );
}
