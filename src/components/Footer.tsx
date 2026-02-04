import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Twitter, Github, ArrowUpRight } from 'lucide-react';
import logo from '@/assets/indoverse-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: 'Contact', id: 'contact' },
  ];

  const products = [
    { name: 'Techgram', href: 'https://techgramedu.in' },
    { name: 'Gig-lo', href: 'https://giglo.in' },
    { name: 'Ownclothing', href: 'https://ownclothing.in' },
    { name: 'Ownclothing AI', href: 'https://ownclothing.in/ownclothingai' },
  ];

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/indoverselabs', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/indoverselabs', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/indoverselabs', label: 'GitHub' },
  ];

  return (
    <footer className="relative bg-card/50 border-t border-border/50">
      <div className="absolute inset-0 bg-mesh-gradient opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <button onClick={() => scrollToSection('home')} className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Indoverse Labs" className="h-12 w-auto" />
              <span className="text-xl font-bold gradient-text">Indoverse Labs</span>
            </button>
            <p className="text-muted-foreground mb-6 max-w-md">
              Building the future, one line of code at a time. We're not just a dev shop—we're 
              your AI-powered partner in disrupting industries.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-secondary/50 rounded-xl text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  whileHover={{ y: -3 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-6">
              Products
            </h4>
            <ul className="space-y-4">
              {products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight 
                      size={14} 
                      className="opacity-0 group-hover:opacity-100 transition-opacity" 
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-muted-foreground">
            <a 
              href="mailto:contact@indoverselabs.in" 
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail size={16} />
              contact@indoverselabs.in
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={16} />
              India
            </span>
          </div>

          <p className="text-sm text-muted-foreground">
            © {currentYear} Indoverse Labs. Built different.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
