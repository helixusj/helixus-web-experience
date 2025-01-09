import { useLocation } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "react-router-dom";

const routeNames: { [key: string]: string } = {
  "/": "Home",
  "/journal-information": "Journal Information",
  "/instructions-to-authors": "Instructions to Authors",
  "/current-issue": "Current Issue",
  "/editors": "Editorial Board",
  "/submit-manuscript": "Submit Manuscript",
  "/contact": "Contact",
};

export function BreadcrumbNav() {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  
  return (
    <Breadcrumb className="mb-6 px-4">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;
          
          return (
            <BreadcrumbItem key={path}>
              {isLast ? (
                <BreadcrumbPage>{routeNames[path] || segment}</BreadcrumbPage>
              ) : (
                <>
                  <BreadcrumbLink as={Link} to={path}>
                    {routeNames[path] || segment}
                  </BreadcrumbLink>
                  <BreadcrumbSeparator />
                </>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}