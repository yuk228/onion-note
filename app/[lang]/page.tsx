import { getDictionary } from "@/lib/lang/dictionary";
import HomeClient from "@/app/[lang]/HomeClient";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "ja");

  return <HomeClient dict={dict} />;
}
