import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-row justify-center gap-4 text-muted-foreground">
        <Link
          href="/legal/terms"
          className="hover:text-foreground hover:underline transition-colors"
        >
          Terms of Service
        </Link>
        <Link
          href="/legal/privacy"
          className="hover:text-foreground hover:underline transition-colors"
        >
          Privacy Policy
        </Link>
      </div>
      <div className="flex flex-col md:flex-row md:gap-4 text-center justify-center py-4 text-muted-foreground">
        <p className="md:pr-1">Copyright © 2025 Onion Note</p>
        <p>
          Sorce code are available on{" "}
          <Link
            href="https://github.com/yuk228/onion-note"
            className="hover:text-foreground hover:underline transition-colors"
          >
            GitHub
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
