import '../styles/Footer.css'

const badges = [
  { cls: 'imo', label: 'IMO' }, { cls: 'nso', label: 'NSO' },
  { cls: 'ieo', label: 'IEO' }, { cls: 'nco', label: 'NCO' },
]

const MapPin = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
)
const Mail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4 12 13 2 4"/></svg>
)
const Phone = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
)
const Clock = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
)

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-grid">
          {/* Col 1 */}
          <div>
            <h3 className="footer-heading">CONTACT US</h3>
            <div className="footer-contact-item">
              <MapPin/>
              <div>
                <p><strong>Science Olympiad Foundation</strong></p>
                <p>Plot no 99, Sector - 44, Gurugram (Haryana)</p>
                <p>India. Pin – 122003</p>
              </div>
            </div>
            <div className="footer-contact-item">
              <MapPin/>
              <div>
                <p><strong>Regd Office:</strong> 406, Taj Apartment, Ring Road,</p>
                <p>Adjacent Safdarjung Hospital, New Delhi,</p>
                <p>India. Pin – 110029</p>
              </div>
            </div>
            <div className="footer-contact-item">
              <Mail/><a href="mailto:info@sofworld.org">info@sofworld.org</a>
            </div>
          </div>
          {/* Col 2 */}
          <div>
            <div className="footer-contact-item">
              <Phone/>
              <div>
                <p>Landline: +91 124-4951200</p>
                <p>Mobile1: +91 9312680855</p>
                <p>Mobile2: +91 9312680857</p>
              </div>
            </div>
            <div className="footer-contact-item">
              <Clock/>
              <div>
                <p>All working Days From</p>
                <p>Monday – Friday</p>
                <p>8:30 AM – 5:30 PM</p>
              </div>
            </div>
            <div className="footer-contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
          {/* Col 3 */}
          <div>
            <h3 className="footer-heading">QUICK LINKS</h3>
            <ul className="footer-links-list">
              {['About SOF','Olympiad Exams','Sample Papers','Results','School Registration','FAQ'].map(l => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>
          {/* Col 4 */}
          <div>
            <h3 className="footer-heading">OUR OLYMPIADS</h3>
            <div className="olympiad-badges">
              {badges.map(b => <span key={b.cls} className={`olympiad-badge ${b.cls}`}>{b.label}</span>)}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="copyright">Copyright © 2024 <strong>SCIENCE OLYMPIAD FOUNDATION</strong> | All Rights Reserved | No part of this site including content and/or logo, may be copied and/or used in any manner without prior written consent of SOF.</p>
          <div className="social-links">
            <span>Connect with us</span>
            <a href="#" className="social-icon social-fb" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" className="social-icon social-ig" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="#" className="social-icon social-li" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
