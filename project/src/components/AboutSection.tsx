import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <>
        <section id="about" className="py-24 px-4 relative">
            <div className="container max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">

                        <h3 className="text-2xl font-semibold">
                        Full-Stack Developer & AI Enthusiast
                        </h3>

                        <p className="text-muted-foreground">
                        A Computer Science graduate from BRAC University with a passion for Artificial Intelligence, Data Analysis and Web Development. 
                        I enjoy analyzing and exploring data and then using machine learning models to extract and extrapolate information from said data. Oooh, and I also like building modern web apps with the MERN stack.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get in Touch
                            </a>

                            <a 
                                href="/Raiyan_Wasi_Siddiky_CV.pdf"
                                className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 
                                transition-transform duration-300 hover:scale-105 active:scale-95"
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Download CV
                            </a>

                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {/* Skill Cards */}
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">

                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Full-Stack Development</h4>
                                    <p className="text-muted-foreground">
                                        Building responsive and secure web applications using MongoDB, Express, React, and Node.js.
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">

                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Machine Learning & NLP</h4>
                                    <p className="text-muted-foreground">
                                        Experience training deep learning models (LSTM, BERT) for natural language processing tasks.
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">

                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>

                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Team & Project Management</h4>
                                    <p className="text-muted-foreground">
                                        Delivered projects using Agile practices with tools like Trello and Git in collaborative environments.
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                    </div>


            </div>
        </section>


        </>
    );
}