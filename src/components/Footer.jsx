import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="mt-auto">
        <div className="flex justify-center mt-6 mb-2">
          <a className="flex-shrink-0 font-bold text-xl text-gray-900 dark:text-white inline-flex items-center">
            talent
            <span className="text-primary">spot</span>
          </a>
        </div>
        <div className="flex gap-4 justify-center mb-8">
          <a href="/" className="text-sm">
            Terms
          </a>
          <a href="/" className="text-sm">
            Privacy
          </a>
          <a href="/" className="text-sm">
            Legal
          </a>
          <a href="/" className="text-sm">
            Publicity
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
