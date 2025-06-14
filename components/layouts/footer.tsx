import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white-foreground bg-gradient-to-br from-slate-50 to-zinc-50">
      <div className="container mx-auto px-4 py-10 md:px-6 ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="pr-4">
            <h3 className="font-bold mb-4 text-lg">Onion Note</h3>
            <p className="text-muted-foreground">
              Onion Note is an end-to-end encrypted text-sharing service. It is a free and
              open-source project.
            </p>
          </div>
          <div className="pr-4">
            <h3 className="font-bold mb-4 text-lg">Follow us</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>
                <Link
                  href="https://github.com/yuk228/"
                  className="hover:text-foreground transition-colors"
                >
                  Github
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Youtube
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-foreground transition-colors">
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
          <div className="pr-4">
            <h3 className="font-bold mb-4 text-lg">Support</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>
                <Link
                  href="https://discordapp.com/users/1327859790088503409"
                  className="hover:text-foreground transition-colors"
                >
                  Discord
                </Link>
              </li>
              <li>
                <Link
                  href="https://simplex.chat/contact#/?v=2-7&smp=smp%3A%2F%2F0YuTwO05YJWS8rkjn9eLJDjQhFKvIYd8d4xG8X1blIU%3D%40smp8.simplex.im%2FolTYtcyMcPa5kpG5fWsIKogPE5FogsWh%23%2F%3Fv%3D1-3%26dh%3DMCowBQYDK2VuAyEAxzijX3CIw_xX_4XtA7k6oHA0I3q7FHPdCv9UG65spig%253D%26srv%3Dbeccx4yfxxbvyhqypaavemqurytl6hozr47wfc7uuecacjqdvwpw2xid.onion"
                  className="hover:text-foreground transition-colors"
                >
                  SimpleX
                </Link>
              </li>
              <li>
                <Link
                  href="https://t.me/moyaiscanner"
                  className="hover:text-foreground transition-colors"
                >
                  Telegram
                </Link>
              </li>
            </ul>
          </div>
          <div className="pr-4">
            <h3 className="font-bold mb-4 text-lg">Legal Information</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>
                <Link href="/terms" className="hover:text-foreground transition-colors">
                  Terms Of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="md:flex pt-4 mt-4 gap-4 border-t border-white-foreground text-muted-foreground">
          <p>Copyright © 2025 Onion Note | All Rights Reserved</p>
          <p>
            Source code are available on{" "}
            <span>
              <Link
                href="https://github.com/yuk228/onion-note"
                className="hover:text-foreground hover:underline transition-colors"
              >
                Github
              </Link>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
