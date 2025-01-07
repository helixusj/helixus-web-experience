import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-primary">
            Helixus
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/journal-information" className="text-foreground hover:text-primary transition-colors">
              Journal Information
            </Link>
            <Link to="/instructions-to-authors" className="text-foreground hover:text-primary transition-colors">
              Instructions to Authors
            </Link>
            <Link to="/editors" className="text-foreground hover:text-primary transition-colors">
              Editorial Board
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;