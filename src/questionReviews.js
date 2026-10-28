// A review applies only to the identified question, not to its whole bank.
const reviewedAt = "2026-10-28";
const source = (title, url, section) => ({ title, url, section });
const k8sAffinity = source(
  "Kubernetes — Assigning Pods to Nodes",
  "https://github.com/kubernetes/website/blob/main/content/en/docs/concepts/scheduling-eviction/assign-pod-node.md",
  "Inter-pod affinity and anti-affinity",
);
const k8sProbes = source(
  "Kubernetes — Pod lifecycle",
  "https://github.com/kubernetes/website/blob/main/content/en/docs/concepts/workloads/pods/pod-lifecycle.md",
  "Readiness probe",
);
const k8sRbac = source(
  "Kubernetes — RBAC good practices",
  "https://github.com/kubernetes/website/blob/main/content/en/docs/concepts/security/rbac-good-practices.md",
  "Least privilege",
);
const slurm = source(
  "SchedMD — Slurm overview",
  "https://github.com/SchedMD/slurm/blob/master/doc/html/overview.shtml",
  "Resource allocation and job scheduling",
);
const nist = source(
  "NIST — Automated Cryptographic Validation Protocol",
  "https://github.com/usnistgov/ACVP/blob/master/README.md#module-lattice-algorithms",
  "Module-Lattice Algorithms: ML-DSA sigGen/sigVer and ML-KEM encapDecap",
);

export const questionChecks = {
  "EPSO-ICT1-001": {
    method: "primary-source",
    sources: [k8sAffinity, k8sProbes],
    note: "Distribution across failure domains and readiness-based traffic handling checked against Kubernetes documentation.",
  },
  "EPSO-ICT1-003": {
    method: "primary-source",
    sources: [
      source(
        "PostgreSQL — High availability",
        "https://github.com/postgres/postgres/blob/master/doc/src/sgml/high-availability.sgml",
        "Synchronous replication",
      ),
    ],
    note: "Synchronous commits can wait for standby acknowledgement; network latency affects commit latency.",
  },
  "EPSO-ICT1-009": {
    method: "calculation",
    sources: [],
    note: "30 × 24 × 60 = 43,200 minutes; 43,200 × (1 − 0.999) = 43.2 minutes. Assumes the full month is the SLA measurement window.",
  },
  "EPSO-ICT1-013": {
    method: "primary-source",
    sources: [
      source(
        "Ansible — Glossary",
        "https://github.com/ansible/ansible-documentation/blob/devel/docs/docsite/rst/reference_appendices/glossary.rst",
        "Idempotency",
      ),
    ],
    note: "The definition confirms the same result after repeated execution without intervening changes.",
  },
  "EPSO-ICT1-014": {
    method: "primary-source",
    sources: [k8sRbac],
    note: "Least privilege limits permissions to those required for the task.",
  },
  "EPSO-ICT1-024": {
    method: "primary-source",
    sources: [slurm],
    note: "Slurm allocates resources, starts and monitors work, and manages queues.",
  },
  "EPSO-ICT1-025": {
    method: "calculation",
    sources: [],
    note: "With serial fraction f, ideal speed-up is 1/(f+(1−f)/N), bounded by 1/f as N grows. Communication overhead can reduce it further.",
  },
  "EPSO-ICT1-033": {
    method: "calculation",
    sources: [],
    note: "10.20.0.0/22 spans 10.20.0.0–10.20.3.255. Excluding the conventional network and broadcast addresses gives 10.20.0.1–10.20.3.254.",
  },
  "EPSO-ICT1-227": {
    method: "primary-source",
    sources: [
      source(
        "SchedMD — Multifactor priority",
        "https://github.com/SchedMD/slurm/blob/master/doc/html/priority_multifactor.shtml",
        "Fair-share priority factor",
      ),
    ],
    note: "Fair-share uses assigned shares and historical usage as an input to priority; it does not guarantee immediate access.",
  },
  "EPSO-ICT1-242": {
    method: "primary-source",
    sources: [
      source(
        "SchedMD — Job arrays",
        "https://github.com/SchedMD/slurm/blob/master/doc/html/job_array.shtml",
        "Overview",
      ),
    ],
    note: "Job arrays submit and manage related tasks using a common job description and indexed tasks.",
  },
  "EPSO-ICT1-249": {
    method: "primary-source",
    sources: [nist],
    note: "The NIST operation list identifies ML-KEM key generation and encapsulation/decapsulation.",
  },
  "EPSO-ICT1-250": {
    method: "primary-source",
    sources: [nist],
    note: "The NIST operation list identifies ML-DSA signature generation and verification.",
  },
};

export const editorialNotes = {
  "ep-054":
    "Wording clarified to distinguish Parliament's internal authentication from joint signature by the Presidents of Parliament and the Council. Current rule edition still needs verification.",
  "ep-118":
    "Wording clarified to refer explicitly to Parliament's side. Current rule edition still needs verification.",
  "ep-061":
    "The fixed quorum-check request number needs confirmation against the applicable edition of the Rules; it has not been certified as current.",
  "ep-223":
    "The fixed quorum-check request number needs confirmation against the applicable edition of the Rules; it has not been certified as current.",
  "ep-067":
    "Scope clarified: adoption of a text requiring a majority, not an election procedure with its own tie-breaking rules.",
  "ep-232":
    "Scope clarified: adoption of a text requiring a majority, not an election procedure with its own tie-breaking rules.",
  "ep-147":
    "The question now measures the interval from the debate, matching its answer; other applicable treaty time limits must also be checked.",
  "ep-201":
    "This is a basic navigation question, not a substantive procedural scenario.",
  "ep-205":
    "This item has limited training value: the answer mostly repeats the subject of the question.",
  "ep-208":
    "This item needs a more concrete procedural scenario once the current source is available.",
  "ep-213":
    "The answer is too general to teach the actual access rules; a source-backed rewrite is still needed.",
  "ep-214":
    "This is a heading-identification question with limited assessment value.",
  "ep-215":
    "This is a heading-identification question with limited assessment value.",
  "ep-271":
    "The answer repeats that the petition is inadmissible; a source-backed question about the next procedural step would be more useful.",
  "EPSO-ICT1-031":
    "The scenario now explicitly concerns missing IPv6 DNS resolution; failure to reach an IPv6 address alone would not establish a DNS problem.",
  "EPSO-ICT1-071":
    "External supplier commitments are distinguished from agreements between internal teams.",
  "EPSO-ICT1-222":
    "The scenario now specifies measured bandwidth saturation, distinguishing bandwidth from latency and other memory bottlenecks.",
  "EPSO-ICT1-239":
    "The wording now asks for a rate, matching floating-point operations per second.",
  "EPSO-ICT1-246":
    "Allocated resource occupancy is distinguished from actual CPU/GPU execution utilisation.",
};

// Editorially identified paraphrases of the same learning point. IDs are kept.
export const equivalentQuestions = [
  ["ep-042", "ep-081"],
  ["ep-044", "ep-087"],
  ["ep-047", "ep-101"],
  ["ep-048", "ep-102"],
  ["ep-051", "ep-110"],
  ["ep-052", "ep-113"],
  ["ep-053", "ep-116"],
  ["ep-054", "ep-118"],
  ["ep-055", "ep-140"],
  ["ep-059", "ep-157"],
  ["ep-061", "ep-223"],
  ["ep-062", "ep-224"],
  ["ep-063", "ep-225"],
  ["ep-064", "ep-226"],
  ["ep-066", "ep-231"],
  ["ep-069", "ep-241"],
  ["ep-070", "ep-255"],
  ["ep-071", "ep-256"],
  ["ep-073", "ep-260"],
  ["ep-076", "ep-269"],
];
const equivalentIds = new Map(
  equivalentQuestions.flatMap((group) => group.map((id) => [id, group[0]])),
);
export function questionKey(question) {
  return (
    equivalentIds.get(question.id) || question.question.trim().toLowerCase()
  );
}

export function questionReview(question) {
  if (!question.id.startsWith("ep-") && !question.id.startsWith("EPSO-ICT1-"))
    return null;
  const checked = questionChecks[question.id];
  return {
    checked: Boolean(checked),
    reviewedAt: checked ? reviewedAt : null,
    method: checked?.method,
    sources: checked?.sources || [],
    note:
      checked?.note ||
      (question.id.startsWith("ep-")
        ? "Current Rules of Procedure source verification is pending. This question has not been certified against the current edition."
        : "Primary-source verification is pending. An editorial correction alone does not certify the answer."),
    editorial: editorialNotes[question.id],
    suppliedReference: question.explanation.match(/\bRule\s+\d+\b/)?.[0],
  };
}
