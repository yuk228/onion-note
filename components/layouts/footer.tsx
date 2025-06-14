import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-row justify-center gap-4 text-muted-foreground">
        <Link href="/legal/terms" className="hover:text-foreground hover:underline transition-colors">Terms of Service</Link>
        <Link href="/legal/privacy" className="hover:text-foreground hover:underline transition-colors">Privacy Policy</Link>
      </div>
      <p className="text-center py-4 text-muted-foreground">
        Copyright © 2025 Onion Note | All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
