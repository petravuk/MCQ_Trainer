export const REASONING_TIPS = {
  numerical: {
    title: "Numerical shortcuts",
    icon: null,
    tips: [],
    formulas: [
      {
        title: "Growth of government-funded R&D spending",
        when: "Use when you know GDP growth, R&D as a percentage of GDP, and the government share of R&D funding.",
        expression:
          "Growth ≈ (1 + g) × (new R&D % / old R&D %) × (new government share / old government share) − 1",
        mental:
          "Fast mental version: add the approximate percentage changes in GDP, R&D %, and government share.",
      },
      {
        title: "GDP from R&D expenditure",
        when: "Use when the question gives R&D spending in euros and R&D as a percentage of GDP.",
        expression: "GDP = R&D expenditure / R&D % of GDP",
        mental:
          "For a GDP ratio between two countries: (R&D spend A / R&D spend B) × (R&D % of GDP B / R&D % of GDP A).",
      },
      {
        title: "Large-number addition",
        when: "Use for surfaces, populations, or other large totals.",
        expression:
          "Round first to identify the likely answer, then verify quickly.",
        mental: "This is a speed filter, not the final exact calculation.",
      },
    ],
    links: [
      {
        label: "Numerical shortcuts source file",
        href: "#",
      },
    ],
  },
};
