import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const contactItems = [
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'vishal.malhan305@gmail.com',
      href: 'mailto:vishal.malhan305@gmail.com',
    },
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: '647-897-2953',
      href: 'tel:6478972953',
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/vishalmalhan',
      href: 'https://linkedin.com/in/vishalmalhan',
    },
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      value: 'github.com/vishalmalhan305',
      href: 'https://github.com/vishalmalhan305',
    },
  ];

  return (
    <section id="contact" className="bg-yotei-black text-yotei-white py-20">
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .contact-card {
          animation: fadeUp 0.6s ease-out forwards;
        }
        .contact-card:nth-child(1) { animation-delay: 0.1s; }
        .contact-card:nth-child(2) { animation-delay: 0.2s; }
        .contact-card:nth-child(3) { animation-delay: 0.3s; }
        .contact-card:nth-child(4) { animation-delay: 0.4s; }
      `}</style>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yotei-gold to-yotei-cream">
          Get In Touch
        </h2>
        <p className="mb-12 text-yotei-cream text-lg">
          Let's connect! Feel free to reach out for collaborations or just to say hello.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card flex items-center gap-4 p-6 rounded-xl border border-yotei-gold/30 hover:border-yotei-gold/80 bg-gradient-to-br from-yotei-dark-gray to-yotei-black hover:from-yotei-dark-gray/80 hover:to-yotei-dark-gray transition-all duration-300 group text-left hover:shadow-lg hover:shadow-yotei-gold/20 hover:-translate-y-1"
            >
              <div className="text-yotei-gold group-hover:text-white group-hover:scale-125 transition-all duration-300 flex-shrink-0 bg-yotei-gold/10 p-3 rounded-lg">
                {item.icon}
              </div>

              <div className="flex-1">
                <p className="text-xs text-yotei-cream/60 uppercase tracking-widest mb-1 font-semibold">
                  {item.label}
                </p>
                <p className="text-yotei-gold font-medium text-sm break-all group-hover:text-white transition-colors">
                  {item.value}
                </p>
              </div>
              
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <svg className="w-5 h-5 text-yotei-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;