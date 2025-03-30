import React from "react";

const Header = () => {
  return (
    <header className="mx-auto py-4 shadow">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="https://cdn.coversandall.com.au/media/logo/stores/3/cov_logo_original.png" alt="Logo" className="w-full h-auto" />
        </div>
      </div>
    </header>
  );
};

export default Header;
