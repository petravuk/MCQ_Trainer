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

// Only the listed answers were checked against the linked public EP pages.
const epSources = {
  "members": {
    "title": "European Parliament — Members",
    "url": "https://www.europarl.europa.eu/about-parliament/en/organisation-and-rules/organisation/members",
    "section": "Members"
  },
  "political_bodies": {
    "title": "European Parliament — Political bodies",
    "url": "https://www.europarl.europa.eu/about-parliament/en/organisation-and-rules/organisation/political-bodies",
    "section": "Conference of Presidents, Bureau, Quaestors and committee/delegation chairs"
  },
  "legislative_powers": {
    "title": "European Parliament — Legislative powers",
    "url": "https://www.europarl.europa.eu/about-parliament/en/powers-and-procedures/legislative-powers",
    "section": "Legislative process, ordinary procedure, glossary and special procedures"
  },
  "the_president": {
    "title": "European Parliament — The President",
    "url": "https://www.europarl.europa.eu/about-parliament/en/organisation-and-rules/organisation/the-president",
    "section": "The President"
  },
  "supervisory_powers": {
    "title": "European Parliament — Supervisory powers",
    "url": "https://www.europarl.europa.eu/about-parliament/en/powers-and-procedures/supervisory-powers",
    "section": "Democratic scrutiny, Commission, petitions and Ombudsman"
  },
  "budgetary_powers": {
    "title": "European Parliament — Budgetary powers",
    "url": "https://www.europarl.europa.eu/about-parliament/en/powers-and-procedures/budgetary-powers",
    "section": "Annual budget, multiannual framework and budgetary control"
  },
  "multilingualism": {
    "title": "European Parliament — Multilingualism",
    "url": "https://www.europarl.europa.eu/about-parliament/en/organisation-and-rules/multilingualism",
    "section": "Multilingualism"
  },
  "how_plenary_works": {
    "title": "European Parliament — How plenary works",
    "url": "https://www.europarl.europa.eu/about-parliament/en/organisation-and-rules/how-plenary-works",
    "section": "Who’s who, work in plenary, agenda and voting"
  },
  "political_groups": {
    "title": "European Parliament — Political groups",
    "url": "https://www.europarl.europa.eu/about-parliament/en/organisation-and-rules/organisation/political-groups",
    "section": "Political groups"
  },
  "committees": {
    "title": "European Parliament — Committees",
    "url": "https://www.europarl.europa.eu/about-parliament/en/organisation-and-rules/organisation/committees",
    "section": "Committees"
  },
  "secretariat": {
    "title": "European Parliament — Secretariat",
    "url": "https://www.europarl.europa.eu/about-parliament/en/organisation-and-rules/secretariat",
    "section": "Secretariat"
  }
};
const epCheckedIds = {
  "members": [
    "ep-001"
  ],
  "political_bodies": [
    "ep-029",
    "ep-034",
    "ep-232",
    "ep-275",
    "ep-300",
    "ep-018",
    "ep-016",
    "ep-017",
    "ep-024",
    "ep-025",
    "ep-026",
    "ep-027",
    "ep-028",
    "ep-030",
    "ep-031",
    "ep-032",
    "ep-033",
    "ep-041",
    "ep-170",
    "ep-171",
    "ep-250"
  ],
  "legislative_powers": [
    "ep-045",
    "ep-052",
    "ep-092",
    "ep-097",
    "ep-101",
    "ep-110",
    "ep-113",
    "ep-116",
    "ep-140",
    "ep-225",
    "ep-260",
    "ep-269",
    "ep-271",
    "ep-280",
    "ep-298",
    "ep-042",
    "ep-043",
    "ep-044",
    "ep-046",
    "ep-047",
    "ep-048",
    "ep-050",
    "ep-051",
    "ep-053",
    "ep-055",
    "ep-073",
    "ep-078",
    "ep-082",
    "ep-086",
    "ep-087",
    "ep-088",
    "ep-105",
    "ep-111",
    "ep-112",
    "ep-114",
    "ep-117",
    "ep-118",
    "ep-163",
    "ep-164",
    "ep-190",
    "ep-085"
  ],
  "the_president": [
    "ep-054",
    "ep-021",
    "ep-022",
    "ep-023"
  ],
  "supervisory_powers": [
    "ep-057",
    "ep-059",
    "ep-157",
    "ep-292",
    "ep-056",
    "ep-077",
    "ep-141",
    "ep-144",
    "ep-145",
    "ep-150",
    "ep-154",
    "ep-155",
    "ep-189",
    "ep-254",
    "ep-270",
    "ep-274"
  ],
  "budgetary_powers": [
    "ep-081",
    "ep-284",
    "ep-295",
    "ep-124",
    "ep-129",
    "ep-131",
    "ep-133"
  ],
  "multilingualism": [
    "ep-201",
    "ep-214",
    "ep-215",
    "ep-279",
    "ep-281",
    "ep-294"
  ],
  "how_plenary_works": [
    "ep-205",
    "ep-208",
    "ep-213",
    "ep-223",
    "ep-224",
    "ep-226",
    "ep-241",
    "ep-282",
    "ep-283",
    "ep-060",
    "ep-061",
    "ep-067",
    "ep-069",
    "ep-202",
    "ep-203",
    "ep-206",
    "ep-216",
    "ep-222",
    "ep-233",
    "ep-239",
    "ep-240",
    "ep-242",
    "ep-244",
    "ep-245",
    "ep-246",
    "ep-161"
  ],
  "political_groups": [
    "ep-231",
    "ep-002",
    "ep-035",
    "ep-036",
    "ep-037",
    "ep-040"
  ],
  "committees": [
    "ep-255",
    "ep-256",
    "ep-285",
    "ep-296",
    "ep-071",
    "ep-072",
    "ep-253",
    "ep-293",
    "ep-258"
  ],
  "secretariat": [
    "ep-276",
    "ep-277",
    "ep-299"
  ]
};
const epFunctioningChecks = Object.fromEntries(
  Object.entries(epCheckedIds).flatMap(([key, ids]) =>
    ids.map((id) => [id, {
      reviewedAt: "2026-10-29",
      method: "primary-source",
      sources: [epSources[key]],
      note: "Answer checked against the European Parliament’s public explanation of its functioning. This check does not certify every detail of the current Rules of Procedure.",
    }]),
  ),
);

// This is a source check against a dated edition, not a claim that later
// amendments have been checked. The UI displays the edition next to the status.
const epRuleReferences = {
  "ep-003": {
    "rule": 3,
    "pdfPage": 12,
    "title": "Verification of credentials"
  },
  "ep-004": {
    "rule": 4,
    "pdfPage": 13,
    "title": "Term of office of Members"
  },
  "ep-005": {
    "rule": 5,
    "pdfPage": 14,
    "title": "Privileges and immunities"
  },
  "ep-006": {
    "rule": 6,
    "pdfPage": 15,
    "title": "Waiver of immunity"
  },
  "ep-007": {
    "rule": 8,
    "pdfPage": 16,
    "title": "Urgent action by the President to assert immunity"
  },
  "ep-008": {
    "rule": 9,
    "pdfPage": 16,
    "title": "Procedures on immunity"
  },
  "ep-009": {
    "rule": 10,
    "pdfPage": 18,
    "title": "Standards of conduct"
  },
  "ep-010": {
    "rule": 10,
    "pdfPage": 18,
    "title": "Standards of conduct"
  },
  "ep-011": {
    "rule": 12,
    "pdfPage": 20,
    "title": "Internal investigations conducted by the European Anti-Fraud Office (OLAF)"
  },
  "ep-012": {
    "rule": 13,
    "pdfPage": 20,
    "title": "Observers"
  },
  "ep-013": {
    "rule": 14,
    "pdfPage": 21,
    "title": "Provisional Chair8"
  },
  "ep-014": {
    "rule": 15,
    "pdfPage": 21,
    "title": "Nominations and general provisions9"
  },
  "ep-015": {
    "rule": 16,
    "pdfPage": 21,
    "title": "Election of President – opening address10"
  },
  "ep-019": {
    "rule": 20,
    "pdfPage": 22,
    "title": "Vacancies12"
  },
  "ep-020": {
    "rule": 21,
    "pdfPage": 23,
    "title": "Early termination of an office"
  },
  "ep-038": {
    "rule": 35,
    "pdfPage": 29,
    "title": "Intergroups"
  },
  "ep-039": {
    "rule": 36,
    "pdfPage": 29,
    "title": "Unofficial groupings"
  },
  "ep-049": {
    "rule": 59,
    "pdfPage": 44,
    "title": "Joint committee procedure"
  },
  "ep-058": {
    "rule": 136,
    "pdfPage": 81,
    "title": "Statements by the Commission, Council and European Council"
  },
  "ep-062": {
    "rule": 186,
    "pdfPage": 107,
    "title": "Thresholds35"
  },
  "ep-063": {
    "rule": 186,
    "pdfPage": 107,
    "title": "Thresholds35"
  },
  "ep-064": {
    "rule": 186,
    "pdfPage": 107,
    "title": "Thresholds35"
  },
  "ep-065": {
    "rule": 187,
    "pdfPage": 107,
    "title": "Tabling and presenting amendments36"
  },
  "ep-066": {
    "rule": 193,
    "pdfPage": 112,
    "title": "Right to vote41"
  },
  "ep-068": {
    "rule": 198,
    "pdfPage": 113,
    "title": "Voting by secret ballot45"
  },
  "ep-070": {
    "rule": 216,
    "pdfPage": 123,
    "title": "Composition of committees"
  },
  "ep-074": {
    "rule": 224,
    "pdfPage": 127,
    "title": "Voting in committee"
  },
  "ep-075": {
    "rule": 229,
    "pdfPage": 130,
    "title": "Setting-up and duties of interparliamentary delegations"
  },
  "ep-076": {
    "rule": 232,
    "pdfPage": 132,
    "title": "Right of petition"
  },
  "ep-079": {
    "rule": 242,
    "pdfPage": 141,
    "title": "Application of the Rules of Procedure"
  },
  "ep-080": {
    "rule": 248,
    "pdfPage": 147,
    "title": "The symbols of the Union"
  },
  "ep-083": {
    "rule": 39,
    "pdfPage": 32,
    "title": "Annual programming"
  },
  "ep-084": {
    "rule": 40,
    "pdfPage": 32,
    "title": "Respect for fundamental rights"
  },
  "ep-089": {
    "rule": 43,
    "pdfPage": 34,
    "title": "Examination of respect for the principles of subsidiarity and proportionality"
  },
  "ep-090": {
    "rule": 44,
    "pdfPage": 35,
    "title": "Access to documents and provision of information to Parliament"
  },
  "ep-091": {
    "rule": 45,
    "pdfPage": 35,
    "title": "Representation of Parliament in Council meetings"
  },
  "ep-093": {
    "rule": 47,
    "pdfPage": 35,
    "title": "Requests to the Commission for submission of proposals"
  },
  "ep-094": {
    "rule": 48,
    "pdfPage": 37,
    "title": "Referral of legally binding acts and questions of competence"
  },
  "ep-095": {
    "rule": 49,
    "pdfPage": 38,
    "title": "Acceleration of legislative procedures"
  },
  "ep-096": {
    "rule": 50,
    "pdfPage": 38,
    "title": "Legislative procedures on initiatives originating from institutions other than the Commission"
  },
  "ep-098": {
    "rule": 52,
    "pdfPage": 39,
    "title": "Simplified procedure"
  },
  "ep-099": {
    "rule": 53,
    "pdfPage": 40,
    "title": "Non-legislative reports"
  },
  "ep-100": {
    "rule": 54,
    "pdfPage": 40,
    "title": "Co-rapporteurship"
  },
  "ep-102": {
    "rule": 57,
    "pdfPage": 42,
    "title": "Opinions of committees"
  },
  "ep-103": {
    "rule": 58,
    "pdfPage": 43,
    "title": "Budgetary assessment on proposals for legally binding acts with budgetary implications"
  },
  "ep-104": {
    "rule": 59,
    "pdfPage": 44,
    "title": "Joint committee procedure"
  },
  "ep-106": {
    "rule": 60,
    "pdfPage": 44,
    "title": "Vote in Parliament – first reading"
  },
  "ep-107": {
    "rule": 60,
    "pdfPage": 44,
    "title": "Vote in Parliament – first reading"
  },
  "ep-108": {
    "rule": 61,
    "pdfPage": 46,
    "title": "Referral back to the committee responsible"
  },
  "ep-109": {
    "rule": 64,
    "pdfPage": 47,
    "title": "Communication of the Council's position"
  },
  "ep-115": {
    "rule": 75,
    "pdfPage": 51,
    "title": "Conduct of negotiations"
  },
  "ep-119": {
    "rule": 82,
    "pdfPage": 54,
    "title": "Modified proposal for a legally binding act"
  },
  "ep-120": {
    "rule": 83,
    "pdfPage": 54,
    "title": "Commission position on amendments"
  },
  "ep-121": {
    "rule": 85,
    "pdfPage": 54,
    "title": "Follow-up to Parliament's position"
  },
  "ep-122": {
    "rule": 85,
    "pdfPage": 54,
    "title": "Follow-up to Parliament's position"
  },
  "ep-123": {
    "rule": 86,
    "pdfPage": 55,
    "title": "Renewed referral to Parliament"
  },
  "ep-125": {
    "rule": 94,
    "pdfPage": 58,
    "title": "Multiannual financial framework"
  },
  "ep-126": {
    "rule": 96,
    "pdfPage": 58,
    "title": "Parliament's position on the draft budget"
  },
  "ep-127": {
    "rule": 96,
    "pdfPage": 58,
    "title": "Parliament's position on the draft budget"
  },
  "ep-128": {
    "rule": 96,
    "pdfPage": 58,
    "title": "Parliament's position on the draft budget"
  },
  "ep-130": {
    "rule": 99,
    "pdfPage": 60,
    "title": "Provisional twelfths system"
  },
  "ep-132": {
    "rule": 100,
    "pdfPage": 60,
    "title": "Implementation of the budget"
  },
  "ep-134": {
    "rule": 101,
    "pdfPage": 61,
    "title": "Discharge to the Commission in respect of implementation of the budget"
  },
  "ep-135": {
    "rule": 102,
    "pdfPage": 61,
    "title": "Other discharge procedures"
  },
  "ep-136": {
    "rule": 103,
    "pdfPage": 61,
    "title": "Interinstitutional cooperation"
  },
  "ep-137": {
    "rule": 104,
    "pdfPage": 62,
    "title": "Estimates of Parliament"
  },
  "ep-138": {
    "rule": 104,
    "pdfPage": 62,
    "title": "Estimates of Parliament"
  },
  "ep-139": {
    "rule": 107,
    "pdfPage": 63,
    "title": "Consent procedure"
  },
  "ep-142": {
    "rule": 128,
    "pdfPage": 77,
    "title": "Election of the President of the Commission"
  },
  "ep-143": {
    "rule": 128,
    "pdfPage": 77,
    "title": "Election of the President of the Commission"
  },
  "ep-146": {
    "rule": 131,
    "pdfPage": 79,
    "title": "Motion of censure on the Commission"
  },
  "ep-147": {
    "rule": 131,
    "pdfPage": 79,
    "title": "Motion of censure on the Commission"
  },
  "ep-148": {
    "rule": 131,
    "pdfPage": 79,
    "title": "Motion of censure on the Commission"
  },
  "ep-149": {
    "rule": 133,
    "pdfPage": 79,
    "title": "Appointment of the Members of the Court of Auditors",
    "annex": "Annex VI, section VI, point 6 (Committee on Budgetary Control)"
  },
  "ep-151": {
    "rule": 136,
    "pdfPage": 81,
    "title": "Statements by the Commission, Council and European Council"
  },
  "ep-152": {
    "rule": 136,
    "pdfPage": 81,
    "title": "Statements by the Commission, Council and European Council"
  },
  "ep-153": {
    "rule": 138,
    "pdfPage": 82,
    "title": "Statements explaining the use of Article 122 of the Treaty on the Functioning of the"
  },
  "ep-156": {
    "rule": 142,
    "pdfPage": 84,
    "title": "Questions for oral answer with debate"
  },
  "ep-158": {
    "rule": 144,
    "pdfPage": 85,
    "title": "Questions for written answer"
  },
  "ep-159": {
    "rule": 144,
    "pdfPage": 85,
    "title": "Questions for written answer"
  },
  "ep-160": {
    "rule": 147,
    "pdfPage": 87,
    "title": "Questions for written answer concerning the Single Supervisory Mechanism and the Single"
  },
  "ep-162": {
    "rule": 150,
    "pdfPage": 88,
    "title": "Debates on cases of breaches of human rights, democracy and the rule of law"
  },
  "ep-165": {
    "rule": 154,
    "pdfPage": 90,
    "title": "Interinstitutional agreements"
  },
  "ep-166": {
    "rule": 155,
    "pdfPage": 91,
    "title": "Proceedings before the Court of Justice of the European Union"
  },
  "ep-167": {
    "rule": 156,
    "pdfPage": 93,
    "title": "Exchange of information, contacts and reciprocal facilities"
  },
  "ep-168": {
    "rule": 156,
    "pdfPage": 93,
    "title": "Exchange of information, contacts and reciprocal facilities"
  },
  "ep-169": {
    "rule": 157,
    "pdfPage": 93,
    "title": "Conference of Parliamentary Committees for Union Affairs (COSAC)"
  },
  "ep-172": {
    "rule": 27,
    "pdfPage": 25,
    "title": "Duties of the Conference of Presidents"
  },
  "ep-173": {
    "rule": 27,
    "pdfPage": 25,
    "title": "Duties of the Conference of Presidents"
  },
  "ep-174": {
    "rule": 55,
    "pdfPage": 40,
    "title": "Own-initiative reports"
  },
  "ep-175": {
    "rule": 90,
    "pdfPage": 56,
    "title": "Withdrawal from the Union"
  },
  "ep-176": {
    "rule": 90,
    "pdfPage": 56,
    "title": "Withdrawal from the Union"
  },
  "ep-177": {
    "rule": 91,
    "pdfPage": 56,
    "title": "Breach by a Member State of fundamental principles and values"
  },
  "ep-178": {
    "rule": 91,
    "pdfPage": 56,
    "title": "Breach by a Member State of fundamental principles and values"
  },
  "ep-179": {
    "rule": 93,
    "pdfPage": 57,
    "title": "Enhanced cooperation between Member States"
  },
  "ep-180": {
    "rule": 117,
    "pdfPage": 70,
    "title": "International agreements"
  },
  "ep-181": {
    "rule": 122,
    "pdfPage": 73,
    "title": "Consultation of, and provision of information to, Parliament within the framework of the"
  },
  "ep-182": {
    "rule": 121,
    "pdfPage": 72,
    "title": "Recommendations on the Union's external policies"
  },
  "ep-183": {
    "rule": 122,
    "pdfPage": 73,
    "title": "Consultation of, and provision of information to, Parliament within the framework of the"
  },
  "ep-184": {
    "rule": 123,
    "pdfPage": 73,
    "title": "Breach of human rights"
  },
  "ep-185": {
    "rule": 148,
    "pdfPage": 87,
    "title": "Annual and other reports of other institutions or bodies"
  },
  "ep-186": {
    "rule": 153,
    "pdfPage": 90,
    "title": "Requests to European Agencies"
  },
  "ep-187": {
    "rule": 117,
    "pdfPage": 70,
    "title": "International agreements"
  },
  "ep-188": {
    "rule": 87,
    "pdfPage": 55,
    "title": "Ordinary Treaty revision"
  },
  "ep-191": {
    "rule": 87,
    "pdfPage": 55,
    "title": "Ordinary Treaty revision"
  },
  "ep-192": {
    "rule": 92,
    "pdfPage": 57,
    "title": "Composition of Parliament"
  },
  "ep-193": {
    "rule": 93,
    "pdfPage": 57,
    "title": "Enhanced cooperation between Member States"
  },
  "ep-194": {
    "rule": 141,
    "pdfPage": 83,
    "title": "Special scrutiny hearings"
  },
  "ep-195": {
    "rule": 143,
    "pdfPage": 84,
    "title": "Question Time"
  },
  "ep-196": {
    "rule": 145,
    "pdfPage": 85,
    "title": "Major interpellations for written answer"
  },
  "ep-197": {
    "rule": 148,
    "pdfPage": 87,
    "title": "Annual and other reports of other institutions or bodies"
  },
  "ep-198": {
    "rule": 121,
    "pdfPage": 72,
    "title": "Recommendations on the Union's external policies"
  },
  "ep-199": {
    "rule": 151,
    "pdfPage": 89,
    "title": "Consultation of the European Economic and Social Committee"
  },
  "ep-200": {
    "rule": 154,
    "pdfPage": 90,
    "title": "Interinstitutional agreements"
  },
  "ep-204": {
    "rule": 160,
    "pdfPage": 95,
    "title": "Convening of Parliament"
  },
  "ep-207": {
    "rule": 164,
    "pdfPage": 96,
    "title": "Adopting and amending the agenda"
  },
  "ep-209": {
    "rule": 166,
    "pdfPage": 97,
    "title": "Short presentation"
  },
  "ep-210": {
    "rule": 169,
    "pdfPage": 98,
    "title": "Topical debate requested by a political group"
  },
  "ep-211": {
    "rule": 170,
    "pdfPage": 99,
    "title": "Urgent procedure"
  },
  "ep-212": {
    "rule": 171,
    "pdfPage": 99,
    "title": "Joint debate"
  },
  "ep-217": {
    "rule": 179,
    "pdfPage": 103,
    "title": "One-minute speeches"
  },
  "ep-218": {
    "rule": 180,
    "pdfPage": 103,
    "title": "Personal statements"
  },
  "ep-219": {
    "rule": 181,
    "pdfPage": 103,
    "title": "Prevention of obstruction33"
  },
  "ep-220": {
    "rule": 182,
    "pdfPage": 104,
    "title": "Immediate measures"
  },
  "ep-221": {
    "rule": 184,
    "pdfPage": 106,
    "title": "Internal appeal procedures"
  },
  "ep-227": {
    "rule": 187,
    "pdfPage": 107,
    "title": "Tabling and presenting amendments36"
  },
  "ep-228": {
    "rule": 188,
    "pdfPage": 108,
    "title": "Admissibility of amendments37"
  },
  "ep-229": {
    "rule": 188,
    "pdfPage": 108,
    "title": "Admissibility of amendments37"
  },
  "ep-230": {
    "rule": 192,
    "pdfPage": 111,
    "title": "Split voting40"
  },
  "ep-234": {
    "rule": 201,
    "pdfPage": 114,
    "title": "Explanations of votes"
  },
  "ep-235": {
    "rule": 202,
    "pdfPage": 115,
    "title": "Points of order48"
  },
  "ep-236": {
    "rule": 203,
    "pdfPage": 115,
    "title": "Procedural motions"
  },
  "ep-237": {
    "rule": 205,
    "pdfPage": 116,
    "title": "Closure of a debate"
  },
  "ep-238": {
    "rule": 206,
    "pdfPage": 116,
    "title": "Adjournment of a debate or vote49"
  },
  "ep-243": {
    "rule": 210,
    "pdfPage": 118,
    "title": "Verbatim reports51"
  },
  "ep-247": {
    "rule": 198,
    "pdfPage": 113,
    "title": "Voting by secret ballot45"
  },
  "ep-248": {
    "rule": 200,
    "pdfPage": 114,
    "title": "Disputes on voting47"
  },
  "ep-249": {
    "rule": 203,
    "pdfPage": 115,
    "title": "Procedural motions"
  },
  "ep-251": {
    "rule": 212,
    "pdfPage": 120,
    "title": "Setting-up of standing committees"
  },
  "ep-252": {
    "rule": 212,
    "pdfPage": 120,
    "title": "Setting-up of standing committees"
  },
  "ep-257": {
    "rule": 217,
    "pdfPage": 124,
    "title": "Duties of committees"
  },
  "ep-259": {
    "rule": 220,
    "pdfPage": 125,
    "title": "Committee coordinators"
  },
  "ep-261": {
    "rule": 223,
    "pdfPage": 127,
    "title": "Minutes of committee meetings"
  },
  "ep-262": {
    "rule": 224,
    "pdfPage": 127,
    "title": "Voting in committee"
  },
  "ep-263": {
    "rule": 226,
    "pdfPage": 128,
    "title": "Question Time in committee"
  },
  "ep-264": {
    "rule": 227,
    "pdfPage": 128,
    "title": "Procedure for the consultation by a committee of confidential information in a committee"
  },
  "ep-265": {
    "rule": 228,
    "pdfPage": 129,
    "title": "Public hearings and debates on citizens’ initiatives"
  },
  "ep-266": {
    "rule": 229,
    "pdfPage": 130,
    "title": "Setting-up and duties of interparliamentary delegations"
  },
  "ep-267": {
    "rule": 230,
    "pdfPage": 131,
    "title": "Joint parliamentary committees"
  },
  "ep-268": {
    "rule": 231,
    "pdfPage": 131,
    "title": "Cooperation with the Parliamentary Assembly of the Council of Europe"
  },
  "ep-272": {
    "rule": 234,
    "pdfPage": 134,
    "title": "Fact-finding visits"
  },
  "ep-273": {
    "rule": 236,
    "pdfPage": 135,
    "title": "Citizens' initiative"
  },
  "ep-278": {
    "rule": 241,
    "pdfPage": 139,
    "title": "Powers and responsibilities relating to European political parties and European political"
  },
  "ep-286": {
    "rule": 248,
    "pdfPage": 147,
    "title": "The symbols of the Union"
  },
  "ep-287": {
    "rule": 249,
    "pdfPage": 147,
    "title": "Gender Mainstreaming"
  },
  "ep-288": {
    "rule": 250,
    "pdfPage": 147,
    "title": "Unfinished business"
  },
  "ep-289": {
    "rule": 251,
    "pdfPage": 148,
    "title": "Corrigenda"
  },
  "ep-290": {
    "rule": 11,
    "pdfPage": 19,
    "title": "Rules of conduct regarding integrity and transparency"
  },
  "ep-291": {
    "rule": 10,
    "pdfPage": 18,
    "title": "Standards of conduct"
  },
  "ep-297": {
    "rule": 227,
    "pdfPage": 128,
    "title": "Procedure for the consultation by a committee of confidential information in a committee"
  }
};
const epRulesChecks = Object.fromEntries(
  Object.entries(epRuleReferences).map(([id, ref]) => [id, {
    reviewedAt: "2026-10-29",
    method: "primary-source",
    referenceEdition: "July 2025 Rules",
    currentEditionVerified: false,
    sources: [{
      title: "European Parliament — Rules of Procedure, 10th term, July 2025",
      url: "https://www.europarl.europa.eu/RegData/reglement/2025/07-07/EP-PE_REGL(2025)07-07_EN.pdf#page=" + ref.pdfPage,
      section: "Rule " + ref.rule + " — " + ref.title +
        (ref.annex ? "; " + ref.annex : ""),
    }],
    note: "Answer checked against the official July 2025 edition cited below. Later amendments have not been verified; this is not certification against the latest edition.",
  }]),
);

// Individually reviewed ICT practice items. Supporting documents are not
// official EPSO answers; scenario conclusions are the author's assessment.
const ictSourceCatalog = {
  "ai": {
    "title": "What is responsible AI? | IBM",
    "url": "https://www.ibm.com/think/topics/responsible-ai"
  },
  "ansible-raw": {
    "title": "Ansible — glossary: idempotency",
    "url": "https://raw.githubusercontent.com/ansible/ansible-documentation/devel/docs/docsite/rst/reference_appendices/glossary.rst"
  },
  "api-rate": {
    "title": "Using rate-based rule statements in AWS WAF - AWS WAF, AWS Firewall Manager, AWS Shield Advanced, and AWS Shield network security director",
    "url": "https://docs.aws.amazon.com/waf/latest/developerguide/waf-rule-statement-type-rate-based.html"
  },
  "aws-adr-correct": {
    "title": "Architectural decision record process - AWS Prescriptive Guidance",
    "url": "https://docs.aws.amazon.com/prescriptive-guidance/latest/architectural-decision-records/adr-process.html"
  },
  "aws-efa": {
    "title": "Elastic Fabric Adapter for AI/ML and HPC workloads on Amazon EC2 - Amazon Elastic Compute Cloud",
    "url": "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/efa.html"
  },
  "aws-filesystem": {
    "title": "Amazon FSx for Lustre performance - FSx for Lustre",
    "url": "https://docs.aws.amazon.com/fsx/latest/LustreGuide/performance.html"
  },
  "aws-hpc": {
    "title": "AWS Well-Architected — High Performance Computing lens",
    "url": "https://docs.aws.amazon.com/pdfs/wellarchitected/latest/high-performance-computing-lens/wellarchitected-high-performance-computing-lens.pdf"
  },
  "aws-ops-pdf": {
    "title": "AWS Well-Architected — Operational Excellence pillar",
    "url": "https://docs.aws.amazon.com/pdfs/wellarchitected/latest/operational-excellence-pillar/wellarchitected-operational-excellence-pillar.pdf"
  },
  "aws-proxy": {
    "title": "What is an Application Load Balancer? - Elastic Load Balancing",
    "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html"
  },
  "aws-reliability-pdf": {
    "title": "AWS Well-Architected — Reliability pillar",
    "url": "https://docs.aws.amazon.com/pdfs/wellarchitected/latest/reliability-pillar/wellarchitected-reliability-pillar.pdf"
  },
  "aws-retry": {
    "title": "references-details-empty",
    "url": "https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/"
  },
  "aws-serverless": {
    "title": "Understanding the Lambda execution environment lifecycle - AWS Lambda",
    "url": "https://docs.aws.amazon.com/lambda/latest/dg/lambda-runtime-environment.html"
  },
  "aws-sticky": {
    "title": "Edit target group attributes for your Application Load Balancer - Elastic Load Balancing",
    "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/edit-target-group-attributes.html"
  },
  "aws-waf": {
    "title": "What are AWS WAF, AWS Shield Advanced, AWS Shield network security director and AWS Firewall Manager? - AWS WAF, AWS Firewall Manager, AWS Shield Advanced, and AWS Shield network security director",
    "url": "https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html"
  },
  "aws-websocket": {
    "title": "Listeners for your Application Load Balancers - Elastic Load Balancing",
    "url": "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html"
  },
  "azure-confidential": {
    "title": "Azure Confidential Computing Overview | Microsoft Learn",
    "url": "https://learn.microsoft.com/en-us/azure/confidential-computing/overview"
  },
  "bgp": {
    "title": "RFC 4271 — BGP-4",
    "url": "https://www.rfc-editor.org/rfc/rfc4271.txt"
  },
  "certificates": {
    "title": "RFC 5280 — PKIX certificate and CRL profile",
    "url": "https://www.rfc-editor.org/rfc/rfc5280.txt"
  },
  "clos": {
    "title": "RFC 7938 — BGP in large-scale data centres",
    "url": "https://www.rfc-editor.org/rfc/rfc7938.txt"
  },
  "cpu-scheduling": {
    "title": "Hyper-V processor performance | Microsoft Learn",
    "url": "https://learn.microsoft.com/en-us/windows-server/administration/performance-tuning/role/hyper-v-server/processor-performance"
  },
  "cpu-steal": {
    "title": "proc_stat(5) - Linux manual page",
    "url": "https://man7.org/linux/man-pages/man5/proc_stat.5.html"
  },
  "crypto-agility": {
    "title": "RFC 7696 — Cryptographic algorithm agility",
    "url": "https://www.rfc-editor.org/rfc/rfc7696.txt"
  },
  "digital-twin": {
    "title": "What is Azure Digital Twins? - Azure Digital Twins | Microsoft Learn",
    "url": "https://learn.microsoft.com/en-us/azure/digital-twins/overview"
  },
  "dns": {
    "title": "RFC 1035 — Domain names",
    "url": "https://www.rfc-editor.org/rfc/rfc1035.txt"
  },
  "dns6": {
    "title": "RFC 3596 — DNS extensions for IPv6",
    "url": "https://www.rfc-editor.org/rfc/rfc3596.txt"
  },
  "dwave": {
    "title": "What is Quantum Annealing? — D-Wave Quantum Computing Products documentation",
    "url": "https://docs.dwavequantum.com/en/latest/quantum_research/quantum_annealing_intro.html"
  },
  "ebs": {
    "title": "Amazon EBS I/O characteristics and monitoring - Amazon EBS",
    "url": "https://docs.aws.amazon.com/ebs/latest/userguide/ebs-io-characteristics.html"
  },
  "ecmp": {
    "title": "RFC 2992 — Equal-Cost Multi-Path",
    "url": "https://www.rfc-editor.org/rfc/rfc2992.txt"
  },
  "etcd": {
    "title": "FAQ | etcd",
    "url": "https://etcd.io/docs/v3.6/faq/"
  },
  "event": {
    "title": "Event-Driven Architecture",
    "url": "https://aws.amazon.com/event-driven-architecture/"
  },
  "for-terraform-lock": {
    "title": "State: Locking | Terraform | HashiCorp Developer",
    "url": "https://developer.hashicorp.com/terraform/language/state/locking"
  },
  "git-security": {
    "title": "Secure use reference - GitHub Docs",
    "url": "https://docs.github.com/en/actions/security-for-github-actions/security-guides/security-hardening-for-github-actions"
  },
  "gitops-raw": {
    "title": "OpenGitOps — principles",
    "url": "https://raw.githubusercontent.com/open-gitops/documents/main/PRINCIPLES.md"
  },
  "hyperv": {
    "title": "Hyper-v Architecture | Microsoft Learn",
    "url": "https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/architecture"
  },
  "ibm-quantum-think": {
    "title": "What Is Quantum Computing? | IBM",
    "url": "https://www.ibm.com/think/topics/quantum-computing"
  },
  "iscsi": {
    "title": "RFC 7143 — iSCSI",
    "url": "https://www.rfc-editor.org/rfc/rfc7143.txt"
  },
  "istio": {
    "title": "Istio / The Istio service mesh",
    "url": "https://istio.io/latest/about/service-mesh/"
  },
  "itil-change": {
    "title": "IT Change Management: ITIL Framework & Best Practices | Atlassian",
    "url": "https://www.atlassian.com/itsm/change-management"
  },
  "itil-incident": {
    "title": "Incident Management: Processes, Best Practices & Tools | Atlassian",
    "url": "https://www.atlassian.com/itsm/incident-management"
  },
  "itil-problem": {
    "title": "Problem Management in ITIL: Process & Implementation Guide",
    "url": "https://www.atlassian.com/itsm/problem-management"
  },
  "itil-service": {
    "title": "Service Request Management: Definition & Process | Atlassian",
    "url": "https://www.atlassian.com/itsm/service-request-management"
  },
  "itil-sla": {
    "title": "What Is an SLA? Service Level Agreements Explained | Atlassian",
    "url": "https://www.atlassian.com/itsm/service-request-management/slas"
  },
  "k8s-affinity": {
    "title": "Assigning Pods to Nodes | Kubernetes",
    "url": "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/"
  },
  "k8s-images": {
    "title": "Images | Kubernetes",
    "url": "https://kubernetes.io/docs/concepts/containers/images/"
  },
  "k8s-probes": {
    "title": "Pod Lifecycle | Kubernetes",
    "url": "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/"
  },
  "k8s-storage": {
    "title": "Persistent Volumes | Kubernetes",
    "url": "https://kubernetes.io/docs/concepts/storage/persistent-volumes/"
  },
  "kem": {
    "title": "RFC 9180 — Hybrid Public Key Encryption",
    "url": "https://www.rfc-editor.org/rfc/rfc9180.txt"
  },
  "linux-proc": {
    "title": "The /proc Filesystem — The Linux Kernel documentation",
    "url": "https://www.kernel.org/doc/html/latest/filesystems/proc.html"
  },
  "microsoft-grover": {
    "title": "Theory of Grover Search Algorithm - Azure Quantum | Microsoft Learn",
    "url": "https://learn.microsoft.com/en-us/azure/quantum/concepts-grovers"
  },
  "microsoft-quantum": {
    "title": "What Is Quantum Computing? - Azure Quantum | Microsoft Learn",
    "url": "https://learn.microsoft.com/en-us/azure/quantum/overview-understanding-quantum-computing"
  },
  "mpi": {
    "title": "MPI Forum — MPI 4.1 standard",
    "url": "https://www.mpi-forum.org/docs/mpi-4.1/mpi41-report.pdf"
  },
  "mtu": {
    "title": "RFC 8201 — IPv6 Path MTU Discovery",
    "url": "https://www.rfc-editor.org/rfc/rfc8201.txt"
  },
  "nersc-login": {
    "title": "Resource Usage Policies - NERSC Documentation",
    "url": "https://docs.nersc.gov/policies/resource-usage/"
  },
  "network-firewall": {
    "title": "What is AWS Network Firewall? - AWS Network Firewall",
    "url": "https://docs.aws.amazon.com/network-firewall/latest/developerguide/what-is-aws-network-firewall.html"
  },
  "nist-acvp": {
    "title": "NIST ACVP — validated cryptographic algorithm operations",
    "url": "https://raw.githubusercontent.com/usnistgov/ACVP/master/README.md"
  },
  "nist-controls-json": {
    "title": "NIST SP 800-53 Rev. 5.2 — official OSCAL control catalog",
    "url": "https://raw.githubusercontent.com/usnistgov/oscal-content/main/nist.gov/SP800-53/rev5/json/NIST_SP-800-53_rev5_catalog.json"
  },
  "nsa-qkd": {
    "title": "National Security Agency/Central Security Service > Cybersecurity > Quantum Key Distribution (QKD) and Quantum Cryptography QC",
    "url": "https://www.nsa.gov/Cybersecurity/Quantum-Key-Distribution-QKD-and-Quantum-Cryptography-QC/"
  },
  "numa": {
    "title": "NUMA Memory Policy — The Linux Kernel documentation",
    "url": "https://www.kernel.org/doc/html/latest/admin-guide/mm/numa_memory_policy.html"
  },
  "nvidia-guide": {
    "title": "CUDA Best Practices Guide — CUDA C++ Best Practices Guide 13.4 documentation",
    "url": "https://docs.nvidia.com/cuda/cuda-c-best-practices-guide/index.html"
  },
  "nvidia-roofline": {
    "title": "2. Profiling Guide — NsightCompute",
    "url": "https://docs.nvidia.com/nsight-compute/ProfilingGuide/index.html"
  },
  "opa": {
    "title": "Open Policy Agent (OPA) | Open Policy Agent",
    "url": "https://www.openpolicyagent.org/docs"
  },
  "opa-sast": {
    "title": "OWASP — source code analysis tools",
    "url": "https://raw.githubusercontent.com/OWASP/www-community/master/pages/Source_Code_Analysis_Tools.md"
  },
  "openmp-example": {
    "title": "OpenMP — parallel directive example",
    "url": "https://raw.githubusercontent.com/OpenMP/Examples/main/parallel_execution/sources/parallel.1.c"
  },
  "openmp-memory": {
    "title": "OpenMP — shared-memory model and data races",
    "url": "https://raw.githubusercontent.com/OpenMP/Examples/main/Chap_memory_model.tex"
  },
  "openshift-terraform-drift": {
    "title": "Manage resource drift | Terraform | HashiCorp Developer",
    "url": "https://developer.hashicorp.com/terraform/tutorials/state/resource-drift"
  },
  "opentelemetry": {
    "title": "What is OpenTelemetry? | OpenTelemetry",
    "url": "https://opentelemetry.io/docs/what-is-opentelemetry/"
  },
  "otel-tracing": {
    "title": "Traces | OpenTelemetry",
    "url": "https://opentelemetry.io/docs/concepts/signals/traces/"
  },
  "owasp-dast": {
    "title": "OWASP WSTG — web application testing objectives",
    "url": "https://raw.githubusercontent.com/OWASP/wstg/master/document/4-Web_Application_Security_Testing/00-Introduction_and_Objectives/README.md"
  },
  "platform-concept": {
    "title": "What is Platform Engineering? | Microsoft Learn",
    "url": "https://learn.microsoft.com/en-us/platform-engineering/what-is-platform-engineering"
  },
  "pm2-full": {
    "title": "European Commission — PM² Project Management Methodology 3.1",
    "url": "https://op.europa.eu/o/opportal-service/download-handler?identifier=97cc2f12-c648-11ee-95d9-01aa75ed71a1&format=pdf&language=en&productionSystem=cellar&part="
  },
  "pm2-portfolio-pdf": {
    "title": "European Commission — PM² Portfolio Management, 2025 overview",
    "url": "https://pm2.europa.eu/document/download/95a486fb-9af7-4979-9abb-1e3b02753826_en?filename=PM2-PfM-Overview-2025%20Edition%20v1.0.1.pdf"
  },
  "postgres": {
    "title": "PostgreSQL: Documentation: 18: 26.2. Log-Shipping Standby Servers",
    "url": "https://www.postgresql.org/docs/current/warm-standby.html"
  },
  "postgres-failover": {
    "title": "PostgreSQL: Documentation: 18: 26.3. Failover",
    "url": "https://www.postgresql.org/docs/current/warm-standby-failover.html"
  },
  "pqc-armor": {
    "title": "Post-Quantum Cryptography: A Digital Armor > National Security Agency/Central Security Service > Post-Quantum Cryptography Resource Article Display",
    "url": "https://www.nsa.gov/Cybersecurity/Post-Quantum-Cryptography-Resource-Hub/Article-Display/Article/4616296/post-quantum-cryptography-a-digital-armor/"
  },
  "pqc-primer": {
    "title": "Post-Quantum Cryptography: Primer > National Security Agency/Central Security Service > Post-Quantum Cryptography Resource Article Display",
    "url": "https://www.nsa.gov/Cybersecurity/Post-Quantum-Cryptography-Resource-Hub/Article-Display/Article/4616307/post-quantum-cryptography-primer/"
  },
  "pue-google": {
    "title": "Power usage effectiveness – Google Data Centers",
    "url": "https://datacenters.google/efficiency/"
  },
  "quantum-hybrid": {
    "title": "RFC 9794 — Post-quantum/traditional hybrid schemes",
    "url": "https://www.rfc-editor.org/rfc/rfc9794.txt"
  },
  "raid": {
    "title": "RAID arrays — The Linux Kernel documentation",
    "url": "https://www.kernel.org/doc/html/latest/admin-guide/md.html"
  },
  "random": {
    "title": "RFC 4086 — Randomness requirements for security",
    "url": "https://www.rfc-editor.org/rfc/rfc4086.txt"
  },
  "rds-failover": {
    "title": "Failing over a Multi-AZ DB instance for Amazon RDS - Amazon Relational Database Service",
    "url": "https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.MultiAZ.Failover.html"
  },
  "reproducible": {
    "title": "Definitions — reproducible-builds.org",
    "url": "https://reproducible-builds.org/docs/definition/"
  },
  "saferdb": {
    "title": "REL08-BP02 Integrate functional testing as part of your deployment - Reliability Pillar",
    "url": "https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/rel_tracking_change_management_functional_testing.html"
  },
  "sdn": {
    "title": "RFC 7426 — SDN layers and architecture",
    "url": "https://www.rfc-editor.org/rfc/rfc7426.txt"
  },
  "sigstore": {
    "title": "Sigstore Cosign — signing and verification",
    "url": "https://raw.githubusercontent.com/sigstore/cosign/main/README.md"
  },
  "slsa": {
    "title": "SLSA • Provenance",
    "url": "https://slsa.dev/spec/v1.1/provenance"
  },
  "slurm": {
    "title": "Slurm Workload Manager - Overview",
    "url": "https://slurm.schedmd.com/overview.html"
  },
  "slurm-accounting": {
    "title": "Slurm Workload Manager - sacct",
    "url": "https://slurm.schedmd.com/sacct.html"
  },
  "slurm-arrays": {
    "title": "Slurm Workload Manager - Job Array Support",
    "url": "https://slurm.schedmd.com/job_array.html"
  },
  "slurm-priority": {
    "title": "Slurm Workload Manager - Multifactor Priority Plugin",
    "url": "https://slurm.schedmd.com/priority_multifactor.html"
  },
  "slurm-report": {
    "title": "Slurm Workload Manager - sreport",
    "url": "https://slurm.schedmd.com/sreport.html"
  },
  "spdx-scope": {
    "title": "Clause 1: Scope - SPDX Specification v2.3.1",
    "url": "https://spdx.github.io/spdx-spec/v2.3.1/scope/"
  },
  "sre-incidents": {
    "title": "Google SRE - Incident Management: Key to Restore Operations",
    "url": "https://sre.google/sre-book/managing-incidents/"
  },
  "sre-monitoring": {
    "title": "Google SRE: SRE Responsibilities and Management Frameworks",
    "url": "https://sre.google/sre-book/monitoring-distributed-systems/"
  },
  "sre-postmortem": {
    "title": "Google SRE - Blameless Postmortem for System Resilience",
    "url": "https://sre.google/sre-book/postmortem-culture/"
  },
  "sre-releases": {
    "title": "Google SRE: Role of Release Engineer and Best Practices",
    "url": "https://sre.google/sre-book/release-engineering/"
  },
  "sre-slo": {
    "title": "Google SRE - Defining slo: service level objective meaning",
    "url": "https://sre.google/sre-book/service-level-objectives/"
  },
  "sre-testing": {
    "title": "Google SRE - Stress Testing: Build Confidence in System",
    "url": "https://sre.google/sre-book/testing-reliability/"
  },
  "sre-toil": {
    "title": "Google SRE - What is Toil in SRE: Understanding Its Impact",
    "url": "https://sre.google/sre-book/eliminating-toil/"
  },
  "tls": {
    "title": "RFC 8446 — TLS 1.3",
    "url": "https://www.rfc-editor.org/rfc/rfc8446.txt"
  },
  "volatile-forensics": {
    "title": "Take response actions on a device in Microsoft Defender for Endpoint - Microsoft Defender for Endpoint | Microsoft Learn",
    "url": "https://learn.microsoft.com/en-us/defender-endpoint/respond-machine-alerts"
  },
  "wal": {
    "title": "PostgreSQL: Documentation: 18: 28.1. Reliability",
    "url": "https://www.postgresql.org/docs/current/wal-reliability.html"
  },
  "zero-trust": {
    "title": "Zero Trust as a security foundation | Microsoft Learn",
    "url": "https://learn.microsoft.com/en-us/security/zero-trust/zero-trust-overview"
  }
};
const ictQuestionReferences = {
  "EPSO-ICT1-001": {
    "section": "Node affinity/anti-affinity and readiness-controlled service endpoints",
    "sources": [
      "k8s-affinity",
      "k8s-probes"
    ]
  },
  "EPSO-ICT1-002": {
    "section": "RFC 7143: iSCSI protocol model and SCSI over TCP",
    "sources": [
      "iscsi"
    ]
  },
  "EPSO-ICT1-003": {
    "section": "Synchronous replication: waiting for standby acknowledgement",
    "sources": [
      "postgres"
    ]
  },
  "EPSO-ICT1-004": {
    "section": "RFC 7426: control and forwarding planes",
    "sources": [
      "sdn"
    ]
  },
  "EPSO-ICT1-005": {
    "section": "/proc/stat: steal time, distinct from user, system and iowait",
    "sources": [
      "cpu-steal"
    ]
  },
  "EPSO-ICT1-006": {
    "section": "CP-9 backup protection and recovery tests; SC-28(2) offline storage",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-007": {
    "section": "Problem management, workarounds and underlying causes",
    "sources": [
      "itil-problem"
    ]
  },
  "EPSO-ICT1-008": {
    "section": "Emergency changes: expedited risk assessment and authorisation",
    "sources": [
      "itil-change"
    ]
  },
  "EPSO-ICT1-009": {
    "section": "Full 30-day measurement window, no contractual exclusions",
    "sources": [],
    "note": "30 × 24 × 60 × (1 − 0.999) = 43.2 minutes. Assumes the full month is the measurement window and ignores contractual exclusions."
  },
  "EPSO-ICT1-010": {
    "section": "Black-box/white-box monitoring and actionable alerting",
    "sources": [
      "sre-monitoring"
    ]
  },
  "EPSO-ICT1-011": {
    "section": "Dependency review; RA-5 vulnerability monitoring",
    "sources": [
      "git-security",
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-012": {
    "section": "Detect and reconcile resource drift; review plans before applying",
    "sources": [
      "openshift-terraform-drift"
    ]
  },
  "EPSO-ICT1-013": {
    "section": "Glossary: idempotency",
    "sources": [
      "ansible-raw"
    ]
  },
  "EPSO-ICT1-014": {
    "section": "AC-6: least privilege",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-015": {
    "section": "Disaster recovery objectives: recovery time and recovery point",
    "sources": [
      "aws-reliability-pdf"
    ]
  },
  "EPSO-ICT1-016": {
    "section": "SC-7: boundary protection; AC-6: least privilege",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-017": {
    "section": "CM-8 inventory, MP-6 sanitisation, SI-12 retention and SA-22 unsupported components",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-018": {
    "section": "OPS06/OPS07: staged changes, readiness and reversible deployments",
    "sources": [
      "aws-ops-pdf"
    ]
  },
  "EPSO-ICT1-019": {
    "section": "Business justification, feasibility, objectives and acceptance criteria",
    "sources": [
      "pm2-full"
    ]
  },
  "EPSO-ICT1-020": {
    "section": "SA-9 external services; testability and migration/continuity planning",
    "sources": [
      "nist-controls-json",
      "aws-reliability-pdf"
    ]
  },
  "EPSO-ICT1-021": {
    "section": "CM-8 component inventory; workload dependency telemetry and ownership",
    "sources": [
      "nist-controls-json",
      "aws-ops-pdf"
    ]
  },
  "EPSO-ICT1-022": {
    "section": "Compose portfolio: dependencies, sequencing, capacity and risk",
    "sources": [
      "pm2-portfolio-pdf"
    ]
  },
  "EPSO-ICT1-023": {
    "section": "HPC performance efficiency: communication, latency and bandwidth",
    "sources": [
      "aws-hpc"
    ]
  },
  "EPSO-ICT1-024": {
    "section": "Overview: resource allocation, job execution and queue management",
    "sources": [
      "slurm"
    ]
  },
  "EPSO-ICT1-025": {
    "section": "Strong scaling and Amdahl’s law",
    "sources": [
      "nvidia-guide"
    ],
    "note": "With serial fraction f, ideal speed-up is 1/(f+(1−f)/N), bounded by 1/f. Communication and coordination overhead reduce practical speed-up further."
  },
  "EPSO-ICT1-026": {
    "section": "RFC 7696: algorithm transition, key management and interoperability",
    "sources": [
      "crypto-agility"
    ]
  },
  "EPSO-ICT1-027": {
    "section": "Shor’s factoring algorithm and the threat to RSA",
    "sources": [
      "ibm-quantum-think",
      "pqc-primer"
    ]
  },
  "EPSO-ICT1-028": {
    "section": "Harvest-now-decrypt-later and long-term confidentiality",
    "sources": [
      "pqc-armor"
    ]
  },
  "EPSO-ICT1-029": {
    "section": "Separate service targets; SA-9 monitoring of external service commitments",
    "sources": [
      "itil-sla",
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-030": {
    "section": "Incident command roles and cross-team coordination",
    "sources": [
      "sre-incidents"
    ]
  },
  "EPSO-ICT1-031": {
    "section": "RFC 3596 section 2: AAAA resource record",
    "sources": [
      "dns6"
    ]
  },
  "EPSO-ICT1-032": {
    "section": "RFC 4271: inter-autonomous-system routing",
    "sources": [
      "bgp"
    ]
  },
  "EPSO-ICT1-033": {
    "section": "Conventional IPv4 subnet, excluding network and broadcast addresses",
    "sources": [],
    "note": "/22 leaves 10 host bits: 1,024 addresses. The subnet spans 10.20.0.0–10.20.3.255, with conventional usable hosts 10.20.0.1–10.20.3.254."
  },
  "EPSO-ICT1-034": {
    "section": "PE-9 power equipment/cabling; PE-11 emergency power; eliminate shared failure domains",
    "sources": [
      "nist-controls-json",
      "aws-reliability-pdf"
    ]
  },
  "EPSO-ICT1-035": {
    "section": "REL network topology: redundant connectivity and tested failover",
    "sources": [
      "aws-reliability-pdf"
    ]
  },
  "EPSO-ICT1-036": {
    "section": "RFC 1035: resource record TTL and cache lifetime",
    "sources": [
      "dns"
    ]
  },
  "EPSO-ICT1-037": {
    "section": "Sticky sessions and target affinity",
    "sources": [
      "aws-sticky"
    ]
  },
  "EPSO-ICT1-038": {
    "section": "Linux MD RAID: RAID-5 and RAID-6 failure tolerance",
    "sources": [
      "raid"
    ]
  },
  "EPSO-ICT1-039": {
    "section": "Linux MD RAID: RAID-5 and RAID-6 failure tolerance",
    "sources": [
      "raid"
    ]
  },
  "EPSO-ICT1-040": {
    "section": "Consensus and majority quorum; partition failure tolerance",
    "sources": [
      "etcd"
    ]
  },
  "EPSO-ICT1-041": {
    "section": "Failure detection, STONITH/fencing, and consensus quorum",
    "sources": [
      "postgres-failover",
      "etcd"
    ]
  },
  "EPSO-ICT1-042": {
    "section": "SC-7 boundary protection and management interfaces; AC-6 least privilege",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-043": {
    "section": "RFC 8201: Path MTU Discovery, packet size and black-hole detection",
    "sources": [
      "mtu"
    ]
  },
  "EPSO-ICT1-044": {
    "section": "RFC 7426: data-plane forwarding, switching and routing",
    "sources": [
      "sdn"
    ]
  },
  "EPSO-ICT1-045": {
    "section": "Immutable image references/digests and reproducible release engineering",
    "sources": [
      "k8s-images",
      "sre-releases"
    ]
  },
  "EPSO-ICT1-046": {
    "section": "Pod readiness and Service endpoint traffic",
    "sources": [
      "k8s-probes"
    ]
  },
  "EPSO-ICT1-047": {
    "section": "RFC 7938: Clos/leaf-spine data-centre topology and ECMP",
    "sources": [
      "clos"
    ]
  },
  "EPSO-ICT1-048": {
    "section": "RFC 2992: equal-cost multipath next-hop selection",
    "sources": [
      "ecmp"
    ]
  },
  "EPSO-ICT1-049": {
    "section": "CP-9 backup separation/protection; recovery from shared failure domains",
    "sources": [
      "nist-controls-json",
      "aws-reliability-pdf"
    ]
  },
  "EPSO-ICT1-050": {
    "section": "EBS performance: I/O size, IOPS, queueing and latency",
    "sources": [
      "ebs"
    ]
  },
  "EPSO-ICT1-051": {
    "section": "WAL reliability and durable writes",
    "sources": [
      "wal"
    ]
  },
  "EPSO-ICT1-052": {
    "section": "Hyper-V architecture: type-1 hardware virtualisation",
    "sources": [
      "hyperv"
    ]
  },
  "EPSO-ICT1-053": {
    "section": "IA-2 multifactor authentication and AC-6 administrative separation",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-054": {
    "section": "Application load balancing: request routing, listeners and targets",
    "sources": [
      "aws-proxy"
    ]
  },
  "EPSO-ICT1-055": {
    "section": "HTTP listeners: WebSockets and persistent connections",
    "sources": [
      "aws-websocket"
    ]
  },
  "EPSO-ICT1-056": {
    "section": "/proc: memory, swap and VM statistics; host virtualisation resource sizing",
    "sources": [
      "linux-proc",
      "cpu-scheduling"
    ]
  },
  "EPSO-ICT1-057": {
    "section": "Multi-AZ failover: endpoint DNS changes and re-establishing connections",
    "sources": [
      "rds-failover"
    ]
  },
  "EPSO-ICT1-058": {
    "section": "Incident management: restoring service following disruption",
    "sources": [
      "itil-incident"
    ]
  },
  "EPSO-ICT1-059": {
    "section": "Problem management: workaround versus permanent resolution",
    "sources": [
      "itil-problem"
    ]
  },
  "EPSO-ICT1-060": {
    "section": "Restoration time and service reliability objectives",
    "sources": [
      "sre-slo",
      "itil-incident"
    ]
  },
  "EPSO-ICT1-061": {
    "section": "SLA response-time targets and measurement",
    "sources": [
      "itil-sla"
    ]
  },
  "EPSO-ICT1-062": {
    "section": "Service requests versus service interruptions",
    "sources": [
      "itil-service"
    ]
  },
  "EPSO-ICT1-063": {
    "section": "CM-8 inventories and CM-9 configuration items and lifecycle relationships",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-064": {
    "section": "CM-8: inventory must accurately reflect system components",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-065": {
    "section": "Alert signal quality and actionable thresholds",
    "sources": [
      "sre-monitoring"
    ]
  },
  "EPSO-ICT1-066": {
    "section": "OPS12: review operations and learn from changes against objectives",
    "sources": [
      "aws-ops-pdf"
    ]
  },
  "EPSO-ICT1-067": {
    "section": "Change coordination, conflicts and schedules",
    "sources": [
      "itil-change"
    ]
  },
  "EPSO-ICT1-068": {
    "section": "Standard changes: low-risk, documented and pre-authorised",
    "sources": [
      "itil-change"
    ]
  },
  "EPSO-ICT1-069": {
    "section": "Service desk: requests and incident handling",
    "sources": [
      "itil-service",
      "itil-incident"
    ]
  },
  "EPSO-ICT1-070": {
    "section": "SLA resolution targets by priority and measurement window",
    "sources": [
      "itil-sla"
    ]
  },
  "EPSO-ICT1-071": {
    "section": "SA-9 external service provider contracts, oversight and agreed levels",
    "sources": [
      "nist-controls-json",
      "itil-sla"
    ]
  },
  "EPSO-ICT1-072": {
    "section": "OPS roles, communication and cross-team agreements; end-to-end service objectives",
    "sources": [
      "aws-ops-pdf",
      "sre-slo"
    ]
  },
  "EPSO-ICT1-073": {
    "section": "Incident command and major incident coordination",
    "sources": [
      "sre-incidents"
    ]
  },
  "EPSO-ICT1-074": {
    "section": "Blameless postmortems: causes, contributing factors and prevention",
    "sources": [
      "sre-postmortem"
    ]
  },
  "EPSO-ICT1-075": {
    "section": "OPS11/OPS12: knowledge management and continual improvement",
    "sources": [
      "aws-ops-pdf"
    ]
  },
  "EPSO-ICT1-076": {
    "section": "OPS11/OPS12: knowledge management and continual improvement",
    "sources": [
      "aws-ops-pdf"
    ]
  },
  "EPSO-ICT1-077": {
    "section": "SLIs are quantitative measures; SLOs are target values",
    "sources": [
      "sre-slo"
    ]
  },
  "EPSO-ICT1-078": {
    "section": "User-visible, end-to-end and black-box monitoring",
    "sources": [
      "sre-monitoring"
    ]
  },
  "EPSO-ICT1-079": {
    "section": "Service request demand, self-service and eliminating repetitive toil",
    "sources": [
      "itil-service",
      "sre-toil"
    ]
  },
  "EPSO-ICT1-080": {
    "section": "OPS02: identify service owners, contacts and escalation responsibilities",
    "sources": [
      "aws-ops-pdf"
    ]
  },
  "EPSO-ICT1-081": {
    "section": "OPS11: improvements, prioritisation, ownership and follow-up",
    "sources": [
      "aws-ops-pdf"
    ]
  },
  "EPSO-ICT1-082": {
    "section": "Define stable indicators, measurement windows and exclusions",
    "sources": [
      "sre-slo",
      "itil-sla"
    ]
  },
  "EPSO-ICT1-083": {
    "section": "Incident impact, severity and relative priority",
    "sources": [
      "itil-incident"
    ]
  },
  "EPSO-ICT1-084": {
    "section": "Problem records linked to recurring incidents and causes",
    "sources": [
      "itil-problem"
    ]
  },
  "EPSO-ICT1-085": {
    "section": "Version-controlled release engineering and traceability",
    "sources": [
      "sre-releases"
    ]
  },
  "EPSO-ICT1-086": {
    "section": "Definition: same source, environment and instructions produce bit-for-bit identical artefacts",
    "sources": [
      "reproducible"
    ]
  },
  "EPSO-ICT1-087": {
    "section": "SPDX scope: software components, files and relationships",
    "sources": [
      "spdx-scope"
    ]
  },
  "EPSO-ICT1-088": {
    "section": "Least-privilege tokens, untrusted builds and credential exposure",
    "sources": [
      "git-security"
    ]
  },
  "EPSO-ICT1-089": {
    "section": "Cosign: verifying signatures with trusted signer identity or key",
    "sources": [
      "sigstore"
    ]
  },
  "EPSO-ICT1-090": {
    "section": "Source-code analysis tools: static analysis",
    "sources": [
      "opa-sast"
    ]
  },
  "EPSO-ICT1-091": {
    "section": "Web application security testing: active testing of running applications",
    "sources": [
      "owasp-dast"
    ]
  },
  "EPSO-ICT1-092": {
    "section": "Compromised credentials: revoke/rotate; do not rely on hiding the current file",
    "sources": [
      "git-security"
    ]
  },
  "EPSO-ICT1-093": {
    "section": "Release engineering and health-based canary rollout decisions",
    "sources": [
      "sre-releases",
      "aws-reliability-pdf"
    ]
  },
  "EPSO-ICT1-094": {
    "section": "Blue-green deployment: separate environments and traffic switching",
    "sources": [
      "aws-reliability-pdf"
    ]
  },
  "EPSO-ICT1-095": {
    "section": "Rollback strategies, persistent state and backwards compatibility",
    "sources": [
      "aws-reliability-pdf"
    ]
  },
  "EPSO-ICT1-096": {
    "section": "OPA: declarative policy and policy evaluation in automated systems",
    "sources": [
      "opa"
    ]
  },
  "EPSO-ICT1-097": {
    "section": "OpenGitOps: declarative, versioned, pulled and continuously reconciled state",
    "sources": [
      "gitops-raw"
    ]
  },
  "EPSO-ICT1-098": {
    "section": "Integration testing in the reliability test hierarchy",
    "sources": [
      "sre-testing"
    ]
  },
  "EPSO-ICT1-099": {
    "section": "Hermetic builds and controlled toolchain environments",
    "sources": [
      "sre-releases"
    ]
  },
  "EPSO-ICT1-100": {
    "section": "Untrusted pull requests and privileged runner/secret isolation",
    "sources": [
      "git-security"
    ]
  },
  "EPSO-ICT1-101": {
    "section": "Build once, promote identifiable tested release artefacts",
    "sources": [
      "sre-releases"
    ]
  },
  "EPSO-ICT1-102": {
    "section": "REL12: failure injection and resilience experiments",
    "sources": [
      "aws-reliability-pdf"
    ]
  },
  "EPSO-ICT1-103": {
    "section": "Release qualification and test gates",
    "sources": [
      "sre-testing"
    ]
  },
  "EPSO-ICT1-104": {
    "section": "Protect secrets and redact outputs; secret stores and scoped credentials",
    "sources": [
      "git-security"
    ]
  },
  "EPSO-ICT1-105": {
    "section": "Terraform state locking: mutually exclusive state modification",
    "sources": [
      "for-terraform-lock"
    ]
  },
  "EPSO-ICT1-106": {
    "section": "Detect drift between configuration, state and real infrastructure",
    "sources": [
      "openshift-terraform-drift"
    ]
  },
  "EPSO-ICT1-107": {
    "section": "Idempotent configuration management; CM-6 automated configuration checks",
    "sources": [
      "ansible-raw",
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-108": {
    "section": "Pin immutable dependency/action versions and review changes",
    "sources": [
      "git-security"
    ]
  },
  "EPSO-ICT1-109": {
    "section": "SLSA provenance: linking artefacts to source and build process",
    "sources": [
      "slsa"
    ]
  },
  "EPSO-ICT1-110": {
    "section": "Idempotent APIs and safe retries",
    "sources": [
      "aws-retry"
    ]
  },
  "EPSO-ICT1-111": {
    "section": "CM-3: review, test, approve and document configuration changes",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-112": {
    "section": "SI-7: software, firmware and information integrity",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-113": {
    "section": "RFC 8446: authenticated encryption and TLS confidentiality",
    "sources": [
      "tls"
    ]
  },
  "EPSO-ICT1-114": {
    "section": "RFC 5280 certification path validation and RFC 8446 peer authentication",
    "sources": [
      "certificates",
      "tls"
    ]
  },
  "EPSO-ICT1-115": {
    "section": "IA-2: multifactor authentication requires distinct factors",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-116": {
    "section": "AU-6 audit analysis/correlation; SI-4 monitoring",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-117": {
    "section": "SI-2 flaw remediation and RA-5 vulnerability prioritisation",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-118": {
    "section": "RA-5: privileged/authenticated vulnerability scanning",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-119": {
    "section": "IR-8: incident response plan, roles, responsibilities and procedures",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-120": {
    "section": "AU-8: timestamps and reliable correlation",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-121": {
    "section": "Zero Trust: verify explicitly, least privilege, assume breach",
    "sources": [
      "zero-trust"
    ]
  },
  "EPSO-ICT1-122": {
    "section": "AC-2 account revocation and AC-12 session termination",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-123": {
    "section": "CP-4 contingency testing; CP-9 restoration tests and CP-10 recovery",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-124": {
    "section": "CP-4: exercise plans, review results and initiate corrective actions",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-125": {
    "section": "SC-12 cryptographic key establishment and management",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-126": {
    "section": "Network Firewall: stateful intrusion detection and inline prevention",
    "sources": [
      "network-firewall"
    ]
  },
  "EPSO-ICT1-127": {
    "section": "Rate-based rule statements and request aggregation",
    "sources": [
      "api-rate"
    ]
  },
  "EPSO-ICT1-128": {
    "section": "AWS WAF: inspection and filtering of HTTP(S) requests",
    "sources": [
      "aws-waf"
    ]
  },
  "EPSO-ICT1-129": {
    "section": "AC-2 time-bound accounts, AC-6 least privilege, AU-12 audit generation",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-130": {
    "section": "CP-4 discussion: tabletop versus live contingency exercises",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-131": {
    "section": "Business continuity, disaster recovery and recovery objectives",
    "sources": [
      "aws-reliability-pdf",
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-132": {
    "section": "RA-2 security categorisation and protection by impact/sensitivity",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-133": {
    "section": "IA-2 authentication and IR-6 reporting suspected compromise",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-134": {
    "section": "AC-4 information flow enforcement and SI-4 monitoring for disclosure",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-135": {
    "section": "SC-7 boundary protection, deny by default/allow by exception",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-136": {
    "section": "Collect an investigation package; preserve investigation data before destructive response actions",
    "sources": [
      "volatile-forensics",
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-137": {
    "section": "IR-4 incident handling: containment, recovery and contingency coordination",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-138": {
    "section": "Recovery point objective versus recovery time objective",
    "sources": [
      "aws-reliability-pdf"
    ]
  },
  "EPSO-ICT1-139": {
    "section": "Requirements and architectural decisions, including non-functional requirements",
    "sources": [
      "pm2-full",
      "aws-adr-correct"
    ]
  },
  "EPSO-ICT1-140": {
    "section": "Business case and total costs across acquisition, support and transition",
    "sources": [
      "pm2-full",
      "aws-hpc"
    ]
  },
  "EPSO-ICT1-141": {
    "section": "CM-8 inventory and SA-22 unsupported system components",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-142": {
    "section": "Functional tests of upgraded workloads and their dependencies",
    "sources": [
      "saferdb"
    ]
  },
  "EPSO-ICT1-143": {
    "section": "Reversibility, recovery and persistent data during migrations",
    "sources": [
      "aws-reliability-pdf"
    ]
  },
  "EPSO-ICT1-144": {
    "section": "Decimal TB, Mbps and ideal transfer duration before overhead",
    "sources": [],
    "note": "12 × 10^12 bytes × 8 / (100 × 10^6 bits/s) = 960,000 seconds = 11.111… days. Protocol overhead, contention and cutover validation are excluded."
  },
  "EPSO-ICT1-145": {
    "section": "Deliverables Acceptance Management Plan and acceptance criteria",
    "sources": [
      "pm2-full"
    ]
  },
  "EPSO-ICT1-146": {
    "section": "REL07: monitor demand, forecast capacity and scale resources",
    "sources": [
      "aws-reliability-pdf"
    ]
  },
  "EPSO-ICT1-147": {
    "section": "CM-6 hardened configurations and SI-2 tested updates",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-148": {
    "section": "MP-6: media sanitisation commensurate with sensitivity",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-149": {
    "section": "CM-2: controlled baselines and configuration recovery",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-150": {
    "section": "SA-22: unsupported components; CM-8 lifecycle inventory",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-151": {
    "section": "OPS07: operational readiness, runbooks, playbooks and support plans",
    "sources": [
      "aws-ops-pdf"
    ]
  },
  "EPSO-ICT1-152": {
    "section": "OPS06: tested, staged and reversible changes",
    "sources": [
      "aws-ops-pdf"
    ]
  },
  "EPSO-ICT1-153": {
    "section": "REL06/REL07: resource telemetry and capacity trends",
    "sources": [
      "aws-reliability-pdf"
    ]
  },
  "EPSO-ICT1-154": {
    "section": "SA-22: risks and alternatives for unsupported components",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-155": {
    "section": "AC-6 least privilege and SA-3 development/production separation",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-156": {
    "section": "RA-5 and SI-2: exposure, vulnerability risk and remediation",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-157": {
    "section": "Recovery points, replication, data consistency and tested cutovers",
    "sources": [
      "aws-reliability-pdf"
    ]
  },
  "EPSO-ICT1-158": {
    "section": "ADR contents: context, decision, alternatives and consequences",
    "sources": [
      "aws-adr-correct"
    ]
  },
  "EPSO-ICT1-159": {
    "section": "Change scheduling and communicating planned service impact",
    "sources": [
      "itil-change"
    ]
  },
  "EPSO-ICT1-160": {
    "section": "OPS06/OPS07: post-deployment validation and operational health",
    "sources": [
      "aws-ops-pdf"
    ]
  },
  "EPSO-ICT1-161": {
    "section": "CM-8 component/version inventory and SA-22 support status",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-162": {
    "section": "Workload dependencies and controlled changes",
    "sources": [
      "aws-ops-pdf",
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-163": {
    "section": "PE-11 emergency power and CP-4 realistic recovery tests",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-164": {
    "section": "CM-9: configuration items and lifecycle change traceability",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-165": {
    "section": "AC-2 access removal, MP-6 disposal, CM-8 inventory and cloud lifecycle controls",
    "sources": [
      "nist-controls-json",
      "aws-ops-pdf"
    ]
  },
  "EPSO-ICT1-166": {
    "section": "Responsible AI: robustness, privacy, governance and human oversight",
    "sources": [
      "ai"
    ]
  },
  "EPSO-ICT1-167": {
    "section": "Confidential computing: attested hardware-based trusted execution environments",
    "sources": [
      "azure-confidential"
    ]
  },
  "EPSO-ICT1-168": {
    "section": "OpenTelemetry: vendor-neutral metrics, traces and logs",
    "sources": [
      "opentelemetry"
    ]
  },
  "EPSO-ICT1-169": {
    "section": "HPC/architecture performance efficiency: locality, latency and placement",
    "sources": [
      "aws-hpc"
    ]
  },
  "EPSO-ICT1-170": {
    "section": "Lambda execution environment lifecycle, initialisation and cold starts",
    "sources": [
      "aws-serverless"
    ]
  },
  "EPSO-ICT1-171": {
    "section": "OPS07: operational readiness and support before release",
    "sources": [
      "aws-ops-pdf"
    ]
  },
  "EPSO-ICT1-172": {
    "section": "Azure Digital Twins: digital models of real-world environments",
    "sources": [
      "digital-twin"
    ]
  },
  "EPSO-ICT1-173": {
    "section": "SA-22 unsupported components and SR-6 supplier/support risk",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-174": {
    "section": "Test migration and recovery dependencies before changing platforms",
    "sources": [
      "aws-reliability-pdf"
    ]
  },
  "EPSO-ICT1-175": {
    "section": "Monitoring signal quality and actionable alerts",
    "sources": [
      "sre-monitoring"
    ]
  },
  "EPSO-ICT1-176": {
    "section": "Service mesh: traffic, service identity, policy and observability",
    "sources": [
      "istio"
    ]
  },
  "EPSO-ICT1-177": {
    "section": "SA-9 external services, dependencies and portability/exit risk",
    "sources": [
      "nist-controls-json",
      "aws-reliability-pdf"
    ]
  },
  "EPSO-ICT1-178": {
    "section": "HPC sustainability: energy, compute efficiency and resource use",
    "sources": [
      "aws-hpc"
    ]
  },
  "EPSO-ICT1-179": {
    "section": "PUE measurement boundaries and the example PUE 2.0 = IT energy plus equal overhead",
    "sources": [
      "pue-google"
    ]
  },
  "EPSO-ICT1-180": {
    "section": "Containers, image/runtime dependencies and persistent volumes",
    "sources": [
      "k8s-images",
      "k8s-storage"
    ]
  },
  "EPSO-ICT1-181": {
    "section": "Hybrid networking, on-premises integration and cloud dependencies",
    "sources": [
      "aws-reliability-pdf"
    ]
  },
  "EPSO-ICT1-182": {
    "section": "Responsible AI: privacy, inaccurate outputs and human oversight",
    "sources": [
      "ai"
    ]
  },
  "EPSO-ICT1-183": {
    "section": "Platform engineering: developer experience and self-service foundations",
    "sources": [
      "platform-concept"
    ]
  },
  "EPSO-ICT1-184": {
    "section": "Business justification, measurable objectives and acceptance gates",
    "sources": [
      "pm2-full"
    ]
  },
  "EPSO-ICT1-185": {
    "section": "REL13: multi-region disaster recovery, replication and failover testing",
    "sources": [
      "aws-reliability-pdf"
    ]
  },
  "EPSO-ICT1-186": {
    "section": "SA-9 external service interfaces and standards-based interoperability",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-187": {
    "section": "Responsible AI: robustness, monitoring and human oversight",
    "sources": [
      "ai"
    ]
  },
  "EPSO-ICT1-188": {
    "section": "AC-6 access, CM-3 change control and AU-12 auditability apply to workflows",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-189": {
    "section": "Event-driven architecture: decoupled producers and consumers",
    "sources": [
      "event"
    ]
  },
  "EPSO-ICT1-190": {
    "section": "SA-9(5): processing, storage and service location restrictions",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-191": {
    "section": "Evidence-based business justification, alternatives and feasibility",
    "sources": [
      "pm2-full"
    ]
  },
  "EPSO-ICT1-192": {
    "section": "OPS governance, common mechanisms and consistent operational standards",
    "sources": [
      "aws-ops-pdf"
    ]
  },
  "EPSO-ICT1-193": {
    "section": "Portfolio composition, dependencies, sequencing and milestones",
    "sources": [
      "pm2-portfolio-pdf"
    ]
  },
  "EPSO-ICT1-194": {
    "section": "Risk management: likelihood, impact, owner and response in the Risk Log",
    "sources": [
      "pm2-full"
    ]
  },
  "EPSO-ICT1-195": {
    "section": "Portfolio dependencies and capacity coordination",
    "sources": [
      "pm2-portfolio-pdf"
    ]
  },
  "EPSO-ICT1-196": {
    "section": "CM-2 controlled current baselines and architectural decision context",
    "sources": [
      "nist-controls-json",
      "aws-adr-correct"
    ]
  },
  "EPSO-ICT1-197": {
    "section": "OPS02: business outcomes, technical ownership and responsibilities",
    "sources": [
      "aws-ops-pdf"
    ]
  },
  "EPSO-ICT1-198": {
    "section": "Workload telemetry and dependency relationships",
    "sources": [
      "aws-ops-pdf"
    ]
  },
  "EPSO-ICT1-199": {
    "section": "Decision Log: decisions, context, responsible roles and rationale",
    "sources": [
      "pm2-full"
    ]
  },
  "EPSO-ICT1-200": {
    "section": "Portfolio evaluation: value, risk, strategic alignment, cost and capacity",
    "sources": [
      "pm2-portfolio-pdf"
    ]
  },
  "EPSO-ICT1-201": {
    "section": "Acceptance management: deliverables and explicit acceptance criteria",
    "sources": [
      "pm2-full"
    ]
  },
  "EPSO-ICT1-202": {
    "section": "OPS07-BP03: runbooks for operational procedures",
    "sources": [
      "aws-ops-pdf"
    ]
  },
  "EPSO-ICT1-203": {
    "section": "CP-2: update contingency plans and dependencies after changes",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-204": {
    "section": "Responsibility Assignment Matrix and RASCI governance roles",
    "sources": [
      "pm2-full"
    ]
  },
  "EPSO-ICT1-205": {
    "section": "Architecturally significant decisions and design constraints",
    "sources": [
      "aws-adr-correct"
    ]
  },
  "EPSO-ICT1-206": {
    "section": "Portfolio capacity, resource allocation and scheduling",
    "sources": [
      "pm2-portfolio-pdf"
    ]
  },
  "EPSO-ICT1-207": {
    "section": "OPS02/OPS07: contacts, dependencies, support and recovery procedures",
    "sources": [
      "aws-ops-pdf"
    ]
  },
  "EPSO-ICT1-208": {
    "section": "CM-6: justify and approve deviations; review controlled configuration",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-209": {
    "section": "Service request management and clear service expectations",
    "sources": [
      "itil-service",
      "itil-sla"
    ]
  },
  "EPSO-ICT1-210": {
    "section": "PM² Risk Log: risk ownership and response accountability",
    "sources": [
      "pm2-full"
    ]
  },
  "EPSO-ICT1-211": {
    "section": "PM² Monitor and Control: baselines, actual costs, variances and EAC",
    "sources": [
      "pm2-full"
    ]
  },
  "EPSO-ICT1-212": {
    "section": "OPS11: prioritise improvements and technical debt",
    "sources": [
      "aws-ops-pdf"
    ]
  },
  "EPSO-ICT1-213": {
    "section": "Operating models: responsibilities, procedures, escalation and service boundaries",
    "sources": [
      "aws-ops-pdf"
    ]
  },
  "EPSO-ICT1-214": {
    "section": "Traces and spans: a request’s path through distributed services",
    "sources": [
      "otel-tracing"
    ]
  },
  "EPSO-ICT1-215": {
    "section": "CM-3 change impact analysis; CM-8 inventory and dependencies",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-216": {
    "section": "Portfolio realisation: outcomes and benefits, distinct from project outputs",
    "sources": [
      "pm2-portfolio-pdf"
    ]
  },
  "EPSO-ICT1-217": {
    "section": "AC-3 access enforcement; CM-9 protect configuration management plans; secret handling",
    "sources": [
      "nist-controls-json",
      "git-security"
    ]
  },
  "EPSO-ICT1-218": {
    "section": "OPS02: continuing service/workload ownership after project handover",
    "sources": [
      "aws-ops-pdf",
      "pm2-full"
    ]
  },
  "EPSO-ICT1-219": {
    "section": "CM-8 lifecycle inventory; dependencies and verified retirement",
    "sources": [
      "nist-controls-json",
      "aws-ops-pdf"
    ]
  },
  "EPSO-ICT1-220": {
    "section": "MPI specification: distributed-memory message-passing processes",
    "sources": [
      "mpi"
    ]
  },
  "EPSO-ICT1-221": {
    "section": "OpenMP parallel directives and shared-memory model",
    "sources": [
      "openmp-example",
      "openmp-memory"
    ]
  },
  "EPSO-ICT1-222": {
    "section": "Memory bandwidth bottlenecks and roofline arithmetic intensity",
    "sources": [
      "nvidia-guide",
      "nvidia-roofline"
    ]
  },
  "EPSO-ICT1-223": {
    "section": "CUDA best practices: data-parallel throughput workloads",
    "sources": [
      "nvidia-guide"
    ]
  },
  "EPSO-ICT1-224": {
    "section": "Strong scaling and Amdahl’s serial fraction",
    "sources": [
      "nvidia-guide"
    ]
  },
  "EPSO-ICT1-225": {
    "section": "Strong scaling/Amdahl and weak scaling/Gustafson definitions",
    "sources": [
      "nvidia-guide"
    ]
  },
  "EPSO-ICT1-226": {
    "section": "Strong scaling/Amdahl and weak scaling/Gustafson definitions",
    "sources": [
      "nvidia-guide"
    ]
  },
  "EPSO-ICT1-227": {
    "section": "Multifactor priority: fair-share usage and allocated shares",
    "sources": [
      "slurm-priority"
    ]
  },
  "EPSO-ICT1-228": {
    "section": "Lustre parallel filesystem: aggregate throughput and client concurrency",
    "sources": [
      "aws-filesystem"
    ]
  },
  "EPSO-ICT1-229": {
    "section": "Lustre performance: metadata IOPS and small-file operations",
    "sources": [
      "aws-filesystem"
    ]
  },
  "EPSO-ICT1-230": {
    "section": "HPC reliability: checkpoints and restartable workloads",
    "sources": [
      "aws-hpc"
    ]
  },
  "EPSO-ICT1-231": {
    "section": "MPI collective communication and HPC communication scaling",
    "sources": [
      "mpi",
      "aws-hpc"
    ]
  },
  "EPSO-ICT1-232": {
    "section": "CUDA memory behaviour and memory-limited performance",
    "sources": [
      "nvidia-guide"
    ]
  },
  "EPSO-ICT1-233": {
    "section": "EFA/HPC networking: latency, bandwidth, CPU overhead and scaling",
    "sources": [
      "aws-efa",
      "aws-hpc"
    ]
  },
  "EPSO-ICT1-234": {
    "section": "HPC profiling and per-task CPU/accounting statistics",
    "sources": [
      "aws-hpc",
      "slurm-accounting"
    ]
  },
  "EPSO-ICT1-235": {
    "section": "Application scaling, utilisation and scheduler allocations",
    "sources": [
      "nvidia-guide",
      "slurm-accounting"
    ]
  },
  "EPSO-ICT1-236": {
    "section": "CUDA hardware/software model: throughput versus latency-oriented CPUs",
    "sources": [
      "nvidia-guide"
    ]
  },
  "EPSO-ICT1-237": {
    "section": "OpenMP memory model: shared variables, synchronisation and data races",
    "sources": [
      "openmp-memory"
    ]
  },
  "EPSO-ICT1-238": {
    "section": "NUMA memory policies: node-local allocation and remote memory",
    "sources": [
      "numa"
    ]
  },
  "EPSO-ICT1-239": {
    "section": "Performance metrics: FLOPS and computation throughput",
    "sources": [
      "nvidia-guide",
      "nvidia-roofline"
    ]
  },
  "EPSO-ICT1-240": {
    "section": "Roofline: arithmetic intensity, compute ceilings and memory bandwidth",
    "sources": [
      "nvidia-roofline"
    ]
  },
  "EPSO-ICT1-241": {
    "section": "CUDA best practices: batching and minimising transfer/launch overhead",
    "sources": [
      "nvidia-guide"
    ]
  },
  "EPSO-ICT1-242": {
    "section": "Job arrays: related jobs with common descriptions and indexed tasks",
    "sources": [
      "slurm-arrays"
    ]
  },
  "EPSO-ICT1-243": {
    "section": "Reproducible HPC environments and recorded software/configuration",
    "sources": [
      "aws-hpc",
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-244": {
    "section": "Elastic Fabric Adapter: OS bypass and RDMA-capable low-overhead communication",
    "sources": [
      "aws-efa"
    ]
  },
  "EPSO-ICT1-245": {
    "section": "NERSC resource usage policy: login nodes are shared interactive resources",
    "sources": [
      "nersc-login"
    ]
  },
  "EPSO-ICT1-246": {
    "section": "sacct CPUTime/TotalCPU/AllocCPUS; sreport allocated and idle time",
    "sources": [
      "slurm-accounting",
      "slurm-report"
    ]
  },
  "EPSO-ICT1-247": {
    "section": "Shor’s algorithm: factorisation/discrete logarithm threat",
    "sources": [
      "ibm-quantum-think",
      "pqc-primer"
    ]
  },
  "EPSO-ICT1-248": {
    "section": "Grover’s search algorithm: quadratic query-complexity speed-up",
    "sources": [
      "microsoft-grover"
    ]
  },
  "EPSO-ICT1-249": {
    "section": "Module-Lattice algorithms: ML-KEM key generation and encapsulation/decapsulation",
    "sources": [
      "nist-acvp",
      "pqc-primer"
    ]
  },
  "EPSO-ICT1-250": {
    "section": "Module-Lattice algorithms: ML-DSA signature generation and verification",
    "sources": [
      "nist-acvp",
      "pqc-primer"
    ]
  },
  "EPSO-ICT1-251": {
    "section": "Digital authentication and signatures; TLS CertificateVerify",
    "sources": [
      "pqc-armor",
      "tls"
    ]
  },
  "EPSO-ICT1-252": {
    "section": "Algorithm agility, cryptographic dependencies and protocol interoperability",
    "sources": [
      "crypto-agility"
    ]
  },
  "EPSO-ICT1-253": {
    "section": "Harvest Now, Decrypt Later: collect, retain, decrypt in the future",
    "sources": [
      "pqc-armor"
    ]
  },
  "EPSO-ICT1-254": {
    "section": "RFC 9794: post-quantum/traditional hybrid key establishment",
    "sources": [
      "quantum-hybrid"
    ]
  },
  "EPSO-ICT1-255": {
    "section": "SC-12 key management; RFC 7696 algorithms, protocols and interoperability",
    "sources": [
      "nist-controls-json",
      "crypto-agility"
    ]
  },
  "EPSO-ICT1-256": {
    "section": "QKD hardware/physical communication versus quantum-resistant software algorithms",
    "sources": [
      "nsa-qkd"
    ]
  },
  "EPSO-ICT1-257": {
    "section": "QKD does not provide source authentication by itself",
    "sources": [
      "nsa-qkd"
    ]
  },
  "EPSO-ICT1-258": {
    "section": "Hybrid schemes and algorithm/protocol interoperability during transition",
    "sources": [
      "quantum-hybrid",
      "crypto-agility"
    ]
  },
  "EPSO-ICT1-259": {
    "section": "Qubits, basis states, superposition and measurement",
    "sources": [
      "microsoft-quantum"
    ]
  },
  "EPSO-ICT1-260": {
    "section": "Noisy physical qubits and quantum error correction",
    "sources": [
      "ibm-quantum-think"
    ]
  },
  "EPSO-ICT1-261": {
    "section": "Decoherence and interaction with the environment",
    "sources": [
      "ibm-quantum-think"
    ]
  },
  "EPSO-ICT1-262": {
    "section": "Algorithm transitions, implementation dependencies and supported component lifecycles",
    "sources": [
      "crypto-agility",
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-263": {
    "section": "RFC 8446 Appendix E.4: side-channel resistance is an implementation responsibility",
    "sources": [
      "tls"
    ]
  },
  "EPSO-ICT1-264": {
    "section": "RFC 9180: KEM shared secret encapsulation and decapsulation",
    "sources": [
      "kem"
    ]
  },
  "EPSO-ICT1-265": {
    "section": "RFC 7696: algorithm transitions, interoperability and risk of weak algorithms",
    "sources": [
      "crypto-agility",
      "pqc-armor"
    ]
  },
  "EPSO-ICT1-266": {
    "section": "RFC 5280 path validation and RFC 7696 interoperability during algorithm changes",
    "sources": [
      "certificates",
      "crypto-agility"
    ]
  },
  "EPSO-ICT1-267": {
    "section": "Quantum cryptographic threat depends on algorithms and capable hardware",
    "sources": [
      "pqc-primer",
      "microsoft-quantum"
    ]
  },
  "EPSO-ICT1-268": {
    "section": "RFC 4086: unpredictable randomness for security mechanisms",
    "sources": [
      "random"
    ]
  },
  "EPSO-ICT1-269": {
    "section": "RFC 7696: preserving interoperability during cryptographic changes",
    "sources": [
      "crypto-agility"
    ]
  },
  "EPSO-ICT1-270": {
    "section": "Harvest Now, Decrypt Later and decades-long confidentiality",
    "sources": [
      "pqc-armor"
    ]
  },
  "EPSO-ICT1-271": {
    "section": "RFC 7696: distinguish algorithm transition from cryptographic key management",
    "sources": [
      "crypto-agility"
    ]
  },
  "EPSO-ICT1-272": {
    "section": "Quantum annealing: optimisation and energy minimisation",
    "sources": [
      "dwave"
    ]
  },
  "EPSO-ICT1-273": {
    "section": "RFC 7696: algorithm selection and interoperability; NIST validation mechanisms",
    "sources": [
      "crypto-agility",
      "nist-acvp"
    ]
  },
  "EPSO-ICT1-274": {
    "section": "SLA targets, priorities, measurement and service-specific breaches",
    "sources": [
      "itil-sla"
    ]
  },
  "EPSO-ICT1-275": {
    "section": "SA-9 provider compliance with agreed security and privacy requirements",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-276": {
    "section": "Incident coordination, shared roles and communication",
    "sources": [
      "sre-incidents"
    ]
  },
  "EPSO-ICT1-277": {
    "section": "IR-8 response roles; external provider responsibilities and contacts",
    "sources": [
      "nist-controls-json",
      "sre-incidents"
    ]
  },
  "EPSO-ICT1-278": {
    "section": "SLA scope, clocks, exclusions and remedies must be agreed",
    "sources": [
      "itil-sla"
    ]
  },
  "EPSO-ICT1-279": {
    "section": "Support coverage, response-time commitments and measurement",
    "sources": [
      "itil-sla"
    ]
  },
  "EPSO-ICT1-280": {
    "section": "SR-6 supplier assessments and SA-9 ongoing oversight",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-281": {
    "section": "SR-6 supplier reviews and corrective action; learning from incident causes",
    "sources": [
      "nist-controls-json",
      "sre-postmortem"
    ]
  },
  "EPSO-ICT1-282": {
    "section": "CP-4: review exercise results and initiate corrective actions",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-283": {
    "section": "Choosing user-oriented service indicators instead of misleading proxy metrics",
    "sources": [
      "sre-slo",
      "itil-sla"
    ]
  },
  "EPSO-ICT1-284": {
    "section": "AC-2 named accounts, AC-6 least privilege, IA-2 MFA and AU-12 logs",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-285": {
    "section": "SA-9 external service lifecycle; access, data disposal and transition responsibilities",
    "sources": [
      "nist-controls-json",
      "pm2-full"
    ]
  },
  "EPSO-ICT1-286": {
    "section": "Cross-team operational commitments supporting end-to-end service objectives",
    "sources": [
      "aws-ops-pdf",
      "sre-slo"
    ]
  },
  "EPSO-ICT1-287": {
    "section": "SLA/SLI definitions, measurement data and boundaries",
    "sources": [
      "sre-slo",
      "itil-sla"
    ]
  },
  "EPSO-ICT1-288": {
    "section": "SR-3 and SR-6: supply-chain dependencies and concentration risks",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-289": {
    "section": "Incident communications: impact, status, roles and next update",
    "sources": [
      "sre-incidents"
    ]
  },
  "EPSO-ICT1-290": {
    "section": "PM² acceptance management and handover responsibilities",
    "sources": [
      "pm2-full"
    ]
  },
  "EPSO-ICT1-291": {
    "section": "SLA remedies and continuing operational risk management",
    "sources": [
      "itil-sla",
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-292": {
    "section": "OPS knowledge continuity and SR-6 supplier support risk",
    "sources": [
      "aws-ops-pdf",
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-293": {
    "section": "Measurable indicators, definitions and reporting windows",
    "sources": [
      "sre-slo",
      "pm2-full"
    ]
  },
  "EPSO-ICT1-294": {
    "section": "IR-8 response procedures and SA-9 contractual security requirements",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-295": {
    "section": "CM-3 approved changes and coordinated change scheduling",
    "sources": [
      "nist-controls-json",
      "itil-change"
    ]
  },
  "EPSO-ICT1-296": {
    "section": "OPS07 operational readiness and PM² acceptance criteria",
    "sources": [
      "aws-ops-pdf",
      "pm2-full"
    ]
  },
  "EPSO-ICT1-297": {
    "section": "SLA measurement clocks/exclusions and AU-8 timestamps",
    "sources": [
      "itil-sla",
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-298": {
    "section": "CP-4: identify gaps, take corrective action and exercise recovery",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-299": {
    "section": "SA-9 external services and SR-6 subordinate supplier risk",
    "sources": [
      "nist-controls-json"
    ]
  },
  "EPSO-ICT1-300": {
    "section": "Contingency/recovery planning, supplier dependencies and knowledge continuity",
    "sources": [
      "aws-reliability-pdf",
      "aws-ops-pdf",
      "nist-controls-json"
    ]
  }
};
const ictReviewedChecks = Object.fromEntries(
  Object.entries(ictQuestionReferences).map(([id, ref]) => [id, {
    reviewedAt: "2026-10-29",
    method: ref.note ? "calculation" : "technical-documentation",
    sources: ref.sources.map((key) => ({ ...ictSourceCatalog[key], section: ref.section })),
    note: ref.note || "Answer reviewed against the cited technical documentation and section. The scenario and choices are original practice material; the sources support the underlying principles, not an official EPSO answer key.",
  }]),
);

export const questionChecks = {
  ...epFunctioningChecks,
  ...epRulesChecks,
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
  ...ictReviewedChecks,
};

export const editorialNotes = {
};

// Editorially identified paraphrases of the same learning point. IDs are kept.
export const equivalentQuestions = [
  ["ep-044", "ep-087"],
  ["ep-048", "ep-102"],
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
    reviewedAt: checked ? checked.reviewedAt || reviewedAt : null,
    method: checked?.method,
    referenceEdition: checked?.referenceEdition,
    currentEditionVerified: checked?.currentEditionVerified,
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
