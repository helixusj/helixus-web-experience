import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleAboutDropdown = () => setAboutDropdownOpen(!aboutDropdownOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-primary">Helixus</Link>
          
          {/* Mobile menu button */}
          <button onClick={toggleMenu} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary">Home</Link>
            
            {/* About dropdown */}
            <div className="relative group">
              <button 
                onClick={toggleAboutDropdown}
                className="text-gray-700 hover:text-primary flex items-center"
              >
                About <ChevronDown size={16} className="ml-1" />
              </button>
              <div className="absolute z-10 hidden group-hover:block w-48 bg-white shadow-lg py-2">
                <Link to="/journal-information" className="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white">
                  Journal Information
                </Link>
                <Link to="/instructions-to-authors" className="block px-4 py-2 text-gray-700 hover:bg-primary hover:text-white">
                  Instructions to Authors
                </Link>
              </div>
            </div>

            <Link to="/current-issue" className="text-gray-700 hover:text-primary">Current Issue</Link>
            <Link to="/editors" className="text-gray-700 hover:text-primary">Editors</Link>
            <Link to="/submit-manuscript" className="text-gray-700 hover:text-primary">Submit Manuscript</Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary">Contact</Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <Link to="/" className="block py-2 text-gray-700 hover:text-primary">Home</Link>
            <button 
              onClick={toggleAboutDropdown}
              className="w-full text-left py-2 text-gray-700 hover:text-primary flex items-center justify-between"
            >
              About <ChevronDown size={16} />
            </button>
            {aboutDropdownOpen && (
              <div className="pl-4">
                <Link to="/journal-information" className="block py-2 text-gray-700 hover:text-primary">
                  Journal Information
                </Link>
                <Link to="/instructions-to-authors" className="block py-2 text-gray-700 hover:text-primary">
                  Instructions to Authors
                </Link>
              </div>
            )}
            <Link to="/current-issue" className="block py-2 text-gray-700 hover:text-primary">Current Issue</Link>
            <Link to="/editors" className="block py-2 text-gray-700 hover:text-primary">Editors</Link>
            <Link to="/submit-manuscript" className="block py-2 text-gray-700 hover:text-primary">Submit Manuscript</Link>
            <Link to="/contact" className="block py-2 text-gray-700 hover:text-primary">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;