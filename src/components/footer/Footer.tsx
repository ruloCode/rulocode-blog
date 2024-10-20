import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "../header/Logo";
import MaxWidthWrapper from "../maxWidthWrapper/MaxWidthWrapper";

export default function Footer() {
  return (
    <footer className="border-t">
      <MaxWidthWrapper className="w-full flex flex-col  py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <Logo />

          <nav className="flex flex-wrap justify-center md:justify-end gap-4">
            
          
            <Button variant="link" asChild>
              <Link href="/protfolio">Portfolio</Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="/blog">Blog</Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
          </nav>
        </div>
        <div className="flex justify-center space-x-4 text-sm text-gray-500">
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="/cookies-settings" className="hover:underline">
            Cookies Settings
          </Link>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
}
