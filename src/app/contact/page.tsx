"use client"

import { useState } from "react";
import { Mail, Github, Linkedin, Twitter, MapPin, Phone, Send, MessageSquare } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }

    // Reset status after 3 seconds
    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/username",
      icon: Github,
      description: "Check out my code and contributions",
      color: "hover:text-gray-900 dark:hover:text-gray-100"
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/username",
      icon: Linkedin,
      description: "Let's connect professionally",
      color: "hover:text-blue-600"
    },
    {
      name: "Twitter",
      href: "https://twitter.com/username",
      icon: Twitter,
      description: "Follow me for tech insights",
      color: "hover:text-blue-400"
    },
    {
      name: "Email",
      href: "mailto:hello@zanderdev.com",
      icon: Mail,
      description: "Send me a direct message",
      color: "hover:text-red-500"
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@zanderdev.com",
      href: "mailto:hello@zanderdev.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      href: null
    }
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            Let's Connect
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities, collaborations, and interesting conversations. 
            Let's build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">Get In Touch</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you have a project in mind, want to discuss opportunities, or just want to say hello, 
                I'd love to hear from you. I typically respond within 24 hours.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <item.icon size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-foreground">{item.label}</div>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-muted-foreground">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Follow Me</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 bg-card border border-border rounded-lg hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <social.icon size={20} className={`text-muted-foreground transition-colors ${social.color}`} />
                      <div>
                        <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {social.name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {social.description}
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <MessageSquare size={24} className="text-primary" />
              <h2 className="text-2xl font-semibold text-foreground">Send a Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                  placeholder="Tell me more about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-green-700 dark:text-green-400 text-sm">
                    Thanks for your message! I'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-700 dark:text-red-400 text-sm">
                    Sorry, there was an error sending your message. Please try again.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 pt-16 border-t border-border">
          <h2 className="text-2xl font-semibold text-foreground mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">What's your typical response time?</h3>
              <p className="text-muted-foreground text-sm">
                I usually respond to messages within 24 hours during business days. 
                For urgent matters, feel free to mention it in your message.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">Do you work on freelance projects?</h3>
              <p className="text-muted-foreground text-sm">
                Yes! I'm open to freelance opportunities, especially for interesting projects 
                that align with my skills and interests.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">What technologies do you work with?</h3>
              <p className="text-muted-foreground text-sm">
                I specialize in React, Next.js, Node.js, TypeScript, and modern web technologies. 
                Check out my About page for a complete list.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">Are you available for full-time roles?</h3>
              <p className="text-muted-foreground text-sm">
                I'm always open to discussing interesting full-time opportunities. 
                Feel free to reach out with details about the role.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 