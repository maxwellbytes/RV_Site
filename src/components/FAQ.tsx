import { useState } from 'react'

// custom type for FAQ items
type FAQItem = {
  question: string
  answer: string | React.ReactNode //using fragment for photos link
}

const faqs: FAQItem[] = [
  {
    question: 'Is Brookshire Basecamp a full hookup RV site?',
    answer:
      'Yes — Brookshire Basecamp offers complete full hookups: 30A and 50A electrical service, a well water connection, and a 4” septic hookup. You\'ll have everything you need for a comfortable stay of any length.',
  },
  {
    question: 'What size RV fits on the pad?',
    answer:
      'The gravel pad is 60 feet long, but the site is best accessed by rigs 30 feet or shorter due to the spur road. To back into the site, vehicles must travel up the road and turn around at a quiet 4-way intersection. Boone doesn\'t have much flat land and this site requires backing into it from a slanted road. The site comfortably fits one RV or up to three camper vans from the same group. Contact us if you\'re unsure whether your rig is a good fit',
  },
  {
    question: 'Is the site truly private? Will I share it with other guests?',
    answer:
      <>
      The Brookshire Basecamp is a single-site rental. When you book, your group is the only one on-site. Being this close to Boone, this site is not completely wooded and there is a neighboring house close by but there is a privacy fence in-between
      <a href="/#photos" className="text-green-700 hover:text-header no-underline"> (see photos)</a>.
      </>
  },
  {
    question: 'Are pets welcome at Brookshire Basecamp?',
    answer:
      'Yes, well-behaved pets are welcome. Please keep them leashed near the creek and clean up after them. Let us know you\'re bringing a pet in your booking request.',
  },
  {
    question: 'What is the check-in / check-out process?',
    answer:
      'Check-in is between 2:00 PM and 8:00PM, check-out is at 11:00 AM. Early check-in or late checkout may be available depending on the calendar so just ask when you book.',
  },
  {
    question: 'Is there cell service and internet access on-site?',
    answer:
      'Yes — he High Country has reliable cellular coverage from major carriers and there is an on-site WiFi internet connection',
  },
  {
    question: "Are trash bins or recycling available on site?",
    answer: "Trash bins are not available on site because of their attraction of wildlife. We ask that you keep all trash indoors. Watuaga County has a trash transfer station at Landfill Rd which is within two miles away from this site"
  },
  {
    question: "What are the site rules?",
    answer: 
      <>
        <ul className="list-disc pl-4 gap-y-2 flex flex-col">
          <li>
            Have fun and relax!
          </li>
          <li>
            Keep all trash and unattended food inside. There are many harmless wild animals around this site.
          </li>
          <li>
            Be respectful of the neighbors.
          </li>
          <li>
            Quiet hours are from 10PM until 8AM.
          </li>
          <li>
            Dogs to be kept on a leash to prevent them from harassing the wildlife.
          </li>
          <li>
            Please wear shoes on the grass. We cleaned upthis site as best as possible but there was some broken glass on the site 
            prior to cleanup. Some broken glass may still be present.
          </li>
          <li>
            Consider resource use: Utilize the cool breeze versus an AC unit. Conserve water when possible.
          </li>
          <li>
            Pick up all trash and remove from the site upon check out. A $50 fee will be charged if we have to remove trash from the site.
          </li>
        </ul>
      </>
  },
]

export default function FAQ() {
  // openIndex - which FAQ item is currently expanded, null if nothing open
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // open clicked question and close others if they are open
  function toggleItem(index: number) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 px-6" style={{ background: '#f5f2ed' }}>
      <div className="max-w-3xl mx-auto">

        <p className="text-xs tracking-[0.25em] uppercase text-green-700 mb-4">
          Common Questions
        </p>

        <h2 className="font-serif font-bold text-stone-800 mb-12"
          style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
        >
          Everything You Need to Know
        </h2>

        {/* render each item from array */}
        <div className="divide-y divide-stone-200">
          {faqs.map((faq, index) => (
            <div key={faq.question}>

              <button
                onClick={() => toggleItem(index)}
                // w-full makes whole row clickable
                className="w-full flex justify-between items-center py-6 text-left gap-4"
              >
                <span className="text-stone-800 font-medium text-lg">{faq.question}</span>
                <span className="text-green-700 text-2xl shrink-0 font-light">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {openIndex === index && (
                <div className="pb-6 text-stone-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}