import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-100 py-4 mt-10 border-t">
      <div className="max-w-6xl mx-auto text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} MyApp. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
