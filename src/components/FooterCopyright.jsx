import { Facebook, Instagram, Linkedin, ChevronUp } from 'lucide-react';

export default function FooterCopyright() {
  return (
    <div className="relative bg-gray-50 dark:bg-gray-900 px-6 py-4 rounded-lg flex flex-wrap items-center justify-between gap-3">
      <div className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed max-w-md">
        Copyright © 2024 <a href="index.html" className="text-blue-600">SCIENCE OLYMPIAD FOUNDATION</a> | All Rights Reserved | No part of this site including content and/or logo, may be copied and/or used in any manner without prior written consent of SOF
      </div>

      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600 dark:text-gray-300">Connect with us</span>
        <ul className="flex gap-2 list-none m-0 p-0">
          <li>
            <a href="http://www.facebook.com/sofworld" aria-label="Facebook"
               className="flex w-8 h-8 rounded-full border border-gray-300 dark:border-gray-700 items-center justify-center text-gray-800 dark:text-gray-200">
              <Facebook size={16} />
            </a>
          </li>
          <li>
            <a href="http://www.instagram.com/sof_olympiad" aria-label="Instagram"
               className="flex w-8 h-8 rounded-full border border-gray-300 dark:border-gray-700 items-center justify-center text-gray-800 dark:text-gray-200">
              <Instagram size={16} />
            </a>
          </li>
          <li>
            <a href="http://www.linkedin.com/company/science-olympiad-foundation" aria-label="LinkedIn"
               className="flex w-8 h-8 rounded-full border border-gray-300 dark:border-gray-700 items-center justify-center text-gray-800 dark:text-gray-200">
              <Linkedin size={16} />
            </a>
          </li>
        </ul>
      </div>

      <a href="#top" aria-label="Back to top"
         className="absolute -right-2 -top-7 w-9 h-9 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 flex items-center justify-center text-gray-800 dark:text-gray-200">
        <ChevronUp size={18} />
      </a>
    </div>
  );
}
