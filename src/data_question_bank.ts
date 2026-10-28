export const DATA_QUESTIONS = [
  {
    id: "data-001",
    category: "data",
    topic: "Data governance",
    level: "medium",
    question:
      "Which statement best describes the primary purpose of data governance in a large public institution?",
    options: [
      "To define accountability, decision rights and control mechanisms for data across the organisation",
      "To centralise every data operation within the IT department",
      "To maximise the volume of data collected regardless of business need",
      "To ensure that all datasets are stored in a single technical platform",
    ],
    answer: 0,
    explanation:
      "Data governance is mainly about accountability, decision rights, oversight and consistent control.",
  },
  {
    id: "data-002",
    category: "data",
    topic: "Data governance",
    level: "hard",
    question:
      "A business unit wants to redefine a critical indicator locally. Which response is most consistent with good governance?",
    options: [
      "Submit the proposed definition through a governance process that assesses impact, comparability and ownership before adoption",
      "Allow the unit to redefine the indicator for its own use as long as the label remains unchanged",
      "Reject all local proposals automatically because enterprise indicators must never evolve",
      "Let IT decide the new meaning because technical teams maintain the reporting platform",
    ],
    answer: 0,
    explanation:
      "Good governance allows controlled change while protecting comparability, ownership and coherence.",
  },
  {
    id: "data-003",
    category: "data",
    topic: "Data governance",
    level: "hard",
    question:
      "Which situation most strongly suggests that governance exists only on paper and is not operating effectively?",
    options: [
      "Ownership and escalation rules are documented, but major data disputes are repeatedly settled informally outside the agreed process",
      "A governance board meets quarterly to review critical standards and issues",
      "The organisation keeps a catalogue of critical data elements",
      "Business and technical teams jointly review proposed definition changes",
    ],
    answer: 0,
    explanation:
      "Formal structures are not enough if important decisions are routinely made outside them.",
  },
  {
    id: "data-004",
    category: "data",
    topic: "Data governance",
    level: "medium",
    question:
      "Which measure best reduces confusion when several teams use the same KPI?",
    options: [
      "A single governed business definition and documented calculation logic",
      "Different definitions adapted to each reporting audience",
      "Allowing teams to relabel the KPI without changing its formula",
      "Using only verbal explanations during presentations",
    ],
    answer: 0,
    explanation:
      "Shared definitions and documented calculation logic reduce ambiguity and inconsistency.",
  },
  {
    id: "data-005",
    category: "data",
    topic: "Data governance",
    level: "hard",
    question:
      "Which problem is most likely if stewardship roles exist but no escalation path is defined?",
    options: [
      "Recurring issues may remain unresolved because responsibility for final decisions is unclear",
      "All datasets will become duplicated automatically",
      "Metadata fields will disappear from the catalogue",
      "The organisation will be unable to create dashboards",
    ],
    answer: 0,
    explanation:
      "Without escalation, issues can stall when stewards cannot resolve them alone.",
  },
  {
    id: "data-006",
    category: "data",
    topic: "Data governance",
    level: "medium",
    question: "Why is assigning a data owner important for a critical dataset?",
    options: [
      "It clarifies who is accountable for major decisions on definition, quality and use",
      "It ensures only one person can ever view the data",
      "It removes the need for data stewards",
      "It guarantees there will be no future data issues",
    ],
    answer: 0,
    explanation:
      "Ownership is primarily about accountability and decision-making authority.",
  },
  {
    id: "data-007",
    category: "data",
    topic: "Data governance",
    level: "hard",
    question:
      "Which scenario most clearly shows weak governance over critical definitions?",
    options: [
      "Different departments publish the same KPI using different formulas",
      "A glossary is reviewed annually",
      "A steward logs issues in a shared tool",
      "A report includes footnotes on assumptions",
    ],
    answer: 0,
    explanation:
      "If the same KPI is calculated differently, governed definitions are not being enforced.",
  },
  {
    id: "data-008",
    category: "data",
    topic: "Data governance",
    level: "medium",
    question:
      "What is the main value of a governance forum for enterprise data?",
    options: [
      "It provides a place to resolve cross-functional data issues and approve standards",
      "It replaces all technical delivery teams",
      "It stores the organisation's operational data",
      "It guarantees that every project will finish on time",
    ],
    answer: 0,
    explanation:
      "Governance forums support coordination, escalation and standard setting.",
  },
  {
    id: "data-009",
    category: "data",
    topic: "Data governance",
    level: "hard",
    question:
      "A team wants to keep a local definition because it helps their reporting, even though it breaks comparability. What is the strongest governance objection?",
    options: [
      "Local convenience should not override enterprise consistency for shared indicators",
      "Every metric must always be owned by IT",
      "Comparability matters only for public data",
      "Definitions should never be reviewed once created",
    ],
    answer: 0,
    explanation:
      "Governed shared indicators need comparability across teams and time.",
  },
  {
    id: "data-010",
    category: "data",
    topic: "Data governance",
    level: "easy",
    question:
      "Which item is most likely to belong in a data governance policy?",
    options: [
      "Roles, responsibilities and approval rules for data decisions",
      "A list of all employees' annual leave balances",
      "A colour palette for dashboards",
      "A catalogue of meeting room equipment",
    ],
    answer: 0,
    explanation:
      "Governance policies define rules for how data is managed and who decides.",
  },
  {
    id: "data-011",
    category: "data",
    topic: "Metadata",
    level: "medium",
    question:
      "Which option is the best example of technical metadata rather than business metadata?",
    options: [
      "The policy objective supported by the dataset",
      "The agreed business definition of an active case",
      "The field type, source system and refresh frequency of a data element",
      "The intended audience for a management report",
    ],
    answer: 2,
    explanation:
      "Technical metadata describes structural and system-related properties such as source, type and refresh logic.",
  },
  {
    id: "data-012",
    category: "data",
    topic: "Metadata",
    level: "hard",
    question:
      "Which metadata element most directly helps a user judge whether a dataset is fit for a particular analytical use?",
    options: [
      "Its business definition, scope, update cycle and known limitations",
      "The font style used in the latest dashboard",
      "The number of people who accessed the data last month",
      "The name of the meeting where the dataset was first mentioned",
    ],
    answer: 0,
    explanation:
      "Fitness for use depends on meaning, scope, recency and limitations.",
  },
  {
    id: "data-013",
    category: "data",
    topic: "Metadata",
    level: "hard",
    question: "Why is a well-maintained data catalogue valuable in practice?",
    options: [
      "It helps users discover available datasets, understand their meaning and assess fitness for reuse",
      "It replaces source systems by becoming the single operational repository",
      "It removes the need for access management because metadata is already documented",
      "It guarantees that all published data is free from quality defects",
    ],
    answer: 0,
    explanation:
      "A catalogue improves discoverability and understanding, but it does not guarantee perfect quality.",
  },
  {
    id: "data-014",
    category: "data",
    topic: "Metadata",
    level: "easy",
    question: "What is the main purpose of business metadata?",
    options: [
      "To explain what data means in operational and policy terms",
      "To replace all technical documentation",
      "To compress large databases",
      "To store archived records",
    ],
    answer: 0,
    explanation:
      "Business metadata helps users understand the meaning and intended use of data.",
  },
  {
    id: "data-015",
    category: "data",
    topic: "Metadata",
    level: "medium",
    question:
      "Which metadata field most helps a user judge whether a dataset is current enough for monthly reporting?",
    options: [
      "Last refresh date and refresh frequency",
      "The number of worksheets in the source file",
      "The surname of the database administrator",
      "The size of the report cover image",
    ],
    answer: 0,
    explanation:
      "Currency depends on when the data was last updated and how often it is refreshed.",
  },
  {
    id: "data-016",
    category: "data",
    topic: "Metadata",
    level: "hard",
    question: "Why should known data limitations be included in metadata?",
    options: [
      "So users can judge whether the data is appropriate for their purpose",
      "So poor-quality data becomes automatically corrected",
      "So access approval is no longer needed",
      "So dashboards load faster",
    ],
    answer: 0,
    explanation:
      "Documenting limitations supports informed and responsible reuse.",
  },
  {
    id: "data-017",
    category: "data",
    topic: "Metadata",
    level: "medium",
    question:
      "Which item is most likely to be recorded as metadata for a field?",
    options: [
      "Its allowed values and business definition",
      "The names of all users who opened the report",
      "The order of desks in the office",
      "The background colour of the dashboard",
    ],
    answer: 0,
    explanation:
      "Field metadata often includes definition, type and allowed values.",
  },
  {
    id: "data-018",
    category: "data",
    topic: "Metadata",
    level: "hard",
    question:
      "A dataset is frequently reused incorrectly because users do not understand what one status field means. What is the most direct metadata improvement?",
    options: [
      "Add a precise business definition with scope and examples",
      "Increase server memory for the reporting platform",
      "Restrict all users from exporting the report",
      "Convert the field to a different font",
    ],
    answer: 0,
    explanation: "Clear business definitions reduce misinterpretation.",
  },
  {
    id: "data-019",
    category: "data",
    topic: "Metadata",
    level: "easy",
    question: "What does metadata describe?",
    options: [
      "Information about data, such as meaning, structure or origin",
      "Only confidential information",
      "Only numerical values",
      "A visual chart of monthly performance",
    ],
    answer: 0,
    explanation: "Metadata is information about the data itself.",
  },
  {
    id: "data-020",
    category: "data",
    topic: "Metadata",
    level: "medium",
    question: "Which metadata attribute most helps with traceability?",
    options: [
      "The source system from which the data element originates",
      "The chart type used in a dashboard",
      "The number of report viewers",
      "The size of the export file",
    ],
    answer: 0,
    explanation:
      "Knowing the source system helps trace where the data came from.",
  },
  {
    id: "data-021",
    category: "data",
    topic: "Data lineage",
    level: "medium",
    question:
      "What is the strongest reason for documenting end-to-end data lineage in a reporting process?",
    options: [
      "It reduces the need for access controls by making transformations visible",
      "It makes it easier to trace where a value originated and how it was modified before appearing in a report",
      "It guarantees that source data is complete before integration starts",
      "It automatically reconciles inconsistent definitions between business units",
    ],
    answer: 1,
    explanation:
      "Lineage is most valuable for traceability from source to report.",
  },
  {
    id: "data-022",
    category: "data",
    topic: "Data lineage",
    level: "hard",
    question:
      "A metric in a published report differs from the same metric in the source operational system. Which documentation artefact is most useful to consult first?",
    options: [
      "The lineage record showing extraction, transformation and aggregation steps between source and report",
      "The list of users who have access to the source system",
      "The retention policy for archived reports",
      "The meeting minutes from the last governance board discussion",
    ],
    answer: 0,
    explanation:
      "When values diverge, lineage is the most direct way to understand how the reported number was produced.",
  },
  {
    id: "data-023",
    category: "data",
    topic: "Data lineage",
    level: "hard",
    question: "Which issue is data lineage best suited to investigating?",
    options: [
      "An indicator in a dashboard is incorrect and the team needs to identify where the value changed in the pipeline",
      "A dataset lacks a legal basis for collection",
      "A taxonomy does not reflect organisational priorities",
      "A business unit disagrees with the strategic value of an indicator",
    ],
    answer: 0,
    explanation:
      "Lineage helps trace the path of a value through the pipeline to identify where an error was introduced.",
  },
  {
    id: "data-024",
    category: "data",
    topic: "Data lineage",
    level: "medium",
    question: "What does data lineage mainly show?",
    options: [
      "How data moves and changes from source to destination",
      "Who viewed the dashboard last week",
      "How many staff are in the analytics team",
      "Which chart colours were chosen by designers",
    ],
    answer: 0,
    explanation: "Lineage shows the path and transformation history of data.",
  },
  {
    id: "data-025",
    category: "data",
    topic: "Data lineage",
    level: "medium",
    question:
      "A report value changes unexpectedly after a pipeline release. What is the best first use of lineage?",
    options: [
      "To identify which source, join or transformation step changed",
      "To identify which staff member approved annual leave",
      "To remove all historical data",
      "To classify the dashboard by design style",
    ],
    answer: 0,
    explanation:
      "Lineage helps narrow the investigation to the relevant processing step.",
  },
  {
    id: "data-026",
    category: "data",
    topic: "Data lineage",
    level: "hard",
    question: "Why is lineage especially important for regulated reporting?",
    options: [
      "Because reported values may need to be traced back to their origin and transformation logic",
      "Because regulated reports do not use source systems",
      "Because lineage replaces validation checks",
      "Because auditors are only interested in visual design",
    ],
    answer: 0,
    explanation:
      "Traceability is a key requirement where evidence and auditability matter.",
  },
  {
    id: "data-027",
    category: "data",
    topic: "Data lineage",
    level: "easy",
    question: "Which item is part of lineage documentation?",
    options: [
      "Transformation steps between source data and final report",
      "The coffee preferences of the analytics team",
      "The office internet provider",
      "The colour used for the dashboard header",
    ],
    answer: 0,
    explanation: "Lineage documents how data is transformed across stages.",
  },
  {
    id: "data-028",
    category: "data",
    topic: "Data lineage",
    level: "medium",
    question: "What is the main benefit of having lineage for a KPI?",
    options: [
      "Users can see where it came from and how it was produced",
      "It guarantees the KPI is always positive",
      "It eliminates all data quality issues",
      "It removes the need for ownership",
    ],
    answer: 0,
    explanation:
      "Lineage increases transparency and traceability for reported indicators.",
  },
  {
    id: "data-029",
    category: "data",
    topic: "Data lineage",
    level: "hard",
    question:
      "A value in a dashboard is wrong because an aggregation step was changed in the pipeline. Which practice would most help identify this quickly?",
    options: [
      "Maintaining detailed and up-to-date lineage documentation",
      "Using more colours in the dashboard",
      "Increasing storage quotas",
      "Adding more viewers to the report",
    ],
    answer: 0,
    explanation: "Updated lineage helps identify where pipeline logic changed.",
  },
  {
    id: "data-030",
    category: "data",
    topic: "Data lineage",
    level: "easy",
    question: "Which question is lineage best able to answer?",
    options: [
      "Where did this number come from?",
      "Who has the most senior job title?",
      "Which colour theme is most attractive?",
      "How many chairs are in the office?",
    ],
    answer: 0,
    explanation: "Lineage is about origin and transformation of data values.",
  },
  {
    id: "data-031",
    category: "data",
    topic: "Data quality",
    level: "medium",
    question:
      "A dataset contains the same beneficiary represented differently across several systems. Which response most directly addresses the root cause?",
    options: [
      "Add more dashboards so inconsistencies are visible to end users",
      "Increase storage capacity to prevent truncation of records",
      "Define common data standards and validation rules for key identifiers and fields",
      "Restrict access to the dataset until all duplicates disappear naturally",
    ],
    answer: 2,
    explanation:
      "The root problem is inconsistent standards and validation rules.",
  },
  {
    id: "data-032",
    category: "data",
    topic: "Data quality",
    level: "easy",
    question:
      "Which data quality dimension is most directly concerned with whether stored values correctly reflect the real-world object or event?",
    options: ["Accuracy", "Timeliness", "Uniqueness", "Accessibility"],
    answer: 0,
    explanation: "Accuracy is about correctness relative to reality.",
  },
  {
    id: "data-033",
    category: "data",
    topic: "Data quality",
    level: "hard",
    question:
      "Two datasets describe the same entity but produce different counts because one treats inactive records differently. Which issue is most likely at stake?",
    options: [
      "A definition and standardisation problem affecting comparability",
      "A storage capacity problem affecting record retention",
      "A user permissions problem affecting visibility of dashboards",
      "A network latency problem affecting refresh speed",
    ],
    answer: 0,
    explanation:
      "Differing treatment of inactive records points to inconsistent definitions or standards.",
  },
  {
    id: "data-034",
    category: "data",
    topic: "Data quality",
    level: "medium",
    question:
      "Which KPI is the strongest indicator of a completeness issue in a critical dataset?",
    options: [
      "The proportion of records missing mandatory values",
      "The number of users with access to the report",
      "The time taken to present monthly results to management",
      "The number of visualisations included in the dashboard",
    ],
    answer: 0,
    explanation: "Missing mandatory values directly indicate incompleteness.",
  },
  {
    id: "data-035",
    category: "data",
    topic: "Data quality",
    level: "easy",
    question:
      "Which quality dimension is most directly about whether required fields are populated?",
    options: ["Completeness", "Timeliness", "Consistency", "Uniqueness"],
    answer: 0,
    explanation: "Completeness concerns whether required values are present.",
  },
  {
    id: "data-036",
    category: "data",
    topic: "Data quality",
    level: "medium",
    question:
      "Which issue most directly harms uniqueness in a customer dataset?",
    options: [
      "The same person appears under multiple records",
      "A field is refreshed weekly",
      "The report has too many columns",
      "A chart uses the wrong colour",
    ],
    answer: 0,
    explanation:
      "Uniqueness problems arise when one entity is represented more than once.",
  },
  {
    id: "data-037",
    category: "data",
    topic: "Data quality",
    level: "medium",
    question:
      "Which situation most clearly indicates a consistency issue across systems?",
    options: [
      "The same customer has different statuses in two systems at the same time",
      "A dataset is updated weekly instead of daily",
      "A table contains too many columns",
      "A report takes longer to load than expected",
    ],
    answer: 0,
    explanation:
      "Consistency issues arise when the same entity has conflicting values across systems.",
  },
  {
    id: "data-038",
    category: "data",
    topic: "Data quality",
    level: "hard",
    question:
      "Which control is most effective to prevent invalid values at the point of data entry?",
    options: [
      "Input validation rules enforcing allowed formats and code lists",
      "Monthly dashboards showing incorrect values",
      "Manual review after data is stored",
      "Increasing storage capacity",
    ],
    answer: 0,
    explanation:
      "Validation at entry prevents invalid data from being created.",
  },
  {
    id: "data-039",
    category: "data",
    topic: "Data quality",
    level: "medium",
    question: "Which metric best reflects timeliness of a dataset?",
    options: [
      "Delay between real-world event and data availability",
      "Number of columns in the dataset",
      "Number of users accessing the data",
      "Size of the dataset in MB",
    ],
    answer: 0,
    explanation:
      "Timeliness concerns how quickly data becomes available after events occur.",
  },
  {
    id: "data-040",
    category: "data",
    topic: "Data quality",
    level: "hard",
    question: "Which situation is the clearest example of a validity problem?",
    options: [
      "A country code field contains values outside the approved code list",
      "A dashboard loads slowly on Mondays",
      "A dataset is larger than expected",
      "A report uses a bar chart instead of a table",
    ],
    answer: 0,
    explanation:
      "Validity concerns whether values conform to the allowed format or domain.",
  },
  {
    id: "data-041",
    category: "data",
    topic: "Interoperability",
    level: "medium",
    question:
      "Which scenario most clearly shows a semantic interoperability problem?",
    options: [
      "Two systems exchange files using different transfer protocols",
      "A report fails because a server runs out of memory",
      "Two applications use the same field name but assign different meanings to it",
      "A dashboard refresh takes longer than expected at month-end",
    ],
    answer: 2,
    explanation:
      "Semantic interoperability concerns shared meaning, not just successful transfer.",
  },
  {
    id: "data-042",
    category: "data",
    topic: "Interoperability",
    level: "hard",
    question:
      "A data exchange between two institutions is technically successful, but the receiving side misclassifies cases because categories are understood differently. What is the core problem?",
    options: [
      "The technical layer works, but semantic alignment is missing",
      "The transfer protocol is unsuitable for structured data",
      "The receiving system lacks sufficient storage for the incoming records",
      "The dataset should be anonymised before any classification can occur",
    ],
    answer: 0,
    explanation:
      "When data moves correctly but is interpreted differently, the main failure is semantic.",
  },
  {
    id: "data-043",
    category: "data",
    topic: "Interoperability",
    level: "hard",
    question:
      "What most improves interoperability across organisational systems in the medium term?",
    options: [
      "Using shared standards, harmonised definitions and agreed exchange structures",
      "Allowing each system to preserve its own terminology while mapping only at reporting stage",
      "Moving all datasets into one folder structure to simplify access",
      "Increasing the frequency of dashboard refreshes across business units",
    ],
    answer: 0,
    explanation:
      "Interoperability depends on standards, agreed definitions and compatible structures.",
  },
  {
    id: "data-044",
    category: "data",
    topic: "Interoperability",
    level: "medium",
    question:
      "Two systems can exchange files successfully, but one interprets status code X as closed while the other interprets it as suspended. What problem is this?",
    options: [
      "Hardware failure",
      "Semantic interoperability issue",
      "Storage capacity problem",
      "Network latency issue",
    ],
    answer: 1,
    explanation:
      "The transfer works, but the meaning of the code is not aligned.",
  },
  {
    id: "data-045",
    category: "data",
    topic: "Interoperability",
    level: "easy",
    question: "What is interoperability mainly about?",
    options: [
      "Different systems being able to exchange and use information effectively",
      "Storing all files in one folder",
      "Reducing the number of users in a system",
      "Replacing databases with spreadsheets",
    ],
    answer: 0,
    explanation:
      "Interoperability is about compatible exchange and use of information.",
  },
  {
    id: "data-046",
    category: "data",
    topic: "Interoperability",
    level: "medium",
    question: "Which issue is mainly syntactic rather than semantic?",
    options: [
      "One system sends dates as YYYY-MM-DD while another expects DD/MM/YYYY",
      "Two teams disagree on what counts as an active case",
      "A KPI has no documented owner",
      "A report uses different colours each month",
    ],
    answer: 0,
    explanation:
      "Syntactic interoperability concerns format and structure rather than meaning.",
  },
  {
    id: "data-047",
    category: "data",
    topic: "Interoperability",
    level: "hard",
    question: "Why do shared code lists help interoperability?",
    options: [
      "They support consistent interpretation across systems",
      "They eliminate all need for metadata",
      "They guarantee faster dashboards",
      "They replace primary keys",
    ],
    answer: 0,
    explanation:
      "Shared codes reduce ambiguity and improve comparability across systems.",
  },
  {
    id: "data-048",
    category: "data",
    topic: "Interoperability",
    level: "easy",
    question: "Which choice best supports interoperability?",
    options: [
      "Agreed data definitions and exchange standards",
      "Different labels for the same concept in every system",
      "Manual retyping of files for each transfer",
      "Removing all reference tables",
    ],
    answer: 0,
    explanation:
      "Interoperability is strengthened by common standards and definitions.",
  },
  {
    id: "data-049",
    category: "data",
    topic: "Interoperability",
    level: "medium",
    question:
      "A transfer succeeds but key fields are mapped to the wrong destination columns. What kind of issue is this most likely?",
    options: [
      "Structure and mapping issue in data exchange",
      "Ethics issue only",
      "Visualisation issue only",
      "Ownership issue only",
    ],
    answer: 0,
    explanation:
      "Incorrect field mapping is a data exchange and structure problem.",
  },
  {
    id: "data-050",
    category: "data",
    topic: "Interoperability",
    level: "hard",
    question: "Which approach is weakest for long-term interoperability?",
    options: [
      "Relying on manual translation of meaning at reporting stage only",
      "Creating shared definitions and mapping rules",
      "Using governed exchange structures",
      "Maintaining reference code alignment",
    ],
    answer: 0,
    explanation: "Manual translation at the end is fragile and does not scale.",
  },
  {
    id: "data-051",
    category: "data",
    topic: "Knowledge management",
    level: "medium",
    question:
      "Which measure would most improve the findability and reuse of organisational knowledge?",
    options: [
      "Allowing teams to create their own labels without any shared structure",
      "Applying a common taxonomy, consistent tagging and clear ownership of knowledge assets",
      "Keeping descriptions minimal so staff read the full documents themselves",
      "Storing final documents only and avoiding intermediate context or lessons learned",
    ],
    answer: 1,
    explanation:
      "Consistent taxonomy, tagging and ownership make knowledge easier to find and reuse.",
  },
  {
    id: "data-052",
    category: "data",
    topic: "Knowledge management",
    level: "hard",
    question:
      "Which practice is most likely to reduce knowledge loss after staff turnover?",
    options: [
      "Capturing decision rationales, lessons learned and procedural know-how in a structured, reusable form",
      "Keeping only final deliverables because intermediate reasoning creates unnecessary volume",
      "Relying on managers to transfer key knowledge informally during departure meetings",
      "Restricting access to working documents until projects are fully closed",
    ],
    answer: 0,
    explanation:
      "Knowledge loss is reduced when know-how and rationale are captured explicitly.",
  },
  {
    id: "data-053",
    category: "data",
    topic: "Knowledge management",
    level: "hard",
    question:
      "What is the main objective of knowledge management in an institution with high staff mobility?",
    options: [
      "To capture and share know-how so that expertise remains reusable when people or teams change",
      "To reduce the need for formal documentation by relying on informal networks",
      "To ensure that only final outputs are preserved while working material is discarded",
      "To concentrate all information handling within the records management function alone",
    ],
    answer: 0,
    explanation:
      "Knowledge management is particularly valuable where tacit knowledge may otherwise be lost.",
  },
  {
    id: "data-054",
    category: "data",
    topic: "Knowledge management",
    level: "easy",
    question:
      "Which practice best preserves organisational learning after a project ends?",
    options: [
      "Capturing lessons learned in a structured and searchable format",
      "Deleting all draft material immediately",
      "Relying only on verbal handover conversations",
      "Saving files without titles or tags",
    ],
    answer: 0,
    explanation:
      "Structured lessons learned make experience easier to find and reuse.",
  },
  {
    id: "data-055",
    category: "data",
    topic: "Knowledge management",
    level: "medium",
    question:
      "Which feature most improves knowledge findability in a shared repository?",
    options: [
      "Consistent tagging and a common taxonomy",
      "Different naming habits for each team",
      "Removing summaries from documents",
      "Saving files only as images",
    ],
    answer: 0,
    explanation: "Consistent tags and taxonomy make content easier to locate.",
  },
  {
    id: "data-056",
    category: "data",
    topic: "Knowledge management",
    level: "medium",
    question: "Why is documenting decision rationale useful?",
    options: [
      "Future teams can understand why a choice was made, not just what was done",
      "It automatically prevents all future errors",
      "It removes the need for governance",
      "It makes metadata unnecessary",
    ],
    answer: 0,
    explanation: "Rationale helps later users interpret decisions in context.",
  },
  {
    id: "data-057",
    category: "data",
    topic: "Knowledge management",
    level: "hard",
    question:
      "Which risk is highest when critical know-how remains mostly tacit?",
    options: [
      "Operational capability may depend too heavily on specific individuals",
      "Dashboards will always refresh more slowly",
      "All data quality issues will disappear",
      "The organisation will automatically create duplicates",
    ],
    answer: 0,
    explanation:
      "Tacit knowledge creates dependency on people rather than reusable assets.",
  },
  {
    id: "data-058",
    category: "data",
    topic: "Knowledge management",
    level: "easy",
    question: "What is a taxonomy in knowledge management?",
    options: [
      "A structured way to classify and organise information",
      "A backup copy of a database",
      "A method for encrypting reports",
      "A chart showing time trends",
    ],
    answer: 0,
    explanation:
      "A taxonomy is a classification structure used to organise content.",
  },
  {
    id: "data-059",
    category: "data",
    topic: "Knowledge management",
    level: "medium",
    question: "Which situation most clearly shows weak knowledge management?",
    options: [
      "Important procedures exist only in the memory of one experienced colleague",
      "Lessons learned are stored in a searchable library",
      "Teams apply common document tags",
      "Decision logs are linked to project folders",
    ],
    answer: 0,
    explanation:
      "If knowledge lives only in one person, it is not properly captured or shared.",
  },
  {
    id: "data-060",
    category: "data",
    topic: "Knowledge management",
    level: "hard",
    question:
      "What is the strongest reason to assign ownership for key knowledge assets?",
    options: [
      "Someone is clearly responsible for keeping them current and usable",
      "It guarantees everyone reads them",
      "It removes the need for search",
      "It turns documents into primary data sources",
    ],
    answer: 0,
    explanation:
      "Ownership supports maintenance and accountability for knowledge assets.",
  },
  {
    id: "data-061",
    category: "data",
    topic: "AI data management",
    level: "medium",
    question:
      "When preparing a dataset to evaluate an AI model, which choice is most appropriate?",
    options: [
      "Use a dataset that is balanced, representative of the intended use case and appropriately anonymised",
      "Use only the cleanest and easiest cases so model performance can be measured without noise",
      "Use a narrow dataset from a single subgroup to reduce variation during testing",
      "Use live production data with identifiers intact so results reflect operational reality as closely as possible",
    ],
    answer: 0,
    explanation:
      "A sound evaluation dataset should be representative, balanced and privacy-conscious.",
  },
  {
    id: "data-062",
    category: "data",
    topic: "AI data management",
    level: "medium",
    question:
      "Why is anonymisation important when preparing AI evaluation datasets?",
    options: [
      "It protects personal data while allowing controlled evaluation",
      "It guarantees perfect model accuracy by removing all irrelevant variation",
      "It makes governance documentation unnecessary once records can no longer be linked to individuals",
      "It prevents bias by ensuring that all groups are represented equally",
    ],
    answer: 0,
    explanation:
      "Anonymisation protects privacy, but does not automatically solve every evaluation issue.",
  },
  {
    id: "data-063",
    category: "data",
    topic: "AI data management",
    level: "hard",
    question:
      "An AI system performs well in testing but poorly in real use because the test set underrepresents complex edge cases. What is the most plausible explanation?",
    options: [
      "The evaluation dataset was not sufficiently representative of operational conditions",
      "The model should have been assessed only on anonymised records",
      "The lineage documentation for the test set was probably incomplete",
      "The test process failed because accuracy metrics should never be used in model evaluation",
    ],
    answer: 0,
    explanation:
      "A mismatch between test conditions and real use often indicates poor representativeness.",
  },
  {
    id: "data-064",
    category: "data",
    topic: "AI data management",
    level: "medium",
    question:
      "Why is representativeness important in a training or evaluation dataset?",
    options: [
      "Because the data should reflect the population or cases the model will face in practice",
      "Because a representative dataset is always smaller and cheaper",
      "Because representativeness removes the need for validation",
      "Because it guarantees zero bias in model outputs",
    ],
    answer: 0,
    explanation:
      "A representative dataset improves the relevance of performance assessment.",
  },
  {
    id: "data-065",
    category: "data",
    topic: "AI data management",
    level: "hard",
    question:
      "Which situation creates the greatest risk of data leakage in model evaluation?",
    options: [
      "Training and test data contain overlapping records or closely related observations",
      "The evaluation dataset is slightly smaller than expected",
      "The model documentation is written after testing",
      "The data steward reviews the schema before release",
    ],
    answer: 0,
    explanation:
      "Overlap between training and test data can inflate apparent model performance.",
  },
  {
    id: "data-066",
    category: "data",
    topic: "AI data management",
    level: "medium",
    question: "What is bias in an AI dataset?",
    options: [
      "Systematic distortion that affects model outcomes",
      "Random noise in data",
      "Missing values only",
      "Duplicate records only",
    ],
    answer: 0,
    explanation: "Bias can lead to unfair or systematically skewed outcomes.",
  },
  {
    id: "data-067",
    category: "data",
    topic: "AI data management",
    level: "hard",
    question: "Why is it risky to evaluate a model only on easy cases?",
    options: [
      "The reported performance may be too optimistic for real-world conditions",
      "Easy cases always contain more bias",
      "It makes anonymisation impossible",
      "It prevents use of confusion matrices",
    ],
    answer: 0,
    explanation:
      "Easy-only evaluation can overstate real operational performance.",
  },
  {
    id: "data-068",
    category: "data",
    topic: "AI data management",
    level: "easy",
    question: "What does data leakage usually do to model evaluation results?",
    options: [
      "It makes performance look better than it really is",
      "It always lowers accuracy to zero",
      "It only affects storage costs",
      "It changes labels into metadata",
    ],
    answer: 0,
    explanation: "Leakage artificially inflates apparent model performance.",
  },
  {
    id: "data-069",
    category: "data",
    topic: "AI data management",
    level: "medium",
    question:
      "Which practice best supports responsible AI dataset preparation?",
    options: [
      "Documenting provenance, scope, limitations and handling rules",
      "Keeping all assumptions implicit",
      "Testing only on one subgroup",
      "Using unidentified source files with no metadata",
    ],
    answer: 0,
    explanation:
      "Documentation supports traceability, governance and appropriate use.",
  },
  {
    id: "data-070",
    category: "data",
    topic: "AI data management",
    level: "hard",
    question:
      "Which issue is most likely when a model is trained on historical decisions that were themselves biased?",
    options: [
      "The model may learn and reproduce those historical biases",
      "The model becomes automatically fairer over time",
      "The training data becomes fully anonymised",
      "The dataset no longer needs governance review",
    ],
    answer: 0,
    explanation: "Models can inherit patterns present in their training data.",
  },
  {
    id: "data-071",
    category: "data",
    topic: "Stewardship",
    level: "medium",
    question:
      "Which arrangement best supports accountability for ongoing data management?",
    options: [
      "Responsibility is shared informally by all users of the dataset",
      "The technical administrator acts as the sole authority for all business definitions",
      "Named data stewards manage day-to-day controls within a documented governance framework",
      "Ownership rotates quarterly so that no single team controls the dataset for too long",
    ],
    answer: 2,
    explanation:
      "Named stewards and documented controls support accountability.",
  },
  {
    id: "data-072",
    category: "data",
    topic: "Stewardship",
    level: "hard",
    question:
      "A recurring quality issue affects a critical dataset, but no one follows up because all teams assume another team is responsible. Which improvement is most likely to help first?",
    options: [
      "Assign explicit stewardship responsibilities and escalation paths for the dataset",
      "Increase the number of users reviewing the dashboard each month",
      "Move the dataset to a different reporting tool",
      "Delay publication until all teams independently confirm they are not responsible",
    ],
    answer: 0,
    explanation: "The immediate problem is unclear accountability.",
  },
  {
    id: "data-073",
    category: "data",
    topic: "Stewardship",
    level: "hard",
    question: "What is the most appropriate responsibility of a data steward?",
    options: [
      "To oversee day-to-day data quality controls, definitions and issue follow-up within an agreed governance structure",
      "To replace the data owner in all strategic decision-making matters",
      "To maintain every integration interface personally",
      "To approve organisational policy independently of governance bodies",
    ],
    answer: 0,
    explanation: "The steward role is operational and control-oriented.",
  },
  {
    id: "data-074",
    category: "data",
    topic: "Stewardship",
    level: "medium",
    question: "What is a typical responsibility of a data steward?",
    options: [
      "Defining business rules, monitoring data quality issues and coordinating remediation",
      "Approving the annual financial statements of the institution",
      "Replacing all database administrators in the organisation",
      "Designing network firewalls for all systems",
    ],
    answer: 0,
    explanation:
      "Stewards typically support definitions, controls and issue resolution.",
  },
  {
    id: "data-075",
    category: "data",
    topic: "Stewardship",
    level: "easy",
    question: "Why are named stewards useful?",
    options: [
      "They make responsibility for operational data issues clearer",
      "They eliminate the need for governance",
      "They automatically fix all source data",
      "They replace all technical teams",
    ],
    answer: 0,
    explanation: "Named roles make accountability more explicit.",
  },
  {
    id: "data-076",
    category: "data",
    topic: "Stewardship",
    level: "medium",
    question: "Which situation most clearly shows ineffective stewardship?",
    options: [
      "Known recurring issues are logged but no one tracks remediation to closure",
      "Quality rules are documented and reviewed",
      "Stewards participate in issue triage meetings",
      "Definitions are linked to owned data assets",
    ],
    answer: 0,
    explanation:
      "Stewardship should include active follow-up, not just logging issues.",
  },
  {
    id: "data-077",
    category: "data",
    topic: "Stewardship",
    level: "hard",
    question:
      "Why should stewardship be linked to governance rather than handled informally?",
    options: [
      "Because stewards need defined authority, processes and escalation routes",
      "Because informal arrangements always improve speed",
      "Because governance removes the need for data quality checks",
      "Because stewardship is only a technical role",
    ],
    answer: 0,
    explanation:
      "Formal linkage supports authority and consistent issue handling.",
  },
  {
    id: "data-078",
    category: "data",
    topic: "Stewardship",
    level: "easy",
    question: "What is stewardship mainly about?",
    options: [
      "Operational care of data, including quality, definitions and follow-up",
      "Writing annual corporate strategy",
      "Designing office layouts",
      "Replacing databases with spreadsheets",
    ],
    answer: 0,
    explanation:
      "Stewardship focuses on day-to-day management and control of data.",
  },
  {
    id: "data-079",
    category: "data",
    topic: "Stewardship",
    level: "medium",
    question:
      "A steward notices repeated invalid values in a critical field. What is the best first action?",
    options: [
      "Investigate the source process and coordinate remediation with the responsible teams",
      "Delete the field from all reports",
      "Ignore the issue until the next quarter",
      "Change the dashboard colour scheme",
    ],
    answer: 0,
    explanation:
      "Stewards should help identify cause and coordinate correction.",
  },
  {
    id: "data-080",
    category: "data",
    topic: "Stewardship",
    level: "hard",
    question:
      "Which model is weakest for stewardship of a shared enterprise dataset?",
    options: [
      "Assuming responsibility is obvious without naming owners or stewards",
      "Assigning named stewards and clear issue processes",
      "Linking stewardship to governance forums",
      "Tracking issue remediation status",
    ],
    answer: 0,
    explanation:
      "Implicit responsibility often leads to unowned issues and delays.",
  },
  {
    id: "data-081",
    category: "data",
    topic: "Analytics",
    level: "medium",
    question:
      "A dashboard shows an abrupt rise in cases, but the reporting definition changed last month. What is the most appropriate first conclusion?",
    options: [
      "The trend may not be directly comparable across periods and should be interpreted with caution",
      "The rise is certainly operational and should trigger immediate escalation",
      "The dashboard is invalid and should be deleted",
      "The change proves that historical data is no longer useful",
    ],
    answer: 0,
    explanation: "A definition change can break comparability across time.",
  },
  {
    id: "data-082",
    category: "data",
    topic: "Analytics",
    level: "hard",
    question:
      "Which situation most weakens the reliability of a KPI used for management decisions?",
    options: [
      "Its calculation logic differs between departments even though the label is identical",
      "It is displayed in a simple chart rather than a detailed table",
      "It is reviewed only at monthly intervals",
      "It is shown together with two supplementary metrics",
    ],
    answer: 0,
    explanation:
      "If departments calculate the same KPI differently, it becomes unreliable.",
  },
  {
    id: "data-083",
    category: "data",
    topic: "Analytics",
    level: "hard",
    question: "Which action best supports trustworthy analytical reporting?",
    options: [
      "Documenting the metric logic, source scope and transformation assumptions behind each indicator",
      "Prioritising visually attractive charts even when definitions are still evolving",
      "Limiting access to the report so fewer users notice inconsistencies",
      "Publishing early values before reconciliation to increase timeliness",
    ],
    answer: 0,
    explanation:
      "Trustworthy reporting depends on transparent definitions, scope and logic.",
  },
  {
    id: "data-084",
    category: "data",
    topic: "Analytics",
    level: "medium",
    question:
      "Why should analysts be careful when comparing percentages based on very different sample sizes?",
    options: [
      "Small samples can make percentages unstable and misleading",
      "Percentages are only valid for large datasets",
      "Different sample sizes automatically imply causation",
      "Percentages cannot be shown in dashboards",
    ],
    answer: 0,
    explanation: "Percentages from small samples can fluctuate heavily.",
  },
  {
    id: "data-085",
    category: "data",
    topic: "Analytics",
    level: "hard",
    question:
      "What is the clearest benefit of using a data dictionary alongside a KPI dashboard?",
    options: [
      "It helps users understand definitions and calculation logic consistently",
      "It guarantees that all KPIs improve over time",
      "It removes the need for data owners",
      "It makes source systems unnecessary",
    ],
    answer: 0,
    explanation: "A data dictionary supports consistent interpretation.",
  },
  {
    id: "data-086",
    category: "data",
    topic: "Analytics",
    level: "medium",
    question:
      "A KPI improves after a system change, but data collection also changed. What is the main risk?",
    options: [
      "The improvement may reflect measurement change rather than real performance",
      "The KPI cannot be calculated anymore",
      "The dataset becomes too large",
      "The dashboard will not refresh",
    ],
    answer: 0,
    explanation: "Measurement changes can create artificial trends.",
  },
  {
    id: "data-087",
    category: "data",
    topic: "Analytics",
    level: "hard",
    question: "Which situation most strongly indicates survivorship bias?",
    options: [
      "Analysis includes only entities that remain active and excludes those that dropped out",
      "Data is updated too frequently",
      "A dataset contains missing values",
      "A dashboard uses percentages instead of totals",
    ],
    answer: 0,
    explanation:
      "Survivorship bias occurs when failed or inactive cases are excluded.",
  },
  {
    id: "data-088",
    category: "data",
    topic: "Analytics",
    level: "medium",
    question:
      "A reported increase in average processing time is driven by a few extreme cases. Which step is most appropriate?",
    options: [
      "Check the distribution and compare mean with median before drawing conclusions",
      "Ignore the issue because the average is always sufficient",
      "Delete all high values automatically",
      "Replace the report with a pie chart",
    ],
    answer: 0,
    explanation:
      "Comparing summary measures helps assess whether outliers are driving the result.",
  },
  {
    id: "data-089",
    category: "data",
    topic: "Analytics",
    level: "medium",
    question:
      "What is the main risk of comparing raw totals across regions with very different population sizes?",
    options: [
      "Larger regions may appear worse simply because they have more people",
      "It causes SQL syntax errors",
      "It prevents the use of charts",
      "It makes totals impossible to calculate",
    ],
    answer: 0,
    explanation:
      "Raw totals can be misleading when population sizes differ greatly.",
  },
  {
    id: "data-090",
    category: "data",
    topic: "Analytics",
    level: "hard",
    question:
      "Which practice best reduces the risk of misinterpreting a trend?",
    options: [
      "Checking whether definitions, scope or methods changed over time",
      "Assuming all historical periods are fully comparable",
      "Using only the most recent month",
      "Removing all annotations from charts",
    ],
    answer: 0,
    explanation:
      "Trend interpretation requires checking comparability across periods.",
  },
  {
    id: "data-091",
    category: "data",
    topic: "Databases",
    level: "medium",
    question:
      "Which table design issue is most likely to create duplicate-counting problems in analytical reporting?",
    options: [
      "The same real-world entity appears multiple times without a stable unique identifier",
      "Columns are displayed in alphabetical order",
      "The table contains date fields",
      "A reporting view uses descriptive labels instead of codes",
    ],
    answer: 0,
    explanation:
      "Without stable identifiers, the same entity may be counted repeatedly.",
  },
  {
    id: "data-092",
    category: "data",
    topic: "Databases",
    level: "hard",
    question:
      "Which control most directly supports reliable joins between datasets from different systems?",
    options: [
      "Consistent identifier standards and validated key fields across the source systems",
      "More frequent export schedules for all source tables",
      "Using wider tables with more descriptive columns",
      "Adding more free-text notes to each record",
    ],
    answer: 0,
    explanation:
      "Reliable joins depend on consistent, well-governed identifiers.",
  },
  {
    id: "data-093",
    category: "data",
    topic: "Databases",
    level: "hard",
    question:
      "A reference table is updated inconsistently across systems, causing the same status code to mean different things. What is the main risk for analysis?",
    options: [
      "Aggregations and comparisons may become misleading because categories are no longer semantically aligned",
      "Visualisations will load more slowly",
      "Storage requirements will increase sharply",
      "The database will automatically reject historical records",
    ],
    answer: 0,
    explanation:
      "When status codes lose semantic alignment, analysis becomes unreliable.",
  },
  {
    id: "data-094",
    category: "data",
    topic: "Databases",
    level: "easy",
    question:
      "In a relational database, what is a foreign key mainly used for?",
    options: [
      "To link a row in one table to a related row in another table",
      "To encrypt confidential columns automatically",
      "To order the result alphabetically",
      "To duplicate values across all tables",
    ],
    answer: 0,
    explanation: "A foreign key creates a relationship between tables.",
  },
  {
    id: "data-095",
    category: "data",
    topic: "Databases",
    level: "medium",
    question: "What is an index mainly used for?",
    options: [
      "To speed up data retrieval",
      "To store backup data",
      "To enforce business rules",
      "To delete duplicate records",
    ],
    answer: 0,
    explanation: "Indexes improve query performance.",
  },
  {
    id: "data-096",
    category: "data",
    topic: "Databases",
    level: "hard",
    question: "What is a transaction in a database?",
    options: [
      "A sequence of operations executed as a single unit",
      "A backup copy of a table",
      "A type of index",
      "A data visualisation",
    ],
    answer: 0,
    explanation: "Transactions ensure atomicity and consistency.",
  },
  {
    id: "data-097",
    category: "data",
    topic: "Databases",
    level: "medium",
    question:
      "Why are stable unique identifiers important in databases used for analytics?",
    options: [
      "They support accurate joins, de-duplication and counting",
      "They eliminate the need for metadata",
      "They guarantee data is up to date",
      "They replace all reference data",
    ],
    answer: 0,
    explanation: "Stable identifiers help link and count entities reliably.",
  },
  {
    id: "data-098",
    category: "data",
    topic: "Databases",
    level: "hard",
    question:
      "Which issue is most likely if the same business entity can be stored without a key constraint?",
    options: [
      "Duplicate or conflicting representations of the same entity",
      "Automatic encryption of all columns",
      "Guaranteed faster analytics queries",
      "Removal of all null values",
    ],
    answer: 0,
    explanation:
      "Without key constraints, duplicates and inconsistency are more likely.",
  },
  {
    id: "data-099",
    category: "data",
    topic: "Databases",
    level: "easy",
    question: "What is the purpose of a primary key?",
    options: [
      "To uniquely identify each row in a table",
      "To sort rows by date",
      "To hide personal data",
      "To format a chart",
    ],
    answer: 0,
    explanation: "A primary key uniquely identifies each record.",
  },
  {
    id: "data-100",
    category: "data",
    topic: "Databases",
    level: "medium",
    question: "Which situation most directly threatens referential integrity?",
    options: [
      "Child rows refer to keys that do not exist in the parent table",
      "A report uses too many colours",
      "A dashboard includes a subtitle",
      "A dataset is updated daily",
    ],
    answer: 0,
    explanation:
      "Referential integrity requires linked records to match valid parent keys.",
  },
  {
    id: "data-101",
    category: "data",
    topic: "Statistics",
    level: "easy",
    question:
      "Which measure of central tendency is most affected by extreme values?",
    options: ["Mean", "Median", "Mode", "Quartile"],
    answer: 0,
    explanation: "The mean is especially sensitive to outliers.",
  },
  {
    id: "data-102",
    category: "data",
    topic: "Statistics",
    level: "medium",
    question:
      "A distribution is strongly skewed to the right. Which statement is most likely to be true?",
    options: [
      "The mean is greater than the median",
      "The median is greater than the mean",
      "The mean and median are always identical",
      "The mode cannot be calculated",
    ],
    answer: 0,
    explanation:
      "In a right-skewed distribution, high values pull the mean upward more than the median.",
  },
  {
    id: "data-103",
    category: "data",
    topic: "Statistics",
    level: "medium",
    question: "What does a standard deviation primarily describe?",
    options: [
      "The spread of values around the mean",
      "The number of missing observations",
      "The percentage of correct records",
      "The direction of a time trend",
    ],
    answer: 0,
    explanation:
      "Standard deviation measures how dispersed observations are around the mean.",
  },
  {
    id: "data-104",
    category: "data",
    topic: "Statistics",
    level: "hard",
    question:
      "Why is correlation alone insufficient for claiming that one variable causes another?",
    options: [
      "Because association may be explained by coincidence, confounding variables or reverse causality",
      "Because correlation only works for categorical data",
      "Because correlation always implies a negative relationship",
      "Because causal relationships never produce correlation",
    ],
    answer: 0,
    explanation:
      "Correlation shows association, not the underlying causal mechanism.",
  },
  {
    id: "data-105",
    category: "data",
    topic: "Statistics",
    level: "hard",
    question:
      "A sample is drawn only from users who completed an online form voluntarily. What is the main analytical risk?",
    options: [
      "Selection bias",
      "Data encryption",
      "Referential integrity",
      "Normalisation failure",
    ],
    answer: 0,
    explanation:
      "Voluntary response samples often overrepresent certain profiles.",
  },
  {
    id: "data-106",
    category: "data",
    topic: "Statistics",
    level: "medium",
    question: "What does a median represent?",
    options: [
      "The middle value in a sorted dataset",
      "The average of all values",
      "The most frequent value",
      "The total sum of values",
    ],
    answer: 0,
    explanation: "The median is the central value when data is ordered.",
  },
  {
    id: "data-107",
    category: "data",
    topic: "Statistics",
    level: "hard",
    question: "Which situation most suggests outliers are influencing results?",
    options: [
      "Mean is much higher than median",
      "Median equals mean",
      "Values are evenly distributed",
      "Dataset has no missing values",
    ],
    answer: 0,
    explanation:
      "Large differences between mean and median often indicate outliers.",
  },
  {
    id: "data-108",
    category: "data",
    topic: "Statistics",
    level: "medium",
    question:
      "Which measure is usually more robust than the mean when a dataset contains extreme outliers?",
    options: ["Median", "Sum", "Variance", "Maximum"],
    answer: 0,
    explanation: "The median is less affected by extreme values.",
  },
  {
    id: "data-109",
    category: "data",
    topic: "Statistics",
    level: "medium",
    question: "What does a high standard deviation generally indicate?",
    options: [
      "Values are widely spread around the average",
      "The dataset contains no missing values",
      "The mean and median are identical",
      "All values are positive",
    ],
    answer: 0,
    explanation: "Standard deviation measures dispersion around the mean.",
  },
  {
    id: "data-110",
    category: "data",
    topic: "Statistics",
    level: "hard",
    question:
      "Why should percentages based on tiny denominators be treated carefully?",
    options: [
      "They can look dramatic while being statistically unstable",
      "They are always incorrect",
      "They cannot be displayed in dashboards",
      "They always imply causation",
    ],
    answer: 0,
    explanation:
      "Small denominators can produce large but unstable percentage swings.",
  },
  {
    id: "data-111",
    category: "data",
    topic: "SQL",
    level: "easy",
    question:
      "Which SQL clause is typically used to filter rows before aggregation?",
    options: ["WHERE", "HAVING", "ORDER BY", "GROUP BY"],
    answer: 0,
    explanation: "WHERE filters rows before grouping and aggregation.",
  },
  {
    id: "data-112",
    category: "data",
    topic: "SQL",
    level: "medium",
    question: "What is the main difference between WHERE and HAVING in SQL?",
    options: [
      "WHERE filters rows before aggregation, while HAVING filters grouped results after aggregation",
      "HAVING is used only for text columns, while WHERE is used only for numeric columns",
      "WHERE sorts rows, while HAVING removes duplicates",
      "HAVING creates joins, while WHERE updates values",
    ],
    answer: 0,
    explanation:
      "WHERE applies before grouping, whereas HAVING is evaluated after aggregation.",
  },
  {
    id: "data-113",
    category: "data",
    topic: "SQL",
    level: "medium",
    question:
      "Which join returns all matching rows plus unmatched rows from the left table?",
    options: ["LEFT JOIN", "INNER JOIN", "CROSS JOIN", "SELF JOIN"],
    answer: 0,
    explanation:
      "A LEFT JOIN keeps every row from the left table whether or not a match exists.",
  },
  {
    id: "data-114",
    category: "data",
    topic: "SQL",
    level: "hard",
    question:
      "What is a common reason for receiving duplicated rows after joining two tables?",
    options: [
      "The join key is not unique in one or both tables",
      "The query contains a WHERE clause",
      "One table includes NULL values",
      "The database uses indexes",
    ],
    answer: 0,
    explanation:
      "Non-unique join keys can create one-to-many or many-to-many expansions.",
  },
  {
    id: "data-115",
    category: "data",
    topic: "SQL",
    level: "hard",
    question: "Why are window functions useful in analytics queries?",
    options: [
      "They calculate values across related rows without collapsing the result set",
      "They physically split a table into smaller tables",
      "They automatically normalise inconsistent schemas",
      "They replace the need for joins and filters",
    ],
    answer: 0,
    explanation:
      "Window functions allow ranking and running totals while preserving row-level detail.",
  },
  {
    id: "data-116",
    category: "data",
    topic: "SQL",
    level: "medium",
    question: "What does GROUP BY do in SQL?",
    options: [
      "Aggregates rows based on one or more columns",
      "Sorts rows alphabetically",
      "Deletes duplicate records",
      "Filters rows before selection",
    ],
    answer: 0,
    explanation: "GROUP BY groups rows to apply aggregation functions.",
  },
  {
    id: "data-117",
    category: "data",
    topic: "SQL",
    level: "hard",
    question: "Why can COUNT(*) and COUNT(column) return different results?",
    options: [
      "COUNT(column) ignores NULL values",
      "COUNT(*) excludes duplicates",
      "COUNT(column) counts only distinct values",
      "COUNT(*) only works on numeric columns",
    ],
    answer: 0,
    explanation: "COUNT(column) ignores NULLs, while COUNT(*) counts all rows.",
  },
  {
    id: "data-118",
    category: "data",
    topic: "SQL",
    level: "medium",
    question: "Which clause is used to remove duplicate rows in SQL results?",
    options: ["DISTINCT", "GROUP BY", "WHERE", "JOIN"],
    answer: 0,
    explanation: "DISTINCT removes duplicate rows from results.",
  },
  {
    id: "data-119",
    category: "data",
    topic: "SQL",
    level: "easy",
    question: "Which SQL clause is typically used to sort query results?",
    options: ["ORDER BY", "WHERE", "JOIN", "COUNT"],
    answer: 0,
    explanation: "ORDER BY sorts the result set.",
  },
  {
    id: "data-120",
    category: "data",
    topic: "SQL",
    level: "medium",
    question:
      "Which SQL function is commonly used to count rows in a table or group?",
    options: ["COUNT()", "SUM()", "AVG()", "ROUND()"],
    answer: 0,
    explanation: "COUNT() returns the number of rows.",
  },
  {
    id: "data-121",
    category: "data",
    topic: "Data modelling",
    level: "easy",
    question: "What is the main purpose of a primary key in a table?",
    options: [
      "To uniquely identify each row",
      "To sort rows alphabetically",
      "To hide sensitive columns",
      "To compress the table",
    ],
    answer: 0,
    explanation: "A primary key uniquely identifies each record.",
  },
  {
    id: "data-122",
    category: "data",
    topic: "Data modelling",
    level: "medium",
    question:
      "What is the main benefit of normalising a relational database design?",
    options: [
      "To reduce redundancy and update anomalies",
      "To make all tables wider",
      "To ensure every query runs faster",
      "To remove the need for reference data",
    ],
    answer: 0,
    explanation:
      "Normalisation reduces repeated data and improves consistency when values change.",
  },
  {
    id: "data-123",
    category: "data",
    topic: "Data modelling",
    level: "medium",
    question: "In a star schema, what is the usual role of dimension tables?",
    options: [
      "To provide descriptive context for facts and measures",
      "To store only temporary query output",
      "To enforce network security rules",
      "To replace all primary keys with text labels",
    ],
    answer: 0,
    explanation:
      "Dimension tables hold descriptive attributes used to slice and interpret facts.",
  },
  {
    id: "data-124",
    category: "data",
    topic: "Data modelling",
    level: "hard",
    question: "Why can slowly changing dimensions matter in reporting?",
    options: [
      "Because analysts may need to preserve historical attribute values as they were at the time of the event",
      "Because all dimensions must change every day",
      "Because facts cannot be stored without deleting old attributes",
      "Because dimensions are only used in transactional systems",
    ],
    answer: 0,
    explanation:
      "Historical reporting often depends on tracking changes in descriptive attributes over time.",
  },
  {
    id: "data-125",
    category: "data",
    topic: "Data modelling",
    level: "medium",
    question: "What is a common risk of denormalised tables?",
    options: [
      "Data redundancy and inconsistency",
      "Faster queries in all cases",
      "Loss of all relationships",
      "Automatic deletion of duplicates",
    ],
    answer: 0,
    explanation:
      "Denormalisation can introduce redundancy and inconsistencies.",
  },
  {
    id: "data-126",
    category: "data",
    topic: "Data modelling",
    level: "hard",
    question: "Why are surrogate keys often used in data warehouses?",
    options: [
      "To provide stable identifiers independent of source system changes",
      "To reduce storage size",
      "To encrypt data automatically",
      "To replace dimension tables",
    ],
    answer: 0,
    explanation:
      "Surrogate keys isolate the warehouse from source system changes.",
  },
  {
    id: "data-127",
    category: "data",
    topic: "Data modelling",
    level: "medium",
    question: "In dimensional modelling, what is a fact table mainly used for?",
    options: [
      "To store measurable events or transactions",
      "To store only user access permissions",
      "To replace all dimension tables",
      "To hold glossary definitions",
    ],
    answer: 0,
    explanation:
      "Fact tables store measurable business events, often linked to dimensions.",
  },
  {
    id: "data-128",
    category: "data",
    topic: "Data modelling",
    level: "medium",
    question: "Which is the best example of a dimension table?",
    options: [
      "A table listing products, categories and attributes",
      "A table recording daily sales amounts by transaction",
      "A log of failed ETL jobs",
      "A table of SQL user passwords",
    ],
    answer: 0,
    explanation:
      "Dimension tables describe entities such as products, regions or customers.",
  },
  {
    id: "data-129",
    category: "data",
    topic: "Data modelling",
    level: "hard",
    question:
      "Why can poor modelling make analytics harder even if all data is present?",
    options: [
      "The structure may make joins, definitions and aggregation logic more error-prone",
      "Because models only matter for design, not reporting",
      "Because analytics does not use relationships between tables",
      "Because denormalisation always prevents analysis",
    ],
    answer: 0,
    explanation:
      "Data structure has a major effect on analytical reliability and ease of use.",
  },
  {
    id: "data-130",
    category: "data",
    topic: "Data modelling",
    level: "easy",
    question: "What is normalisation mainly intended to reduce?",
    options: [
      "Redundant repeated data",
      "Chart labels",
      "Server uptime",
      "File permissions",
    ],
    answer: 0,
    explanation: "Normalisation reduces redundancy and update anomalies.",
  },
  {
    id: "data-131",
    category: "data",
    topic: "Data visualisation",
    level: "easy",
    question:
      "Which chart type is usually most appropriate for showing a trend over time?",
    options: ["Line chart", "Pie chart", "Treemap", "Scatter plot"],
    answer: 0,
    explanation: "Line charts are well suited to showing change over time.",
  },
  {
    id: "data-132",
    category: "data",
    topic: "Data visualisation",
    level: "medium",
    question:
      "Why is a pie chart often a poor choice when many categories must be compared precisely?",
    options: [
      "Humans find angle and area comparisons less precise than aligned lengths",
      "Pie charts cannot show any labels",
      "Pie charts are only valid for negative values",
      "Pie charts always distort the source data",
    ],
    answer: 0,
    explanation:
      "Comparing slices is usually harder than comparing aligned bar lengths.",
  },
  {
    id: "data-133",
    category: "data",
    topic: "Data visualisation",
    level: "medium",
    question:
      "Which practice most improves the interpretability of a dashboard?",
    options: [
      "Using clear titles, definitions and consistent scales",
      "Adding as many colours as possible",
      "Placing unrelated charts together to maximise screen use",
      "Removing context notes to reduce clutter",
    ],
    answer: 0,
    explanation:
      "Clear labels, definitions and consistent scales help users interpret charts correctly.",
  },
  {
    id: "data-134",
    category: "data",
    topic: "Data visualisation",
    level: "hard",
    question: "Why can truncating the y-axis in a bar chart be misleading?",
    options: [
      "It can exaggerate visual differences between values",
      "It prevents labels from being displayed",
      "It makes all categories look equal",
      "It removes the need for legends",
    ],
    answer: 0,
    explanation:
      "A truncated axis can make small differences appear much larger than they really are.",
  },
  {
    id: "data-135",
    category: "data",
    topic: "Data visualisation",
    level: "medium",
    question:
      "Which visualisation best shows correlation between two variables?",
    options: ["Scatter plot", "Pie chart", "Bar chart", "Treemap"],
    answer: 0,
    explanation:
      "Scatter plots are useful for showing relationships between variables.",
  },
  {
    id: "data-136",
    category: "data",
    topic: "Data visualisation",
    level: "hard",
    question: "Why can too many colours in a chart be problematic?",
    options: [
      "It reduces clarity and makes interpretation harder",
      "It improves numerical accuracy",
      "It increases data quality",
      "It speeds up processing",
    ],
    answer: 0,
    explanation:
      "Too many colours can create visual clutter and cognitive overload.",
  },
  {
    id: "data-137",
    category: "data",
    topic: "Data visualisation",
    level: "medium",
    question:
      "Which chart is generally best for comparing values across categories?",
    options: ["Bar chart", "Line chart", "Area chart", "Bubble map"],
    answer: 0,
    explanation: "Bar charts are well suited to comparing discrete categories.",
  },
  {
    id: "data-138",
    category: "data",
    topic: "Data visualisation",
    level: "medium",
    question: "Which practice most improves the readability of a dashboard?",
    options: [
      "Using clear titles, consistent scales and limited clutter",
      "Adding as many effects as possible",
      "Displaying every available metric on one page",
      "Removing labels to save space",
    ],
    answer: 0,
    explanation:
      "Clear labelling, consistency and simplicity improve interpretation.",
  },
  {
    id: "data-139",
    category: "data",
    topic: "Data visualisation",
    level: "easy",
    question: "What is the main purpose of a chart title?",
    options: [
      "To explain what the chart is showing",
      "To decorate the dashboard",
      "To replace axis labels",
      "To increase file size",
    ],
    answer: 0,
    explanation:
      "A clear title helps users understand what the visual represents.",
  },
  {
    id: "data-140",
    category: "data",
    topic: "Data visualisation",
    level: "hard",
    question:
      "Why should inconsistent scales across similar charts be avoided?",
    options: [
      "They can lead users to make misleading visual comparisons",
      "They always prevent charts from loading",
      "They remove all labels automatically",
      "They only matter for pie charts",
    ],
    answer: 0,
    explanation: "Different scales can make equal changes look very different.",
  },
  {
    id: "data-141",
    category: "data",
    topic: "ETL and pipelines",
    level: "medium",
    question: "What is the main purpose of an ETL pipeline?",
    options: [
      "To extract, transform and load data into a target structure fit for use",
      "To encrypt every dataset before storage",
      "To replace metadata catalogues entirely",
      "To remove the need for source systems",
    ],
    answer: 0,
    explanation:
      "ETL pipelines move and reshape data into a usable target structure.",
  },
  {
    id: "data-142",
    category: "data",
    topic: "ETL and pipelines",
    level: "medium",
    question: "Why is idempotency valuable in data pipelines?",
    options: [
      "Because rerunning a job should not create inconsistent duplicate effects",
      "Because every pipeline should run only once",
      "Because idempotent jobs always finish faster",
      "Because idempotency removes the need for monitoring",
    ],
    answer: 0,
    explanation:
      "Idempotent pipelines can be rerun safely without corrupting results.",
  },
  {
    id: "data-143",
    category: "data",
    topic: "ETL and pipelines",
    level: "hard",
    question:
      "Which control most directly improves trust in a scheduled data pipeline?",
    options: [
      "Automated validation checks with logging and alerting on failures",
      "Using more dashboards after the pipeline runs",
      "Reducing documentation to speed deployment",
      "Allowing each source system to change formats freely",
    ],
    answer: 0,
    explanation:
      "Validation, logging and alerting help detect and investigate failures quickly.",
  },
  {
    id: "data-144",
    category: "data",
    topic: "ETL and pipelines",
    level: "medium",
    question:
      "Which step in an ETL pipeline is most likely to include standardising date formats and mapping codes?",
    options: ["Extract", "Transform", "Load", "Archive"],
    answer: 1,
    explanation: "Standardisation and mapping are transformation activities.",
  },
  {
    id: "data-145",
    category: "data",
    topic: "ETL and pipelines",
    level: "hard",
    question: "Why is silent failure especially dangerous in a data pipeline?",
    options: [
      "Incorrect data may continue to flow without anyone noticing immediately",
      "The pipeline can never be rerun",
      "Source systems stop collecting data",
      "The data catalogue is automatically deleted",
    ],
    answer: 0,
    explanation:
      "Silent failures can allow bad outputs to propagate unnoticed.",
  },
  {
    id: "data-146",
    category: "data",
    topic: "ETL and pipelines",
    level: "easy",
    question:
      "Which ETL step mainly moves data from the source into the pipeline?",
    options: ["Extract", "Transform", "Load", "Validate"],
    answer: 0,
    explanation: "Extraction is the stage where data is taken from the source.",
  },
  {
    id: "data-147",
    category: "data",
    topic: "ETL and pipelines",
    level: "medium",
    question: "What is the main advantage of automated pipeline scheduling?",
    options: [
      "Data processing can run consistently and repeatedly without manual triggering each time",
      "It removes the need for validation",
      "It guarantees perfect source data",
      "It makes metadata obsolete",
    ],
    answer: 0,
    explanation: "Scheduling supports repeatable and timely processing.",
  },
  {
    id: "data-148",
    category: "data",
    topic: "ETL and pipelines",
    level: "hard",
    question:
      "A daily pipeline loads the same source file twice after a rerun. Which property would most help avoid this?",
    options: [
      "Idempotent loading logic",
      "A brighter dashboard theme",
      "A wider source table",
      "A manual spreadsheet export",
    ],
    answer: 0,
    explanation:
      "Idempotent logic allows safe reruns without duplicate effects.",
  },
  {
    id: "data-149",
    category: "data",
    topic: "ETL and pipelines",
    level: "medium",
    question: "Why are transformation logs useful in pipelines?",
    options: [
      "They help trace what the pipeline did and support investigation when problems occur",
      "They replace data lineage entirely",
      "They guarantee the output is correct",
      "They reduce the need for ownership",
    ],
    answer: 0,
    explanation:
      "Logs provide operational evidence for debugging and traceability.",
  },
  {
    id: "data-150",
    category: "data",
    topic: "ETL and pipelines",
    level: "easy",
    question: "What does the L in ETL stand for?",
    options: ["Load", "Link", "Limit", "Label"],
    answer: 0,
    explanation: "ETL stands for Extract, Transform, Load.",
  },
  {
    id: "data-151",
    category: "data",
    topic: "Data protection and ethics",
    level: "easy",
    question: "What is data minimisation?",
    options: [
      "Collecting only the data that is necessary for the stated purpose",
      "Compressing all data files to reduce storage",
      "Deleting all historical data monthly",
      "Hiding metadata from analysts",
    ],
    answer: 0,
    explanation:
      "Data minimisation means limiting collection to what is necessary.",
  },
  {
    id: "data-152",
    category: "data",
    topic: "Data protection and ethics",
    level: "medium",
    question:
      "Which practice best supports responsible handling of sensitive data?",
    options: [
      "Applying least-privilege access and clear handling rules",
      "Sharing the full dataset widely to improve transparency",
      "Removing all documentation so fewer people understand the content",
      "Relying only on verbal instructions about confidentiality",
    ],
    answer: 0,
    explanation:
      "Least-privilege access limits exposure and makes control more robust.",
  },
  {
    id: "data-153",
    category: "data",
    topic: "Data protection and ethics",
    level: "hard",
    question:
      "Why can a dataset remain risky even after direct identifiers are removed?",
    options: [
      "Because combinations of remaining attributes may still allow re-identification",
      "Because anonymised data always becomes inaccurate",
      "Because identifier removal changes every numerical value",
      "Because metadata cannot be stored with anonymised records",
    ],
    answer: 0,
    explanation:
      "Indirect identifiers and combinations of variables can still make individuals identifiable.",
  },
  {
    id: "data-154",
    category: "data",
    topic: "Data protection and ethics",
    level: "medium",
    question: "Which practice best supports purpose limitation?",
    options: [
      "Using personal data only for the clearly defined purpose for which it was collected",
      "Reusing any available personal data whenever analysis might be interesting",
      "Keeping data indefinitely in case it becomes useful later",
      "Sharing full datasets broadly to promote transparency",
    ],
    answer: 0,
    explanation:
      "Purpose limitation means restricting use to the specified legitimate purpose.",
  },
  {
    id: "data-155",
    category: "data",
    topic: "Data protection and ethics",
    level: "medium",
    question:
      "Which measure most directly reduces the privacy risk of sharing a dataset for testing?",
    options: [
      "Removing or masking direct identifiers before access is granted",
      "Increasing the number of rows in the dataset",
      "Sorting records by creation date",
      "Exporting the file to a different format",
    ],
    answer: 0,
    explanation:
      "Removing or masking identifiers reduces the risk of exposing personal data.",
  },
  {
    id: "data-156",
    category: "data",
    topic: "Data protection and ethics",
    level: "medium",
    question: "What does least privilege mean in data access?",
    options: [
      "Users receive only the access necessary for their role",
      "All users receive full access by default",
      "Only managers may access reports",
      "Data is automatically deleted after viewing",
    ],
    answer: 0,
    explanation:
      "Least privilege reduces exposure by limiting access to what is needed.",
  },
  {
    id: "data-157",
    category: "data",
    topic: "Data protection and ethics",
    level: "hard",
    question:
      "Why is broad sharing of sensitive data a weak control, even within an organisation?",
    options: [
      "More copies and viewers increase the risk of inappropriate access or misuse",
      "Broad sharing always improves data quality",
      "Internal access has no privacy implications",
      "It removes the need for access logs",
    ],
    answer: 0,
    explanation: "Wider exposure generally increases risk and weakens control.",
  },
  {
    id: "data-158",
    category: "data",
    topic: "Data protection and ethics",
    level: "easy",
    question: "Which choice best reflects responsible data handling?",
    options: [
      "Applying access controls and clear usage rules",
      "Emailing full extracts to large distribution lists",
      "Keeping all identifiers visible by default",
      "Skipping documentation for sensitive datasets",
    ],
    answer: 0,
    explanation:
      "Responsible handling relies on controlled access and clear rules.",
  },
  {
    id: "data-159",
    category: "data",
    topic: "Data protection and ethics",
    level: "medium",
    question: "Why should retention periods be defined for data?",
    options: [
      "To avoid keeping data longer than necessary for the legitimate purpose",
      "To guarantee every report remains available forever",
      "To replace anonymisation",
      "To remove the need for metadata",
    ],
    answer: 0,
    explanation:
      "Retention rules help align data keeping with purpose and risk.",
  },
  {
    id: "data-160",
    category: "data",
    topic: "Data protection and ethics",
    level: "hard",
    question:
      "Which situation most clearly raises an ethical risk even if technically permitted?",
    options: [
      "Using data in a way that goes beyond what users would reasonably expect",
      "Refreshing a dashboard overnight",
      "Adding a new index to a table",
      "Moving a report to a different folder",
    ],
    answer: 0,
    explanation:
      "Ethical concerns can arise when data use exceeds reasonable expectations or fairness norms.",
  },
  {
    id: "data-161",
    category: "data",
    topic: "Reference data",
    level: "medium",
    question: "What is the main purpose of reference data in an organisation?",
    options: [
      "To provide shared standard values such as codes, labels and classifications",
      "To store only temporary calculation outputs",
      "To replace transaction records with summaries",
      "To archive unused dashboards",
    ],
    answer: 0,
    explanation:
      "Reference data provides shared standard values that promote consistency.",
  },
  {
    id: "data-162",
    category: "data",
    topic: "Reference data",
    level: "hard",
    question:
      "What is the main risk when different systems maintain separate versions of the same reference codes without coordination?",
    options: [
      "Cross-system comparisons and aggregations may become inconsistent",
      "Visual design choices will become less attractive",
      "Network latency will increase automatically",
      "All users will lose access to the source database",
    ],
    answer: 0,
    explanation:
      "Uncoordinated reference values undermine consistency and comparability.",
  },
  {
    id: "data-163",
    category: "data",
    topic: "Reference data",
    level: "medium",
    question: "Why should reference code lists be centrally maintained?",
    options: [
      "To promote consistent use of shared classifications across systems",
      "To ensure each team can invent its own codes freely",
      "To reduce the need for metadata entirely",
      "To replace all transaction processing",
    ],
    answer: 0,
    explanation: "Central maintenance supports consistency and comparability.",
  },
  {
    id: "data-164",
    category: "data",
    topic: "Reference data",
    level: "easy",
    question: "Which is the best example of reference data?",
    options: [
      "A standard list of country codes used across systems",
      "A daily transaction table",
      "A log of user sign-ins",
      "A chart showing monthly totals",
    ],
    answer: 0,
    explanation: "Reference data includes shared codes and classifications.",
  },
  {
    id: "data-165",
    category: "data",
    topic: "Reference data",
    level: "medium",
    question: "How does reference data mainly support analytics?",
    options: [
      "By helping classifications and labels stay consistent across datasets",
      "By replacing source transactions",
      "By automatically fixing outliers",
      "By preventing all missing values",
    ],
    answer: 0,
    explanation:
      "Consistent reference data improves grouping, comparison and reporting.",
  },
  {
    id: "data-166",
    category: "data",
    topic: "Reference data",
    level: "hard",
    question:
      "A status code means different things in two systems because each maintains its own list. What is the strongest consequence?",
    options: [
      "Aggregation and comparison across systems become unreliable",
      "The database becomes encrypted automatically",
      "The dashboard theme cannot load",
      "The records become impossible to store",
    ],
    answer: 0,
    explanation: "Inconsistent meaning undermines comparability.",
  },
  {
    id: "data-167",
    category: "data",
    topic: "Reference data",
    level: "easy",
    question:
      "What usually belongs in reference data rather than transactional data?",
    options: [
      "Standard labels and classifications",
      "Individual purchase events",
      "System error logs",
      "Temporary calculation outputs",
    ],
    answer: 0,
    explanation: "Reference data provides shared categories and code sets.",
  },
  {
    id: "data-168",
    category: "data",
    topic: "Reference data",
    level: "medium",
    question: "Why should changes to reference data be controlled?",
    options: [
      "Because changes can affect interpretation and comparability across many datasets",
      "Because reference data never needs updating",
      "Because changes only affect visual design",
      "Because access controls do not apply to codes",
    ],
    answer: 0,
    explanation:
      "Even small code or label changes can have broad analytical impact.",
  },
  {
    id: "data-169",
    category: "data",
    topic: "Reference data",
    level: "hard",
    question: "Which control best supports reference data quality?",
    options: [
      "A governed master list with versioning and ownership",
      "Allowing each team to rename codes freely",
      "Keeping no change history",
      "Using only verbal agreements about labels",
    ],
    answer: 0,
    explanation:
      "Governed master lists support consistency and controlled change.",
  },
  {
    id: "data-170",
    category: "data",
    topic: "Reference data",
    level: "easy",
    question: "What is the main purpose of a code list?",
    options: [
      "To provide standard permitted values for a field or classification",
      "To store full transaction history",
      "To speed up internet access",
      "To replace metadata documentation",
    ],
    answer: 0,
    explanation: "Code lists standardise allowed values and meaning.",
  },
  {
    id: "data-171",
    category: "data",
    topic: "Monitoring and observability",
    level: "medium",
    question: "What is the main value of pipeline observability?",
    options: [
      "It helps teams understand whether data jobs are healthy, delayed or failing",
      "It removes the need for ownership definitions",
      "It guarantees that source data is always correct",
      "It replaces all lineage documentation",
    ],
    answer: 0,
    explanation:
      "Observability helps teams monitor and investigate operational health.",
  },
  {
    id: "data-172",
    category: "data",
    topic: "Monitoring and observability",
    level: "hard",
    question:
      "A daily load completes successfully but delivers half the usual volume. Which monitoring signal would most directly catch this issue?",
    options: [
      "A threshold alert on row-count anomalies",
      "A badge showing the dashboard theme colour",
      "A record of who last opened the report",
      "A note describing the business owner",
    ],
    answer: 0,
    explanation:
      "Volume anomaly monitoring can detect suspicious deviations even when a job technically completes.",
  },
  {
    id: "data-173",
    category: "data",
    topic: "Monitoring and observability",
    level: "medium",
    question:
      "Which metric is most useful for detecting a delayed daily data load?",
    options: [
      "Time of last successful pipeline run",
      "Number of colours used in the dashboard",
      "Number of business units in the organisation",
      "Length of the data glossary",
    ],
    answer: 0,
    explanation:
      "The time of the last successful run directly indicates whether the load is late.",
  },
  {
    id: "data-174",
    category: "data",
    topic: "Monitoring and observability",
    level: "hard",
    question:
      "What is the main advantage of having automated alerts on pipeline failures?",
    options: [
      "Faster detection and response to operational issues",
      "Permanent elimination of data quality problems",
      "Reduced need for source documentation",
      "Automatic agreement on business definitions",
    ],
    answer: 0,
    explanation: "Alerts shorten the time between failure and intervention.",
  },
  {
    id: "data-175",
    category: "data",
    topic: "Monitoring and observability",
    level: "easy",
    question: "What does alerting enable in data pipelines?",
    options: [
      "Faster detection of issues",
      "Automatic correction of all errors",
      "Elimination of monitoring",
      "Automatic data duplication",
    ],
    answer: 0,
    explanation: "Alerts allow quick response to failures or anomalies.",
  },
  {
    id: "data-176",
    category: "data",
    topic: "Monitoring and observability",
    level: "medium",
    question: "Why is row-count monitoring useful?",
    options: [
      "It can reveal suspicious drops or spikes even when jobs finish successfully",
      "It replaces data ownership",
      "It guarantees semantic consistency",
      "It eliminates the need for logging",
    ],
    answer: 0,
    explanation:
      "Operational success does not always mean the output volume is plausible.",
  },
  {
    id: "data-177",
    category: "data",
    topic: "Monitoring and observability",
    level: "hard",
    question:
      "What is the strongest reason to log validation failures in a pipeline?",
    options: [
      "Teams need evidence to investigate what failed and where",
      "Logs make lineage unnecessary",
      "Validation always fixes itself later",
      "Logs are only useful for design reviews",
    ],
    answer: 0,
    explanation: "Logging failures supports diagnosis and remediation.",
  },
  {
    id: "data-178",
    category: "data",
    topic: "Monitoring and observability",
    level: "easy",
    question: "What is observability mainly for?",
    options: [
      "Understanding the operational state of a system or pipeline",
      "Changing business definitions",
      "Approving annual budgets",
      "Designing dashboards",
    ],
    answer: 0,
    explanation:
      "Observability helps teams understand health and behaviour in operation.",
  },
  {
    id: "data-179",
    category: "data",
    topic: "Monitoring and observability",
    level: "medium",
    question:
      "Which situation most clearly shows the value of monitoring beyond simple success or failure status?",
    options: [
      "A pipeline completes but outputs implausibly few rows",
      "A team updates a glossary definition",
      "A chart title is shortened",
      "A table gains a new index",
    ],
    answer: 0,
    explanation:
      "Operational completeness alone may miss degraded or implausible outputs.",
  },
  {
    id: "data-180",
    category: "data",
    topic: "Monitoring and observability",
    level: "hard",
    question:
      "Which combination gives the strongest basic observability setup for a critical pipeline?",
    options: [
      "Run status, row counts, validation checks and automated alerts",
      "A dashboard theme and a user list",
      "File size only",
      "Manual spot checks once per year",
    ],
    answer: 0,
    explanation:
      "A mix of operational and data plausibility signals gives stronger coverage.",
  },
  {
    id: "data-181",
    category: "data",
    topic: "Experimentation",
    level: "medium",
    question: "Why is a control group important in an experiment?",
    options: [
      "It provides a comparison baseline for assessing the effect of an intervention",
      "It guarantees that every participant receives the new treatment",
      "It removes the need for sampling",
      "It ensures that no measurement error occurs",
    ],
    answer: 0,
    explanation: "A control group provides the baseline comparison.",
  },
  {
    id: "data-182",
    category: "data",
    topic: "Experimentation",
    level: "hard",
    question:
      "What is the main problem if treatment and control groups differ systematically before an intervention starts?",
    options: [
      "Estimated effects may be biased because the groups are not comparable",
      "The experiment will always have too much data",
      "The dashboard cannot display the results",
      "The experiment becomes a metadata catalogue",
    ],
    answer: 0,
    explanation:
      "If groups differ at baseline, observed differences later may not be due to the intervention.",
  },
  {
    id: "data-183",
    category: "data",
    topic: "Experimentation",
    level: "medium",
    question: "Why is random assignment useful in an experiment?",
    options: [
      "It helps reduce systematic differences between groups",
      "It guarantees that no participants drop out",
      "It makes sample size irrelevant",
      "It ensures that outcomes are always positive",
    ],
    answer: 0,
    explanation: "Random assignment helps make groups more comparable.",
  },
  {
    id: "data-184",
    category: "data",
    topic: "Experimentation",
    level: "hard",
    question:
      "A team compares outcomes before and after a policy change without a control group. What is the main limitation?",
    options: [
      "Other factors may explain the change, so causality is harder to establish",
      "The data cannot be visualised",
      "The sample automatically becomes invalid",
      "Random error is impossible in before-after analysis",
    ],
    answer: 0,
    explanation:
      "Without a control group, alternative explanations are harder to rule out.",
  },
  {
    id: "data-185",
    category: "data",
    topic: "Experimentation",
    level: "easy",
    question: "What is randomisation used for?",
    options: [
      "To reduce bias between groups",
      "To increase dataset size",
      "To remove all errors",
      "To ensure identical outcomes",
    ],
    answer: 0,
    explanation: "Randomisation improves comparability between groups.",
  },
  {
    id: "data-186",
    category: "data",
    topic: "Experimentation",
    level: "medium",
    question: "Why is a baseline measurement useful before an intervention?",
    options: [
      "It helps assess whether groups differed before the change",
      "It guarantees a larger sample",
      "It replaces the need for follow-up measurements",
      "It prevents all confounding",
    ],
    answer: 0,
    explanation: "Baseline values help interpret later differences.",
  },
  {
    id: "data-187",
    category: "data",
    topic: "Experimentation",
    level: "hard",
    question:
      "Which issue most threatens the validity of an experiment if many participants leave one group but not the other?",
    options: [
      "Attrition may make the groups no longer comparable",
      "The trial automatically becomes randomised",
      "The control group becomes unnecessary",
      "The results can no longer be charted",
    ],
    answer: 0,
    explanation: "Differential dropout can bias estimated effects.",
  },
  {
    id: "data-188",
    category: "data",
    topic: "Experimentation",
    level: "easy",
    question: "What does a control group provide?",
    options: [
      "A comparison condition against which the intervention can be assessed",
      "A guarantee of perfect data quality",
      "A bigger dashboard",
      "A replacement for sampling",
    ],
    answer: 0,
    explanation: "Controls provide the comparison needed to assess effect.",
  },
  {
    id: "data-189",
    category: "data",
    topic: "Experimentation",
    level: "medium",
    question: "Why is sample size important in experiments?",
    options: [
      "Very small samples can make results unstable and hard to interpret",
      "Large samples remove all bias automatically",
      "Small samples guarantee causality",
      "Sample size only matters for dashboards",
    ],
    answer: 0,
    explanation:
      "Small samples can produce unstable estimates and wide uncertainty.",
  },
  {
    id: "data-190",
    category: "data",
    topic: "Experimentation",
    level: "hard",
    question:
      "Which design is strongest for estimating causal effect among these options?",
    options: [
      "Randomised treatment and control groups with comparable measurement",
      "A single after-only snapshot with no comparison",
      "A before-after comparison with no control",
      "A descriptive chart with no intervention group",
    ],
    answer: 0,
    explanation:
      "Randomised comparison is generally strongest for causal inference.",
  },
  {
    id: "data-191",
    category: "data",
    topic: "Documentation",
    level: "easy",
    question: "Why should analytical assumptions be documented?",
    options: [
      "So others can understand, challenge and reproduce the analysis",
      "So the report looks longer and more detailed",
      "So fewer people ask questions about the results",
      "So the underlying data no longer needs validation",
    ],
    answer: 0,
    explanation:
      "Documented assumptions improve transparency and reproducibility.",
  },
  {
    id: "data-192",
    category: "data",
    topic: "Documentation",
    level: "medium",
    question:
      "Which documentation element most helps future analysts reuse a dataset correctly?",
    options: [
      "Definitions, scope, refresh cycle and known limitations",
      "The colour palette of the original dashboard",
      "A list of people who attended the launch meeting",
      "Only the file name and creation date",
    ],
    answer: 0,
    explanation:
      "Reuse depends on understanding what the data means, covers and does not cover.",
  },
  {
    id: "data-193",
    category: "data",
    topic: "Documentation",
    level: "medium",
    question: "What should good technical documentation for a dataset include?",
    options: [
      "Source, transformations, field definitions and refresh logic",
      "Only the file name and creation date",
      "Only screenshots of the final dashboard",
      "Only the names of all people who ever viewed the dataset",
    ],
    answer: 0,
    explanation:
      "Good documentation should explain where data comes from and how it is processed.",
  },
  {
    id: "data-194",
    category: "data",
    topic: "Documentation",
    level: "medium",
    question:
      "Why is versioning important in documentation and data definitions?",
    options: [
      "It helps users understand what changed, when, and which version was used",
      "It prevents all future changes to the content",
      "It guarantees that every report is correct",
      "It removes the need for ownership",
    ],
    answer: 0,
    explanation:
      "Versioning improves traceability and comparability over time.",
  },
  {
    id: "data-195",
    category: "data",
    topic: "Documentation",
    level: "easy",
    question: "What is the main value of documenting transformation logic?",
    options: [
      "Others can understand how outputs were produced",
      "It automatically fixes source errors",
      "It replaces testing",
      "It makes metadata unnecessary",
    ],
    answer: 0,
    explanation:
      "Transformation documentation supports transparency and maintenance.",
  },
  {
    id: "data-196",
    category: "data",
    topic: "Documentation",
    level: "hard",
    question:
      "Which risk is highest when dataset limitations are not documented?",
    options: [
      "Users may apply the data to decisions it is not fit to support",
      "The database will stop running",
      "All rows become duplicated",
      "The report font will change automatically",
    ],
    answer: 0,
    explanation: "Undocumented limitations increase the risk of misuse.",
  },
  {
    id: "data-197",
    category: "data",
    topic: "Documentation",
    level: "medium",
    question:
      "Why should documented assumptions be linked to metrics and reports?",
    options: [
      "Users need context to interpret results correctly",
      "It reduces storage costs",
      "It replaces governance forums",
      "It prevents all future definition changes",
    ],
    answer: 0,
    explanation:
      "Assumptions affect interpretation and should be visible to report users.",
  },
  {
    id: "data-198",
    category: "data",
    topic: "Documentation",
    level: "hard",
    question:
      "Which type of documentation is most useful when onboarding a new analyst to a critical dataset?",
    options: [
      "A concise guide covering purpose, definitions, lineage, refresh logic and known issues",
      "Only a screenshot of the final dashboard",
      "Only a list of senior managers",
      "Only the folder path where the file is stored",
    ],
    answer: 0,
    explanation:
      "New analysts need contextual and technical information together.",
  },
  {
    id: "data-199",
    category: "data",
    topic: "Documentation",
    level: "easy",
    question: "Why should analytical outputs include clear definitions?",
    options: [
      "So users interpret measures consistently",
      "So charts load faster",
      "So access rights become unnecessary",
      "So source systems can be removed",
    ],
    answer: 0,
    explanation:
      "Definitions reduce ambiguity and improve consistent interpretation.",
  },
  {
    id: "data-200",
    category: "data",
    topic: "Documentation",
    level: "medium",
    question:
      "Which documentation habit best supports long-term maintainability of a question bank or data asset?",
    options: [
      "Using a consistent structure, clear naming and version-controlled updates",
      "Editing files ad hoc with no change history",
      "Leaving definitions implicit because the team already knows them",
      "Removing explanations to keep files shorter",
    ],
    answer: 0,
    explanation:
      "Consistency and controlled updates make assets easier to maintain over time.",
  },
  {
    id: "data-201",
    category: "data",
    topic: "Data governance",
    level: "hard",
    question:
      "A critical dataset is used by several directorates, but each one applies its own exception rules before reporting. What is the strongest governance concern?",
    options: [
      "Reported figures may no longer be comparable across the organisation",
      "The dataset will automatically become incomplete",
      "All local reports will become confidential",
      "The source system will stop accepting new records",
    ],
    answer: 0,
    explanation:
      "Uncontrolled local exception rules weaken comparability and enterprise consistency.",
  },
  {
    id: "data-202",
    category: "data",
    topic: "Metadata",
    level: "medium",
    question:
      "Which metadata element most directly helps an analyst understand whether a field can be safely aggregated?",
    options: [
      "Its definition, unit of measure and aggregation rules",
      "The colour of the dashboard where it appears",
      "The number of users who queried it last month",
      "The age of the database server",
    ],
    answer: 0,
    explanation:
      "Aggregation depends on meaning, units and whether business rules allow summing or averaging the field.",
  },
  {
    id: "data-203",
    category: "data",
    topic: "Data quality",
    level: "hard",
    question:
      "A dataset is complete and timely, but key fields systematically contain the wrong real-world values. Which quality dimension is failing most clearly?",
    options: ["Accuracy", "Completeness", "Timeliness", "Availability"],
    answer: 0,
    explanation:
      "If values do not reflect reality, the main failure is accuracy.",
  },
  {
    id: "data-204",
    category: "data",
    topic: "Analytics",
    level: "hard",
    question:
      "A chart shows that Region A has twice as many incidents as Region B. Which follow-up check is most important before concluding that Region A performs worse?",
    options: [
      "Whether the regions differ in population or exposure and should be normalised",
      "Whether the chart uses a blue or green colour palette",
      "Whether the report has enough annotations",
      "Whether the dashboard was exported as PDF",
    ],
    answer: 0,
    explanation:
      "Raw counts can mislead when the compared groups differ in size or exposure.",
  },
  {
    id: "data-205",
    category: "data",
    topic: "SQL",
    level: "hard",
    question:
      "Why is SELECT DISTINCT often a weak fix for duplicated analytical results after a join?",
    options: [
      "It may hide a join logic problem instead of solving the underlying cause",
      "It always deletes valid source records from the database",
      "It can only be used on numeric columns",
      "It automatically changes NULL values into zeros",
    ],
    answer: 0,
    explanation:
      "DISTINCT can mask modelling or join issues rather than correcting them properly.",
  },
  {
    id: "data-206",
    category: "data",
    topic: "Data modelling",
    level: "medium",
    question:
      "Why are clearly defined grain and scope important in a fact table?",
    options: [
      "They determine what each row represents and how measures should be aggregated",
      "They guarantee every query runs instantly",
      "They remove the need for dimensions",
      "They prevent all missing values",
    ],
    answer: 0,
    explanation:
      "The grain defines the level of detail and is essential for correct aggregation and interpretation.",
  },
  {
    id: "data-207",
    category: "data",
    topic: "Data visualisation",
    level: "medium",
    question:
      "Which design choice most helps users compare monthly values accurately across several charts?",
    options: [
      "Using the same scale and consistent labelling across the charts",
      "Using a different colour palette for each chart",
      "Removing axes to reduce clutter",
      "Sorting months alphabetically",
    ],
    answer: 0,
    explanation:
      "Consistent scales and labels support valid visual comparison.",
  },
  {
    id: "data-208",
    category: "data",
    topic: "ETL and pipelines",
    level: "hard",
    question:
      "A pipeline succeeds technically but loads records into the wrong reporting period because of a date transformation bug. Which control would most likely catch this early?",
    options: [
      "Automated validation checks on business-rule consistency of transformed dates",
      "A larger output storage limit",
      "A darker dashboard theme",
      "Manual folder renaming after each run",
    ],
    answer: 0,
    explanation:
      "Business-rule validation is needed to catch logically wrong outputs even when the job succeeds.",
  },
  {
    id: "data-209",
    category: "data",
    topic: "Data protection and ethics",
    level: "hard",
    question: "Which practice most clearly conflicts with purpose limitation?",
    options: [
      "Reusing personal data for a new analysis unrelated to the original stated purpose without proper basis",
      "Masking identifiers before testing",
      "Reviewing access rights periodically",
      "Documenting known dataset limitations",
    ],
    answer: 0,
    explanation:
      "Purpose limitation requires data use to stay aligned with the original legitimate purpose or another proper basis.",
  },
  {
    id: "data-210",
    category: "data",
    topic: "Documentation",
    level: "medium",
    question:
      "What is the strongest reason to keep explanations in a question bank rather than storing only correct answers?",
    options: [
      "Explanations help users learn the reasoning and detect ambiguity or weak wording",
      "They reduce the need for version control",
      "They make IDs unnecessary",
      "They guarantee all questions are equally difficult",
    ],
    answer: 0,
    explanation:
      "Explanations support learning quality and make review of question wording much easier.",
  },
  {
    id: "data-211",
    category: "data",
    topic: "Data governance",
    level: "hard",
    question:
      "What is the main risk if data ownership is assigned but not actively exercised?",
    options: [
      "Decisions may still be made inconsistently without real accountability",
      "All datasets will be deleted automatically",
      "Metadata will no longer be needed",
      "Dashboards will stop working",
    ],
    answer: 0,
    explanation:
      "Ownership must be active to ensure decisions and controls are applied consistently.",
  },
  {
    id: "data-212",
    category: "data",
    topic: "Data quality",
    level: "medium",
    question: "Which issue most directly affects data consistency over time?",
    options: [
      "Definitions or rules changing without clear versioning",
      "Using too many charts",
      "Having large datasets",
      "Using multiple dashboards",
    ],
    answer: 0,
    explanation:
      "Untracked changes in definitions break comparability across time.",
  },
  {
    id: "data-213",
    category: "data",
    topic: "Analytics",
    level: "hard",
    question: "Which situation most risks misleading decision-makers?",
    options: [
      "Presenting aggregated data without explaining underlying assumptions",
      "Using a bar chart instead of a table",
      "Displaying too many decimals",
      "Using monthly reporting instead of weekly",
    ],
    answer: 0,
    explanation:
      "Lack of transparency on assumptions can lead to incorrect conclusions.",
  },
  {
    id: "data-214",
    category: "data",
    topic: "SQL",
    level: "medium",
    question: "What is the main purpose of a JOIN condition in SQL?",
    options: [
      "To define how rows from different tables are matched",
      "To sort the output",
      "To remove duplicates",
      "To filter aggregated values",
    ],
    answer: 0,
    explanation: "JOIN conditions define how tables are related in a query.",
  },
  {
    id: "data-215",
    category: "data",
    topic: "ETL and pipelines",
    level: "hard",
    question:
      "Which situation most clearly indicates a pipeline design flaw rather than a data issue?",
    options: [
      "Repeated duplication of records after each run",
      "Missing values in source data",
      "Incorrect business definitions",
      "Outdated metadata",
    ],
    answer: 0,
    explanation:
      "Repeated duplication often indicates pipeline logic issues such as lack of idempotency.",
  },
  {
    id: "data-216",
    category: "data",
    topic: "Data protection and ethics",
    level: "medium",
    question:
      "Which action best reduces re-identification risk in shared datasets?",
    options: [
      "Reducing granularity and removing indirect identifiers",
      "Increasing dataset size",
      "Adding more metadata",
      "Changing file format",
    ],
    answer: 0,
    explanation:
      "Reducing detail and indirect identifiers lowers re-identification risk.",
  },
  {
    id: "data-217",
    category: "data",
    topic: "Data modelling",
    level: "hard",
    question:
      "What is the main risk of mixing different grains in the same fact table?",
    options: [
      "Incorrect aggregation and misleading results",
      "Slower dashboard colours",
      "Loss of metadata",
      "Inability to store data",
    ],
    answer: 0,
    explanation: "Mixed grain leads to double counting and aggregation errors.",
  },
  {
    id: "data-218",
    category: "data",
    topic: "Monitoring and observability",
    level: "medium",
    question: "Which signal best indicates a silent data quality issue?",
    options: [
      "Output values are plausible technically but inconsistent with historical trends",
      "Pipeline failure alert",
      "Server downtime",
      "Missing dashboard title",
    ],
    answer: 0,
    explanation:
      "Silent issues often appear as plausible but abnormal outputs.",
  },
  {
    id: "data-219",
    category: "data",
    topic: "Statistics",
    level: "medium",
    question: "What does variance measure?",
    options: [
      "The spread of data values around the mean",
      "The central value",
      "The number of observations",
      "The maximum value",
    ],
    answer: 0,
    explanation: "Variance measures dispersion of values around the mean.",
  },
  {
    id: "data-220",
    category: "data",
    topic: "Experimentation",
    level: "hard",
    question:
      "What is the main risk of interpreting observational data as causal without controls?",
    options: [
      "Confounding factors may drive observed relationships",
      "Data cannot be visualised",
      "Sample size becomes irrelevant",
      "Randomisation is automatic",
    ],
    answer: 0,
    explanation:
      "Without controls, causal interpretation is unreliable due to confounding.",
  },
  {
    id: "data-221",
    category: "data",
    topic: "Analytics",
    level: "hard",
    question:
      "A report shows that performance improved after a new policy, but the population covered by the report also changed. What is the main analytical risk?",
    options: [
      "The observed improvement may be due to a change in scope rather than the policy",
      "The report can no longer contain percentages",
      "The database will reject all historical records",
      "The chart type becomes irrelevant",
    ],
    answer: 0,
    explanation:
      "Changes in scope can make before-and-after comparisons misleading.",
  },
  {
    id: "data-222",
    category: "data",
    topic: "Data quality",
    level: "hard",
    question:
      "A data quality dashboard shows few errors because checks only run on records that successfully pass the first validation. What is the main weakness?",
    options: [
      "The dashboard may understate errors by excluding failed or rejected records",
      "The dashboard contains too many visualisations",
      "Validation checks are never useful for data quality",
      "Only manual checks can detect completeness issues",
    ],
    answer: 0,
    explanation:
      "Quality measures can be biased if they exclude records that already failed earlier checks.",
  },
  {
    id: "data-223",
    category: "data",
    topic: "SQL",
    level: "hard",
    question:
      "A query joins a person table to an events table and then counts persons. What is the main risk if one person can have several events?",
    options: [
      "Persons may be counted multiple times unless the query accounts for the one-to-many relationship",
      "The query will always return zero rows",
      "The WHERE clause will stop working",
      "All event dates will become NULL",
    ],
    answer: 0,
    explanation:
      "One-to-many joins can inflate counts when the unit of analysis is not controlled.",
  },
  {
    id: "data-224",
    category: "data",
    topic: "Statistics",
    level: "hard",
    question:
      "A very large sample shows a statistically significant difference that is extremely small in practical terms. What should an analyst consider?",
    options: [
      "Statistical significance does not necessarily imply practical importance",
      "Large samples always prove causation",
      "Small effects are impossible in large samples",
      "The result must be ignored because it is significant",
    ],
    answer: 0,
    explanation:
      "With large samples, small differences can be statistically significant but not practically meaningful.",
  },
  {
    id: "data-225",
    category: "data",
    topic: "Data governance",
    level: "hard",
    question:
      "Which situation best shows a failure to manage data as an organisational asset?",
    options: [
      "Critical datasets are created for local needs without shared standards, ownership or reuse planning",
      "A dataset has both business and technical metadata",
      "A steward reviews quality issues monthly",
      "A governance board approves common definitions",
    ],
    answer: 0,
    explanation:
      "Treating data as an asset requires shared standards, ownership and reuse considerations.",
  },
  {
    id: "data-226",
    category: "data",
    topic: "Data protection and ethics",
    level: "hard",
    question:
      "A dataset is pseudonymised before analysis. Which statement is most accurate?",
    options: [
      "Pseudonymisation reduces risk but does not necessarily make the data anonymous",
      "Pseudonymisation removes all legal and ethical obligations",
      "Pseudonymised data can never be re-identified under any conditions",
      "Pseudonymisation is the same as deleting the dataset",
    ],
    answer: 0,
    explanation:
      "Pseudonymised data may still be linkable to individuals under certain conditions.",
  },
  {
    id: "data-227",
    category: "data",
    topic: "Data modelling",
    level: "hard",
    question:
      "A report combines daily transaction facts with monthly budget facts in the same aggregation. What is the main modelling concern?",
    options: [
      "The facts have different grains and may not aggregate correctly together",
      "Monthly data cannot be stored in databases",
      "Daily data should never be reported",
      "Budgets must always be stored as text",
    ],
    answer: 0,
    explanation:
      "Combining facts with different grains can create incorrect totals or comparisons.",
  },
  {
    id: "data-228",
    category: "data",
    topic: "Metadata",
    level: "hard",
    question:
      "Which metadata gap most directly increases the risk of misusing a dataset?",
    options: [
      "No documented scope, exclusions or known limitations",
      "No decorative dashboard icon",
      "No record of the presentation date",
      "No colour coding for worksheets",
    ],
    answer: 0,
    explanation:
      "Scope, exclusions and limitations are essential for judging appropriate use.",
  },
  {
    id: "data-229",
    category: "data",
    topic: "ETL and pipelines",
    level: "hard",
    question:
      "A source system changes a field format without warning and the pipeline still runs, but outputs incorrect classifications. What control would best reduce this risk?",
    options: [
      "Schema and domain validation before loading transformed data",
      "A longer dashboard title",
      "A larger number of report viewers",
      "Manual renaming of the output file",
    ],
    answer: 0,
    explanation:
      "Validation can detect unexpected structure or value changes before bad outputs are used.",
  },
  {
    id: "data-230",
    category: "data",
    topic: "Data visualisation",
    level: "hard",
    question:
      "A dashboard highlights only favourable indicators and hides deteriorating ones in a secondary tab. What is the main risk?",
    options: [
      "The design may create a biased interpretation of performance",
      "The dashboard will always load faster",
      "The data becomes more accurate",
      "The hidden indicators stop existing in the database",
    ],
    answer: 0,
    explanation:
      "Selective visual emphasis can mislead users even when the underlying data is correct.",
  },
  {
    id: "data-231",
    category: "data",
    topic: "Reference data",
    level: "hard",
    question:
      "A code list is updated but historical reports are not versioned. What is the main reporting risk?",
    options: [
      "Users may not know which classification logic applied at the time of each report",
      "The source database will automatically lose all records",
      "Charts can no longer show categories",
      "All codes become invalid immediately",
    ],
    answer: 0,
    explanation:
      "Versioning is needed to interpret historical outputs under the correct classification rules.",
  },
  {
    id: "data-232",
    category: "data",
    topic: "AI data management",
    level: "hard",
    question:
      "An AI model is evaluated on data collected after analysts had already corrected many difficult cases manually. What is the main risk?",
    options: [
      "The evaluation may not reflect the model's performance on uncorrected real-world cases",
      "The model will automatically become unbiased",
      "The test data cannot contain labels",
      "Manual correction always invalidates all analysis",
    ],
    answer: 0,
    explanation:
      "Evaluation data must reflect the conditions in which the model will actually operate.",
  },
  {
    id: "data-233",
    category: "data",
    topic: "Interoperability",
    level: "hard",
    question:
      "Two institutions exchange data using the same technical format but apply different eligibility definitions. What remains unresolved?",
    options: [
      "Semantic interoperability",
      "File compression",
      "Network bandwidth",
      "Dashboard formatting",
    ],
    answer: 0,
    explanation:
      "Using the same format does not ensure that concepts mean the same thing.",
  },
  {
    id: "data-234",
    category: "data",
    topic: "Monitoring and observability",
    level: "hard",
    question:
      "A pipeline alert triggers only when a job fails, not when outputs are implausible. What is the main monitoring gap?",
    options: [
      "It monitors technical execution but not data plausibility",
      "It monitors too many business rules",
      "It prevents lineage documentation",
      "It makes validation unnecessary",
    ],
    answer: 0,
    explanation:
      "A job can succeed technically while producing wrong or implausible data.",
  },
  {
    id: "data-235",
    category: "data",
    topic: "Documentation",
    level: "hard",
    question:
      "A calculation has been changed several times, but past reports do not indicate which version was used. What is the main problem?",
    options: [
      "Historical results become difficult to interpret and reproduce",
      "The database cannot store numbers anymore",
      "The dashboard must use a pie chart",
      "The data owner is automatically removed",
    ],
    answer: 0,
    explanation:
      "Version history is essential for reproducibility and historical interpretation.",
  },
  {
    id: "data-236",
    category: "data",
    topic: "Knowledge management",
    level: "hard",
    question:
      "A team repeatedly solves the same data issue because previous fixes were not documented. What is the strongest knowledge management failure?",
    options: [
      "Lessons learned were not captured and made reusable",
      "The issue had too much metadata",
      "The dashboard contained too few charts",
      "The data was refreshed too often",
    ],
    answer: 0,
    explanation:
      "Knowledge management should prevent repeated loss of useful experience.",
  },
  {
    id: "data-237",
    category: "data",
    topic: "Experimentation",
    level: "hard",
    question:
      "A pilot is tested only in the most motivated units and then generalised to all units. What is the main risk?",
    options: [
      "Results may not generalise because the pilot units are not representative",
      "Motivated units always produce invalid data",
      "Pilots cannot use quantitative indicators",
      "The control group becomes unnecessary",
    ],
    answer: 0,
    explanation:
      "Non-representative pilot selection can limit external validity.",
  },
  {
    id: "data-238",
    category: "data",
    topic: "Data governance",
    level: "hard",
    question:
      "Which governance mechanism best prevents uncontrolled proliferation of similar KPIs?",
    options: [
      "A governed metric catalogue with ownership, definitions and approval workflow",
      "Allowing each team to create indicators freely",
      "Deleting all local dashboards every month",
      "Using only spreadsheets for reporting",
    ],
    answer: 0,
    explanation:
      "A governed catalogue helps avoid duplicated or conflicting indicators.",
  },
  {
    id: "data-239",
    category: "data",
    topic: "Analytics",
    level: "hard",
    question:
      "A KPI target is met because low-performing cases were excluded by a new filter. What is the main analytical concern?",
    options: [
      "The apparent improvement may result from selection rather than real performance",
      "Filters always improve comparability",
      "Targets cannot be assessed with KPIs",
      "Excluding cases always makes analysis more accurate",
    ],
    answer: 0,
    explanation:
      "Changing inclusion criteria can create misleading performance improvements.",
  },
  {
    id: "data-240",
    category: "data",
    topic: "Data quality",
    level: "hard",
    question:
      "Which issue is hardest to detect with simple format validation alone?",
    options: [
      "A value is correctly formatted but factually wrong",
      "A date field contains letters",
      "A mandatory field is blank",
      "A code is outside the allowed list",
    ],
    answer: 0,
    explanation:
      "Format validation can catch structural errors but not necessarily real-world accuracy errors.",
  },
  {
    id: "data-241",
    category: "data",
    topic: "SQL",
    level: "hard",
    question:
      "A query calculates AVG(processing_time) after joining cases to multiple comments per case. What is the main risk?",
    options: [
      "Cases with more comments may be overrepresented in the average",
      "AVG cannot be used after joins",
      "Comments always remove duplicate cases",
      "The query will necessarily fail",
    ],
    answer: 0,
    explanation:
      "Joining to a lower-grain table can weight some entities more heavily unless corrected.",
  },
  {
    id: "data-242",
    category: "data",
    topic: "Statistics",
    level: "hard",
    question:
      "Which interpretation is safest when a confidence interval is very wide?",
    options: [
      "The estimate is uncertain and should be interpreted cautiously",
      "The estimate is certainly wrong",
      "The result proves causation",
      "The sample contains no variation",
    ],
    answer: 0,
    explanation:
      "Wide confidence intervals indicate substantial uncertainty around the estimate.",
  },
  {
    id: "data-243",
    category: "data",
    topic: "Data modelling",
    level: "hard",
    question:
      "A dimension attribute changes over time, but the model overwrites the old value. What is the main historical reporting risk?",
    options: [
      "Past events may be reported using current attributes rather than historical ones",
      "The fact table will automatically duplicate all rows",
      "No joins will be possible",
      "All measures become text fields",
    ],
    answer: 0,
    explanation:
      "Overwriting dimension values can distort historical analysis.",
  },
  {
    id: "data-244",
    category: "data",
    topic: "ETL and pipelines",
    level: "hard",
    question:
      "Which practice best supports safe recovery after a failed pipeline run?",
    options: [
      "Clear checkpoints, logs and rerun logic that avoid duplicate loading",
      "Manual editing of production tables without records",
      "Ignoring partial outputs if the next run starts",
      "Deleting all source files after extraction",
    ],
    answer: 0,
    explanation:
      "Recovery requires traceability and rerun logic that preserves consistency.",
  },
  {
    id: "data-245",
    category: "data",
    topic: "Data visualisation",
    level: "hard",
    question:
      "A dashboard compares departments using percentages but does not show denominators. What is the main risk?",
    options: [
      "Users may overinterpret differences based on very small counts",
      "Percentages cannot compare departments",
      "Denominators are irrelevant to interpretation",
      "The dashboard will not refresh",
    ],
    answer: 0,
    explanation:
      "Percentages without denominators can hide instability caused by small base counts.",
  },
  {
    id: "data-246",
    category: "data",
    topic: "Data protection and ethics",
    level: "hard",
    question:
      "Why should access to detailed personal data be reviewed periodically?",
    options: [
      "Roles and needs change, so access may become unnecessary or excessive",
      "Periodic review makes encryption unnecessary",
      "All personal data must be public after review",
      "Reviewing access deletes the underlying data",
    ],
    answer: 0,
    explanation:
      "Periodic reviews help maintain least-privilege access over time.",
  },
  {
    id: "data-247",
    category: "data",
    topic: "Reference data",
    level: "hard",
    question: "What is the main benefit of effective dates in reference data?",
    options: [
      "They show when a code or classification value is valid for historical interpretation",
      "They make all codes permanent",
      "They remove the need for ownership",
      "They prevent users from filtering data",
    ],
    answer: 0,
    explanation:
      "Effective dating supports correct use of reference values over time.",
  },
  {
    id: "data-248",
    category: "data",
    topic: "AI data management",
    level: "hard",
    question:
      "A model is monitored only for overall accuracy, but errors are concentrated in one subgroup. What is the main weakness?",
    options: [
      "Aggregate metrics can hide uneven performance across groups",
      "Overall accuracy can never be useful",
      "Subgroup monitoring always violates privacy",
      "Errors in subgroups are not relevant",
    ],
    answer: 0,
    explanation:
      "Responsible evaluation often requires checking performance across relevant groups.",
  },
  {
    id: "data-249",
    category: "data",
    topic: "Interoperability",
    level: "hard",
    question:
      "Which approach best supports cross-border data exchange between public administrations?",
    options: [
      "Common standards, shared definitions, controlled code lists and clear exchange specifications",
      "Ad hoc file exchanges with undocumented fields",
      "Manual interpretation by each receiving team",
      "Using the same dashboard colours in all countries",
    ],
    answer: 0,
    explanation:
      "Cross-border interoperability depends on both technical and semantic alignment.",
  },
  {
    id: "data-250",
    category: "data",
    topic: "Documentation",
    level: "hard",
    question:
      "A report is technically correct but users often draw the wrong conclusion. What documentation improvement would help most?",
    options: [
      "Add interpretation notes, definitions, scope and caveats near the relevant indicators",
      "Remove all explanatory notes to make the report shorter",
      "Hide the methodology from non-technical users",
      "Replace all numbers with icons",
    ],
    answer: 0,
    explanation:
      "Good documentation supports correct interpretation, not only technical reproducibility.",
  },
] as const;
