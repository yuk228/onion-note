import { getLegalDictionary } from "@/lib/lang/legal/dictionary";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: "en" | "ja" }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getLegalDictionary("privacy", lang);

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
  };
}

export default async function PrivacyPage({ params }: { params: Promise<{ lang: "en" | "ja" }> }) {
  const { lang } = await params;
  const dict = await getLegalDictionary("privacy", lang);

  return (
    <main className="min-h-screen p-8 mt-20">
      <div className="max-w-4xl mx-auto bg-background rounded-lg shadow-lg p-8 border border-border">
        <h1 className="text-3xl font-bold mb-8">{dict.title}</h1>

        <div className="prose max-w-none">
          <p className="text-sm text-muted-foreground mb-8">{dict.lastModified}</p>

          {/* Introduction */}
          <p className="mb-6">{dict.sections.introduction.content}</p>

          {/* Service Description */}
          <h2 className="text-xl font-semibold mb-4">{dict.sections.serviceDescription.title}</h2>
          {Array.isArray(dict.sections.serviceDescription.content) ? (
            dict.sections.serviceDescription.content.map((paragraph, index) => (
              <p key={index} className="mb-6">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="mb-6">{dict.sections.serviceDescription.content}</p>
          )}

          {/* Note Processing */}
          <h2 className="text-xl font-semibold mb-4">{dict.sections.noteProcessing.title}</h2>
          {Array.isArray(dict.sections.noteProcessing.content) ? (
            dict.sections.noteProcessing.content.map((paragraph, index) => (
              <p key={index} className="mb-6">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="mb-6">{dict.sections.noteProcessing.content}</p>
          )}

          {/* IP Address Processing */}
          <h2 className="text-xl font-semibold mb-4">{dict.sections.ipAddressProcessing.title}</h2>
          <p className="mb-6">{dict.sections.ipAddressProcessing.content}</p>

          {/* Pseudonymous Data */}
          <h2 className="text-xl font-semibold mb-4">{dict.sections.pseudonymousData.title}</h2>
          {Array.isArray(dict.sections.pseudonymousData.content) ? (
            dict.sections.pseudonymousData.content.map((paragraph, index) => (
              <p key={index} className="mb-6">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="mb-6">{dict.sections.pseudonymousData.content}</p>
          )}

          {/* Disclaimer */}
          <h2 className="text-xl font-semibold mb-4">{dict.sections.disclaimer.title}</h2>
          <p className="mb-6">{dict.sections.disclaimer.content}</p>

          {/* Data Disclosure */}
          <h2 className="text-xl font-semibold mb-4">{dict.sections.dataDisclosure.title}</h2>
          <p className="mb-6">{dict.sections.dataDisclosure.content}</p>

          {/* Cookies */}
          <h2 className="text-xl font-semibold mb-4">{dict.sections.cookies.title}</h2>
          <p className="mb-6">{dict.sections.cookies.content}</p>

          {/* Children */}
          <h2 className="text-xl font-semibold mb-4">{dict.sections.children.title}</h2>
          <p className="mb-6">{dict.sections.children.content}</p>

          {/* Policy Validity */}
          <h2 className="text-xl font-semibold mb-4">{dict.sections.policyValidity.title}</h2>
          <p className="mb-6">{dict.sections.policyValidity.content}</p>
        </div>
      </div>
    </main>
  );
}
