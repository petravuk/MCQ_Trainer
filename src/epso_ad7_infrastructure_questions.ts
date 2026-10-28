/* EPSO/AD/429/26 - Domain 1: ICT Infrastructure.
 * 300 original practice MCQs, not official EPSO questions.
 * Compatible with EpMcqStudyApp.jsx; answers are zero-based indices.
 */
export type EpsoInfrastructureQuestion = {
  id: string;
  category: string;
  topic: string;
  level: "easy" | "medium" | "hard";
  question: string;
  options: [string, string, string, string];
  answer: number;
  explanation: string;
};

export const EPSO_AD7_INFRASTRUCTURE_QUESTIONS: EpsoInfrastructureQuestion[] = [
  {
    "id": "EPSO-ICT1-001",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "hard",
    "question": "A Kubernetes service must remain available if one worker node fails. Which deployment approach best addresses this requirement?",
    "options": [
      "Run two replicas on the same worker with local storage",
      "Run multiple replicas on different workers with appropriate anti-affinity and readiness probes",
      "Increase the CPU limit of a single pod",
      "Use a single pod behind an ingress controller"
    ],
    "answer": 1,
    "explanation": "Replicas distributed across workers avoid a single-worker failure domain. Readiness probes stop traffic being sent to unready replicas."
  },
  {
    "id": "EPSO-ICT1-002",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "easy",
    "question": "Which storage protocol is most closely associated with block-level access over a TCP/IP network?",
    "options": [
      "NFS",
      "SMB",
      "iSCSI",
      "SFTP"
    ],
    "answer": 2,
    "explanation": "iSCSI transports SCSI block commands over IP. NFS and SMB provide file-level access."
  },
  {
    "id": "EPSO-ICT1-003",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "hard",
    "question": "An active-passive database cluster has synchronous replication between two sites. What is the principal availability trade-off when inter-site latency rises?",
    "options": [
      "Replication traffic no longer needs encryption",
      "Commit latency can increase because acknowledgement waits for the remote replica",
      "Writes automatically become eventually consistent",
      "Database backups become unnecessary"
    ],
    "answer": 1,
    "explanation": "Synchronous commit typically waits for a remote acknowledgement, increasing write latency and potentially reducing availability when the remote link fails."
  },
  {
    "id": "EPSO-ICT1-004",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "easy",
    "question": "A data-centre network uses software-defined networking. What is the core architectural principle?",
    "options": [
      "All network traffic must use a public cloud",
      "The control plane is logically separated from the forwarding plane",
      "Each switch must be configured manually",
      "Network segmentation is impossible"
    ],
    "answer": 1,
    "explanation": "SDN separates the network control function from packet forwarding, enabling centralised or programmable control."
  },
  {
    "id": "EPSO-ICT1-005",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "hard",
    "question": "A virtualised server has high CPU ready time despite moderate guest CPU utilisation. What is the most plausible explanation?",
    "options": [
      "The VM waits for physical CPU scheduling capacity",
      "The VM is running out of disk space",
      "DNS resolution has failed",
      "The guest clock is synchronised"
    ],
    "answer": 0,
    "explanation": "CPU ready time measures time a VM is ready to execute but must wait for host CPU scheduling; overcommitment or contention may be responsible."
  },
  {
    "id": "EPSO-ICT1-006",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "medium",
    "question": "Which approach most directly supports recovery from ransomware that has compromised production administrator credentials?",
    "options": [
      "Only maintain online backups writable by production administrators",
      "Maintain immutable or offline backups with separate administrative controls and test restoration",
      "Increase log retention without backups",
      "Disable access logs to reduce storage usage"
    ],
    "answer": 1,
    "explanation": "Immutable or isolated backups protect recovery copies from the compromised production security boundary, while restoration tests validate recoverability."
  },
  {
    "id": "EPSO-ICT1-007",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "medium",
    "question": "A recurring outage has been restored using a workaround, but its underlying cause is unknown. Which ITIL practice should drive investigation of the cause?",
    "options": [
      "Service request management",
      "Problem management",
      "Service catalogue management",
      "Knowledge management alone"
    ],
    "answer": 1,
    "explanation": "Problem management identifies and manages causes or potential causes of incidents; incident management focuses on restoring normal service."
  },
  {
    "id": "EPSO-ICT1-008",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "hard",
    "question": "An urgent security patch is needed to mitigate active exploitation in a production service. Which change approach is most appropriate?",
    "options": [
      "Bypass change assessment and documentation",
      "Use an emergency change procedure with appropriate expedited authorisation and retrospective review",
      "Wait for the next annual release window regardless of risk",
      "Classify it as a routine service request"
    ],
    "answer": 1,
    "explanation": "Emergency changes should follow a defined, proportionate assessment and authorisation path, with traceability and review."
  },
  {
    "id": "EPSO-ICT1-009",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "medium",
    "question": "A service availability SLA is 99.9% for a 30-day month. Approximately how much downtime is permitted?",
    "options": [
      "4.32 minutes",
      "43.2 minutes",
      "7.2 hours",
      "43.2 hours"
    ],
    "answer": 1,
    "explanation": "30 × 24 × 60 = 43,200 minutes. 0.1% of that is 43.2 minutes."
  },
  {
    "id": "EPSO-ICT1-010",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "hard",
    "question": "An organisation wants to detect incidents before users report them. Which combination best supports this objective?",
    "options": [
      "Monitoring, event correlation and actionable alert thresholds",
      "Annual user surveys only",
      "Change approvals without telemetry",
      "Backups without health checks"
    ],
    "answer": 0,
    "explanation": "Observability and event management detect abnormal conditions and trigger timely response; alert quality matters to avoid noise."
  },
  {
    "id": "EPSO-ICT1-011",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "medium",
    "question": "In a CI/CD pipeline, where should automated dependency vulnerability scanning normally be placed?",
    "options": [
      "Only after production deployment",
      "In the build and validation stages, with defined policies for handling findings",
      "Only during yearly audits",
      "Only on developers’ personal machines"
    ],
    "answer": 1,
    "explanation": "Scanning dependencies early in the pipeline provides rapid feedback and supports security gates before release."
  },
  {
    "id": "EPSO-ICT1-012",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "hard",
    "question": "A Terraform-managed resource has been changed manually in production. What is the safest first step before applying the next plan?",
    "options": [
      "Apply immediately without reviewing the plan",
      "Inspect drift and the proposed plan, then reconcile the desired state through controlled change",
      "Delete the state file to hide the change",
      "Disable all infrastructure logging"
    ],
    "answer": 1,
    "explanation": "State drift must be understood before applying changes so that automation does not unintentionally overwrite or destroy live resources."
  },
  {
    "id": "EPSO-ICT1-013",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "easy",
    "question": "What is the main benefit of idempotency in infrastructure automation?",
    "options": [
      "Running a playbook twice always doubles its changes",
      "Repeated execution converges on the same desired state without unintended additional changes",
      "It removes the need for access control",
      "It guarantees zero downtime for any deployment"
    ],
    "answer": 1,
    "explanation": "Idempotent operations can be repeated safely because they preserve the intended result once the desired state is reached."
  },
  {
    "id": "EPSO-ICT1-014",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "easy",
    "question": "An administrator is permitted to manage servers but not read payroll records. Which security principle is being applied?",
    "options": [
      "Least privilege",
      "Security through obscurity",
      "Implicit trust",
      "Open access by default"
    ],
    "answer": 0,
    "explanation": "Least privilege limits permissions to what is needed for assigned duties, reducing exposure and blast radius."
  },
  {
    "id": "EPSO-ICT1-015",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "medium",
    "question": "A service has a recovery time objective (RTO) of two hours and a recovery point objective (RPO) of 15 minutes. What does the RPO describe?",
    "options": [
      "The maximum acceptable duration of service restoration",
      "The maximum acceptable amount of lost data measured in time",
      "The minimum annual uptime",
      "The time required to rotate all passwords"
    ],
    "answer": 1,
    "explanation": "RPO defines the point in time to which data must be recovered, implying at most 15 minutes of acceptable data loss in this scenario."
  },
  {
    "id": "EPSO-ICT1-016",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "hard",
    "question": "Which control most directly reduces lateral movement after one workstation is compromised?",
    "options": [
      "Flat network access for all devices",
      "Network segmentation with identity-aware access policies",
      "Use of shared administrator accounts",
      "Disabling endpoint logging"
    ],
    "answer": 1,
    "explanation": "Segmentation and enforced access controls restrict how an attacker can move from a compromised endpoint to other resources."
  },
  {
    "id": "EPSO-ICT1-017",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "medium",
    "question": "Before decommissioning an end-of-life server that processes personal data, what should be verified?",
    "options": [
      "That the hardware is still under warranty",
      "That dependencies, retention obligations, secure data disposal and asset records have been addressed",
      "That no user has requested a new laptop",
      "That the server’s hostname is short"
    ],
    "answer": 1,
    "explanation": "Safe decommissioning requires dependency assessment, retention compliance, secure disposal and updated configuration/asset records."
  },
  {
    "id": "EPSO-ICT1-018",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "hard",
    "question": "Which approach best limits operational risk during a major infrastructure upgrade?",
    "options": [
      "Upgrade all critical environments at once without a rollback plan",
      "Use tested migration stages, acceptance criteria and a documented rollback path",
      "Turn off monitoring until the upgrade is finished",
      "Remove all configuration baselines"
    ],
    "answer": 1,
    "explanation": "Staged upgrades with validation and recovery planning reduce blast radius and provide evidence before wider deployment."
  },
  {
    "id": "EPSO-ICT1-019",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "hard",
    "question": "What is the primary purpose of a technology proof of concept before an enterprise-wide adoption decision?",
    "options": [
      "To replace procurement governance",
      "To validate feasibility and key assumptions against measurable criteria",
      "To guarantee full regulatory compliance",
      "To remove the need for operational support"
    ],
    "answer": 1,
    "explanation": "A proof of concept tests feasibility, integration and practical constraints. It does not by itself prove production readiness."
  },
  {
    "id": "EPSO-ICT1-020",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "medium",
    "question": "When assessing a new infrastructure platform, which criterion is most useful for avoiding supplier lock-in?",
    "options": [
      "Whether the dashboard has custom colours",
      "Standards-based interoperability and practical data/workload portability",
      "The size of the sales presentation",
      "Whether deployment requires only one supplier-specific tool"
    ],
    "answer": 1,
    "explanation": "Interoperability and portability reduce switching costs and improve future architectural options."
  },
  {
    "id": "EPSO-ICT1-021",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "medium",
    "question": "Which artefact best records the relationship between a business service and the underlying infrastructure components supporting it?",
    "options": [
      "A service-to-configuration-item dependency map",
      "A generic staff holiday calendar",
      "An unversioned presentation slide",
      "A procurement invoice alone"
    ],
    "answer": 0,
    "explanation": "A service dependency model, often maintained in a CMDB or service map, links business services with their supporting configuration items."
  },
  {
    "id": "EPSO-ICT1-022",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "hard",
    "question": "Two proposed infrastructure projects depend on the same storage migration. What should portfolio governance do first?",
    "options": [
      "Approve both without coordination",
      "Identify the dependency, sequence work and assess combined resource and risk impacts",
      "Delete the smaller project automatically",
      "Treat the dependency as irrelevant because projects have different sponsors"
    ],
    "answer": 1,
    "explanation": "Portfolio coordination makes cross-project dependencies visible and aligns scheduling, resources and shared risks."
  },
  {
    "id": "EPSO-ICT1-023",
    "category": "epso_ad7_infrastructure",
    "topic": "High-performance computing",
    "level": "hard",
    "question": "A parallel application spends most of its time exchanging data between compute nodes. Which improvement is most likely to help?",
    "options": [
      "Use an interconnect with lower latency and higher bandwidth",
      "Increase the colour depth of the login screen",
      "Disable performance profiling",
      "Move all processing to slower disks"
    ],
    "answer": 0,
    "explanation": "Communication-bound parallel workloads benefit from reduced inter-node latency and increased bandwidth."
  },
  {
    "id": "EPSO-ICT1-024",
    "category": "epso_ad7_infrastructure",
    "topic": "High-performance computing",
    "level": "easy",
    "question": "What is the role of a scheduler such as Slurm in an HPC cluster?",
    "options": [
      "Allocate compute resources and queue or dispatch jobs according to policy",
      "Encrypt every application file automatically",
      "Replace all parallel programming libraries",
      "Provide end-user email services"
    ],
    "answer": 0,
    "explanation": "HPC schedulers manage jobs, resource allocation and queueing across shared compute nodes."
  },
  {
    "id": "EPSO-ICT1-025",
    "category": "epso_ad7_infrastructure",
    "topic": "High-performance computing",
    "level": "hard",
    "question": "A workload accelerates on 4 nodes but shows little further improvement on 16. Which principle best explains this behaviour when serial work and coordination overhead remain significant?",
    "options": [
      "Amdahl’s law and parallel overheads",
      "Moore’s law alone",
      "The CAP theorem alone",
      "The OSI reference model"
    ],
    "answer": 0,
    "explanation": "Serial portions cap theoretical speed-up, while synchronisation and communication overhead may further reduce scaling efficiency."
  },
  {
    "id": "EPSO-ICT1-026",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "hard",
    "question": "Why is crypto-agility important in planning for post-quantum cryptography?",
    "options": [
      "It ensures algorithms never need replacing",
      "It enables cryptographic algorithms and keys to be changed with controlled impact as standards and threats evolve",
      "It removes all need for a public-key infrastructure",
      "It makes symmetric encryption obsolete"
    ],
    "answer": 1,
    "explanation": "Crypto-agility allows inventories, protocols and systems to transition algorithms without redesigning every dependent service."
  },
  {
    "id": "EPSO-ICT1-027",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "medium",
    "question": "Which public-key cryptographic problem is most directly threatened by a sufficiently capable fault-tolerant quantum computer running Shor’s algorithm?",
    "options": [
      "Integer factorisation underlying RSA",
      "Random bit generation by itself",
      "Hash table indexing",
      "Packet fragmentation"
    ],
    "answer": 0,
    "explanation": "Shor’s algorithm can efficiently solve integer factorisation and discrete logarithm problems on a sufficiently capable quantum computer."
  },
  {
    "id": "EPSO-ICT1-028",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "hard",
    "question": "An organisation is prioritising systems for migration to post-quantum cryptography. Which factor is most relevant?",
    "options": [
      "The age of the server rack alone",
      "Sensitivity and required confidentiality lifetime of protected information",
      "The number of icons in the interface",
      "Whether users prefer dark mode"
    ],
    "answer": 1,
    "explanation": "Long-lived sensitive information is particularly exposed to harvest-now-decrypt-later risks, making confidentiality lifetime important."
  },
  {
    "id": "EPSO-ICT1-029",
    "category": "epso_ad7_infrastructure",
    "topic": "Teams, suppliers and SLAs",
    "level": "medium",
    "question": "A supplier meets the monthly uptime target but repeatedly misses incident response times. What should the service manager do?",
    "options": [
      "Treat overall SLA compliance as proven by uptime alone",
      "Review each contractual service level and address response-time breaches with evidence and corrective actions",
      "Ignore the breaches if the supplier is inexpensive",
      "Remove incident timestamps from reports"
    ],
    "answer": 1,
    "explanation": "Different SLA measures must be evaluated separately; meeting availability targets does not excuse response-time non-compliance."
  },
  {
    "id": "EPSO-ICT1-030",
    "category": "epso_ad7_infrastructure",
    "topic": "Teams, suppliers and SLAs",
    "level": "hard",
    "question": "A critical incident involves several vendors, each claiming the failure is outside its scope. Which governance measure best improves resolution?",
    "options": [
      "Separate status updates with no overall owner",
      "A clearly assigned incident coordinator, shared escalation path and agreed responsibility boundaries",
      "Suspend all supplier reporting",
      "Wait until individual contracts expire"
    ],
    "answer": 1,
    "explanation": "Clear end-to-end ownership, escalation and interfaces across suppliers reduce delays and accountability gaps."
  },
  {
    "id": "EPSO-ICT1-031",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "easy",
    "question": "Clients resolving a dual-stack service hostname receive no IPv6 address. Which DNS record type should first be checked?",
    "options": [
      "MX record",
      "AAAA record",
      "PTR record",
      "SRV record"
    ],
    "answer": 1,
    "explanation": "AAAA records map hostnames to IPv6 addresses."
  },
  {
    "id": "EPSO-ICT1-032",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "easy",
    "question": "Which protocol normally exchanges routes between independent Internet autonomous systems?",
    "options": [
      "OSPF",
      "RIP",
      "STP",
      "BGP"
    ],
    "answer": 3,
    "explanation": "BGP is the inter-domain routing protocol used between autonomous systems."
  },
  {
    "id": "EPSO-ICT1-033",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "hard",
    "question": "For a 10.20.0.0/22 network, which is the usable address range?",
    "options": [
      "10.20.0.1 to 10.20.0.254",
      "10.20.0.1 to 10.20.7.254",
      "10.20.0.1 to 10.20.3.254",
      "10.20.0.0 to 10.20.3.255"
    ],
    "answer": 2,
    "explanation": "A /22 has 1024 addresses spanning four adjacent /24 blocks; network and broadcast addresses are excluded."
  },
  {
    "id": "EPSO-ICT1-034",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "medium",
    "question": "Which design removes a single power-supply failure from a critical server?",
    "options": [
      "Dual power supplies connected to independent power feeds",
      "One high-wattage supply on one circuit",
      "Two power supplies on the same power strip",
      "One power supply plus a UPS monitoring agent"
    ],
    "answer": 0,
    "explanation": "Independent supplies and feeds eliminate the single power-feed dependency."
  },
  {
    "id": "EPSO-ICT1-035",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "hard",
    "question": "A site has two WAN providers. Which architecture best reduces dependence on a single provider?",
    "options": [
      "Two circuits purchased through the same last-mile fibre",
      "One higher-bandwidth provider",
      "Diverse provider paths with tested failover",
      "Two logical VLANs on one link"
    ],
    "answer": 2,
    "explanation": "Diverse physical paths and validated routing failover address provider and last-mile failures."
  },
  {
    "id": "EPSO-ICT1-036",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "hard",
    "question": "A DNS resolver returns an old IP address after a service migration. Which factor most directly determines cache expiry?",
    "options": [
      "DNS TTL",
      "MTU",
      "TCP receive window",
      "BGP local preference"
    ],
    "answer": 0,
    "explanation": "Time to live controls how long a cached DNS record may remain valid."
  },
  {
    "id": "EPSO-ICT1-037",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "medium",
    "question": "Which load-balancing technique keeps a user's requests consistently mapped to a backend when required?",
    "options": [
      "DNSSEC",
      "Route summarisation",
      "Session persistence",
      "Port mirroring"
    ],
    "answer": 2,
    "explanation": "Session persistence maintains affinity between a client session and a selected backend."
  },
  {
    "id": "EPSO-ICT1-038",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "hard",
    "question": "A RAID 5 array of four equal disks loses one disk. Which statement is accurate?",
    "options": [
      "Data is immediately unrecoverable",
      "RAID 5 eliminates the need for backups",
      "Two additional disk failures are tolerated",
      "Data remains available but fault tolerance is exhausted until rebuild"
    ],
    "answer": 3,
    "explanation": "RAID 5 tolerates one disk failure; another failure before rebuilding may cause loss."
  },
  {
    "id": "EPSO-ICT1-039",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "hard",
    "question": "Which RAID level generally survives failure of any two disks in one array?",
    "options": [
      "RAID 1 with only two drives",
      "RAID 6",
      "RAID 0",
      "RAID 5"
    ],
    "answer": 1,
    "explanation": "RAID 6 uses dual distributed parity to tolerate two disk failures."
  },
  {
    "id": "EPSO-ICT1-040",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "medium",
    "question": "In a distributed system, what is the main purpose of a quorum?",
    "options": [
      "Reduce all storage needs to zero",
      "Remove the need for failure detection",
      "Prevent conflicting decisions by requiring sufficient participating replicas",
      "Encrypt messages between nodes"
    ],
    "answer": 2,
    "explanation": "Quorum voting ensures enough replicas participate in decisions to maintain consistency guarantees."
  },
  {
    "id": "EPSO-ICT1-041",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "hard",
    "question": "A cluster loses communication between its two sites. What mechanism best reduces split-brain risk?",
    "options": [
      "Give both sites unconditional write authority",
      "A witness or fencing mechanism with quorum rules",
      "Disable cluster logging",
      "Increase the DNS TTL"
    ],
    "answer": 1,
    "explanation": "Fencing and quorum arbitration prevent both isolated partitions from acting as the active writer."
  },
  {
    "id": "EPSO-ICT1-042",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "hard",
    "question": "Which traffic is most appropriately separated into a dedicated management network?",
    "options": [
      "Customer video streams",
      "Hypervisor management interfaces",
      "Public web requests",
      "Guest application API requests"
    ],
    "answer": 1,
    "explanation": "A dedicated management plane restricts access to privileged infrastructure interfaces."
  },
  {
    "id": "EPSO-ICT1-043",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "medium",
    "question": "What does an MTU mismatch most often cause for large network packets?",
    "options": [
      "An incorrect DNS MX preference",
      "A changed VLAN name",
      "Fragmentation or black-hole connectivity depending on path behaviour",
      "An expired certificate"
    ],
    "answer": 2,
    "explanation": "An MTU mismatch affects packet sizes and can break path-MTU discovery."
  },
  {
    "id": "EPSO-ICT1-044",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "hard",
    "question": "Which feature limits broadcast traffic between distinct enterprise subnets?",
    "options": [
      "More DHCP leases",
      "Layer 3 routing boundary",
      "Increasing switch port speed",
      "Longer Ethernet cables"
    ],
    "answer": 1,
    "explanation": "Routers separate broadcast domains; switches normally forward broadcasts within a VLAN."
  },
  {
    "id": "EPSO-ICT1-045",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "hard",
    "question": "A container image works locally but fails in production due to a missing package. What best improves repeatability?",
    "options": [
      "Using a mutable latest tag without pinning",
      "Manually installing the package on each host",
      "Disabling integration tests",
      "Version-controlled immutable image builds"
    ],
    "answer": 3,
    "explanation": "Immutable reproducible builds ensure the deployed image includes its dependencies."
  },
  {
    "id": "EPSO-ICT1-046",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "medium",
    "question": "What is the primary function of a Kubernetes readiness probe?",
    "options": [
      "Assign IP subnets",
      "Encrypt traffic between clusters",
      "Restart the host operating system",
      "Determine whether a pod should receive service traffic"
    ],
    "answer": 3,
    "explanation": "Readiness controls endpoint eligibility for traffic, unlike liveness checks that may trigger restarts."
  },
  {
    "id": "EPSO-ICT1-047",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "hard",
    "question": "Which topology minimises east-west data-centre network oversubscription at scale?",
    "options": [
      "A properly provisioned leaf-spine fabric",
      "A single unmanaged switch",
      "An isolated hub per server",
      "A daisy chain of access switches"
    ],
    "answer": 0,
    "explanation": "Leaf-spine topologies provide multiple equal-cost paths and predictable bisection bandwidth."
  },
  {
    "id": "EPSO-ICT1-048",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "hard",
    "question": "Which routing technique allows multiple equal-cost paths to be used?",
    "options": [
      "ECMP",
      "NAT64",
      "ARP inspection",
      "DHCP snooping"
    ],
    "answer": 0,
    "explanation": "Equal-cost multipath distributes eligible flows across routes of equal cost."
  },
  {
    "id": "EPSO-ICT1-049",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "medium",
    "question": "A storage snapshot is taken every 15 minutes. Why can it still be inadequate as the sole recovery control?",
    "options": [
      "Snapshots may share the same failure or compromise domain as the source",
      "Snapshots are always immutable offline copies",
      "Snapshots guarantee recovery after site destruction",
      "Snapshots prevent all application-level corruption"
    ],
    "answer": 0,
    "explanation": "Snapshots often depend on the original storage platform and require separate protected backup copies."
  },
  {
    "id": "EPSO-ICT1-050",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "hard",
    "question": "Which measurement best indicates storage performance under concurrent random I/O?",
    "options": [
      "CPU clock speed only",
      "DNS TTL",
      "Screen refresh rate",
      "IOPS and latency"
    ],
    "answer": 3,
    "explanation": "Random storage workloads are characterised by completed I/O operations and response latency."
  },
  {
    "id": "EPSO-ICT1-051",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "hard",
    "question": "For a database with strict transactional consistency, which storage consideration matters most?",
    "options": [
      "Client browser version alone",
      "Monitor colour calibration",
      "Number of DNS aliases",
      "Durable writes and predictable write latency"
    ],
    "answer": 3,
    "explanation": "Transaction durability and latency affect correctness and committed-write performance."
  },
  {
    "id": "EPSO-ICT1-052",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "easy",
    "question": "Which hypervisor model runs directly on host hardware?",
    "options": [
      "Application reverse proxy",
      "Type 1 hypervisor",
      "Browser sandbox",
      "Type 2 hosted hypervisor"
    ],
    "answer": 1,
    "explanation": "A type 1 hypervisor runs on the physical host rather than above a conventional host OS."
  },
  {
    "id": "EPSO-ICT1-053",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "hard",
    "question": "Which protection is most relevant for privileged hypervisor access?",
    "options": [
      "MFA and role-based administrative separation",
      "Open management ports to the Internet",
      "Permanent unrestricted guest access",
      "Shared root credentials"
    ],
    "answer": 0,
    "explanation": "Strong authentication and separation of administrative roles reduce virtualisation control-plane exposure."
  },
  {
    "id": "EPSO-ICT1-054",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "hard",
    "question": "What is the main purpose of a reverse proxy in front of web applications?",
    "options": [
      "Terminate and forward incoming client requests to backends",
      "Assign physical switch MAC addresses",
      "Replace the hypervisor scheduler",
      "Perform RAID parity rebuilds"
    ],
    "answer": 0,
    "explanation": "Reverse proxies route inbound application traffic and may terminate TLS or enforce policies."
  },
  {
    "id": "EPSO-ICT1-055",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "medium",
    "question": "An application uses long-lived WebSocket connections. Which load-balancer feature matters?",
    "options": [
      "Disk sector size",
      "ICMP redirect handling",
      "Short DNS TTL alone",
      "Support for connection upgrades and appropriate idle timeouts"
    ],
    "answer": 3,
    "explanation": "WebSocket upgrades and connection timeout behaviour must be supported for persistent connections."
  },
  {
    "id": "EPSO-ICT1-056",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "hard",
    "question": "Which metric most directly reveals VM memory pressure on the hypervisor?",
    "options": [
      "Number of browser tabs",
      "DNS query type",
      "Ballooning or swapping activity",
      "The VM display resolution"
    ],
    "answer": 2,
    "explanation": "Hypervisor ballooning and swapping indicate memory reclamation under resource pressure."
  },
  {
    "id": "EPSO-ICT1-057",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "hard",
    "question": "Which design improves resilience of an application's database connections during primary failover?",
    "options": [
      "Manual hostname editing by users",
      "One permanent TCP session without retries",
      "Hard-coded primary node IP only",
      "A stable service endpoint with reconnection and retry logic"
    ],
    "answer": 3,
    "explanation": "A stable endpoint plus reconnection behaviour enables recovery when database leadership changes."
  },
  {
    "id": "EPSO-ICT1-058",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "easy",
    "question": "Which ITIL practice restores service as quickly as possible following an unplanned interruption?",
    "options": [
      "Problem management",
      "Service catalogue management",
      "Portfolio management",
      "Incident management"
    ],
    "answer": 3,
    "explanation": "Incident management reduces the impact of incidents by restoring normal operation."
  },
  {
    "id": "EPSO-ICT1-059",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "hard",
    "question": "What distinguishes a known error from a generic problem record?",
    "options": [
      "Its cause has been analysed and a workaround may be documented",
      "It is always a closed service request",
      "It has no relation to incidents",
      "It refers only to software licences"
    ],
    "answer": 0,
    "explanation": "Known errors are problems analysed but not necessarily permanently resolved."
  },
  {
    "id": "EPSO-ICT1-060",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "hard",
    "question": "Which metric describes the average elapsed time to restore service after incidents?",
    "options": [
      "Mean time between changes",
      "Mean time to restore service",
      "Average purchase order value",
      "Number of configuration items"
    ],
    "answer": 1,
    "explanation": "MTTR measures average restoration duration across relevant incidents."
  },
  {
    "id": "EPSO-ICT1-061",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "medium",
    "question": "Which metric is most appropriate for monitoring service desk answer timeliness?",
    "options": [
      "Average server rack height",
      "Count of unused licences",
      "Total number of catalog items",
      "Percentage of contacts answered within a defined target"
    ],
    "answer": 3,
    "explanation": "Service desk responsiveness can be tracked against a defined response-time target."
  },
  {
    "id": "EPSO-ICT1-062",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "hard",
    "question": "A service request is mistakenly logged as an incident. What is the best initial correction?",
    "options": [
      "Mark it as a major incident",
      "Open a problem regardless of impact",
      "Delete its audit history",
      "Reclassify it using the agreed request fulfilment process"
    ],
    "answer": 3,
    "explanation": "Service requests and incidents have different purposes and workflows."
  },
  {
    "id": "EPSO-ICT1-063",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "easy",
    "question": "Which ITIL practice manages information about configuration items and their relationships?",
    "options": [
      "Service configuration management",
      "Capacity management alone",
      "Service financial management",
      "Relationship management alone"
    ],
    "answer": 0,
    "explanation": "Service configuration management maintains reliable information about CIs and dependencies."
  },
  {
    "id": "EPSO-ICT1-064",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "medium",
    "question": "A CMDB lists hundreds of retired servers as active. Which quality dimension is most directly affected?",
    "options": [
      "Accuracy",
      "Availability target",
      "Network throughput",
      "Encryption strength"
    ],
    "answer": 0,
    "explanation": "Incorrect operational states reduce CMDB accuracy."
  },
  {
    "id": "EPSO-ICT1-065",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "hard",
    "question": "A monitoring alert is triggered repeatedly by the same normal scheduled job. What should be improved?",
    "options": [
      "Network cable colour",
      "Service catalogue descriptions only",
      "Change freeze duration alone",
      "Event rules and alert thresholds"
    ],
    "answer": 3,
    "explanation": "Event management should reduce false-positive alert noise."
  },
  {
    "id": "EPSO-ICT1-066",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "hard",
    "question": "Which measure best demonstrates that a change had the intended outcome?",
    "options": [
      "Ticket title length",
      "Number of approvers without results",
      "Post-implementation review against success criteria",
      "Volume of approval emails"
    ],
    "answer": 2,
    "explanation": "A review compares outcomes, incidents and expected benefits with defined criteria."
  },
  {
    "id": "EPSO-ICT1-067",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "medium",
    "question": "What is the purpose of a change schedule?",
    "options": [
      "Replace all service SLAs",
      "Show planned changes and potential conflicts",
      "List only unresolved incidents",
      "Archive user training records"
    ],
    "answer": 1,
    "explanation": "Change schedules coordinate timing and expose collision risk."
  },
  {
    "id": "EPSO-ICT1-068",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "easy",
    "question": "In ITIL 4, what is a standard change?",
    "options": [
      "A change needing a new CAB approval each time",
      "Every change to a production database",
      "Any unauthorised emergency deployment",
      "A low-risk pre-authorised change following an established procedure"
    ],
    "answer": 3,
    "explanation": "Standard changes are pre-authorised and follow known established steps."
  },
  {
    "id": "EPSO-ICT1-069",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "easy",
    "question": "What is the purpose of the service desk as an ITIL practice?",
    "options": [
      "Replace all technical support teams",
      "Approve every enterprise investment",
      "Own every physical data-centre asset",
      "Capture demand for incident resolution and service requests"
    ],
    "answer": 3,
    "explanation": "The service desk is the entry point for users needing support and requests."
  },
  {
    "id": "EPSO-ICT1-070",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "medium",
    "question": "Which indicator is most relevant for measuring incident resolution effectiveness?",
    "options": [
      "Office supply spend",
      "Percentage of hardware painted black",
      "Incidents resolved within agreed target times",
      "Number of meeting rooms"
    ],
    "answer": 2,
    "explanation": "Target-based resolution performance measures service fulfilment outcomes."
  },
  {
    "id": "EPSO-ICT1-071",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "hard",
    "question": "An external supplier causes an SLA breach. Which agreement sets that supplier's contractual service commitments?",
    "options": [
      "Service catalogue entry",
      "Architectural diagram alone",
      "Underpinning contract",
      "Personal development plan"
    ],
    "answer": 2,
    "explanation": "Underpinning supplier contracts support commitments made in customer-facing SLAs."
  },
  {
    "id": "EPSO-ICT1-072",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "hard",
    "question": "Which agreement defines expectations between internal teams supporting a service?",
    "options": [
      "End-user licence agreement",
      "Non-disclosure agreement only",
      "Operational level agreement",
      "Employee work contract"
    ],
    "answer": 2,
    "explanation": "OLAs set operational commitments between internal service provider teams."
  },
  {
    "id": "EPSO-ICT1-073",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "medium",
    "question": "Why should major incidents have dedicated coordination?",
    "options": [
      "They eliminate the need for incident records",
      "They cannot impact multiple services",
      "They require accelerated cross-team decision-making and communication",
      "They never need technical investigation"
    ],
    "answer": 2,
    "explanation": "Major incident processes coordinate response under high impact and urgency."
  },
  {
    "id": "EPSO-ICT1-074",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "hard",
    "question": "What should a post-incident review prioritise?",
    "options": [
      "Root causes, contributing factors and actions to prevent recurrence",
      "Removing incident timestamps",
      "Identifying someone to blame regardless of evidence",
      "Closing all unrelated change records"
    ],
    "answer": 0,
    "explanation": "Effective reviews focus on learning and preventative improvements."
  },
  {
    "id": "EPSO-ICT1-075",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "hard",
    "question": "Which practice ensures users can find accurate instructions for recurring support issues?",
    "options": [
      "Knowledge management",
      "Physical asset tagging only",
      "Budget forecasting",
      "Procurement management alone"
    ],
    "answer": 0,
    "explanation": "Knowledge management maintains usable and validated information for service delivery."
  },
  {
    "id": "EPSO-ICT1-076",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "medium",
    "question": "A support article is obsolete after a migration. What governance action is appropriate?",
    "options": [
      "Remove all article permissions",
      "Keep it published indefinitely",
      "Change its author name only",
      "Review and update or retire the article"
    ],
    "answer": 3,
    "explanation": "Knowledge lifecycle governance prevents users following obsolete instructions."
  },
  {
    "id": "EPSO-ICT1-077",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "hard",
    "question": "What is the distinction between a service level indicator and an objective?",
    "options": [
      "The indicator is a measure; the objective is its target value",
      "Both always express monetary cost",
      "An indicator is only an internal ticket",
      "An objective is a configuration item"
    ],
    "answer": 0,
    "explanation": "SLIs measure behaviour while SLOs express expected performance thresholds."
  },
  {
    "id": "EPSO-ICT1-078",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "hard",
    "question": "A service reports 100% uptime but users cannot log in. What is wrong with the measurement?",
    "options": [
      "User authentication is unrelated to service availability",
      "All SLAs have been met automatically",
      "Uptime is always impossible to measure",
      "It does not represent the end-to-end user experience"
    ],
    "answer": 3,
    "explanation": "Technical component uptime may not reflect functional service availability."
  },
  {
    "id": "EPSO-ICT1-079",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "medium",
    "question": "Which review best identifies recurring demand suitable for self-service?",
    "options": [
      "Increase the number of ticket categories arbitrarily",
      "Analyse high-volume repeat service desk contacts",
      "Review badge colours",
      "Inspect only supplier invoices"
    ],
    "answer": 1,
    "explanation": "Frequent repeat requests can reveal opportunities for automation and self-service."
  },
  {
    "id": "EPSO-ICT1-080",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "hard",
    "question": "When a critical service changes ownership, what must be updated?",
    "options": [
      "Only the display name of the service",
      "Only the fiscal-year budget",
      "Service ownership, escalation and operational documentation",
      "Only a dashboard wallpaper"
    ],
    "answer": 2,
    "explanation": "Service ownership and contact information underpin accountability and escalation."
  },
  {
    "id": "EPSO-ICT1-081",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "hard",
    "question": "What is the main purpose of continual improvement registers?",
    "options": [
      "Record opportunities, priorities, owners and progress",
      "Replace the incident database",
      "Store only vendor marketing slides",
      "Automatically approve all changes"
    ],
    "answer": 0,
    "explanation": "Improvement registers make proposed and ongoing improvements traceable."
  },
  {
    "id": "EPSO-ICT1-082",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "medium",
    "question": "Which approach helps compare SLA results across months fairly?",
    "options": [
      "Change definitions monthly without disclosure",
      "Compare percentages without sample context",
      "Ignore maintenance exclusions selectively",
      "Use stable definitions, exclusions and measurement windows"
    ],
    "answer": 3,
    "explanation": "Consistent measurement rules enable meaningful trend comparisons."
  },
  {
    "id": "EPSO-ICT1-083",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "hard",
    "question": "An incident affects 2,000 users but has a low ticket count. What should determine its priority?",
    "options": [
      "Length of the incident description",
      "Impact and urgency under the agreed priority matrix",
      "Whether the requester is a developer",
      "Number of tickets alone"
    ],
    "answer": 1,
    "explanation": "Priority should follow defined impact and urgency criteria rather than raw ticket volume."
  },
  {
    "id": "EPSO-ICT1-084",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "hard",
    "question": "Which record should link a recurring incident pattern to investigation of its root cause?",
    "options": [
      "Problem record",
      "User survey response only",
      "Service request only",
      "Purchase order"
    ],
    "answer": 0,
    "explanation": "Problem records track underlying causes and related incidents."
  },
  {
    "id": "EPSO-ICT1-085",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "easy",
    "question": "What is the main benefit of storing infrastructure definitions in Git?",
    "options": [
      "Automatically reconciling running resources without a controller",
      "Preventing drift merely by committing configuration files",
      "Enforcing production permissions through commit history alone",
      "Versioned reviewable changes with an auditable history"
    ],
    "answer": 3,
    "explanation": "Version control provides diff, review, rollback and traceability for infrastructure definitions."
  },
  {
    "id": "EPSO-ICT1-086",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "easy",
    "question": "A pipeline builds an artefact twice from identical inputs but produces different binaries. What property is missing?",
    "options": [
      "Idempotent deployment",
      "Backward-compatible releases",
      "Deterministic test ordering",
      "Reproducible builds"
    ],
    "answer": 3,
    "explanation": "Reproducibility aims to generate identical build outputs from the same inputs."
  },
  {
    "id": "EPSO-ICT1-087",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "easy",
    "question": "What is a software bill of materials primarily used for?",
    "options": [
      "Recording deployed configuration items and their service relationships",
      "Describing service request and support commitments",
      "Scheduling release approval and deployment windows",
      "Inventorying software components and dependencies"
    ],
    "answer": 3,
    "explanation": "An SBOM identifies included components for vulnerability and supply-chain management."
  },
  {
    "id": "EPSO-ICT1-088",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "medium",
    "question": "Why should CI runners avoid long-lived production credentials?",
    "options": [
      "Credential compromise could grant persistent production access",
      "It removes the need for unit tests",
      "It improves DNS resolution",
      "It increases compilation speed"
    ],
    "answer": 0,
    "explanation": "Short-lived scoped credentials reduce the blast radius of a compromised runner."
  },
  {
    "id": "EPSO-ICT1-089",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "hard",
    "question": "What technique checks a container image against a trusted publisher?",
    "options": [
      "Comparing an image checksum obtained from the same unauthenticated download",
      "Signature verification",
      "Pinning a mutable image tag in a deployment file",
      "Scanning for known vulnerabilities without verifying provenance"
    ],
    "answer": 1,
    "explanation": "Image signatures help verify origin and integrity before deployment."
  },
  {
    "id": "EPSO-ICT1-090",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "easy",
    "question": "Which security test analyses application source without executing the program?",
    "options": [
      "Dynamic application security testing",
      "Interactive testing of a deployed application",
      "Software composition analysis of dependency versions",
      "Static application security testing"
    ],
    "answer": 3,
    "explanation": "SAST examines code or build artefacts statically for security weaknesses."
  },
  {
    "id": "EPSO-ICT1-091",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "easy",
    "question": "Which testing approach probes a running web application for exploitable behaviour?",
    "options": [
      "Static analysis of application source code",
      "Software composition analysis of third-party dependencies",
      "Dynamic application security testing",
      "Signature verification of the released application binary"
    ],
    "answer": 2,
    "explanation": "DAST tests the running application through its externally observable behaviour."
  },
  {
    "id": "EPSO-ICT1-092",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "hard",
    "question": "A developer commits a cloud access key to a repository. What should happen first?",
    "options": [
      "Increase the key expiration date",
      "Revoke or rotate the exposed key and assess use",
      "Hide the key in a later commit only",
      "Ignore it if the repository is private"
    ],
    "answer": 1,
    "explanation": "Exposed credentials must be invalidated because repository history may preserve them."
  },
  {
    "id": "EPSO-ICT1-093",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "hard",
    "question": "A release introduces elevated error rates after deployment. Which strategy can automatically stop rollout?",
    "options": [
      "A rolling deployment that checks only process startup",
      "Manual approval after deploying to every production instance",
      "A scheduled rollout without application-level health gates",
      "Canary deployment with health-based rollback"
    ],
    "answer": 3,
    "explanation": "Canary releases expose a small population first and use signals to halt unhealthy changes."
  },
  {
    "id": "EPSO-ICT1-094",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "medium",
    "question": "What is the principal benefit of blue-green deployment?",
    "options": [
      "Automatic reversal of incompatible database schema migrations",
      "Updating the existing production instances in batches",
      "Rapid switch between two separately prepared environments",
      "Gradually increasing traffic to a small production canary"
    ],
    "answer": 2,
    "explanation": "Blue-green environments enable traffic switchovers and fast rollback when compatible."
  },
  {
    "id": "EPSO-ICT1-095",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "hard",
    "question": "Why should database schema migrations be planned separately from application rollbacks?",
    "options": [
      "Schemas do not affect applications",
      "Schema changes may not be backward compatible",
      "Rollback can always reverse data loss",
      "Databases never change during deployment"
    ],
    "answer": 1,
    "explanation": "Irreversible schema/data transformations may prevent safe application rollback."
  },
  {
    "id": "EPSO-ICT1-096",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "hard",
    "question": "What does a policy-as-code tool primarily enforce?",
    "options": [
      "Payroll tax deductions",
      "Physical data-centre floor plans",
      "User interface colour choices",
      "Machine-checkable compliance rules in automated workflows"
    ],
    "answer": 3,
    "explanation": "Policy-as-code evaluates infrastructure and deployment changes against encoded requirements."
  },
  {
    "id": "EPSO-ICT1-097",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "medium",
    "question": "What is a primary advantage of a pull-based GitOps model?",
    "options": [
      "Cluster reconciles to a version-controlled declared state",
      "A CI job pushes changes once without continuous reconciliation",
      "Running configuration is copied back into Git as the desired state",
      "A human approval alone enforces the running cluster configuration"
    ],
    "answer": 0,
    "explanation": "GitOps controllers compare observed and declared state and reconcile differences."
  },
  {
    "id": "EPSO-ICT1-098",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "hard",
    "question": "Which kind of automated test verifies interactions between two deployed services?",
    "options": [
      "CPU microbenchmark only",
      "Licence count report",
      "Code formatting check",
      "Integration test"
    ],
    "answer": 3,
    "explanation": "Integration tests assess interfaces and behaviour across components."
  },
  {
    "id": "EPSO-ICT1-099",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "hard",
    "question": "A pipeline deployment stage passes on a developer laptop but fails in CI. Which improvement is most useful?",
    "options": [
      "Skip tests on CI",
      "Standardise toolchain versions and build environment",
      "Disable failure reporting",
      "Deploy manually without logs"
    ],
    "answer": 1,
    "explanation": "Consistent environments reduce configuration drift between developer and CI execution."
  },
  {
    "id": "EPSO-ICT1-100",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "medium",
    "question": "What is the main reason to isolate untrusted pull-request builds?",
    "options": [
      "Speed up all builds automatically",
      "Prevent execution of attacker-controlled code with privileged secrets",
      "Avoid keeping audit logs",
      "Reduce source code size"
    ],
    "answer": 1,
    "explanation": "Untrusted contributions must not inherit powerful credentials or access to deployment systems."
  },
  {
    "id": "EPSO-ICT1-101",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "hard",
    "question": "Why is a deployment artefact promoted unchanged across environments?",
    "options": [
      "To avoid storing checksums",
      "To preserve tested artefact identity",
      "To make vulnerability results irrelevant",
      "To force separate source compilation in production"
    ],
    "answer": 1,
    "explanation": "Promoting the same artefact ensures production receives what passed prior checks."
  },
  {
    "id": "EPSO-ICT1-102",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "hard",
    "question": "Which test deliberately injects failures to assess resilience?",
    "options": [
      "User acceptance questionnaire",
      "Static linting",
      "Snapshot retention test only",
      "Chaos engineering experiment"
    ],
    "answer": 3,
    "explanation": "Controlled fault injection reveals system behaviour under failure conditions."
  },
  {
    "id": "EPSO-ICT1-103",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "medium",
    "question": "What does a CI quality gate do?",
    "options": [
      "Replace disaster recovery",
      "Block progression when defined checks fail",
      "Guarantee business approval for all projects",
      "Assign physical rack units"
    ],
    "answer": 1,
    "explanation": "Quality gates enforce conditions such as tests, coverage or security findings before promotion."
  },
  {
    "id": "EPSO-ICT1-104",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "hard",
    "question": "What is the safest handling of secrets in IaC repositories?",
    "options": [
      "Plaintext passwords committed with source",
      "External secret management and redacted pipeline outputs",
      "One shared administrator token for all environments",
      "Credentials encoded only in base64"
    ],
    "answer": 1,
    "explanation": "Dedicated secret stores and controlled injection reduce accidental disclosure."
  },
  {
    "id": "EPSO-ICT1-105",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "hard",
    "question": "Why use a deployment lock when two automated pipelines target the same environment?",
    "options": [
      "Increase disk redundancy",
      "Prevent conflicting concurrent modifications",
      "Improve network throughput",
      "Disable change records"
    ],
    "answer": 1,
    "explanation": "Deployment locks serialise changes to shared environments."
  },
  {
    "id": "EPSO-ICT1-106",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "medium",
    "question": "What is a drift-detection job for?",
    "options": [
      "Detect changes in user screen brightness",
      "Replace security incident reporting",
      "Identify deviations between declared and running infrastructure",
      "Measure employee attendance"
    ],
    "answer": 2,
    "explanation": "Drift detection compares desired configuration with deployed resources."
  },
  {
    "id": "EPSO-ICT1-107",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "hard",
    "question": "Which method minimises configuration errors across many servers?",
    "options": [
      "Manual edits without recording",
      "Copying unreviewed shell history",
      "Declarative configuration with automated compliance checks",
      "Inconsistent local scripts"
    ],
    "answer": 2,
    "explanation": "Declarative management and checks keep hosts aligned to an approved baseline."
  },
  {
    "id": "EPSO-ICT1-108",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "hard",
    "question": "What is the main security concern of installing dependencies without pinned versions?",
    "options": [
      "Containers cannot connect to networks",
      "Application logs become encrypted",
      "Certificates automatically expire",
      "Unexpected or malicious upstream changes may be introduced"
    ],
    "answer": 3,
    "explanation": "Lockfiles and pinning improve repeatability and constrain supply-chain changes."
  },
  {
    "id": "EPSO-ICT1-109",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "medium",
    "question": "Which practice gives traceability from source commit to running production release?",
    "options": [
      "Unversioned artefact overwrites",
      "Shared anonymous access",
      "Disabling pipeline logging",
      "Release provenance and deployment metadata"
    ],
    "answer": 3,
    "explanation": "Provenance connects source, build, artefact and deployed environment."
  },
  {
    "id": "EPSO-ICT1-110",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "hard",
    "question": "An automation job repeats after a transient API timeout. Which design reduces duplicate actions?",
    "options": [
      "Unbounded immediate retries without identifiers",
      "Replacing HTTPS with HTTP",
      "Idempotent operation with retry backoff",
      "Disabling API responses"
    ],
    "answer": 2,
    "explanation": "Idempotency and backoff limit duplicate side effects and provider overload."
  },
  {
    "id": "EPSO-ICT1-111",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "hard",
    "question": "What is the primary reason for peer review of infrastructure changes?",
    "options": [
      "Detect errors and validate intent before merge",
      "Ensure every change is urgent",
      "Make all deployments manual",
      "Avoid recording the change author"
    ],
    "answer": 0,
    "explanation": "Peer review adds an independent check to versioned infrastructure modifications."
  },
  {
    "id": "EPSO-ICT1-112",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "easy",
    "question": "Which security property ensures data is not altered without detection?",
    "options": [
      "Confidentiality",
      "Integrity",
      "Availability",
      "Non-repudiation alone"
    ],
    "answer": 1,
    "explanation": "Integrity controls detect or prevent unauthorised changes to information."
  },
  {
    "id": "EPSO-ICT1-113",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "hard",
    "question": "Which cryptographic mechanism best protects data in transit against eavesdropping?",
    "options": [
      "Encrypting database volumes at rest",
      "Properly validated TLS",
      "Encoding request bodies with Base64",
      "Applying an integrity-only MAC without encrypting the payload"
    ],
    "answer": 1,
    "explanation": "TLS authenticates endpoints and protects transport confidentiality and integrity."
  },
  {
    "id": "EPSO-ICT1-114",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "hard",
    "question": "A certificate is valid by date but issued by an untrusted CA. What should a client do?",
    "options": [
      "Reject the untrusted certificate chain",
      "Disable hostname verification",
      "Accept it only for administrators",
      "Accept it because the date is valid"
    ],
    "answer": 0,
    "explanation": "Trust requires a valid chain to an accepted trust anchor and other certificate checks."
  },
  {
    "id": "EPSO-ICT1-115",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "easy",
    "question": "What is the purpose of MFA for privileged access?",
    "options": [
      "Requiring two different passwords for the same account",
      "Repeating a password check on every privileged screen",
      "Using several accounts protected by the same single factor",
      "Require independent authentication factors"
    ],
    "answer": 3,
    "explanation": "MFA makes credential-only compromise less likely to enable privileged access."
  },
  {
    "id": "EPSO-ICT1-116",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "hard",
    "question": "What does a SIEM principally provide?",
    "options": [
      "Automatic physical repairs of storage",
      "Centralised security event collection, correlation and investigation",
      "Replacement of all firewalls",
      "Guaranteed removal of malware"
    ],
    "answer": 1,
    "explanation": "SIEM supports detection and investigation by correlating security telemetry."
  },
  {
    "id": "EPSO-ICT1-117",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "hard",
    "question": "Which practice reduces the time attackers have to exploit known vulnerabilities?",
    "options": [
      "Risk-based vulnerability remediation with deadlines",
      "Hiding asset inventories",
      "Deferring all patching indefinitely",
      "Ignoring externally exposed systems"
    ],
    "answer": 0,
    "explanation": "Timely prioritised patching reduces known exploitable exposure."
  },
  {
    "id": "EPSO-ICT1-118",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "medium",
    "question": "What differentiates an authenticated vulnerability scan?",
    "options": [
      "It cannot evaluate missing patches",
      "It requires no permission",
      "It uses authorised credentials to inspect internal system state",
      "It always scans only public DNS"
    ],
    "answer": 2,
    "explanation": "Authenticated scans can inspect installed packages and configurations more deeply."
  },
  {
    "id": "EPSO-ICT1-119",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "hard",
    "question": "What does a security incident playbook provide?",
    "options": [
      "Defined response steps, roles and decision points",
      "A substitute for evidence preservation",
      "A guaranteed answer for every attack",
      "Unrestricted access for all responders"
    ],
    "answer": 0,
    "explanation": "Playbooks standardise actions and escalation under pressure."
  },
  {
    "id": "EPSO-ICT1-120",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "hard",
    "question": "Why maintain synchronised timestamps in security logs?",
    "options": [
      "Enable reliable cross-system correlation and timelines",
      "Replace audit trails",
      "Reduce the number of security events",
      "Prevent malware execution by itself"
    ],
    "answer": 0,
    "explanation": "Consistent timestamps are essential for reconstructing incident sequences."
  },
  {
    "id": "EPSO-ICT1-121",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "medium",
    "question": "What is a key objective of zero-trust architecture?",
    "options": [
      "Trust all subsequent requests once a VPN session is established",
      "Treat the office subnet as sufficient evidence of user authorisation",
      "Explicit verification of access regardless of network location",
      "Grant access based only on a device inventory record"
    ],
    "answer": 2,
    "explanation": "Zero trust does not assume the internal network is inherently trusted."
  },
  {
    "id": "EPSO-ICT1-122",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "hard",
    "question": "Which measure helps contain a compromised privileged account?",
    "options": [
      "Keep active tokens indefinitely",
      "Increase account privileges",
      "Rapid credential revocation and session termination",
      "Disable all MFA controls"
    ],
    "answer": 2,
    "explanation": "Revoking credentials and sessions limits continued attacker access."
  },
  {
    "id": "EPSO-ICT1-123",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "hard",
    "question": "Which backup test best validates actual disaster recovery?",
    "options": [
      "Validate checksums of backup files without starting the service",
      "Restore production-representative data and verify service operation",
      "Review successful backup-job reports without performing a restore",
      "Verify that backup retention and storage quotas match policy"
    ],
    "answer": 1,
    "explanation": "Recovery tests establish that backups can actually support service restoration."
  },
  {
    "id": "EPSO-ICT1-124",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "medium",
    "question": "A disaster recovery plan has never been exercised. What is the chief risk?",
    "options": [
      "Assumptions about recovery timing and dependencies remain unverified",
      "Recovery will always be faster",
      "SLA penalties are impossible",
      "Data integrity is automatically guaranteed"
    ],
    "answer": 0,
    "explanation": "Exercises reveal procedural and technical gaps in documented recovery assumptions."
  },
  {
    "id": "EPSO-ICT1-125",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "hard",
    "question": "Which method best protects encryption keys used for sensitive systems?",
    "options": [
      "Managed key storage with controlled access and rotation",
      "Embedding keys in public source repositories",
      "Including keys in application logs",
      "Using the same hard-coded key indefinitely"
    ],
    "answer": 0,
    "explanation": "Dedicated key management restricts access and supports lifecycle controls."
  },
  {
    "id": "EPSO-ICT1-126",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "hard",
    "question": "What is the key distinction between an IDS and an IPS?",
    "options": [
      "Both are backup systems",
      "An IPS operates only on physical disk drives",
      "An IPS can block matching traffic inline, while an IDS primarily detects and alerts",
      "An IDS always encrypts traffic"
    ],
    "answer": 2,
    "explanation": "Intrusion prevention may actively enforce blocking decisions; detection primarily observes."
  },
  {
    "id": "EPSO-ICT1-127",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "medium",
    "question": "Which control is most appropriate for protecting a public API from excessive requests?",
    "options": [
      "Changing DNS record names",
      "Increasing database backup frequency",
      "Rate limiting and abuse controls",
      "Disabling TLS"
    ],
    "answer": 2,
    "explanation": "Rate limits constrain abusive request volumes and protect service capacity."
  },
  {
    "id": "EPSO-ICT1-128",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "hard",
    "question": "What is the main function of a web application firewall?",
    "options": [
      "Replace secure application coding",
      "Prevent all credential theft automatically",
      "Provide hardware RAID",
      "Filter suspicious application-layer HTTP traffic"
    ],
    "answer": 3,
    "explanation": "WAFs inspect application traffic against defined attack patterns and policies."
  },
  {
    "id": "EPSO-ICT1-129",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "hard",
    "question": "A supplier requires access to a production environment for two days. What is the best access model?",
    "options": [
      "Time-bound least-privilege access with logging",
      "Unrestricted public management access",
      "Anonymous access through a common proxy",
      "A permanent shared root account"
    ],
    "answer": 0,
    "explanation": "Temporary scoped accounts reduce exposure and provide traceability."
  },
  {
    "id": "EPSO-ICT1-130",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "medium",
    "question": "Which exercise is primarily used to discuss incident response roles without touching production?",
    "options": [
      "Unannounced destructive failover",
      "Production malware deployment",
      "Tabletop exercise",
      "Live database corruption test"
    ],
    "answer": 2,
    "explanation": "Tabletop exercises validate decisions, roles and escalation through simulated scenarios."
  },
  {
    "id": "EPSO-ICT1-131",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "hard",
    "question": "What is the difference between a business continuity plan and a DR plan?",
    "options": [
      "Both only define firewall rules",
      "BCP is limited to backup software",
      "DR only deals with office travel",
      "BCP covers critical business operations; DR focuses on restoring supporting technology"
    ],
    "answer": 3,
    "explanation": "BCP addresses continued business activity, while DR restores technology capabilities."
  },
  {
    "id": "EPSO-ICT1-132",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "hard",
    "question": "Why classify information before defining controls?",
    "options": [
      "Protection can be matched to sensitivity and impact",
      "Classification eliminates the need for access reviews",
      "It removes all compliance obligations",
      "Every data set then becomes public"
    ],
    "answer": 0,
    "explanation": "Classification supports risk-proportionate handling and access requirements."
  },
  {
    "id": "EPSO-ICT1-133",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "medium",
    "question": "An employee receives an unexpected MFA push after no login attempt. What should they do?",
    "options": [
      "Disable all account alerts",
      "Approve to clear the notification",
      "Deny the request and report suspected account compromise",
      "Share their password with support"
    ],
    "answer": 2,
    "explanation": "Unexpected prompts can indicate stolen credentials or MFA fatigue attacks."
  },
  {
    "id": "EPSO-ICT1-134",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "hard",
    "question": "Which control helps prevent accidental disclosure of confidential files by email?",
    "options": [
      "Data loss prevention rules with classification-aware checks",
      "Increasing mailbox quotas",
      "Disabling attachment scanning",
      "Making all files public"
    ],
    "answer": 0,
    "explanation": "DLP checks outbound data against defined protection policies."
  },
  {
    "id": "EPSO-ICT1-135",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "hard",
    "question": "What is the security risk of an overly broad wildcard firewall rule?",
    "options": [
      "Unnecessary services become reachable across trust boundaries",
      "The hypervisor stops scheduling CPUs",
      "DNS resolution becomes slower by definition",
      "Backup retention becomes shorter"
    ],
    "answer": 0,
    "explanation": "Overly broad rules increase exposure and potential lateral movement."
  },
  {
    "id": "EPSO-ICT1-136",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "medium",
    "question": "What should an incident responder prioritise when collecting volatile evidence?",
    "options": [
      "Delete logs to save disk space",
      "Reboot all machines immediately without recording state",
      "Start rebuilding before any evidence is captured",
      "Preserve relevant memory and live-state information before it disappears"
    ],
    "answer": 3,
    "explanation": "Volatile evidence can be lost on shutdown or reboot and requires controlled collection."
  },
  {
    "id": "EPSO-ICT1-137",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "hard",
    "question": "A production system is infected but supplies a critical public service. Which decision should be based on risk assessment?",
    "options": [
      "Containment strategy balancing spread risk against service impact",
      "Always erase every disk immediately",
      "Always leave it connected indefinitely",
      "Never inform incident coordination"
    ],
    "answer": 0,
    "explanation": "Containment must consider threat propagation, operational impact and recovery options."
  },
  {
    "id": "EPSO-ICT1-138",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "easy",
    "question": "Which metric most directly expresses how much data loss a service can tolerate?",
    "options": [
      "Recovery point objective",
      "Mean time between failures",
      "Mean time to detect",
      "Recovery time objective"
    ],
    "answer": 0,
    "explanation": "RPO defines the acceptable point in time to which data can be recovered."
  },
  {
    "id": "EPSO-ICT1-139",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "medium",
    "question": "Which phase should establish non-functional requirements such as availability and latency?",
    "options": [
      "Architecture and requirements definition",
      "Invoice archiving",
      "Post-retirement review only",
      "Equipment disposal only"
    ],
    "answer": 0,
    "explanation": "Non-functional requirements should guide the solution before procurement and implementation."
  },
  {
    "id": "EPSO-ICT1-140",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "hard",
    "question": "What should a hardware refresh business case consider beyond purchase price?",
    "options": [
      "Only the initial supplier discount",
      "The model number alone",
      "Total cost of ownership including maintenance, energy and migration",
      "Only the amount of packaging"
    ],
    "answer": 2,
    "explanation": "TCO includes ongoing operation and transition costs."
  },
  {
    "id": "EPSO-ICT1-141",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "hard",
    "question": "Why maintain a supported operating-system inventory?",
    "options": [
      "Avoid all vulnerability assessment",
      "Remove the need for asset owners",
      "Identify end-of-support exposure and prioritise upgrades",
      "Guarantee licence compliance automatically"
    ],
    "answer": 2,
    "explanation": "Inventory supports planning for products that no longer receive fixes."
  },
  {
    "id": "EPSO-ICT1-142",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "medium",
    "question": "Before upgrading a critical database, which compatibility test is essential?",
    "options": [
      "User badge colour",
      "Network rack numbering",
      "Application queries, drivers and schema compatibility",
      "Office printer toner usage"
    ],
    "answer": 2,
    "explanation": "Database changes can affect clients, schema and application behaviour."
  },
  {
    "id": "EPSO-ICT1-143",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "hard",
    "question": "When is a rollback plan inadequate for a major migration?",
    "options": [
      "When backup restoration was tested",
      "When it is written in a runbook",
      "When data is irreversibly transformed without a restoration strategy",
      "When it includes decision criteria"
    ],
    "answer": 2,
    "explanation": "Rollback requires a feasible path to restore the prior service state and data."
  },
  {
    "id": "EPSO-ICT1-144",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "hard",
    "question": "A migration requires transferring 12 TB over a 100 Mbps link. What must the schedule account for?",
    "options": [
      "Only number of VMs",
      "Only power supply ratings",
      "Only the DNS zone serial",
      "Transfer time, protocol overhead and competing traffic"
    ],
    "answer": 3,
    "explanation": "Network throughput limits practical migration windows."
  },
  {
    "id": "EPSO-ICT1-145",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "medium",
    "question": "Why set explicit acceptance criteria for an infrastructure project?",
    "options": [
      "Define objectively what must work before handover",
      "Remove stakeholder involvement",
      "Replace all operational monitoring",
      "Avoid technical documentation"
    ],
    "answer": 0,
    "explanation": "Acceptance criteria provide measurable evidence of completion."
  },
  {
    "id": "EPSO-ICT1-146",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "hard",
    "question": "What is the principal purpose of capacity forecasting?",
    "options": [
      "Guarantee no future demand spikes",
      "Predict demand and plan resources ahead of saturation",
      "Automatically reduce system load to zero",
      "Replace financial planning"
    ],
    "answer": 1,
    "explanation": "Forecasting aligns resource additions with expected workload trends."
  },
  {
    "id": "EPSO-ICT1-147",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "hard",
    "question": "Which action should accompany an operating-system version upgrade?",
    "options": [
      "Grant all local users administrator access",
      "Update security baselines and verify hardening",
      "Disable endpoint protection permanently",
      "Delete configuration history"
    ],
    "answer": 1,
    "explanation": "Baseline validation ensures the upgraded platform retains required controls."
  },
  {
    "id": "EPSO-ICT1-148",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "medium",
    "question": "What is the correct handling of decommissioned disks containing confidential information?",
    "options": [
      "Delete the files and empty the recycle bin",
      "Verified sanitisation or destruction to approved standards",
      "Remove the filesystem partition table without sanitising the media",
      "Disable the former owner's operating-system account"
    ],
    "answer": 1,
    "explanation": "Disposal must make confidential data unrecoverable at the required assurance level."
  },
  {
    "id": "EPSO-ICT1-149",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "hard",
    "question": "Why keep a configuration baseline for critical network devices?",
    "options": [
      "Make all network changes automatic",
      "Detect unauthorised drift and support recovery",
      "Eliminate need for firmware updates",
      "Increase rack ventilation"
    ],
    "answer": 1,
    "explanation": "Baselines provide a reference for integrity and restoration."
  },
  {
    "id": "EPSO-ICT1-150",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "hard",
    "question": "Which lifecycle process should track supplier end-of-support notifications?",
    "options": [
      "Travel authorisation",
      "User interface theming",
      "Payroll administration",
      "Technology lifecycle and obsolescence management"
    ],
    "answer": 3,
    "explanation": "Obsolescence tracking enables planned replacement before support ends."
  },
  {
    "id": "EPSO-ICT1-151",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "medium",
    "question": "What should a production handover include?",
    "options": [
      "Only source code repository name",
      "Only the project logo",
      "Only the purchase invoice",
      "Runbooks, monitoring, ownership, support procedures and known risks"
    ],
    "answer": 3,
    "explanation": "Operations need documented procedures and accountability to support the service."
  },
  {
    "id": "EPSO-ICT1-152",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "hard",
    "question": "Why schedule a pilot before fleet-wide workstation deployment?",
    "options": [
      "Disable central management",
      "Validate compatibility and operational impact on a limited group",
      "Guarantee all future upgrades are risk-free",
      "Avoid collecting user feedback"
    ],
    "answer": 1,
    "explanation": "Pilots expose faults before widespread rollout."
  },
  {
    "id": "EPSO-ICT1-153",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "hard",
    "question": "Which metric best measures server capacity utilisation trends?",
    "options": [
      "Number of service catalogue categories",
      "CPU, memory, storage and network usage over time",
      "User display brightness",
      "Office seating occupancy"
    ],
    "answer": 1,
    "explanation": "Capacity requires resource-demand trend measurements."
  },
  {
    "id": "EPSO-ICT1-154",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "medium",
    "question": "A storage supplier ends firmware support next quarter. Which risk should be evaluated first?",
    "options": [
      "Email signature format",
      "Security and operational supportability of the affected systems",
      "Number of desk phones",
      "Office heating costs alone"
    ],
    "answer": 1,
    "explanation": "Unsupported firmware creates security and maintenance constraints."
  },
  {
    "id": "EPSO-ICT1-155",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "hard",
    "question": "Why should test and production environments have separate credentials?",
    "options": [
      "Remove need for approvals",
      "Increase duplicated source code",
      "Make DNS less reliable",
      "Prevent privilege spillover and reduce cross-environment compromise"
    ],
    "answer": 3,
    "explanation": "Environment separation limits lateral movement and accidental production access."
  },
  {
    "id": "EPSO-ICT1-156",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "hard",
    "question": "Which factor should drive patch deployment priority?",
    "options": [
      "Exploitability, exposure, business criticality and compensating controls",
      "Rack location alone",
      "Employee seniority",
      "Alphabetical server name order"
    ],
    "answer": 0,
    "explanation": "Risk-based prioritisation targets the greatest probable impact."
  },
  {
    "id": "EPSO-ICT1-157",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "medium",
    "question": "What is a critical concern when migrating a stateful application between cloud providers?",
    "options": [
      "Theme colour of the console",
      "Number of meeting invites",
      "Consistency and cutover of persistent data",
      "Age of user browsers only"
    ],
    "answer": 2,
    "explanation": "Stateful migrations require data integrity, synchronisation and cutover planning."
  },
  {
    "id": "EPSO-ICT1-158",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "easy",
    "question": "Which document records why an architectural option was chosen over alternatives?",
    "options": [
      "Purchasing receipt only",
      "User leave application",
      "Architecture decision record",
      "Daily helpdesk ticket"
    ],
    "answer": 2,
    "explanation": "ADRs capture rationale, context and consequences of design choices."
  },
  {
    "id": "EPSO-ICT1-159",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "hard",
    "question": "Why define maintenance windows for infrastructure services?",
    "options": [
      "Eliminate all need for backups",
      "Avoid stakeholder notification",
      "Reduce database table size",
      "Coordinate disruption and communicate availability impacts"
    ],
    "answer": 3,
    "explanation": "Maintenance windows manage customer expectations and operational risk."
  },
  {
    "id": "EPSO-ICT1-160",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "medium",
    "question": "Which practice validates the health of a new service after cutover?",
    "options": [
      "Archiving the deployment ticket immediately",
      "Post-cutover smoke tests and monitoring against baselines",
      "Disabling all alerts",
      "Changing hostnames randomly"
    ],
    "answer": 1,
    "explanation": "Smoke tests and comparison with baseline telemetry detect early operational failures."
  },
  {
    "id": "EPSO-ICT1-161",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "hard",
    "question": "Which inventory attribute is critical for planning OS replacement?",
    "options": [
      "Installed version and vendor support end date",
      "Laptop case colour",
      "Office floorplan identifier",
      "Web browser bookmark count"
    ],
    "answer": 0,
    "explanation": "Version and support status determine exposure and upgrade timing."
  },
  {
    "id": "EPSO-ICT1-162",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "hard",
    "question": "What should be done before removing an old DNS service?",
    "options": [
      "Delete the zone with no notice",
      "Change employee passwords",
      "Leave undocumented static resolvers forever",
      "Identify all consumers and migrate dependencies with validation"
    ],
    "answer": 3,
    "explanation": "Dependency mapping prevents hidden consumers from losing name resolution."
  },
  {
    "id": "EPSO-ICT1-163",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "medium",
    "question": "Which test best proves a newly installed UPS meets a system's continuity needs?",
    "options": [
      "Confirming the supplier brochure",
      "Counting unused network ports",
      "Controlled load and failover test under realistic conditions",
      "Visual inspection of the label only"
    ],
    "answer": 2,
    "explanation": "Load and failover testing verifies real runtime and transfer behaviour."
  },
  {
    "id": "EPSO-ICT1-164",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "hard",
    "question": "What does configuration management contribute to a hardware refresh?",
    "options": [
      "Traceability of changed CIs, dependencies and relationships",
      "Guaranteed no downtime",
      "Elimination of procurement steps",
      "Replacement of all asset inventories"
    ],
    "answer": 0,
    "explanation": "Configuration records keep changes and their service impacts visible."
  },
  {
    "id": "EPSO-ICT1-165",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "hard",
    "question": "Which lifecycle control is most important when retiring cloud resources?",
    "options": [
      "Delete only the console shortcut",
      "Stop generating cost reports",
      "Keep all credentials indefinitely",
      "Verify data retention, access removal, dependencies and ongoing billing"
    ],
    "answer": 3,
    "explanation": "Cloud retirement must address security, data and residual cost commitments."
  },
  {
    "id": "EPSO-ICT1-166",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "medium",
    "question": "What must be evaluated before deploying an AI model in critical infrastructure operations?",
    "options": [
      "Only benchmark marketing scores",
      "Only chatbot visual design",
      "Accuracy, failure modes, access controls and human oversight",
      "Only model parameter count"
    ],
    "answer": 2,
    "explanation": "Operational AI adoption requires validated performance and accountable controls."
  },
  {
    "id": "EPSO-ICT1-167",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "hard",
    "question": "What is the main benefit of confidential computing?",
    "options": [
      "Encrypt stored disks while leaving plaintext memory outside a protected environment",
      "Protect network traffic between service endpoints using TLS",
      "Restrict access to stored files using role-based permissions",
      "Protect certain data during processing using trusted execution environments"
    ],
    "answer": 3,
    "explanation": "Confidential computing aims to reduce exposure of data in use."
  },
  {
    "id": "EPSO-ICT1-168",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "hard",
    "question": "Why use an open telemetry standard across infrastructure tools?",
    "options": [
      "Guarantee every alert is actionable",
      "Enable consistent collection and export of observability data",
      "Remove all monitoring costs",
      "Prevent all vendor lock-in automatically"
    ],
    "answer": 1,
    "explanation": "Open telemetry conventions and protocols improve interoperability."
  },
  {
    "id": "EPSO-ICT1-169",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "medium",
    "question": "Which factor is central to evaluating edge computing for a latency-sensitive service?",
    "options": [
      "Latency and locality of data processing",
      "The font in the management console",
      "The age of office furniture",
      "Number of supplier webinars"
    ],
    "answer": 0,
    "explanation": "Processing near data sources can reduce round-trip time and bandwidth needs."
  },
  {
    "id": "EPSO-ICT1-170",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "hard",
    "question": "What is the operational trade-off of serverless functions?",
    "options": [
      "Unlimited execution time without quotas",
      "Full control over physical CPUs",
      "Complete elimination of all access policies",
      "Reduced server management but platform limits and cold-start behaviour"
    ],
    "answer": 3,
    "explanation": "Serverless delegates server operations but introduces service constraints."
  },
  {
    "id": "EPSO-ICT1-171",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "hard",
    "question": "When is a proof of concept insufficient for production approval?",
    "options": [
      "When it has measured business feasibility",
      "When it has not established security, scale and operational supportability",
      "When it uses a limited pilot",
      "When it documents assumptions"
    ],
    "answer": 1,
    "explanation": "Production readiness requires evidence beyond basic feature feasibility."
  },
  {
    "id": "EPSO-ICT1-172",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "medium",
    "question": "What is a digital twin of infrastructure primarily intended to support?",
    "options": [
      "Replace all production backups",
      "Act as a hardware encryption chip",
      "Model and simulate behaviour of a corresponding physical or logical system",
      "Guarantee exact future predictions"
    ],
    "answer": 2,
    "explanation": "Digital twins represent systems for monitoring or scenario analysis."
  },
  {
    "id": "EPSO-ICT1-173",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "hard",
    "question": "What is the principal concern when adopting an immature open-source component?",
    "options": [
      "Whether the filename is short",
      "Whether the repository has a logo",
      "Whether it uses markdown",
      "Maintenance capacity, security response and community sustainability"
    ],
    "answer": 3,
    "explanation": "Open-source selection must assess governance and long-term maintenance."
  },
  {
    "id": "EPSO-ICT1-174",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "hard",
    "question": "Which approach best evaluates cloud service portability?",
    "options": [
      "Test export, redeployment, dependencies and operational procedures",
      "Count available dashboard themes",
      "Compare provider company slogans",
      "Read only the service marketing page"
    ],
    "answer": 0,
    "explanation": "Practical portability is established by exercised migration capability."
  },
  {
    "id": "EPSO-ICT1-175",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "medium",
    "question": "A new observability tool reports anomalies but generates excessive false alarms. What should be improved?",
    "options": [
      "Signal quality, baselines and alert validation",
      "Data-centre floor area",
      "Number of alert colours",
      "Office Wi-Fi name"
    ],
    "answer": 0,
    "explanation": "Anomaly tools need tuning to avoid alert fatigue."
  },
  {
    "id": "EPSO-ICT1-176",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "hard",
    "question": "What does a service mesh most commonly provide?",
    "options": [
      "Traffic management, identity and policy for service-to-service communication",
      "Storage parity calculation",
      "User payroll processing",
      "Physical replacement of Ethernet cabling"
    ],
    "answer": 0,
    "explanation": "Service meshes manage communication between distributed services."
  },
  {
    "id": "EPSO-ICT1-177",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "hard",
    "question": "What risk does adopting a proprietary protocol create?",
    "options": [
      "Potential interoperability and migration constraints",
      "Guaranteed zero packet loss",
      "Automatic regulatory compliance",
      "Free long-term maintenance"
    ],
    "answer": 0,
    "explanation": "Proprietary dependencies can increase switching costs."
  },
  {
    "id": "EPSO-ICT1-178",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "medium",
    "question": "Why assess energy efficiency of proposed compute infrastructure?",
    "options": [
      "Power and cooling affect operating costs and sustainability",
      "It removes hardware failure risk",
      "It guarantees software portability",
      "It determines SQL query syntax"
    ],
    "answer": 0,
    "explanation": "Energy consumption matters over the system lifecycle."
  },
  {
    "id": "EPSO-ICT1-179",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "easy",
    "question": "Which metric is the ratio of total data-centre energy to energy consumed by its IT equipment?",
    "options": [
      "Server virtualisation density",
      "Power usage effectiveness",
      "CPU instructions per clock cycle",
      "Average electrical power per rack"
    ],
    "answer": 1,
    "explanation": "PUE compares total facility energy with IT equipment energy."
  },
  {
    "id": "EPSO-ICT1-180",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "hard",
    "question": "What limitation must be considered for containerising legacy applications?",
    "options": [
      "Persistent state and operating-system dependencies may constrain portability",
      "Containers eliminate all licensing costs",
      "Containers cannot use TCP",
      "Containers always require dedicated physical hardware"
    ],
    "answer": 0,
    "explanation": "Legacy dependencies and state management can complicate migration."
  },
  {
    "id": "EPSO-ICT1-181",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "medium",
    "question": "Why might an organisation use a hybrid cloud architecture?",
    "options": [
      "Eliminate all networking requirements",
      "Combine on-premises and cloud capabilities for different constraints",
      "Prohibit local data storage",
      "Guarantee every workload has zero latency"
    ],
    "answer": 1,
    "explanation": "Hybrid design balances service, regulatory and operational needs."
  },
  {
    "id": "EPSO-ICT1-182",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "hard",
    "question": "Which concern is important when applying generative AI to incident data?",
    "options": [
      "CPU case colour",
      "Protection of sensitive logs and potential inaccurate outputs",
      "Number of dashboard widgets",
      "Ability to display emojis"
    ],
    "answer": 1,
    "explanation": "Sensitive operational data and output reliability require governance."
  },
  {
    "id": "EPSO-ICT1-183",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "hard",
    "question": "What is the core idea of platform engineering?",
    "options": [
      "Replace all product management",
      "Remove all shared standards",
      "Require every team to run its own data centre",
      "Provide reusable self-service capabilities and standardised internal developer services"
    ],
    "answer": 3,
    "explanation": "Internal platforms simplify common engineering workflows with governed services."
  },
  {
    "id": "EPSO-ICT1-184",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "medium",
    "question": "What makes an emerging technology pilot measurable?",
    "options": [
      "An unlimited deployment scope",
      "No baseline comparison",
      "A supplier-led demonstration only",
      "Explicit hypotheses, success metrics and go/no-go criteria"
    ],
    "answer": 3,
    "explanation": "Measurable tests support evidence-based adoption decisions."
  },
  {
    "id": "EPSO-ICT1-185",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "hard",
    "question": "Which architecture improves resilience against one cloud region becoming unavailable?",
    "options": [
      "One VM with more CPU",
      "Multiple zones in the same failed region only",
      "A second DNS alias to one endpoint",
      "Multi-region design with validated failover and data replication"
    ],
    "answer": 3,
    "explanation": "Multi-region designs address regional failure domains when correctly tested."
  },
  {
    "id": "EPSO-ICT1-186",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "hard",
    "question": "Why should an enterprise evaluate open API standards?",
    "options": [
      "They enable integration and reduce proprietary coupling",
      "They remove authentication needs",
      "They replace data protection obligations",
      "They ensure all APIs are invulnerable"
    ],
    "answer": 0,
    "explanation": "Open interfaces support interoperable integrations and substitution."
  },
  {
    "id": "EPSO-ICT1-187",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "medium",
    "question": "What risk accompanies real-time AI-assisted operations?",
    "options": [
      "Models cannot make mistakes after deployment",
      "Service SLAs cease to matter",
      "Monitoring data becomes unnecessary",
      "Incorrect automated recommendations may amplify incidents"
    ],
    "answer": 3,
    "explanation": "Human oversight and controlled actions are important when model outputs are fallible."
  },
  {
    "id": "EPSO-ICT1-188",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "hard",
    "question": "Which criterion matters for low-code workflow platforms in regulated environments?",
    "options": [
      "Number of prebuilt icons",
      "Auditability, access control and change governance",
      "Animation speed",
      "Social media followers"
    ],
    "answer": 1,
    "explanation": "Enterprise workflows require traceable controlled changes and secure access."
  },
  {
    "id": "EPSO-ICT1-189",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "hard",
    "question": "What problem does an event-driven architecture help address?",
    "options": [
      "Guaranteeing global synchronous transactions",
      "Removing need for schemas",
      "Decoupling producers and consumers of asynchronous events",
      "Eliminating message delivery failures"
    ],
    "answer": 2,
    "explanation": "Events enable asynchronous integration but require delivery and schema management."
  },
  {
    "id": "EPSO-ICT1-190",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "medium",
    "question": "Why assess data residency before adopting a managed service?",
    "options": [
      "Location and transfer rules may constrain where sensitive information is processed",
      "It sets the TCP window",
      "It controls CPU instruction sets",
      "It determines monitor resolution"
    ],
    "answer": 0,
    "explanation": "Data placement can have contractual and legal implications."
  },
  {
    "id": "EPSO-ICT1-191",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "hard",
    "question": "What should a technology watch report distinguish?",
    "options": [
      "Hardware colour from rack colour",
      "Presentation font from font size only",
      "Evidence from marketing claims and assessed applicability",
      "Employee preferences from salaries"
    ],
    "answer": 2,
    "explanation": "Technology assessment should separate verified capability from assertions and relevance."
  },
  {
    "id": "EPSO-ICT1-192",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "hard",
    "question": "Which strategy helps limit emerging-tool proliferation across teams?",
    "options": [
      "Allow all tools without inventory",
      "Common evaluation criteria, architecture review and standard platforms",
      "Make vendor approvals informal",
      "Ban documentation"
    ],
    "answer": 1,
    "explanation": "Governed selection reduces fragmentation and unmanaged dependencies."
  },
  {
    "id": "EPSO-ICT1-193",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "medium",
    "question": "Which view most clearly identifies project dependencies and delivery milestones?",
    "options": [
      "An alphabetical asset inventory alone",
      "A list of office rooms",
      "Integrated roadmap with dependency links",
      "An unlabelled network drawing"
    ],
    "answer": 2,
    "explanation": "Roadmaps make scheduling and prerequisite relationships visible."
  },
  {
    "id": "EPSO-ICT1-194",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "hard",
    "question": "What is the principal purpose of a project risk register?",
    "options": [
      "Replace financial approvals",
      "Record only closed procurement orders",
      "Archive meeting invitations",
      "Track likelihood, impact, owner and treatment of risks"
    ],
    "answer": 3,
    "explanation": "A risk register supports active risk treatment and accountability."
  },
  {
    "id": "EPSO-ICT1-195",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "hard",
    "question": "How should a shared technical dependency across three projects be managed?",
    "options": [
      "Always cancel all projects",
      "Keep dependency undocumented",
      "Assign an owner and coordinate sequencing across the portfolio",
      "Let each project assume another team will handle it"
    ],
    "answer": 2,
    "explanation": "Portfolio coordination prevents hidden conflicts and missed prerequisites."
  },
  {
    "id": "EPSO-ICT1-196",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "medium",
    "question": "What does an architecture diagram need to remain operationally useful?",
    "options": [
      "Version, ownership and alignment with the deployed state",
      "A vendor logo",
      "No change history",
      "Only attractive colours"
    ],
    "answer": 0,
    "explanation": "Current version-controlled diagrams support troubleshooting and change planning."
  },
  {
    "id": "EPSO-ICT1-197",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "hard",
    "question": "Why distinguish business and technical ownership of infrastructure services?",
    "options": [
      "It makes SLAs unnecessary",
      "They must always be the same individual",
      "It removes operational escalation",
      "They provide different accountability for business outcomes and technical operation"
    ],
    "answer": 3,
    "explanation": "Ownership distinctions clarify decision-making, budgets and support responsibilities."
  },
  {
    "id": "EPSO-ICT1-198",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "hard",
    "question": "What information is essential in a service dependency map?",
    "options": [
      "Only supplier advertising slogans",
      "Upstream and downstream relationships between services and components",
      "Only ticket colours",
      "Only user display names"
    ],
    "answer": 1,
    "explanation": "Dependency mapping supports impact analysis and recovery sequencing."
  },
  {
    "id": "EPSO-ICT1-199",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "medium",
    "question": "What does a project decision log add to governance?",
    "options": [
      "Replace all project plans",
      "Remove change approvals",
      "Guarantee delivery within budget",
      "Record decisions, rationale, dates and decision-makers"
    ],
    "answer": 3,
    "explanation": "Decision history supports traceability and future review."
  },
  {
    "id": "EPSO-ICT1-200",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "hard",
    "question": "What does a portfolio prioritisation framework normally weigh?",
    "options": [
      "Alphabetical project order",
      "Only the longest title",
      "Only the newest request",
      "Strategic value, risk, cost, dependencies and capacity"
    ],
    "answer": 3,
    "explanation": "Transparent evaluation helps allocate limited resources."
  },
  {
    "id": "EPSO-ICT1-201",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "hard",
    "question": "How can a project avoid ambiguous completion status?",
    "options": [
      "Use informal verbal assumptions only",
      "Track only meetings held",
      "Avoid agreed milestones",
      "Use measurable deliverables and explicit acceptance sign-off"
    ],
    "answer": 3,
    "explanation": "Acceptance sign-off shows deliverables met agreed conditions."
  },
  {
    "id": "EPSO-ICT1-202",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "easy",
    "question": "Which artefact documents operational procedures for handling a recurring infrastructure task?",
    "options": [
      "Purchase requisition",
      "Runbook",
      "Organisation chart only",
      "Room booking"
    ],
    "answer": 1,
    "explanation": "Runbooks provide repeatable step-by-step operations and escalation."
  },
  {
    "id": "EPSO-ICT1-203",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "hard",
    "question": "When should a disaster recovery dependency map be updated?",
    "options": [
      "After relevant architectural or service changes",
      "Only at initial procurement",
      "Only when a supplier asks",
      "Never after go-live"
    ],
    "answer": 0,
    "explanation": "Recovery dependencies evolve as services change."
  },
  {
    "id": "EPSO-ICT1-204",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "easy",
    "question": "What is the role of a RACI matrix in infrastructure governance?",
    "options": [
      "Replace network encryption",
      "Calculate storage IOPS",
      "Clarify who is responsible, accountable, consulted and informed",
      "Define BGP routes"
    ],
    "answer": 2,
    "explanation": "RACI separates execution from accountability and communication roles."
  },
  {
    "id": "EPSO-ICT1-205",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "medium",
    "question": "What is an architecture review board primarily intended to assess?",
    "options": [
      "Design alignment with agreed standards and constraints",
      "Holiday requests",
      "User browser bookmarks",
      "Employee appraisal results"
    ],
    "answer": 0,
    "explanation": "Architecture governance evaluates solution decisions and exceptions."
  },
  {
    "id": "EPSO-ICT1-206",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "hard",
    "question": "A portfolio includes projects with double-booked specialist staff. What should be reviewed?",
    "options": [
      "Resource capacity and project scheduling",
      "Only procurement item colours",
      "Only office locations",
      "Only DNS aliases"
    ],
    "answer": 0,
    "explanation": "Capacity planning prevents unachievable parallel commitments."
  },
  {
    "id": "EPSO-ICT1-207",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "hard",
    "question": "Which documentation is most important during on-call escalation?",
    "options": [
      "An unrelated budget memo",
      "A personal calendar only",
      "Current contacts, service dependencies and recovery runbooks",
      "A completed old marketing proposal"
    ],
    "answer": 2,
    "explanation": "Responders need accessible operational context and contacts."
  },
  {
    "id": "EPSO-ICT1-208",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "medium",
    "question": "How should architecture exceptions be handled?",
    "options": [
      "Record justification, risks, approver and expiration or review date",
      "Treat every exception as permanent",
      "Leave them undocumented",
      "Grant automatic approval to all deviations"
    ],
    "answer": 0,
    "explanation": "Documented exceptions make risk acceptance explicit and reviewable."
  },
  {
    "id": "EPSO-ICT1-209",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "hard",
    "question": "What should a service catalogue entry provide?",
    "options": [
      "A clear service description, request path and support expectations",
      "Only a rack serial number",
      "Only a vendor brochure",
      "Only a SQL index"
    ],
    "answer": 0,
    "explanation": "Catalogue entries describe available services in customer-relevant terms."
  },
  {
    "id": "EPSO-ICT1-210",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "hard",
    "question": "Why attach risk owners to high-impact project risks?",
    "options": [
      "Guarantee risk probability becomes zero",
      "Avoid all stakeholder consultation",
      "Replace supplier contracts",
      "Ensure named accountability for monitoring and mitigation"
    ],
    "answer": 3,
    "explanation": "An accountable owner keeps treatment actions active."
  },
  {
    "id": "EPSO-ICT1-211",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "medium",
    "question": "What information is needed to evaluate a project cost variance?",
    "options": [
      "Baseline budget, actuals and forecast at completion",
      "Only the latest invoice",
      "Only number of meetings",
      "Only the project logo"
    ],
    "answer": 0,
    "explanation": "Variance assessment compares expenditure and expected final cost with baseline."
  },
  {
    "id": "EPSO-ICT1-212",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "hard",
    "question": "What is a technical debt register useful for?",
    "options": [
      "Storing browser cookies",
      "Recording staff birthday dates",
      "Prioritising maintainability and supportability liabilities",
      "Tracking parking permits"
    ],
    "answer": 2,
    "explanation": "Technical debt tracking makes deferred corrective work explicit."
  },
  {
    "id": "EPSO-ICT1-213",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "hard",
    "question": "What should an infrastructure operating model define?",
    "options": [
      "Only the dashboard font",
      "Responsibilities, processes, escalation, tooling and service boundaries",
      "Only the hardware purchase price",
      "Only the number of team members"
    ],
    "answer": 1,
    "explanation": "Operating models clarify how services are operated and supported."
  },
  {
    "id": "EPSO-ICT1-214",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "medium",
    "question": "Which diagram is most useful for tracing a request through several microservices?",
    "options": [
      "Building seating plan",
      "Service interaction or sequence diagram",
      "An asset depreciation table",
      "A pie chart of training budget"
    ],
    "answer": 1,
    "explanation": "Interaction diagrams show service calls and dependencies."
  },
  {
    "id": "EPSO-ICT1-215",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "hard",
    "question": "What is the purpose of configuration item relationships in change impact analysis?",
    "options": [
      "Calculate annual leave",
      "Identify services that may be affected by a component change",
      "Assign keyboard layouts",
      "Determine office access badges"
    ],
    "answer": 1,
    "explanation": "CI dependencies support evaluation of blast radius."
  },
  {
    "id": "EPSO-ICT1-216",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "hard",
    "question": "Which measure helps verify portfolio value after project completion?",
    "options": [
      "Only final invoice approval",
      "Ignoring operational outcomes",
      "Benefits realisation review against initial objectives",
      "Only counting completed tasks"
    ],
    "answer": 2,
    "explanation": "Benefits review tests whether expected outcomes materialised."
  },
  {
    "id": "EPSO-ICT1-217",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "medium",
    "question": "Why should infrastructure documentation be stored under access control?",
    "options": [
      "Eliminate backups",
      "Prevent unauthorised disclosure of sensitive topology and credentials",
      "Make all diagrams publicly editable",
      "Replace audit logging"
    ],
    "answer": 1,
    "explanation": "Infrastructure documents can reveal sensitive architecture details."
  },
  {
    "id": "EPSO-ICT1-218",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "hard",
    "question": "Which responsibility belongs to a service owner rather than a project manager after handover?",
    "options": [
      "Preparing launch invitations only",
      "Temporary project stand-up facilitation only",
      "Ongoing service performance and lifecycle decisions",
      "Closing the project issue tracker only"
    ],
    "answer": 2,
    "explanation": "Service ownership persists beyond project delivery."
  },
  {
    "id": "EPSO-ICT1-219",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "hard",
    "question": "What should a decommissioning portfolio track?",
    "options": [
      "Only meeting room bookings",
      "Only training completion",
      "Only new hardware purchases",
      "Assets, dependencies, migration status and verified retirement"
    ],
    "answer": 3,
    "explanation": "Retirement portfolios coordinate removal of legacy assets and residual risk."
  },
  {
    "id": "EPSO-ICT1-220",
    "category": "epso_ad7_infrastructure",
    "topic": "High-performance computing",
    "level": "easy",
    "question": "Which programming model commonly enables message passing between separate HPC processes?",
    "options": [
      "MPI",
      "OpenMP",
      "POSIX threads",
      "CUDA thread blocks"
    ],
    "answer": 0,
    "explanation": "MPI is widely used for distributed-memory parallel computing."
  },
  {
    "id": "EPSO-ICT1-221",
    "category": "epso_ad7_infrastructure",
    "topic": "High-performance computing",
    "level": "easy",
    "question": "Which model uses compiler directives to express shared-memory parallel regions, commonly within one HPC node?",
    "options": [
      "MPI point-to-point communication",
      "OpenMP",
      "Remote direct memory access",
      "Slurm job arrays"
    ],
    "answer": 1,
    "explanation": "OpenMP provides directives and runtime support for shared-memory parallel execution."
  },
  {
    "id": "EPSO-ICT1-222",
    "category": "epso_ad7_infrastructure",
    "topic": "High-performance computing",
    "level": "hard",
    "question": "A numerical kernel saturates measured main-memory bandwidth while arithmetic units remain underused. What is its likely bottleneck?",
    "options": [
      "Memory bandwidth",
      "Printer throughput",
      "DNS lookup latency only",
      "Certificate validation"
    ],
    "answer": 0,
    "explanation": "Memory-bound kernels are limited by data movement rates."
  },
  {
    "id": "EPSO-ICT1-223",
    "category": "epso_ad7_infrastructure",
    "topic": "High-performance computing",
    "level": "medium",
    "question": "What is a GPU most suited to in HPC?",
    "options": [
      "Massively parallel operations on large data sets",
      "Filesystem metadata administration",
      "Serial tasks with extensive unpredictable branching only",
      "DNS zone transfers"
    ],
    "answer": 0,
    "explanation": "GPUs provide many parallel execution units suitable for data-parallel computation."
  },
  {
    "id": "EPSO-ICT1-224",
    "category": "epso_ad7_infrastructure",
    "topic": "High-performance computing",
    "level": "hard",
    "question": "What is a major performance limitation of scaling a serial algorithm to more nodes?",
    "options": [
      "Its serial fraction cannot be accelerated by extra nodes",
      "Ethernet addresses become longer",
      "NTP stops synchronising",
      "Files must use ASCII"
    ],
    "answer": 0,
    "explanation": "Amdahl's law limits speed-up when some work remains serial."
  },
  {
    "id": "EPSO-ICT1-225",
    "category": "epso_ad7_infrastructure",
    "topic": "High-performance computing",
    "level": "easy",
    "question": "What does strong scaling measure?",
    "options": [
      "Runtime behaviour when work per processor stays constant as resources grow",
      "Runtime improvement for a fixed total problem size with more resources",
      "The fraction of time jobs spend waiting in a scheduler queue",
      "The fraction of requested cores actually executing instructions"
    ],
    "answer": 1,
    "explanation": "Strong scaling holds problem size constant and increases parallel resources."
  },
  {
    "id": "EPSO-ICT1-226",
    "category": "epso_ad7_infrastructure",
    "topic": "High-performance computing",
    "level": "easy",
    "question": "What does weak scaling measure?",
    "options": [
      "Ability to maintain performance as workload grows proportionally with resources",
      "Runtime improvement for a fixed problem size as processor count increases",
      "Latency of one serial task as processor clock speed increases",
      "Queue waiting time at a fixed cluster size"
    ],
    "answer": 0,
    "explanation": "Weak scaling evaluates increasing problem size and compute resources together."
  },
  {
    "id": "EPSO-ICT1-227",
    "category": "epso_ad7_infrastructure",
    "topic": "High-performance computing",
    "level": "hard",
    "question": "Which scheduling policy adjusts priority using allocated shares and historical resource usage?",
    "options": [
      "Fair-share scheduling with defined allocations",
      "Strict first-in-first-out scheduling without usage accounting",
      "Largest-job-first scheduling based only on core requests",
      "Fixed job priorities that never incorporate past usage"
    ],
    "answer": 0,
    "explanation": "Fair-share scheduling allocates resources according to usage and entitlements."
  },
  {
    "id": "EPSO-ICT1-228",
    "category": "epso_ad7_infrastructure",
    "topic": "High-performance computing",
    "level": "hard",
    "question": "Why is a parallel filesystem used in HPC?",
    "options": [
      "Deliver high aggregate throughput to many compute nodes",
      "Provide public email hosting",
      "Prevent all data corruption automatically",
      "Replace all parallel algorithms"
    ],
    "answer": 0,
    "explanation": "Parallel filesystems distribute I/O across storage servers and clients."
  },
  {
    "id": "EPSO-ICT1-229",
    "category": "epso_ad7_infrastructure",
    "topic": "High-performance computing",
    "level": "medium",
    "question": "Which operation can create a metadata bottleneck on an HPC filesystem?",
    "options": [
      "Creating millions of tiny files",
      "Reading one large sequential file only",
      "Changing DNS TTL",
      "Increasing CPU core frequency"
    ],
    "answer": 0,
    "explanation": "Large numbers of small-file operations place heavy demand on metadata services."
  },
  {
    "id": "EPSO-ICT1-230",
    "category": "epso_ad7_infrastructure",
    "topic": "High-performance computing",
    "level": "hard",
    "question": "What does checkpointing provide for long-running simulations?",
    "options": [
      "Guaranteed zero runtime overhead",
      "Automatic acceleration of every algorithm",
      "Removal of all numerical errors",
      "Ability to resume from saved computation state after failure"
    ],
    "answer": 3,
    "explanation": "Checkpoints reduce lost computation after interruptions."
  },
  {
    "id": "EPSO-ICT1-231",
    "category": "epso_ad7_infrastructure",
    "topic": "High-performance computing",
    "level": "hard",
    "question": "A simulation performs collective communication every iteration. Why may scaling degrade?",
    "options": [
      "Synchronisation and network latency increase coordination cost",
      "More nodes always remove communication",
      "CPU caches stop working",
      "All workloads become entirely serial"
    ],
    "answer": 0,
    "explanation": "Collective communication and barriers can dominate at higher node counts."
  },
  {
    "id": "EPSO-ICT1-232",
    "category": "epso_ad7_infrastructure",
    "topic": "High-performance computing",
    "level": "medium",
    "question": "What does GPU memory oversubscription generally risk?",
    "options": [
      "Elimination of host memory use",
      "Automatic prevention of race conditions",
      "Data transfers or paging that degrade kernel performance",
      "Faster execution without trade-offs"
    ],
    "answer": 2,
    "explanation": "Insufficient device memory increases costly movement of data."
  },
  {
    "id": "EPSO-ICT1-233",
    "category": "epso_ad7_infrastructure",
    "topic": "High-performance computing",
    "level": "hard",
    "question": "What should be considered when choosing HPC interconnects?",
    "options": [
      "Latency, bandwidth, congestion and collective communication patterns",
      "Only number of helpdesk tickets",
      "Only cable colour",
      "Only IP address length"
    ],
    "answer": 0,
    "explanation": "Interconnect performance affects distributed computation and data exchange."
  },
  {
    "id": "EPSO-ICT1-234",
    "category": "epso_ad7_infrastructure",
    "topic": "High-performance computing",
    "level": "hard",
    "question": "Which diagnostic is useful for identifying unbalanced parallel workloads?",
    "options": [
      "User avatar size",
      "Per-rank execution timings and utilisation",
      "Number of helpdesk forms",
      "Only cluster hostname"
    ],
    "answer": 1,
    "explanation": "Rank-level timings expose nodes or processes waiting for slower work."
  },
  {
    "id": "EPSO-ICT1-235",
    "category": "epso_ad7_infrastructure",
    "topic": "High-performance computing",
    "level": "medium",
    "question": "A job requests 64 cores but consistently uses only 8. What should be investigated?",
    "options": [
      "Parallel efficiency and resource allocation",
      "Whether the cluster has more badges",
      "The helpdesk opening hours",
      "The network DNS suffix"
    ],
    "answer": 0,
    "explanation": "Unused allocated cores indicate poor utilisation or a scheduling mismatch."
  },
  {
    "id": "EPSO-ICT1-236",
    "category": "epso_ad7_infrastructure",
    "topic": "High-performance computing",
    "level": "hard",
    "question": "What is the primary difference between a CPU and a GPU for many HPC kernels?",
    "options": [
      "GPUs favour high-throughput data parallelism; CPUs favour general-purpose low-latency execution",
      "CPUs cannot use floating point",
      "GPUs cannot access memory",
      "CPUs always have higher memory bandwidth"
    ],
    "answer": 0,
    "explanation": "Architectures differ in parallel throughput and execution control design."
  },
  {
    "id": "EPSO-ICT1-237",
    "category": "epso_ad7_infrastructure",
    "topic": "High-performance computing",
    "level": "hard",
    "question": "Which programming error can cause nondeterministic outcomes in parallel computation?",
    "options": [
      "Data race on shared mutable state",
      "Synchronising access correctly",
      "Using a documented parameter",
      "Setting a fixed seed for serial code"
    ],
    "answer": 0,
    "explanation": "Unsynchronised concurrent reads and writes can change results based on execution order."
  },
  {
    "id": "EPSO-ICT1-238",
    "category": "epso_ad7_infrastructure",
    "topic": "High-performance computing",
    "level": "medium",
    "question": "Why use NUMA-aware memory placement on multi-socket HPC nodes?",
    "options": [
      "Replace MPI libraries",
      "Prevent all disk failures",
      "Avoid CPU scheduling entirely",
      "Reduce access to remote memory and its latency"
    ],
    "answer": 3,
    "explanation": "NUMA-aware placement improves locality of processor-to-memory access."
  },
  {
    "id": "EPSO-ICT1-239",
    "category": "epso_ad7_infrastructure",
    "topic": "High-performance computing",
    "level": "easy",
    "question": "Which metric expresses the rate of floating-point operations performed by a compute device?",
    "options": [
      "Bytes of DNS cache",
      "Packets per second only",
      "Mean ticket age",
      "FLOPS"
    ],
    "answer": 3,
    "explanation": "FLOPS measures floating-point operations per second."
  },
  {
    "id": "EPSO-ICT1-240",
    "category": "epso_ad7_infrastructure",
    "topic": "High-performance computing",
    "level": "hard",
    "question": "What does the roofline model relate?",
    "options": [
      "Queue waiting time as a function of submitted job count",
      "Energy consumption as a function of rack temperature",
      "Checkpoint size as a function of recovery time",
      "Arithmetic intensity to attainable computation and memory bandwidth performance"
    ],
    "answer": 3,
    "explanation": "The roofline model characterises compute-bound versus memory-bound performance ceilings."
  },
  {
    "id": "EPSO-ICT1-241",
    "category": "epso_ad7_infrastructure",
    "topic": "High-performance computing",
    "level": "medium",
    "question": "Why might batching improve GPU workload throughput?",
    "options": [
      "It replaces all device memory",
      "It eliminates all numerical precision issues",
      "It guarantees perfect scaling",
      "It amortises kernel-launch and transfer overhead across more work"
    ],
    "answer": 3,
    "explanation": "Batching reduces overhead per unit of useful GPU computation."
  },
  {
    "id": "EPSO-ICT1-242",
    "category": "epso_ad7_infrastructure",
    "topic": "High-performance computing",
    "level": "hard",
    "question": "What is an HPC job array useful for?",
    "options": [
      "Launching many related independent tasks under a scheduler",
      "Replacing hardware RAID",
      "Creating DNSSEC keys",
      "Configuring email aliases"
    ],
    "answer": 0,
    "explanation": "Job arrays simplify many similar parameter-sweep tasks."
  },
  {
    "id": "EPSO-ICT1-243",
    "category": "epso_ad7_infrastructure",
    "topic": "High-performance computing",
    "level": "hard",
    "question": "Why should scientific computation record software versions and input parameters?",
    "options": [
      "Enable reproducibility and comparison of results",
      "Reduce all file sizes",
      "Guarantee physical accuracy of every model",
      "Avoid running tests"
    ],
    "answer": 0,
    "explanation": "Provenance is critical for reproducible numerical experiments."
  },
  {
    "id": "EPSO-ICT1-244",
    "category": "epso_ad7_infrastructure",
    "topic": "High-performance computing",
    "level": "medium",
    "question": "Which network feature can reduce CPU overhead for high-volume HPC communication?",
    "options": [
      "Longer TCP keepalive alone",
      "RDMA-capable fabric",
      "More DNS TXT records",
      "Disabling packet checksums"
    ],
    "answer": 1,
    "explanation": "RDMA supports data transfer with reduced CPU involvement and copies."
  },
  {
    "id": "EPSO-ICT1-245",
    "category": "epso_ad7_infrastructure",
    "topic": "High-performance computing",
    "level": "hard",
    "question": "What is an important limitation of using a single shared login node for heavy computation?",
    "options": [
      "It always has more compute capacity than worker nodes",
      "It can degrade access and service for all cluster users",
      "It makes job queues unnecessary",
      "It cannot support SSH"
    ],
    "answer": 1,
    "explanation": "Compute-intensive work belongs on allocated compute nodes rather than shared login nodes."
  },
  {
    "id": "EPSO-ICT1-246",
    "category": "epso_ad7_infrastructure",
    "topic": "High-performance computing",
    "level": "hard",
    "question": "Which metric measures scheduler resource occupancy, rather than actual CPU execution efficiency, in an HPC cluster?",
    "options": [
      "Allocated compute hours compared with available capacity",
      "Number of office chairs",
      "Count of DNS domains",
      "Length of shell usernames"
    ],
    "answer": 0,
    "explanation": "Allocated compute hours divided by available capacity measures resource occupancy. Actual CPU or GPU utilisation requires execution telemetry as well."
  },
  {
    "id": "EPSO-ICT1-247",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "medium",
    "question": "What is the principal mathematical threat from Shor's algorithm to existing public-key systems?",
    "options": [
      "A quadratic speed-up in exhaustive symmetric-key search",
      "Recovery of an independently random one-time pad without its key",
      "Efficient inversion of every cryptographic hash function",
      "Efficient factorisation and discrete logarithms on a capable quantum computer"
    ],
    "answer": 3,
    "explanation": "Shor's algorithm threatens RSA and discrete-logarithm cryptosystems."
  },
  {
    "id": "EPSO-ICT1-248",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "hard",
    "question": "What does Grover's algorithm imply for symmetric-key search?",
    "options": [
      "Polynomial-time integer factorisation rather than key search",
      "An exponential reduction in queries for every possible search problem",
      "Elimination of the need to assess implementation attack costs",
      "A quadratic theoretical search speed-up under suitable conditions"
    ],
    "answer": 3,
    "explanation": "Grover's algorithm changes brute-force complexity but does not simply break symmetric cryptography."
  },
  {
    "id": "EPSO-ICT1-249",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "easy",
    "question": "Which NIST-standardised post-quantum mechanism is a key encapsulation mechanism?",
    "options": [
      "AES-GCM",
      "SHA-256",
      "ML-KEM",
      "ML-DSA"
    ],
    "answer": 2,
    "explanation": "ML-KEM is standardised for establishing shared secrets using post-quantum cryptography."
  },
  {
    "id": "EPSO-ICT1-250",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "easy",
    "question": "Which NIST-standardised scheme provides post-quantum digital signatures?",
    "options": [
      "AES-XTS",
      "ML-KEM",
      "ML-DSA",
      "HKDF"
    ],
    "answer": 2,
    "explanation": "ML-DSA is a module-lattice-based digital signature standard."
  },
  {
    "id": "EPSO-ICT1-251",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "hard",
    "question": "What is the main purpose of digital signatures?",
    "options": [
      "Authenticate origin and detect unauthorised modification",
      "Provide confidentiality by themselves",
      "Allocate IP addresses",
      "Compress files automatically"
    ],
    "answer": 0,
    "explanation": "Signature verification provides authenticity and integrity properties."
  },
  {
    "id": "EPSO-ICT1-252",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "hard",
    "question": "A web service uses RSA key exchange. What should its PQC migration inventory identify?",
    "options": [
      "Only DNS TTL values",
      "Only users' monitor models",
      "Only the server's colour",
      "Protocols, algorithms, key sizes and dependent endpoints"
    ],
    "answer": 3,
    "explanation": "Cryptographic inventories map where vulnerable mechanisms are used."
  },
  {
    "id": "EPSO-ICT1-253",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "medium",
    "question": "What does harvest-now-decrypt-later refer to?",
    "options": [
      "DNS query replay only",
      "Storing intercepted encrypted data for possible future decryption",
      "A backup retention policy",
      "A filesystem deduplication method"
    ],
    "answer": 1,
    "explanation": "Attackers may retain ciphertext until future advances allow decryption."
  },
  {
    "id": "EPSO-ICT1-254",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "hard",
    "question": "Why might a hybrid key establishment combine classical and PQC mechanisms?",
    "options": [
      "Maintain security assumptions during transition and interoperability testing",
      "Ensure both algorithms are equally vulnerable",
      "Replace certificate validation",
      "Prevent all side-channel attacks"
    ],
    "answer": 0,
    "explanation": "Hybrid approaches combine independent key-establishment components during migration."
  },
  {
    "id": "EPSO-ICT1-255",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "hard",
    "question": "What is a cryptographic agility inventory intended to record?",
    "options": [
      "Only DNS aliases",
      "Only data-centre floor numbers",
      "Only supplier logos",
      "Algorithms, keys, protocols, certificates and owners"
    ],
    "answer": 3,
    "explanation": "Inventory enables coordinated algorithm replacement and lifecycle planning."
  },
  {
    "id": "EPSO-ICT1-256",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "medium",
    "question": "What is the difference between quantum key distribution and post-quantum algorithms?",
    "options": [
      "QKD uses quantum communication; PQC algorithms run on conventional computers",
      "Both require a quantum computer for encryption",
      "PQC always needs dedicated optical fibre",
      "QKD is simply a new password manager"
    ],
    "answer": 0,
    "explanation": "PQC is deployable in conventional systems while QKD uses quantum physical channels."
  },
  {
    "id": "EPSO-ICT1-257",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "hard",
    "question": "Why is QKD not a substitute for authenticated classical communication?",
    "options": [
      "QKD eliminates denial-of-service attacks",
      "QKD inherently authenticates every endpoint",
      "The classical channel still requires authentication",
      "QKD removes the need for key management"
    ],
    "answer": 2,
    "explanation": "QKD security still depends on authentication and implementation assumptions."
  },
  {
    "id": "EPSO-ICT1-258",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "hard",
    "question": "What is the main operational challenge with deploying quantum-resistant signatures?",
    "options": [
      "All post-quantum signatures are shorter than RSA",
      "Certificates become unnecessary",
      "Signatures no longer need verification",
      "Changes in key sizes, signature sizes and protocol compatibility"
    ],
    "answer": 3,
    "explanation": "PQC schemes can change bandwidth, certificate and implementation requirements."
  },
  {
    "id": "EPSO-ICT1-259",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "easy",
    "question": "Which property distinguishes an ideal qubit state from a classical bit?",
    "options": [
      "Its unknown state can always be cloned exactly",
      "One measurement reveals every amplitude of an unknown state",
      "It always yields two independently readable classical bits",
      "It can be in a superposition of basis states before measurement"
    ],
    "answer": 3,
    "explanation": "A qubit is a quantum state capable of superposition, subject to measurement and noise."
  },
  {
    "id": "EPSO-ICT1-260",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "hard",
    "question": "Why is quantum error correction essential to scalable computation?",
    "options": [
      "It replaces encryption algorithms",
      "Physical qubits are noisy and logical computation needs fault tolerance",
      "It prevents all human mistakes",
      "It increases the number of DNS requests"
    ],
    "answer": 1,
    "explanation": "Error correction protects logical qubits from physical noise and errors."
  },
  {
    "id": "EPSO-ICT1-261",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "hard",
    "question": "What is decoherence in a quantum computer?",
    "options": [
      "TCP congestion collapse",
      "Ordinary hard disk fragmentation",
      "Loss of usable quantum coherence through interaction with environment",
      "Compilation of source code"
    ],
    "answer": 2,
    "explanation": "Environmental interactions disrupt the quantum state needed for computation."
  },
  {
    "id": "EPSO-ICT1-262",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "medium",
    "question": "Why do cryptographic migrations need to consider long-lived embedded devices?",
    "options": [
      "They may be difficult to update before algorithms become obsolete",
      "Embedded devices always run the latest TLS",
      "They never use public-key algorithms",
      "They contain no secrets"
    ],
    "answer": 0,
    "explanation": "Long-lived devices require maintainable cryptographic upgrade paths."
  },
  {
    "id": "EPSO-ICT1-263",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "hard",
    "question": "Which attack category must still be assessed for implementations of PQC algorithms?",
    "options": [
      "Side-channel attacks",
      "Only screen-scraping",
      "Only physical door access",
      "Only DNS zone spoofing"
    ],
    "answer": 0,
    "explanation": "PQC mathematics does not eliminate implementation leakage and side channels."
  },
  {
    "id": "EPSO-ICT1-264",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "easy",
    "question": "What is a KEM used for in secure protocols?",
    "options": [
      "Establish a shared secret between communicating parties",
      "Authenticate a message by producing a digital signature",
      "Derive a password verifier from a low-entropy password",
      "Encrypt an arbitrarily long application message directly"
    ],
    "answer": 0,
    "explanation": "Key encapsulation creates shared key material suitable for later symmetric protection."
  },
  {
    "id": "EPSO-ICT1-265",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "medium",
    "question": "Which method best evaluates enterprise post-quantum readiness?",
    "options": [
      "Immediate untested replacement everywhere",
      "Ignoring long-term confidentiality requirements",
      "Cryptographic inventory, risk prioritisation and interoperability pilots",
      "Buying quantum hardware for all offices"
    ],
    "answer": 2,
    "explanation": "Readiness involves discovery, risk assessment and controlled migration testing."
  },
  {
    "id": "EPSO-ICT1-266",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "hard",
    "question": "How should a cryptographic transition address certificate authorities?",
    "options": [
      "Test certificate profiles, signatures, path validation and ecosystem support",
      "Assume no certificate changes matter",
      "Disable certificate revocation",
      "Make all certificates self-signed by default"
    ],
    "answer": 0,
    "explanation": "PQC adoption affects PKI tooling and certificate processing."
  },
  {
    "id": "EPSO-ICT1-267",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "hard",
    "question": "Why does quantum computing not make all encryption immediately insecure?",
    "options": [
      "Practical attacks require suitable algorithms and sufficiently capable fault-tolerant hardware",
      "Quantum computers cannot perform mathematics",
      "All classical cryptography is information-theoretically secure",
      "Quantum computers are incompatible with networks"
    ],
    "answer": 0,
    "explanation": "Feasibility depends on algorithmic applicability and hardware resources."
  },
  {
    "id": "EPSO-ICT1-268",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "medium",
    "question": "What property is required of a secure random source used for cryptographic keys?",
    "options": [
      "Unpredictability at the required security strength",
      "A constant seed shared publicly",
      "Alphabetical character order",
      "A memorable pattern"
    ],
    "answer": 0,
    "explanation": "Cryptographic keys require high-entropy unpredictable randomness."
  },
  {
    "id": "EPSO-ICT1-269",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "hard",
    "question": "What is the main risk of replacing cryptographic libraries without end-to-end tests?",
    "options": [
      "Complete removal of vulnerabilities",
      "Guaranteed performance increase",
      "Automatic improvement of every application",
      "Protocol, certificate and interoperability failures"
    ],
    "answer": 3,
    "explanation": "Crypto libraries interact with external protocol and certificate ecosystems."
  },
  {
    "id": "EPSO-ICT1-270",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "hard",
    "question": "Which PQC migration goal is especially urgent for archives kept confidential for decades?",
    "options": [
      "Shorten email subject lines",
      "Reduce office printer consumption",
      "Improve user interface styling",
      "Protect data against future decryption of captured ciphertext"
    ],
    "answer": 3,
    "explanation": "Long-term confidentiality can be threatened even before a capable quantum attacker exists."
  },
  {
    "id": "EPSO-ICT1-271",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "medium",
    "question": "Why should key rotation be tested during crypto-agility exercises?",
    "options": [
      "Avoid testing disaster recovery",
      "Verify that keys and algorithms can change without loss of service",
      "Increase the number of permanent credentials",
      "Remove certificate expiry dates"
    ],
    "answer": 1,
    "explanation": "Operational key lifecycle changes must be reliable and recoverable."
  },
  {
    "id": "EPSO-ICT1-272",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "hard",
    "question": "What is quantum annealing primarily associated with?",
    "options": [
      "Native RSA signing",
      "Direct replacement of all general-purpose CPUs",
      "Optimisation-oriented quantum approaches",
      "Ordinary Ethernet switching"
    ],
    "answer": 2,
    "explanation": "Quantum annealing is explored for particular optimisation problems rather than universal replacement of classical computing."
  },
  {
    "id": "EPSO-ICT1-273",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "hard",
    "question": "What is the correct role of standards in PQC procurement?",
    "options": [
      "Remove performance acceptance tests",
      "Guarantee that implementations have no bugs",
      "Prohibit future algorithm updates",
      "Specify interoperable reviewed algorithms and implementation requirements"
    ],
    "answer": 3,
    "explanation": "Standards support interoperability but secure deployment still requires implementation assurance."
  },
  {
    "id": "EPSO-ICT1-274",
    "category": "epso_ad7_infrastructure",
    "topic": "Teams, suppliers and SLAs",
    "level": "medium",
    "question": "Which measure best detects supplier underperformance across service restoration commitments?",
    "options": [
      "Overall availability without incident restoration measurements",
      "Breach rate by priority and service level",
      "Number of tickets closed without measuring elapsed restoration time",
      "Average response time without restoration targets"
    ],
    "answer": 1,
    "explanation": "Service-level performance should be measured against agreed response and restoration targets."
  },
  {
    "id": "EPSO-ICT1-275",
    "category": "epso_ad7_infrastructure",
    "topic": "Teams, suppliers and SLAs",
    "level": "hard",
    "question": "A provider meets an uptime target but repeatedly fails security reporting deadlines. What follows?",
    "options": [
      "Uptime makes every other obligation irrelevant",
      "The separate security reporting obligation should be assessed and enforced",
      "The contract must always be terminated immediately",
      "Reporting can be deleted retroactively"
    ],
    "answer": 1,
    "explanation": "Each contractual obligation requires its own evidence and follow-up."
  },
  {
    "id": "EPSO-ICT1-276",
    "category": "epso_ad7_infrastructure",
    "topic": "Teams, suppliers and SLAs",
    "level": "hard",
    "question": "What should a service integration function do when two suppliers dispute incident ownership?",
    "options": [
      "Suspend all communications",
      "Assign responsibility by random choice",
      "Coordinate end-to-end resolution against documented interfaces",
      "Close the ticket without investigation"
    ],
    "answer": 2,
    "explanation": "Service integration resolves boundaries and maintains end-to-end accountability."
  },
  {
    "id": "EPSO-ICT1-277",
    "category": "epso_ad7_infrastructure",
    "topic": "Teams, suppliers and SLAs",
    "level": "medium",
    "question": "Which document should define who escalates a cross-vendor major incident?",
    "options": [
      "A hardware receipt",
      "A generic supplier brochure",
      "Joint operating procedures and escalation matrix",
      "An employee leave schedule"
    ],
    "answer": 2,
    "explanation": "Explicit joint procedures make multi-supplier escalation actionable."
  },
  {
    "id": "EPSO-ICT1-278",
    "category": "epso_ad7_infrastructure",
    "topic": "Teams, suppliers and SLAs",
    "level": "hard",
    "question": "Why should SLA measurement definitions be agreed before signing a contract?",
    "options": [
      "Guarantee zero service outages",
      "Remove the need for evidence",
      "Prevent all change requests",
      "Avoid disputes over scope, clock rules and exclusions"
    ],
    "answer": 3,
    "explanation": "Defined calculation methods make performance independently verifiable."
  },
  {
    "id": "EPSO-ICT1-279",
    "category": "epso_ad7_infrastructure",
    "topic": "Teams, suppliers and SLAs",
    "level": "hard",
    "question": "Which metric is most relevant for a critical service's support availability?",
    "options": [
      "Coverage hours and measured responsiveness within those hours",
      "Only supplier headquarters location",
      "Number of support emails sent",
      "Only number of supplier staff"
    ],
    "answer": 0,
    "explanation": "Coverage and response commitments establish real support availability."
  },
  {
    "id": "EPSO-ICT1-280",
    "category": "epso_ad7_infrastructure",
    "topic": "Teams, suppliers and SLAs",
    "level": "medium",
    "question": "What is a practical purpose of regular supplier service reviews?",
    "options": [
      "Delete historical SLA records",
      "Examine KPIs, incidents, risks and improvement actions",
      "Approve unrelated employee leave",
      "Replace all technical monitoring"
    ],
    "answer": 1,
    "explanation": "Service reviews support evidence-based corrective action and risk oversight."
  },
  {
    "id": "EPSO-ICT1-281",
    "category": "epso_ad7_infrastructure",
    "topic": "Teams, suppliers and SLAs",
    "level": "hard",
    "question": "Which management approach best addresses a persistent SLA breach?",
    "options": [
      "Hide failing measurements",
      "Document root causes, corrective plan, owner and review dates",
      "Automatically change every SLA target",
      "Rely on unrecorded verbal reassurance"
    ],
    "answer": 1,
    "explanation": "A documented improvement plan enables accountable remediation."
  },
  {
    "id": "EPSO-ICT1-282",
    "category": "epso_ad7_infrastructure",
    "topic": "Teams, suppliers and SLAs",
    "level": "hard",
    "question": "A contract requires quarterly recovery tests. What evidence should be retained?",
    "options": [
      "Only a verbal statement",
      "Only supplier brand guidelines",
      "Only a calendar invitation",
      "Test scenarios, results, issues and corrective actions"
    ],
    "answer": 3,
    "explanation": "Recovery assurance depends on evidence that tests occurred and findings were addressed."
  },
  {
    "id": "EPSO-ICT1-283",
    "category": "epso_ad7_infrastructure",
    "topic": "Teams, suppliers and SLAs",
    "level": "medium",
    "question": "What is the risk of paying solely for the number of closed support tickets?",
    "options": [
      "Incentives may favour volume over durable service outcomes",
      "Incident quality is automatically guaranteed",
      "User satisfaction is always maximised",
      "All problems become known errors"
    ],
    "answer": 0,
    "explanation": "Output-based incentives can distort quality if outcomes are not measured."
  },
  {
    "id": "EPSO-ICT1-284",
    "category": "epso_ad7_infrastructure",
    "topic": "Teams, suppliers and SLAs",
    "level": "hard",
    "question": "Which requirement is most important when external operators access privileged infrastructure?",
    "options": [
      "Named MFA-protected accounts with permanent unrestricted admin access",
      "Named access, least privilege, MFA and auditable sessions",
      "A shared support account with a recorded password and no session attribution",
      "Time-limited admin access without individual identity or audit logs"
    ],
    "answer": 1,
    "explanation": "Privileged third-party access needs individual accountability and strong controls."
  },
  {
    "id": "EPSO-ICT1-285",
    "category": "epso_ad7_infrastructure",
    "topic": "Teams, suppliers and SLAs",
    "level": "hard",
    "question": "What should a contract exit plan explicitly cover?",
    "options": [
      "Only stationery supplies",
      "Only the vendor logo",
      "Data return, knowledge transfer, access revocation and transition support",
      "Only employee seating"
    ],
    "answer": 2,
    "explanation": "Exit planning protects continuity and information during provider changes."
  },
  {
    "id": "EPSO-ICT1-286",
    "category": "epso_ad7_infrastructure",
    "topic": "Teams, suppliers and SLAs",
    "level": "easy",
    "question": "What is an operational level agreement typically used for?",
    "options": [
      "Guarantee every external supplier price",
      "Define internal support commitments between service teams",
      "Replace national employment law",
      "Set staff pension contributions"
    ],
    "answer": 1,
    "explanation": "OLAs govern supporting internal operational commitments."
  },
  {
    "id": "EPSO-ICT1-287",
    "category": "epso_ad7_infrastructure",
    "topic": "Teams, suppliers and SLAs",
    "level": "hard",
    "question": "How should a vendor's claimed 99.95% availability be verified?",
    "options": [
      "By counting service catalogue entries",
      "By accepting marketing language alone",
      "By checking only office opening hours",
      "Against agreed monitoring data and defined calculation boundaries"
    ],
    "answer": 3,
    "explanation": "Verification requires a defined time window, exclusions and trustworthy measurements."
  },
  {
    "id": "EPSO-ICT1-288",
    "category": "epso_ad7_infrastructure",
    "topic": "Teams, suppliers and SLAs",
    "level": "hard",
    "question": "What is a supplier dependency concentration risk?",
    "options": [
      "Two suppliers use different logos",
      "Several contracts use the same font",
      "Critical operations rely too heavily on one provider or shared failure domain",
      "Support staff work in two buildings"
    ],
    "answer": 2,
    "explanation": "Concentrated dependencies can amplify outages and commercial exposure."
  },
  {
    "id": "EPSO-ICT1-289",
    "category": "epso_ad7_infrastructure",
    "topic": "Teams, suppliers and SLAs",
    "level": "medium",
    "question": "What should incident communications to senior management emphasise?",
    "options": [
      "Impact, current status, actions, decisions and next update",
      "Supplier internal blame statements",
      "Only total ticket count",
      "Unfiltered technical logs alone"
    ],
    "answer": 0,
    "explanation": "Management requires actionable impact and response information."
  },
  {
    "id": "EPSO-ICT1-290",
    "category": "epso_ad7_infrastructure",
    "topic": "Teams, suppliers and SLAs",
    "level": "hard",
    "question": "Which strategy reduces ambiguity in multi-vendor handovers?",
    "options": [
      "An informal unrecorded chat",
      "Documented acceptance criteria and named receiving owner",
      "Assuming all tasks transfer automatically",
      "Deleting the old service documentation"
    ],
    "answer": 1,
    "explanation": "Clear handover ownership and criteria reduce gaps."
  },
  {
    "id": "EPSO-ICT1-291",
    "category": "epso_ad7_infrastructure",
    "topic": "Teams, suppliers and SLAs",
    "level": "hard",
    "question": "Why should service credits not be the sole response to repeated SLA failure?",
    "options": [
      "Credits replace continuity planning",
      "Credits automatically prevent recurrence",
      "Credits eliminate incident management",
      "Credits may not remedy underlying operational risk"
    ],
    "answer": 3,
    "explanation": "Commercial remedies do not substitute for corrective operational measures."
  },
  {
    "id": "EPSO-ICT1-292",
    "category": "epso_ad7_infrastructure",
    "topic": "Teams, suppliers and SLAs",
    "level": "medium",
    "question": "Which management action helps when a supplier's staff turnover repeatedly delays incidents?",
    "options": [
      "Remove escalation contacts",
      "Suspend service documentation",
      "Ignore loss of expertise",
      "Require updated knowledge transfer and skills continuity plans"
    ],
    "answer": 3,
    "explanation": "Continuity and knowledge transfer reduce single-person dependencies."
  },
  {
    "id": "EPSO-ICT1-293",
    "category": "epso_ad7_infrastructure",
    "topic": "Teams, suppliers and SLAs",
    "level": "hard",
    "question": "What must a KPI have to support fair supplier evaluation?",
    "options": [
      "No measurement method",
      "Clear definition, data source, owner and reporting period",
      "An adjustable hidden denominator",
      "Only a memorable acronym"
    ],
    "answer": 1,
    "explanation": "Unambiguous KPIs support comparable and auditable evaluation."
  },
  {
    "id": "EPSO-ICT1-294",
    "category": "epso_ad7_infrastructure",
    "topic": "Teams, suppliers and SLAs",
    "level": "hard",
    "question": "What is the most appropriate reaction to evidence of breached contractual security controls?",
    "options": [
      "Wait until annual renewal automatically",
      "Treat the issue only as an invoice dispute",
      "Follow the contract escalation and security incident procedures",
      "Delete the evidence"
    ],
    "answer": 2,
    "explanation": "Security breaches require timely contractual and incident response."
  },
  {
    "id": "EPSO-ICT1-295",
    "category": "epso_ad7_infrastructure",
    "topic": "Teams, suppliers and SLAs",
    "level": "medium",
    "question": "How should supplier change windows be aligned with internal production controls?",
    "options": [
      "By cancelling every emergency change",
      "By disabling all maintenance notices",
      "By allowing unilateral vendor changes",
      "Through coordinated change schedules and authorisation criteria"
    ],
    "answer": 3,
    "explanation": "Joint change governance prevents uncontrolled production impact."
  },
  {
    "id": "EPSO-ICT1-296",
    "category": "epso_ad7_infrastructure",
    "topic": "Teams, suppliers and SLAs",
    "level": "hard",
    "question": "What is the main purpose of a service acceptance review before supplier handover?",
    "options": [
      "End all supplier obligations immediately",
      "Replace performance monitoring",
      "Avoid creating support contacts",
      "Verify operational readiness against agreed deliverables"
    ],
    "answer": 3,
    "explanation": "Acceptance checks support documentation, knowledge, access and performance readiness."
  },
  {
    "id": "EPSO-ICT1-297",
    "category": "epso_ad7_infrastructure",
    "topic": "Teams, suppliers and SLAs",
    "level": "hard",
    "question": "Which evidence supports an SLA dispute over incident resolution time?",
    "options": [
      "Timestamped incident lifecycle and defined clock-stop rules",
      "Only project scope slides",
      "Only supplier invoices",
      "Only verbal recollection"
    ],
    "answer": 0,
    "explanation": "Resolution measurements must be reproducible from recorded events and rules."
  },
  {
    "id": "EPSO-ICT1-298",
    "category": "epso_ad7_infrastructure",
    "topic": "Teams, suppliers and SLAs",
    "level": "medium",
    "question": "A supplier cannot meet a recovery target during a planned disaster exercise. What should happen?",
    "options": [
      "Delete the recovery scenario",
      "Mark the target as met anyway",
      "Disable future exercises",
      "Record the gap and require a remediation plan and retest"
    ],
    "answer": 3,
    "explanation": "Failed tests identify continuity gaps that need remediation."
  },
  {
    "id": "EPSO-ICT1-299",
    "category": "epso_ad7_infrastructure",
    "topic": "Teams, suppliers and SLAs",
    "level": "hard",
    "question": "How should technical ownership be handled when a contracted cloud service relies on a subcontractor?",
    "options": [
      "Assume subcontractors have no impact",
      "Assign incidents to end users",
      "Remove all audit rights",
      "Define accountable prime-provider obligations and subcontractor controls"
    ],
    "answer": 3,
    "explanation": "Supplier chains require clear responsibility and oversight."
  },
  {
    "id": "EPSO-ICT1-300",
    "category": "epso_ad7_infrastructure",
    "topic": "Teams, suppliers and SLAs",
    "level": "hard",
    "question": "What improves resilience when a single vendor supports a business-critical platform?",
    "options": [
      "Keeping all platform knowledge proprietary and undocumented",
      "Documented recovery, exit strategy and transferable knowledge",
      "Relying only on account manager availability",
      "Avoiding any operational rehearsal"
    ],
    "answer": 1,
    "explanation": "Exit readiness and recovery capability limit dependence on one provider."
  }
];

export default EPSO_AD7_INFRASTRUCTURE_QUESTIONS;
