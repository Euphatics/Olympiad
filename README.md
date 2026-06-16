# NTI Olympiad Website

A React + Vite web application for the **NTI Olympiad** platform — an academic competition portal for school students across Mathematics, English, Science, IT, and Finance.

---

## Tech Stack

| Tool | Version |
|---|---|
| React | 19 |
| Vite | 8 |
| Tailwind CSS | 4 |
| Lucide React | 1.18 |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs at `http://localhost:5173` by default.

---

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx            # Fixed top navbar with dropdown menus (Olympiads, FAQs, Preparations)
│   ├── HomeHero.jsx          # Landing section with slideshow placeholder + school registration form
│   ├── ImportantInfo.jsx     # Important notices / info strip
│   ├── SubjectsOffered.jsx   # Grid of olympiad subjects offered
│   ├── AboutNTI.jsx          # About section with stats banner, vision & mission
│   ├── AssociatedSchools.jsx # Associated/partner schools showcase
│   ├── ContactUs.jsx         # Contact page (hero banner, info + form, map, footer)
│   ├── FAQ.jsx               # Accordion FAQ component
│   ├── FAQPage.jsx           # FAQ page wrapper
│   ├── Footer.jsx            # Main site footer
│   ├── ContactFooter.jsx     # Compact contact info footer strip
│   ├── FooterCopyright.jsx   # Copyright bar with social links
│   └── OlympiadDropdown.jsx  # Reusable olympiad dropdown component
├── App.jsx                   # Root app with page-state routing (home / contact)
├── index.css                 # Global styles + Tailwind theme tokens
└── main.jsx                  # React DOM entry point
```

---

## Design Tokens

The site uses a consistent color system defined across components:

| Token | Hex | Usage |
|---|---|---|
| Primary Blue | `#007BFF` | Buttons, borders, accent bars |
| Hover Blue | `#0069D9` | Button hover states |
| Royal Navy | `#1E3A8A` | Hero gradients, CTA buttons |
| Royal Deep | `#172554` | Deep gradient stops |
| Teal Green | `#0D9488` | Section labels (OUR LOCATION, PHONE…) |
| Heading | `#1F2937` | All headings |
| Body | `#4B5563` | Paragraph text |
| Muted | `#9CA3AF` | Metadata, placeholders |
| Border | `#E5E7EB` | All borders |
| Bg Section | `#F9FAFB` | Section backgrounds |

---

## Pages

### Home (`/`)
- Fixed navbar with multi-level dropdowns
- School registration form
- Subjects offered grid
- About NTI section with global stats

### Contact Us
Accessible via **FAQs → Contact Us** in the navbar.
- Blue gradient hero banner
- Two-column layout: contact info (left) + contact form (right)
- Embedded Google Map pinned to Kurla, Mumbai
- Clicking the logo navigates back to Home

---

## Branches

| Branch | Purpose |
|---|---|
| `main` | Production-ready code |
| `ar-main` | AR feature branch |
| `feature/contact-us` | Contact Us page development |

---

## Notes

- No routing library is used — page state is managed via a `useState` in `App.jsx`
- `node_modules` is gitignored; run `npm install` after cloning
- Footer is currently a placeholder — marked *"Not made yet"*
