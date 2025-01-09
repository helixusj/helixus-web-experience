import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navigation = () => {
  return (
    <nav className="bg-background border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex flex-col items-start">
            <Link to="/" className="text-2xl font-bold text-primary">
              Helixus
            </Link>
            <span className="text-base text-gray-600 mt-1">Intersections in Lifesciences</span>
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className="text-foreground hover:text-primary transition-colors px-4 py-2">
                  Home
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>Journal</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-4 w-[400px] bg-white/80 backdrop-blur-sm">
                    <Link to="/journal-information" className="block p-2 hover:bg-accent rounded-md">
                      Journal Information
                    </Link>
                    <Link to="/instructions-to-authors" className="block p-2 hover:bg-accent rounded-md">
                      Instructions to Authors
                    </Link>
                    <Link to="/current-issue" className="block p-2 hover:bg-accent rounded-md">
                      Current Issue
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/editors" className="text-foreground hover:text-primary transition-colors px-4 py-2">
                  Editorial
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/submit-manuscript" className="text-foreground hover:text-primary transition-colors px-4 py-2">
                  Submit Manuscript
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/contact" className="text-foreground hover:text-primary transition-colors px-4 py-2">
                  Contact
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;