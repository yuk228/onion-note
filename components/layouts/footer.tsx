import { getFooterDictionary } from "@/lib/lang/footer/dictionary";
import { FooterDictionary } from "@/lib/types";
import Link from "next/link";

export default async function Footer({ lang }: { lang: "en" | "ja" }) {
  const dict: FooterDictionary = await getFooterDictionary(lang);
  return (
    <footer>
      <div className="flex flex-row justify-center gap-4 text-muted-foreground">
        <Link
          href="/legal/terms"
          className="hover:text-foreground hover:underline transition-colors"
        >
          {dict.legal.terms}
        </Link>
        <Link
          href="/legal/privacy"
          className="hover:text-foreground hover:underline transition-colors"
        >
          {dict.legal.privacy}
        </Link>
      </div>
      <div className="flex flex-col md:flex-row md:gap-4 text-center justify-center py-4 text-muted-foreground">
        <p className="md:pr-1">Copyright © 2025 Onion Note</p>
        <p>
          {dict.sourceCode}{" "}
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
}
