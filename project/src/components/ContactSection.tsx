import { Facebook, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { cn } from "../lib/utils"

export const ContactSection = () => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setTimeout(() => {
            alert(
            "Heads up! This form doesn't actually send messages — it's just a demo.\n\nFeel free to reach out to me directly via email or social media instead. I'd love to hear from you!"
            );
        }, 1000);
    };

    return (
        <>
        <section 
        id="contact" 
        className="py-24 px-4 relative bg-secondary/30"
        >
            
            <div className="container max-w-5xl mx-auto">

                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                    Get In <span className="text-primary"> Touch</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I'm always open to new opportunities. Whether you have a project in mind, want to discuss ideas, or just want to say hi, feel free to reach out!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">

                        <h3 className="text-2xl font-semibold mb-6">
                            Contact Information
                        </h3>

                        <div className="space-y-4 justify-center">

                            <div className="flex items-start space-x-4">

                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>

                                <div>
                                    <h4 className="font-medium"> Email</h4>
                                    <a 
                                    href="mailto:raiyanwasisiddiky@gmail.com" 
                                    className="text-muted-foreground hover:text-primary transition-colors duration-300">
                                        raiyanwasisiddiky@gmail.com
                                    </a>
                                </div>

                            </div>

                            <div className="flex items-start space-x-4">

                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />
                                </div>

                                <div>
                                    <h4 className="font-medium"> Phone</h4>
                                    <a 
                                    href="tel:+8801730495601" 
                                    className="text-muted-foreground hover:text-primary transition-colors duration-300">
                                        +880 (1730) 495 601
                                    </a>
                                </div>

                            </div>

                            <div className="flex items-start space-x-4">

                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6 text-primary" />
                                </div>

                                <div>
                                    <h4 className="font-medium"> Location</h4>
                                    <a className="text-muted-foreground hover:text-primary transition-colors duration-300">
                                        Dhaka, Bangladesh
                                    </a>
                                </div>

                            </div>


                        </div>

                        <div className="pt-8">
                            <h4 className="font-medium mb-4"> Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">

                                <a 
                                href="https://www.linkedin.com/in/raiyan-siddiky-335135283"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                    <Linkedin />
                                </a>

                                <a 
                                href="https://www.facebook.com/88.raiyanwasi/"
                                target="_blank"
                                rel="noopener noreferrer"
                                >
                                    <Facebook />
                                </a>

                            </div>
                        </div>
                            

                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs">

                        <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
                        <p className="text-muted-foreground mb-6 text-sm">
                            This form is just for show and doesn't actually send messages. Please reach out to me via email or social media instead!
                        </p>

                        <form action="" className="space-y-6"  onSubmit={handleSubmit}>

                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                                <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                required
                                className="w-full px-4 p-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="Your Name.."
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                                <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                required
                                className="w-full px-4 p-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="your_email@gmail.com..."
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                                <textarea 
                                id="message" 
                                name="name" 
                                required
                                className="w-full px-4 p-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                placeholder="Hello, I'd like to talk about..."
                                />
                            </div>

                            <button type="submit" className={cn(
                                "cosmic-button w-full flex items-center justify-center gap-2",
                                <Send size={16}/>
                            )}>
                                Send Message
                            </button>


                        </form>

                    </div>


                </div>

            </div>
        </section>
        </>
    )
}