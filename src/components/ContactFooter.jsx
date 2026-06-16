import { MapPin, Mail, Phone, Clock, Lock } from 'lucide-react';

export default function ContactFooter() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg max-w-3xl">
      <h3 className="text-lg font-medium mb-4">
        <span className="text-blue-600">Contact</span> Us
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ul className="space-y-3">
          <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            <MapPin size={18} className="flex-shrink-0 mt-0.5" />
            <div>
              Science Olympiad Foundation<br />
              Plot no 99, Sector - 44, Gurugram (Haryana) India. Pin - 122003
              <br /><br />
              <b>Regd Office:</b> 406, Taj Apartment, Ring Road, Adjacent Safdarjung Hospital, New Delhi, India. Pin – 110029
            </div>
          </li>
          <li className="flex items-center gap-3 text-sm">
            <Mail size={18} />
            <a href="mailto:info@sofworld.org" className="text-blue-600">info@sofworld.org</a>
          </li>
        </ul>
        <ul className="space-y-3">
          <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            <Phone size={18} className="flex-shrink-0 mt-0.5" />
            <div>
              Landline: +91 124-4951200<br />
              Mobile1: +91 9312680855<br />
              Mobile2: +91 9312680857
            </div>
          </li>
          <li className="flex gap-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            <Clock size={18} className="flex-shrink-0 mt-0.5" />
            <div>
              All working days from<br />
              Monday - Friday<br />
              8:30 AM - 5:30 PM
            </div>
          </li>
          <li className="flex items-center gap-3 text-sm">
            <Lock size={18} />
            <a href="privacy-policy.html" className="text-blue-600">Privacy Policy</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
