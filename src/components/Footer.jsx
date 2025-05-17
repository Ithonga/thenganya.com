import { useState } from "react";
import {
  PhoneCall,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would send this to your backend
      console.log("Newsletter subscription:", email);
      setSubscribed(true);
      setEmail("");

      // Reset after 3 seconds
      setTimeout(() => {
        setSubscribed(false);
      }, 30000);
    }
  };

  return (
    <footer className="bg-[#1a1a1a] text-white bottom-0">
      <div className="p-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/home" className="flex items-center mb-6">
              <img
                src="/logoback.png"
                className="w-[300px]"
              ></img>
            </Link>
            <p className="text-gray-300 mb-6">
              Experience luxury and tranquility in our exquisite resort nestled
              in lush gardens with world-class amenities and exceptional
              service.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-blue-400 hover:text-white p-2 rounded-full transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-blue-400 hover:text-white p-2 rounded-full transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-blue-400 hover:text-white p-2 rounded-full transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/home"
                  className="text-gray-300 hover:text-yellow-400  transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-yellow-400  transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/article"
                  className="text-gray-300 hover:text-yellow-400  transition-colors"
                >
                  Article
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/awards"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Awards
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-gray-300 hover:text-yellow-400  transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/contacts"
                  className="text-gray-300 hover:text-yellow-400 transition-colors"
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <PhoneCall
                  size={20}
                  className="mr-3 text-yellow-400  flex-shrink-0"
                />
                <a
                  href="tel:+12345678900"
                  className="text-gray-300 hover:text-yellow-400  transition-colors"
                >
                  +254 787-654-321
                </a>
              </li>
              <li className="flex">
                <Mail
                  size={20}
                  className="mr-3 text-yellow-400  flex-shrink-0"
                />
                <a
                  href="mailto:info@kitongagarden.com"
                  className="text-gray-300 hover:text-yellow-400  transition-colors"
                >
                  info@thenganya.com
                </a>
              </li>
              <li className="flex">
                <MapPin
                  size={20}
                  className="mr-3 text-yellow-400  flex-shrink-0"
                />
                <span className="text-gray-300">
                  Nairobi CBD
                </span>
              </li>
            </ul>
            {/* <div className="mt-6 p-4 bg-white/5 rounded-sm">
              <h4 className="font-medium mb-2">Business Hours</h4>
              <p className="text-gray-400 text-sm">
                Check-in: 3:00 PM
                <br />
                Check-out: 11:00 AM
                <br />
                Front Desk: 24/7
              </p>
            </div> */}
          </div>

          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">
              Newsletter
            </h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for special offers and updates.
            </p>
            {subscribed ? (
              <div className="p-3 bg-yellow-400 rounded-sm text-white mb-3">
                Thank you for subscribing!
              </div>
            ) : null}
            <form className="space-y-3" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-sm focus:outline-none focus:ring-1 focus:ring-yellow-400 text-white placeholder:text-gray-400"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="w-full bg-blue-400 text-white px-4 py-3 rounded-sm hover:bg-opacity-90 transition-all font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} thenganya.com. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mt-4 text-sm text-gray-400">
            <a href="#" className="hover:text-yellow-400  transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-yellow-400  transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-yellow-400  transition-colors">
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
