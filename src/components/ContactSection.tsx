import { useState } from 'react';
import { Mail, Linkedin, Github, ExternalLink, Phone } from 'lucide-react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { cn } from '../utils/cn';
import { FormData } from '../types';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

interface ContactSectionProps {
  isDarkMode: boolean;
}

export const ContactSection = ({ isDarkMode }: ContactSectionProps) => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Real EmailJS integration
      const templateParams = {
        ...EMAILJS_CONFIG.templateParams,
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message
      };

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setSubmitStatus('success');
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
      
    } catch (error: unknown) {
      console.error('Error sending message:', error);
      
      // Check for specific Gmail API errors
      if (error && typeof error === 'object' && 'message' in error) {
        const errorMessage = (error as { message: string }).message;
        if (errorMessage.includes('insufficient authentication scopes')) {
          console.error('Gmail API Scope Error: Please reconnect Gmail account with full permissions');
        } else if (errorMessage.includes('Invalid grant')) {
          console.error('Gmail API Grant Error: Please reconnect Gmail account');
        }
      }
      
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    { 
      icon: Phone, 
      label: 'Phone', 
      value: '+90 534 678 58 45',
      href: 'tel:+905346785845',
      isExternal: false
    },
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'cagdas.aldogan00@gmail.com',
      href: 'mailto:cagdas.aldogan00@gmail.com',
      isExternal: false
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      value: 'cagdas-aldogan',
      href: 'https://tr.linkedin.com/in/cagdas-aldogan',
      isExternal: true
    },
    { 
      icon: Github, 
      label: 'GitHub', 
      value: 'cagdasald',
      href: 'https://github.com/cagdasald',
      isExternal: true
    }
  ];

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={cn(
            'text-3xl sm:text-4xl md:text-5xl font-bold mb-4 transition-colors duration-1000',
            isDarkMode ? 'text-white' : 'text-gray-900'
          )}>
            Let&apos;s Work Together
          </h2>
          <p className={cn(
            'text-lg sm:text-xl transition-colors duration-1000',
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          )}>
            Ready to bring your ideas to life?
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((contact, index) => (
              <Card 
                key={contact.label}
                isDarkMode={isDarkMode}
                className="p-6 group cursor-pointer hover:scale-105 transition-all duration-300"
                style={{ 
                  animationDelay: `${index * 0.1}s`
                }}
                onClick={() => window.open(contact.href, contact.isExternal ? '_blank' : '_self')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <contact.icon className="w-12 h-12 mr-4 hover:scale-110 transition-transform duration-300 text-purple-400" />
                    <div>
                      <h3 className={cn(
                        'text-xl font-semibold mb-2 transition-colors duration-1000',
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      )}>
                        {contact.label}
                      </h3>
                      <p className={cn(
                        'transition-colors duration-1000',
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      )}>
                        {contact.value}
                      </p>
                    </div>
                  </div>
                  {contact.isExternal && (
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors duration-300" />
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div>
            <h3 className={cn(
              'text-xl sm:text-2xl font-bold mb-6 transition-colors duration-1000',
              isDarkMode ? 'text-white' : 'text-gray-900'
            )}>
              Send me a message
            </h3>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={cn(
                  'block text-sm font-medium mb-2 transition-colors duration-1000',
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                )}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className={cn(
                    'w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent',
                    isDarkMode 
                      ? 'bg-white/10 border-white/20 text-white placeholder-gray-400' 
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                  )}
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className={cn(
                  'block text-sm font-medium mb-2 transition-colors duration-1000',
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                )}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className={cn(
                    'w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent',
                    isDarkMode 
                      ? 'bg-white/10 border-white/20 text-white placeholder-gray-400' 
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                  )}
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className={cn(
                  'block text-sm font-medium mb-2 transition-colors duration-1000',
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                )}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  required
                  rows={5}
                  className={cn(
                    'w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none',
                    isDarkMode 
                      ? 'bg-white/10 border-white/20 text-white placeholder-gray-400' 
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
                  )}
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Sending...
                  </div>
                ) : (
                  <>
                    <span className="relative z-10">Send Message</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </>
                )}
              </Button>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-green-400 text-center font-medium">
                    ✅ Message sent successfully! I&apos;ll get back to you soon.
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-400 text-center font-medium">
                    ❌ Failed to send message. Gmail API authentication issue.
                  </p>
                  <p className="text-red-300 text-center text-sm mt-2">
                    Please try again later or contact me directly at cagdas.aldogan00@gmail.com
                  </p>
                  <div className="mt-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                    <p className="text-yellow-400 text-center text-xs">
                      💡 <strong>Developer Note:</strong> Gmail API needs to be reconnected with full permissions
                    </p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
