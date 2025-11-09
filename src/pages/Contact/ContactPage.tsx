import Contact from "@/components/modules/contact/Contact";
import { Badge } from "@/components/ui/badge";

const ContactPage = () => {
  return (
    <>
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-background"></div>
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6">
              Contact Us
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
              Get in Touch
            </h1>
            <p className="text-xl mb-10 text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Have a question? We'd love to hear from you! Fill out the form
              below and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
        <Contact />
      </section>
    </>
  );
};

export default ContactPage;
