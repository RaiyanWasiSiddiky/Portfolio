import { ArrowUp } from "lucide-react";

export const Footer = () => {
    return (
        <>
        <footer className="py-12 bg-secondary/30">
            <div className="container max-w-5xl mx-auto relative text-center">
                <div>
                    <p className="text-muted-foreground mb-1 text-sm">
                        &copy; {new Date().getFullYear()} Raiyan Wasi Siddiky. All rights reserved.
                    </p>
                    <p className="text-muted-foreground text-sm">
                        Built with ❤️ using React, TypeScript, and Tailwind CSS.
                    </p>
                </div>

                <a
                href="#hero"
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full text-primary transition-colors
                            bg-primary/10 hover:bg-primary/20 flex items-center gap-2 animate-bounce"
                >
                    Back to the Top
                    <ArrowUp size={20} />
                </a>
            </div>
        </footer>
        </>
    );
}