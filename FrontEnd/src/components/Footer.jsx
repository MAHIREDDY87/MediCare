import React from "react";
import { footerStyles } from "../assets/dummyStyles";
import logo from "../assets/logo.png";
import { Stethoscope, Activity, Phone, Mail, MapPin, ArrowRight, Send } from "lucide-react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Doctors", href: "/doctors" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
  { name: "Appointments", href: "/appointments" },
];

const services = [
  { name: "Blood Pressure Check", href: "/services" },
  { name: "Blood Sugar Test", href: "/services" },
  { name: "Full Blood Count", href: "/services" },
  { name: "X-Ray Scan", href: "/services" },
];

  const socialLinks = [
    {
      Icon: FaFacebook,
      name: "Facebook",
      href: "https://www.facebook.com/people/Hexagon-Digital-Services/61567156598660/",
      color: "#1877F2",
    },
    {
      Icon: FaXTwitter,
      name: "X",
      href: "https://x.com",
      color: "#000000",
    },
    {
      Icon: FaInstagram,
      name: "Instagram",
      href: "https://instagram.com/hexagondigitalservices",
      color: "#E4405F",
    },
    {
      Icon: FaLinkedin,
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/hexagondigtial-services/",
      color: "#0A66C2",
    },
    {
      Icon: FaYoutube,
      name: "YouTube",
      href: "https://youtube.com/@hexagondigitalservices",
      color: "#FF0000",
    },
  ];

  return (
    <footer className={footerStyles.footerContainer}>
      {/* Floating Icons */}
      <div className={footerStyles.floatingIcon1}>
        <Stethoscope className={footerStyles.stethoscopeIcon} />
      </div>

      <div
        className={footerStyles.floatingIcon2}
        style={{ animationDelay: "3s" }}
      >
        <Activity className={footerStyles.activityIcon} />
      </div>

      {/* Company Section */}
      <div className={footerStyles.mainContent}>
        <div className={footerStyles.gridContainer}>
      <div className={footerStyles.companySection}>
        <div className={footerStyles.logoContainer}>
          <div className={footerStyles.logoWrapper}>
            <div className={footerStyles.logoImageContainer}>
              <img
                src={logo}
                alt="logo"
                className={footerStyles.logoImage}
              />
            </div>
          </div>

            <div>
                <h2 className={footerStyles.companyName}>
                    MediCare
                </h2>

                <p className={footerStyles.companyTagline}>
                    HealthCare Solutions
                </p>
            </div>
         </div>
         <p className={footerStyles.companyDescription}>
            Your trusted partner in HealthCare innvoation. We're comitted
            to provided expectional MediCare  with cutting-edge Technology
            compassionate service.
         </p>

         <div className={footerStyles.contactContainer}>
            <div className={footerStyles.contactItem}>
                <div className={footerStyles.contactIconWrapper}>
                    <Phone className={footerStyles.contactIcon} />
                </div>
                <span className={footerStyles.contactText}>+91 7386592899</span>
            </div>

            <div className={footerStyles.contactItem}>
                <div className={footerStyles.contactIconWrapper}>
                    <Mail className={footerStyles.contactIcon} />
                </div>
                <span className={footerStyles.contactText}>gayammahendrareddy09@gmail.com</span>
            </div>

            <div className={footerStyles.contactItem}>
                <div className={footerStyles.contactIconWrapper}>
                    <MapPin className={footerStyles.contactIcon} />
                </div>
                <span className={footerStyles.contactText}>Andhra Pradesh,India</span>
            </div>
         </div>
        </div>

            {/*quick Link */}
            <div className={footerStyles.linksSection}>
                <h3 className={footerStyles.sectionTitle}>
                    Quick Links
                </h3>
                <ul className={footerStyles.linksList}>
                    {quickLinks.map((link,index) => (
                        <li 
                            key={link.name}
                            className={footerStyles.linkItem}
                        >
                            <a href={link.href}
                                className={footerStyles.quickLink}
                                style={{
                                    animationDelay: `${index * 60}ms`,
                                }}
                            > 
                                <div className={footerStyles.quickLinkIconWrapper}>
                                <ArrowRight className={footerStyles.quickLinkIcon} />
                                </div>
                                <span>{link.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className={footerStyles.linksSection}>
                <h3 className={footerStyles.sectionTitle}>
                    Our Services
                </h3>

                <ul className={footerStyles.linksList}>
                    {services.map((service, index) => (
                        <li key={service.name}>
                            <a href={service.href}
                                className={footerStyles.serviceLink}
                            >
                                <div className={footerStyles.serviceIcon}>
                                </div>
                                <span>{service.name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Newsletter & Social */}
                <div className={footerStyles.newsletterSection}>
                <h3 className={footerStyles.newsletterTitle}>Stay Connected</h3>
                <p className={footerStyles.newsletterDescription}>
                    Subscribe for Health Tips, Medical Updates, and Wellness Insights Delivered
                    to your Inbox.
                </p>

                {/* Newsletter form */}
                <div className={footerStyles.newsletterForm}>
                    <div className={footerStyles.mobileNewsletterContainer}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className={footerStyles.emailInput}
                    />
                    <button className={footerStyles.mobileSubscribeButton}>
                        <Send className={footerStyles.mobileButtonIcon} />
                            Subscribe
                    </button>
                    </div>

                    {/* Desktop newsletter */}
                    <div className={footerStyles.desktopNewsletterContainer}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className={footerStyles.desktopEmailInput}
                    />
                    <button className={footerStyles.desktopSubscribeButton}>
                        <Send className={footerStyles.desktopButtonIcon} />
                        <span className={footerStyles.desktopButtonText}>Subscribe</span>
                    </button>
                    </div>

                    {/* Social icons */}
                    <div className={footerStyles.socialContainer}>
                    {socialLinks.map(({ Icon, color, name, href }, index) => (
                        <a
                        key={name}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={footerStyles.socialLink}
                        style={{ animationDelay: `${index * 120}ms` }}
                        >
                        <div className={footerStyles.socialIconBackground} />
                        <Icon
                            className={footerStyles.socialIcon}
                            style={{ color }}
                            />
                        </a>
                    ))}
                    </div>
                </div>
            </div>
        </div>

        <div className={footerStyles.bottomSection}>
            <div className={footerStyles.copyright}>
                <span>&copy; {currentYear} MediCare HealthCare.</span>
            </div>

            <div className={footerStyles.designerText}>
                <span>Designed By</span>
                <a
                    href="https://www.MahiReddy.com"
                    target="_blank"
                    className={footerStyles.designerLink}
                >
                    Mahi Reddy
                </a>
            </div>
        </div>
      </div>

      <style>{footerStyles.animationStyles}</style>
    </footer>
  );
};

export default Footer;
