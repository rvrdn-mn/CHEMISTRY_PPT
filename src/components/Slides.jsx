import React from 'react';

/* ══════════════════════════════════════
   REUSABLE SLIDE TEMPLATES
   Each template enforces exact 100vh height
   ══════════════════════════════════════ */

const HeroSlide = ({ title, subtitle, details, bgImage, overlayOpacity = 0.6 }) => (
  <section className="panel" style={{ backgroundColor: 'var(--bg-color)', justifyContent: 'flex-end', paddingBottom: '4rem' }}>
    {bgImage && (
      <div className="slide-image" style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        filter: 'grayscale(50%) brightness(0.4)',
      }} />
    )}
    <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: `linear-gradient(to top, rgba(10,10,10,0.95) 15%, rgba(10,10,10,${overlayOpacity}) 60%, rgba(10,10,10,0.3))` }} />
    <div style={{ zIndex: 10, maxWidth: '850px' }}>
      <h1 className="slide-heading huge-text" style={{ marginBottom: '1rem' }}>{title}</h1>
      <div className="slide-body">
        <p style={{ fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '0.8rem' }}>{subtitle}</p>
        {details && <p style={{ fontSize: '0.9rem', color: 'var(--text-tertiary)', lineHeight: 1.6 }}>{details}</p>}
      </div>
    </div>
  </section>
);

const DataSlide = ({ label, title, body, body2, dataItems, bgImage, bgAlt = false }) => (
  <section className="panel" style={{ backgroundColor: bgAlt ? 'var(--bg-color-alt)' : 'var(--bg-color)', justifyContent: 'center', gap: '1.2rem' }}>
    {bgImage && (
      <div className="slide-image" style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        filter: 'grayscale(60%) brightness(0.15)',
      }} />
    )}
    <div style={{ maxWidth: '1100px', zIndex: 2, position: 'relative' }}>
      {label && <p className="slide-heading" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-tertiary)', marginBottom: '0.6rem' }}>{label}</p>}
      <h2 className="slide-heading huge-text" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>{title}</h2>
      <div className="slide-body" style={{ marginTop: '0.8rem' }}>
        <p style={{ maxWidth: '900px', fontSize: '0.95rem', lineHeight: 1.7 }}>{body}</p>
        {body2 && <p style={{ maxWidth: '900px', fontSize: '0.9rem', lineHeight: 1.65, marginTop: '0.6rem', color: 'var(--text-tertiary)' }}>{body2}</p>}
      </div>
    </div>
    <div className="slide-grid data-grid" style={{ zIndex: 2, position: 'relative' }}>
      {dataItems.map((item, i) => (
        <div key={i} className="data-item">
          <h3 style={{ color: item.highlight ? 'var(--text-primary)' : 'var(--text-secondary)' }}>{item.val}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const QuoteSlide = ({ quote, author, context, bgImage, bgAlt = true }) => (
  <section className="panel" style={{ backgroundColor: bgAlt ? 'var(--bg-color-alt)' : 'var(--bg-color)', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
    {bgImage && (
      <div className="slide-image" style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover', backgroundPosition: 'center',
        filter: 'grayscale(70%) brightness(0.12)',
      }} />
    )}
    <div style={{ maxWidth: '900px', zIndex: 2, position: 'relative' }}>
      <div className="slide-divider" style={{ margin: '0 auto 1.5rem' }}></div>
      <h2 className="slide-heading" style={{ fontSize: 'clamp(1.6rem, 3.5vw, 3rem)', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.25 }}>
        &ldquo;{quote}&rdquo;
      </h2>
      {author && (
        <p className="slide-body" style={{ marginTop: '1.5rem', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>
          — {author}
        </p>
      )}
      {context && <p className="slide-body" style={{ marginTop: '1.2rem', fontSize: '0.9rem', maxWidth: '650px', margin: '1.2rem auto 0', lineHeight: 1.65 }}>{context}</p>}
    </div>
  </section>
);

const SplitSlide = ({ label, title, bodyParagraphs, image, imageLeft = false, bgAlt = false }) => (
  <section className="panel" style={{
    backgroundColor: bgAlt ? 'var(--bg-color-alt)' : 'var(--bg-color)',
    display: 'grid',
    gridTemplateColumns: imageLeft ? '42% 1fr' : '1fr 42%',
    gap: 0, padding: 0,
  }}>
    {imageLeft && (
      <div className="slide-image" style={{ height: '100vh', overflow: 'hidden' }}>
        <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(30%) brightness(0.65)' }} />
      </div>
    )}
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '3rem 4rem', overflow: 'hidden' }}>
      {label && <p className="slide-heading" style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-tertiary)', marginBottom: '0.5rem' }}>{label}</p>}
      <h2 className="slide-heading" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)', fontWeight: 400, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '1rem' }}>{title}</h2>
      <div className="slide-divider"></div>
      <div className="slide-body">
        {bodyParagraphs.map((p, i) => (
          <p key={i} style={{ fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '0.8rem' }}>{p}</p>
        ))}
      </div>
    </div>
    {!imageLeft && (
      <div className="slide-image" style={{ height: '100vh', overflow: 'hidden' }}>
        <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(30%) brightness(0.65)' }} />
      </div>
    )}
  </section>
);

/* ══════════════════════════════════════
   CHAPTER 1  ·  THE GLOBAL CRISIS
   ══════════════════════════════════════ */

export const Slide1 = () => (
  <HeroSlide
    title={<>The Toxic<br/>Afterlife.</>}
    subtitle="A Data-Driven Analysis of E-Waste Hotspots — examining Seelampur (Delhi), Moradabad (Uttar Pradesh), and Agbogbloshie (Accra, Ghana)."
    details="Bridging the gap between digital innovation and biological degradation. Using 2026 data from Nature, The Lancet, and PMC studies."
    bgImage="/assets/hero-bg.png"
    overlayOpacity={0.5}
  />
);

export const Slide2 = () => (
  <DataSlide
    label="Global Overview"
    title="Data from 2026 highlighting the true scale of electronic waste."
    body="Global e-waste production has reached a critical inflection point. The sheer volume of discarded electronics now exceeds the capacity of formal recycling infrastructure by a factor of five, pushing millions of tonnes into unregulated informal processing hubs across the developing world."
    body2="While formal recycling accounts for under 20% of total output, the informal sector — operating without PPE, environmental safeguards, or labor protections — supports millions of vulnerable workers, including children."
    bgImage="/assets/ewaste_circuit.jpg"
    dataItems={[
      { highlight: true, val: '65M+', desc: 'Tonnes of global e-waste generated annually, growing 3-5% year-on-year with no signs of decelerating.' },
      { val: '<20%', desc: 'Formally recycled through regulated channels. The remaining 80% enters landfills, incinerators, or informal hubs.' },
      { val: 'Millions', desc: 'Of vulnerable laborers — including undocumented children — sustain the shadow recycling economy globally.' },
      { val: '$62.5B', desc: 'The estimated raw material value embedded in discarded electronics each year, largely unrecovered.' },
    ]}
  />
);

export const Slide3 = () => (
  <QuoteSlide
    quote="E-waste has been identified as a primary driver of heavy metal bioaccumulation in the Global South."
    author="Nature & The Lancet · 2025 Meta-Analysis"
    context="This landmark meta-analysis consolidated over 200 studies from three continents, providing the strongest evidence to date linking informal e-waste processing to systemic ecosystem collapse and human disease."
    bgImage="/assets/ewaste_circuit.jpg"
  />
);

export const Slide4 = () => (
  <DataSlide
    label="The Paradox of Precious Metals"
    title="The New Gold Rush."
    body="One tonne of circuit boards contains more precious metals than one tonne of mined ore — yet recovering them through informal acid baths generates catastrophic environmental fallout. This economic imbalance fuels a global shadow industry where waste is not discarded, but hunted."
    body2="Vast quantities of e-waste are legally and illegally shipped across borders from wealthy nations to developing economies, externalizing the environmental cost of technological consumption."
    dataItems={[
      { highlight: true, val: '100x', desc: 'More gold per tonne in smartphones compared to natural gold ore — a staggering concentration ratio.' },
      { val: 'Urban Mining', desc: 'A term that sanitizes a dangerous reality: hazardous backyard acid operations fueled by economic desperation.' },
      { val: 'Exported', desc: 'E-waste ships are mislabeled as "second-hand goods" to bypass Basel Convention regulations.' },
    ]}
  />
);

export const Slide5 = () => (
  <QuoteSlide
    quote="We upgrade. They inhale."
    author="The Externalized Cost of Innovation"
    context="Every 18 months, the global smartphone fleet is effectively replaced. The biological consequences of this consumption cycle are borne almost entirely by communities in the Global South who never owned the devices."
    bgAlt={false}
  />
);

/* ══════════════════════════════════════
   CHAPTER 2  ·  SEELAMPUR, DELHI
   ══════════════════════════════════════ */

export const Slide6 = () => (
  <HeroSlide
    title={<>The Midnight<br/>Node.</>}
    subtitle="Seelampur, Delhi — India's largest informal e-waste hub. Tucked inside narrow lanes, an entire underground economy processes 30,000 to 50,000 tonnes of discarded electronics every year."
    details="Case Study 1 of 3 · Seelampur is classified as the primary nerve center for informal e-waste processing across the entire northern Indian subcontinent."
    bgImage="/assets/real_seelampur.jpg"
  />
);

export const Slide7 = () => (
  <SplitSlide
    label="Case Study 1 · Seelampur, Delhi"
    title="Operational Scale."
    image="/assets/real_seelampur.jpg"
    bodyParagraphs={[
      "Seelampur operates as the primary nerve center for informal e-waste processing across northern India. Workers — many of them children as young as 8 — sort, dismantle, and strip electronic components by hand in cramped, windowless, and completely unventilated workshops.",
      "The hub handles everything from discarded smartphones and laptops to industrial-grade server racks and CRT monitors. Components are sorted by metal type (copper, aluminum, gold-bearing) and sold to a chain of middlemen before being subjected to acid stripping for precious metal recovery.",
      "Operations run on bi-hourly shift rotations with no formal documentation of labor, no employment contracts, and no PPE — making any form of regulation or accountability virtually impossible.",
      "An estimated 25,000 informal workers depend on this economy for their daily survival, creating a deeply entrenched socio-economic dependency that resists formalization.",
    ]}
  />
);

export const Slide8 = () => (
  <DataSlide
    label="Seelampur · Health Impact"
    title="The Blood Lead Crisis."
    body="A 2024 PMC study found that the median Blood Lead Level (BLL) among children living and working in Seelampur stands at 8.5 µg/dL — significantly above the WHO threshold for intervention. 33% of sampled children exceeded the level associated with severe, irreversible neurotoxic damage."
    body2="Lead is a cumulative toxicant with no known safe level of exposure. In children, it attacks the developing nervous system, causing permanent reductions in IQ, attention span, and behavioral regulation."
    bgImage="/assets/seelampur.png"
    dataItems={[
      { highlight: true, val: '8.5 µg/dL', desc: 'Median Child Blood Lead Level (BLL) in Seelampur — well above the WHO action threshold of 5 µg/dL.' },
      { val: '33%', desc: 'Of sampled children exceed WHO thresholds for severe neurotoxicity, risking permanent IQ reduction.' },
      { val: 'Irreversible', desc: 'Lead-induced cognitive damage in children is permanent and cannot be treated after exposure occurs.' },
    ]}
  />
);

export const Slide9 = () => (
  <DataSlide
    label="Seelampur · Evasion Tactics"
    title="The Midnight Economy."
    body="To evade pollution monitoring systems and regulatory patrols, the most toxic phase of e-waste processing — open acid stripping using nitric and hydrochloric acid — shifts to the dead of night. Between midnight and 6 AM, fumes from acid baths rise unchecked into residential neighborhoods."
    body2="During daytime grinding operations, workers inhale FR-4 glass epoxy dust — the fiberglass substrate of printed circuit boards — leading to a chronic respiratory condition locally known as 'E-Waste Cough.' No respiratory protection is provided at any stage of the process."
    bgImage="/assets/real_seelampur.jpg"
    dataItems={[
      { highlight: true, val: '12am – 6am', desc: 'The operational window for acid stripping, strategically timed to avoid pollution monitoring patrols.' },
      { val: 'E-Waste Cough', desc: 'A chronic respiratory condition caused by inhaling FR-4 glass epoxy particles during manual PCB grinding.' },
      { val: 'Zero PPE', desc: 'No masks, no gloves, no ventilation. Workers are fully exposed to heavy metal fumes and particulate matter.' },
    ]}
  />
);

/* ══════════════════════════════════════
   CHAPTER 3  ·  MORADABAD, UP
   ══════════════════════════════════════ */

export const Slide10 = () => (
  <HeroSlide
    title={<>The Acid<br/>Basin.</>}
    subtitle="Moradabad, Uttar Pradesh — home to 50% of India's Printed Circuit Board processing. Nitric and hydrochloric acid are dumped directly into the Ramganga River basin, turning both soil and water into a toxic cocktail."
    details="Case Study 2 of 3 · Once known as India's 'Brass City,' Moradabad's identity has been reshaped by the informal electronics recycling industry."
    bgImage="/assets/real_moradabad.jpg"
  />
);

export const Slide11 = () => (
  <SplitSlide
    label="Case Study 2 · Moradabad, Uttar Pradesh"
    title="The Ramganga River Crisis."
    image="/assets/real_moradabad.jpg"
    imageLeft
    bgAlt
    bodyParagraphs={[
      "Moradabad's informal recyclers handle approximately 50% of India's total Printed Circuit Boards. The banks of the Ramganga River serve as a de facto chemical dumping ground for the acidic byproducts of precious metal leaching.",
      "Black acidic sludge, a visible marker of contamination, seeps into the local water table daily. Communities downstream rely on this same water table for drinking, cooking, and agricultural irrigation.",
      "Groundwater mercury levels in the region exceed safe drinking standards by a factor of eight. The Ramganga, once a lifeline for riparian communities, is now a vector for chronic heavy metal poisoning across the entire downstream watershed.",
      "The ecological collapse of the river system has cascaded into the local food web, contaminating fisheries and making traditional aquaculture impossible for communities that depended on it for generations.",
    ]}
  />
);

export const Slide12 = () => (
  <DataSlide
    label="Moradabad · Chemical Profile"
    title="The Leaching Process."
    body="Precious metals are extracted using Aqua Regia — a volatile, fuming mixture of concentrated nitric acid (HNO₃) and hydrochloric acid (HCl) in a 1:3 ratio. This mixture dissolves gold and platinum from circuit boards. The spent acid, now saturated with dissolved heavy metals, is dumped directly into soil and local waterways without any neutralization or treatment."
    body2="The resulting soil acidification has reached pH 4.0 in areas immediately surrounding processing sites — a level comparable to battery acid and far below the threshold required for any form of agricultural activity."
    bgImage="/assets/moradabad_river2.jpg"
    dataItems={[
      { highlight: true, val: 'pH 4.0', desc: 'Extreme soil acidification around processing sites. For comparison, normal agricultural soil requires pH 6.0–7.5.' },
      { val: 'HNO₃ + HCl', desc: 'Aqua Regia — the corrosive acid mixture used for dissolving gold and silver from PCB substrates.' },
      { val: '8x Limit', desc: 'Mercury (Hg) concentration in Ramganga groundwater exceeds WHO safe drinking thresholds by 800%.' },
    ]}
  />
);

export const Slide13 = () => (
  <DataSlide
    label="Moradabad · Bioaccumulation"
    title="Food Chain Contamination."
    body="Staple crops grown in contaminated Moradabad soil — including tomato, potato, and brinjal — are acting as 'accidental phytoremediators,' absorbing toxic levels of Lead (Pb), Cadmium (Cd), and Mercury (Hg) directly from the acidified earth. These vegetables enter local markets and are consumed daily by unsuspecting communities."
    body2="Parthenium hysterophorus, an invasive weed commonly found near processing sites, has also been documented absorbing significant metal loads — inadvertently concentrating toxins in the topsoil food web."
    bgImage="/assets/real_moradabad.jpg"
    dataItems={[
      { highlight: true, val: 'Bio-Pumps', desc: 'Crops absorb heavy metals directly from acidified soil, creating a direct pathway into the human food chain.' },
      { val: 'Pb, Cd, Hg', desc: 'Lead, Cadmium, and Mercury detected above safe limits in locally grown and consumed vegetables.' },
      { val: 'Parthenium', desc: 'An invasive weed acting as an accidental phytoremediator, concentrating metals in the topsoil layer.' },
    ]}
  />
);

/* ══════════════════════════════════════
   CHAPTER 4  ·  AGBOGBLOSHIE, GHANA
   ══════════════════════════════════════ */

export const Slide14 = () => (
  <HeroSlide
    title={<>Toxic<br/>Colonialism.</>}
    subtitle="Agbogbloshie, Accra, Ghana — one of the world's most contaminated places. E-waste generated in the global north is shipped, burned, and stripped here by workers simultaneously hailed as 'Climate Heroes' and denied basic healthcare."
    details="Case Study 3 of 3 · The Basel Action Network has documented the scale of illegal trans-boundary e-waste shipments arriving at Accra's ports, many mislabeled as 'second-hand goods.'"
    bgImage="/assets/real_agbogbloshie.jpg"
    overlayOpacity={0.5}
  />
);

export const Slide15 = () => (
  <SplitSlide
    label="Case Study 3 · Agbogbloshie, Accra"
    title="Mortuary Road: Ground Zero."
    image="/assets/agbogbloshie_burning.jpg"
    bodyParagraphs={[
      "Operations in Agbogbloshie are spread across highly disorganized, severely polluted zones surrounding Mortuary Road. Workers manually burn copper wiring in open-air pits to recover raw metal, releasing chlorinated dioxins and furans directly into the atmosphere.",
      "The Basel Action Network has documented the scale of illegal trans-boundary e-waste shipments arriving at Accra's ports, many mislabeled as second-hand goods to bypass international waste regulations established under the Basel Convention.",
      "Despite being essential to the global circular economy, workers face severe social stigma in Ghanaian society. A health risk index of 228/400 indicates extreme vulnerability to dioxin-induced cancers, endocrine disruption, and reproductive failure.",
      "The site has been partially dismantled by the Ghanaian government, but operations have simply fragmented and relocated — a pattern repeated at every attempted intervention globally.",
    ]}
  />
);

export const Slide16 = () => (
  <DataSlide
    label="Agbogbloshie · Environmental Collapse"
    title="Atmospheric & Water Breakdown."
    body="Open burning of e-waste at Agbogbloshie releases Persistent Organic Pollutants (POPs) — including chlorinated dioxins, furans, and polychlorinated biphenyls — directly into the atmosphere. These compounds are among the most toxic substances known to science, accumulating in biological tissue and persisting in the environment for decades."
    body2="The nearby Odaw River, which flows through the site and into the Gulf of Guinea, has been officially classified as biologically dead — completely unable to support aquatic life of any kind due to saturated heavy metal concentrations."
    bgImage="/assets/agbogbloshie_workers.jpg"
    dataItems={[
      { highlight: true, val: 'POPs', desc: 'Persistent Organic Pollutants: chlorinated dioxins, furans, and PCBs released from burning copper wire and plastics at high temperatures.' },
      { val: 'Odaw River', desc: 'Classified as biologically dead — unable to support any aquatic life. A total ecological collapse of the waterway.' },
      { val: 'Decades', desc: 'POPs persist in soil and water for 20-50+ years, contaminating sites long after operations cease.' },
    ]}
  />
);

export const Slide17 = () => (
  <DataSlide
    label="Agbogbloshie · The Egg Study"
    title="The Dioxin Disaster."
    body="In a landmark study, a single free-range egg collected near the Agbogbloshie site contained chlorinated dioxin levels 220 times higher than European Food Safety Authority limits. Brominated dioxin levels in the same sample broke all previously recorded global measurements."
    body2="The implications for the local food chain are catastrophic. Dioxins bioaccumulate — meaning each step up the food chain concentrates the toxin further. Communities consuming local poultry, eggs, and dairy products face compounding exposure with every meal."
    bgImage="/assets/real_agbogbloshie.jpg"
    dataItems={[
      { highlight: true, val: '220x', desc: 'Dioxin levels in a single free-range egg exceeded EU safety limits by a factor of 220.' },
      { val: 'Record', desc: 'Brominated dioxin levels shattered all previously documented measurements in global environmental science.' },
      { val: '228/400', desc: 'Health risk index for Agbogbloshie workers — indicating extreme cancer vulnerability and endocrine disruption.' },
    ]}
  />
);

/* ══════════════════════════════════════
   CHAPTER 5  ·  EVIDENCE & RESOLUTION
   ══════════════════════════════════════ */

export const Slide18 = () => (
  <section className="panel" style={{ backgroundColor: 'var(--bg-color)', justifyContent: 'center', gap: '1.2rem' }}>
    <div>
      <p className="slide-heading" style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-tertiary)', marginBottom: '0.6rem' }}>Consolidated Evidence</p>
      <h2 className="slide-heading huge-text" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}>Cross-Site Impact Summary.</h2>
      <p className="slide-body" style={{ maxWidth: '900px', marginTop: '0.6rem', fontSize: '0.9rem' }}>Three geographically distinct hotspots. Three unique toxic pathways. One shared reality: the poorest communities bear the harshest biological consequences of global electronics consumption.</p>
    </div>
    <div className="slide-grid" style={{ width: '100%', maxWidth: '1400px', overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '750px' }}>
        <thead>
          <tr style={{ borderBottom: '2px solid var(--text-tertiary)' }}>
            <th style={{ padding: '0.8rem 1rem 0.8rem 0', fontWeight: 500, color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Hotspot</th>
            <th style={{ padding: '0.8rem 1rem', fontWeight: 500, color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Region</th>
            <th style={{ padding: '0.8rem 1rem', fontWeight: 500, color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Primary Toxic Pathway</th>
            <th style={{ padding: '0.8rem 1rem', fontWeight: 500, color: 'var(--text-secondary)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Health Impact</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{ borderBottom: '1px solid var(--accent-dark)' }}>
            <td style={{ padding: '1rem 1rem 1rem 0', fontSize: '1.05rem', fontWeight: 500 }}>Seelampur</td>
            <td style={{ padding: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Delhi, India</td>
            <td style={{ padding: '1rem', fontWeight: 500, fontSize: '0.9rem' }}>8.5 µg/dL Child BLL</td>
            <td style={{ padding: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Neurotoxicity, cognitive impairment, "E-Waste Cough"</td>
          </tr>
          <tr style={{ borderBottom: '1px solid var(--accent-dark)' }}>
            <td style={{ padding: '1rem 1rem 1rem 0', fontSize: '1.05rem', fontWeight: 500 }}>Moradabad</td>
            <td style={{ padding: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>UP, India</td>
            <td style={{ padding: '1rem', fontWeight: 500, fontSize: '0.9rem' }}>pH 4.0 / Hg 8x limit</td>
            <td style={{ padding: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Dietary bioaccumulation via staple crops (Pb, Cd, Hg)</td>
          </tr>
          <tr>
            <td style={{ padding: '1rem 1rem 1rem 0', fontSize: '1.05rem', fontWeight: 500 }}>Agbogbloshie</td>
            <td style={{ padding: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Accra, Ghana</td>
            <td style={{ padding: '1rem', fontWeight: 500, fontSize: '0.9rem' }}>Dioxins 220x / 228 HRI</td>
            <td style={{ padding: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Endocrine disruption, dioxin-induced cancer, reproductive failure</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
);

export const Slide19 = () => (
  <DataSlide
    label="2026 Policy Framework"
    title="Systemic Re-Engineering."
    body="Addressing the e-waste crisis at scale demands a simultaneous overhaul of product design, waste tracking infrastructure, and labor economics. Incremental reforms have consistently failed — the following four-pillar framework targets the systemic roots of the crisis."
    body2="Each pillar operates independently but achieves maximum impact when implemented as a coordinated policy package across producer nations and processing regions."
    bgAlt
    dataItems={[
      { highlight: true, val: 'Blockchain EPR', desc: 'Secure, immutable ledger tracking for Extended Producer Responsibility — ensuring manufacturers fund and verify end-of-life processing.' },
      { val: 'Formalization', desc: 'Transforming invisible informal laborers into recognized "Mineral Recovery Technicians" with healthcare, PPE, and labor protections.' },
      { val: 'Design for Disassembly', desc: 'Mandating modular, repairable product architectures so devices can be safely recycled without acid leaching or open burning.' },
      { val: 'Right to Repair', desc: 'Legislating consumer rights to extend device lifespans, directly reducing the volume of waste entering the informal processing stream.' },
    ]}
  />
);

export const Slide20 = () => (
  <QuoteSlide
    quote="The poorest people recycle the richest waste at the highest personal cost."
    author="The Informal Paradox · 2026"
    context="Until the true environmental and biological cost of electronics is internalized by the industries that produce them, the cycle of toxic externalization will continue to claim lives at the margins of the global economy."
    bgImage="/assets/agbogbloshie_workers.jpg"
    bgAlt={false}
  />
);

/* ══════════════════════════════════════
   EXPORT
   ══════════════════════════════════════ */
export const allSlides = [
  Slide1, Slide2, Slide3, Slide4, Slide5,
  Slide6, Slide7, Slide8, Slide9,
  Slide10, Slide11, Slide12, Slide13,
  Slide14, Slide15, Slide16, Slide17,
  Slide18, Slide19, Slide20,
];
