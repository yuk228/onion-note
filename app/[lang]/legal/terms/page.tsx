import { getLegalDictionary } from "@/lib/lang/legal/dictionary";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: "en" | "ja" }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getLegalDictionary("terms", lang);

  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
  };
}

export default async function TermsPage({ params }: { params: Promise<{ lang: "en" | "ja" }> }) {
  const { lang } = await params;
  const dict = await getLegalDictionary("terms", lang);

  return (
    <main className="min-h-screen p-8 mt-20">
      <div className="max-w-4xl mx-auto bg-background rounded-lg shadow-lg p-8 border border-border">
        <h1 className="text-3xl font-bold mb-8">{dict.title}</h1>

        <div className="prose max-w-none">
          <p className="text-sm text-muted-foreground mb-8">{dict.lastModified}</p>

          {/* Service Description */}
          <h2 className="text-xl font-semibold mb-4">{dict.sections.serviceDescription.title}</h2>
          <p className="mb-6">{dict.sections.serviceDescription.content}</p>

          {/* User Responsibilities */}
          <h2 className="text-xl font-semibold mb-4">{dict.sections.userResponsibilities.title}</h2>
          <p className="mb-6">{dict.sections.userResponsibilities.content}</p>
          {dict.sections.userResponsibilities.list && (
            <ul className="list-disc pl-6 mb-6">
              {dict.sections.userResponsibilities.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}

          {/* Disclaimer of Warranties */}
          <h2 className="text-xl font-semibold mb-4">
            {dict.sections.disclaimerOfWarranties.title}
          </h2>
          {Array.isArray(dict.sections.disclaimerOfWarranties.content) ? (
            dict.sections.disclaimerOfWarranties.content.map((paragraph, index) => (
              <p key={index} className="mb-6">
                {paragraph}
              </p>
            ))
          ) : (
            <p className="mb-6">{dict.sections.disclaimerOfWarranties.content}</p>
          )}

          {/* Limitation of Liability */}
          <h2 className="text-xl font-semibold mb-4">
            {dict.sections.limitationOfLiability.title}
          </h2>
          <p className="mb-6">{dict.sections.limitationOfLiability.content}</p>
          {dict.sections.limitationOfLiability.list && (
            <ul className="list-disc pl-6 mb-6">
              {dict.sections.limitationOfLiability.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}

          {/* Service Modifications */}
          <h2 className="text-xl font-semibold mb-4">{dict.sections.serviceModifications.title}</h2>
          <p className="mb-6">{dict.sections.serviceModifications.content}</p>

          {/* Prohibited Uses */}
          <h2 className="text-xl font-semibold mb-4">{dict.sections.prohibitedUses.title}</h2>
          <p className="mb-6">{dict.sections.prohibitedUses.content}</p>
          {dict.sections.prohibitedUses.list && (
            <ul className="list-disc pl-6 mb-6">
              {dict.sections.prohibitedUses.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}

          {/* Use of Cookies */}
          <h2 className="text-xl font-semibold mb-4">{dict.sections.useOfCookies.title}</h2>
          <p className="mb-6">{dict.sections.useOfCookies.content}</p>

          {/* Governing Law */}
          <h2 className="text-xl font-semibold mb-4">{dict.sections.governingLaw.title}</h2>
          <p className="mb-6">{dict.sections.governingLaw.content}</p>

          {/* Changes to Terms */}
          <h2 className="text-xl font-semibold mb-4">{dict.sections.changesToTerms.title}</h2>
          <p className="mb-6">{dict.sections.changesToTerms.content}</p>
        </div>
      </div>
    </main>
  );
}
