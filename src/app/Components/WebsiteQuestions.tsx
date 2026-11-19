import Link from "next/link";

const questions = [
  { question: "How much does a business website cost in Mauritius?", answer: "The scope determines the price: the number of pages, content, design requirements, e-commerce features and integrations all matter. Use our quotation tool for an initial estimate, then discuss the requirements with our team before agreeing the scope." },
  { question: "Can you improve an existing website?", answer: "Yes. Our website upgrade and maintenance services cover design improvements, new features, performance work, platform migrations and ongoing technical support. We review the current website and business requirements before recommending changes." },
  { question: "Does website development include SEO?", answer: "We consider page structure, mobile usability, metadata and performance during development. Search visibility also depends on useful content, competition and ongoing work. A website launch does not guarantee a particular Google position." },
  { question: "Do you build e-commerce websites and custom web applications?", answer: "Yes. We develop company websites, e-commerce platforms and web applications such as client onboarding systems and quotation tools. Requirements, integrations and delivery stages are agreed for each project." },
];

export default function WebsiteQuestions() {
  return (
    <section aria-labelledby="website-questions" className="max-w-[1200px] mx-auto px-6 md:px-10 py-12 sm:py-16">
      <h2 id="website-questions" className="text-white text-3xl sm:text-4xl">Website design questions</h2>
      <div className="mt-8 space-y-4">
        {questions.map(({ question, answer }) => (
          <details key={question} className="rounded-2xl border border-white/10 bg-black/40 p-5 sm:p-6">
            <summary className="cursor-pointer text-lg text-white">{question}</summary>
            <p className="mt-4 text-white/85 leading-relaxed">{answer}</p>
          </details>
        ))}
      </div>
      <p className="mt-8 text-white/85 leading-relaxed">
        See our work for <Link href="/CaseStudy1" className="text-[#ff1f00] underline">NouMarmite</Link>,{" "}
        <Link href="/CaseStudy2" className="text-[#ff1f00] underline">Mauritius Health Travel</Link> and{" "}
        <Link href="/CaseStudy3" className="text-[#ff1f00] underline">Mauritius Travel & Tour</Link>, or{" "}
        <Link href="/contactus" className="text-[#ff1f00] underline">discuss your website</Link> with our team.
      </p>
    </section>
  );
}
