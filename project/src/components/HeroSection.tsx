import { ArrowDown } from "lucide-react";
import { useEffect, useState } from 'react';

export const HeroSection = () => {
    const [isBottom, setIsBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Hide when the user is near the bottom (e.g. within 50px)
        if (scrollTop + windowHeight >= documentHeight - 50) {
            setIsBottom(true);
        } else {
            setIsBottom(false);
        }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <>
        <section 
        id="hero" 
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div
            className="container max-w-4xl mx-auto text-center z-10"
            >
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in-delay-1"> Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-2"> Raiyan</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-3"> Wasi</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-5">
                        Yes, I like Space. I also like to build things with code.
                    </p>

                    <div className="opacity-0 animate-fade-in-delay-6  hover:scale-105 active:scale-95 transition-transform">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>

            </div>

            <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-[9999]">
                {!isBottom && (
                    <>
                    <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                    <ArrowDown className="w-6 h-6 text-primary mt-2 animate-pulse" />
                    </>
                )}

            </div>
            
        </section>
        </>
    );
}