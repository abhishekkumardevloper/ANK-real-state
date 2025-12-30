import React, { useState, useEffect } from 'react';
import {
  MapPin, Phone, Mail, ArrowRight, Star,
  Facebook, Instagram, Linkedin, Twitter,
  Menu, X
} from 'lucide-react';

import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { mockProperties, mockTestimonials, mockServices, whyChooseUs } from '../data/mockData';
import '../styles/Home.css';

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProperties =
    selectedCategory === 'all'
      ? mockProperties
      : mockProperties.filter(p => p.category === selectedCategory);

  const categories = [
    { id: 'all', label: 'All Properties' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'plots', label: 'Plots & Land' },
    { id: 'luxury', label: 'Luxury Homes' }
  ];

  return (
    <div className="home-container">

      {/* ================= HEADER / NAVBAR ================= */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-content">

          {/* LOGO IMAGE */}
          <div className="logo">
            <img
              src="/images/ank-realty-logo.png"
              alt="ANK Realty"
              className="logo-img"
            />
          </div>

          <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
            <a href="#home">Home</a>
            <a href="#properties">Properties</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>

          <button
            className="book-visit-btn"
            onClick={() =>
              document.getElementById('contact')
                .scrollIntoView({ behavior: 'smooth' })
            }
          >
            Book Visit
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* ================= HERO SECTION (UPGRADED) ================= */}
      <section id="home" className="hero-section">
        <div className="hero-overlay" />

        <div className="hero-content">
          <span className="hero-badge">Premium Real Estate</span>

          <h1 className="hero-title">
            Discover <span>Luxury Properties</span><br />
            That Define Your Lifestyle
          </h1>

          <p className="hero-subtitle">
            Smart investments • Prime locations • Trusted deals with ANK Realty
          </p>

          <div className="hero-cta">
            <button
              className="cta-primary"
              onClick={() =>
                document.getElementById('properties')
                  .scrollIntoView({ behavior: 'smooth' })
              }
            >
              Explore Properties
            </button>

            <button
              className="cta-secondary"
              onClick={() =>
                document.getElementById('contact')
                  .scrollIntoView({ behavior: 'smooth' })
              }
            >
              Free Consultation
            </button>
          </div>

          {/* TRUST STATS */}
          <div className="hero-stats">
            <div>
              <h3>500+</h3>
              <p>Happy Clients</p>
            </div>
            <div>
              <h3>12+</h3>
              <p>Years Experience</p>
            </div>
            <div>
              <h3>100%</h3>
              <p>Verified Deals</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About ANK REALTY</h2>
            <p className="section-subtitle">Building Trust, Creating Value, Delivering Excellence</p>
          </div>
          
          <div className="about-content">
            <p className="about-description">
              ANK REALTY is a premier real estate company specializing in luxury properties, smart investments, and comprehensive realty solutions. With years of experience in the industry, we have established ourselves as the trusted choice for discerning clients seeking excellence in real estate.
            </p>
            <p className="about-description">
              Our mission is to transform the real estate experience through integrity, innovation, and unparalleled service. We believe in creating lasting relationships built on trust and transparency.
            </p>
            
            <div className="about-values">
              <div className="value-card">
                <div className="value-icon">🎯</div>
                <h3>Our Mission</h3>
                <p>To provide exceptional real estate services that exceed expectations and create lasting value for our clients.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🔮</div>
                <h3>Our Vision</h3>
                <p>To be the most trusted and innovative real estate company, setting new standards in the industry.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">💎</div>
                <h3>Our Values</h3>
                <p>Integrity, Excellence, Innovation, Trust, and Customer Satisfaction in every transaction.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Listings Section */}
      <section id="properties" className="properties-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Premium Property Portfolio</h2>
            <p className="section-subtitle">Discover your dream property from our exclusive collection</p>
          </div>

          <div className="category-filter">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="properties-grid">
            {filteredProperties.map(property => (
              <Card key={property.id} className="property-card">
                <div className="property-image-wrapper">
                  <img src={property.image} alt={property.title} className="property-image" />
                  {property.badge && <span className="property-badge">{property.badge}</span>}
                </div>
                <CardContent className="property-content">
                  <div className="property-header">
                    <h3 className="property-title">{property.title}</h3>
                    <p className="property-price">{property.price}</p>
                  </div>
                  <div className="property-location">
                    <span>📍</span>
                    <span>{property.location}</span>
                  </div>
                  <div className="property-features">
                    {property.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                  <button className="property-btn">
                    View Details
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose ANK REALTY</h2>
            <p className="section-subtitle">Your success is our priority</p>
          </div>

          <div className="why-choose-grid">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className="why-choose-card">
                <div className="why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">Comprehensive real estate solutions tailored to your needs</p>
          </div>

          <Accordion type="single" collapsible className="services-accordion">
            {mockServices.map((service, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="service-item">
                <AccordionTrigger className="service-trigger">
                  <div className="service-header">
                    <span className="service-icon">{service.icon}</span>
                    <span className="service-title">{service.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="service-content">
                  {service.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Client Testimonials</h2>
            <p className="section-subtitle">Hear from our satisfied clients</p>
          </div>

          <div className="testimonials-grid">
            {mockTestimonials.map((testimonial, idx) => (
              <Card key={idx} className="testimonial-card">
                <CardContent className="testimonial-content">
                  <div className="stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#C1121F" color="#C1121F" />
                    ))}
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <div className="author-avatar">{testimonial.name.charAt(0)}</div>
                    <div>
                      <p className="author-name">{testimonial.name}</p>
                      <p className="author-role">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container cta-content">
          <h2 className="cta-title">Invest Smart. Live Better. With ANK REALTY.</h2>
          <p className="cta-subtitle">Let us help you find your perfect property or investment opportunity</p>
          <button className="cta-button" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Book a Free Consultation
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">We're here to help you with all your real estate needs</p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <div>
                  <h4>Office Address</h4>
                  <p>Tower A, DLF Cyber City<br />Gurgaon, Delhi NCR 122002</p>
                </div>
              </div>
              <div className="contact-item">
                <Phone className="contact-icon" />
                <div>
                  <h4>📞 Phone</h4>
                  <p>+91 98765 43210</p>
                  <p className="whatsapp-text">WhatsApp Available</p>
                </div>
              </div>
              <div className="contact-item">
                <Mail className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <p>contact@ankrealty.com</p>
                </div>
              </div>
            </div>

            <Card className="contact-form-card">
              <CardContent className="contact-form-content">
                <form className="contact-form">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="Enter your name" required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" placeholder="Enter your phone" required />
                  </div>
                  <div className="form-group">
                    <label>Email Address</label>
                    <input type="email" placeholder="Enter your email" required />
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea rows="4" placeholder="Tell us about your requirements" required></textarea>
                  </div>
                  <button type="submit" className="submit-btn">
                    Send Message
                  </button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <div className="footer-logo-text">
                <span className="red">ANK</span> <span className="black">REALTY</span>
              </div>
              <p className="footer-description">
                Your trusted partner in luxury real estate, smart investments, and premium property solutions.
              </p>
              <div className="social-links">
                <a href="#" className="social-link"><Instagram size={20} /></a>
                <a href="#" className="social-link"><Facebook size={20} /></a>
                <a href="#" className="social-link"><Linkedin size={20} /></a>
                <a href="#" className="social-link"><Twitter size={20} /></a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#properties">Properties</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Property Types</h4>
              <ul className="footer-links">
                <li><a href="#properties">Residential Properties</a></li>
                <li><a href="#properties">Commercial Properties</a></li>
                <li><a href="#properties">Plots & Land</a></li>
                <li><a href="#properties">Luxury Homes</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contact Us</h4>
              <ul className="footer-links">
                <li>DLF Cyber City, Gurgaon</li>
                <li>+91 98765 43210</li>
                <li>contact@ankrealty.com</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="copyright">© 2025 ANK REALTY. All rights reserved.</p>
            <p className="disclaimer">All property information and prices are subject to change. Please verify details before making any investment decisions.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
