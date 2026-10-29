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
    "level": "medium",
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
    "level": "medium",
    "question": "An active-passive database cluster has synchronous replication between two sites. What is the main performance trade-off as inter-site latency rises?",
    "options": [
      "Network round-trip time affects only read-only queries",
      "Commit latency can increase because acknowledgement waits for the remote replica",
      "Commit latency cannot change until a site fails completely",
      "Synchronous acknowledgement automatically becomes asynchronous",
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
    "level": "medium",
    "question": "A Linux VM reports high CPU steal time. What does that indicate?",
    "options": [
      "Time spent by the guest waiting only for its own disk I/O",
      "Time during which the guest CPU executes its own instructions",
      "Time spent applying a database transaction log",
      "Time spent involuntarily waiting while the hypervisor runs other virtual processors",
    ],
    "answer": 3,
    "explanation": "Linux reports steal time separately from user, system, idle and I/O-wait CPU time. High steal suggests that a virtual CPU is losing execution time to other virtualised workloads; investigate host contention and VM placement."
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
    "level": "easy",
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
    "level": "medium",
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
    "question": "An SLA measures 99.9% availability over a full 30-day month with no exclusions. Approximately how much downtime is permitted?",
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
    "level": "medium",
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
    "level": "medium",
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
    "level": "medium",
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
    "level": "medium",
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
    "level": "medium",
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
      "Standards-based interoperability and practical data/workload portability",
      "The provider-specific features available only on the chosen platform",
      "The size of the initial discount without evaluating exit costs",
      "The number of proprietary integration tools required",
    ],
    "answer": 0,
    "explanation": "Interoperability and portability reduce switching costs and improve future architectural options."
  },
  {
    "id": "EPSO-ICT1-021",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "medium",
    "question": "Which artefact best records the relationship between a business service and the underlying infrastructure components supporting it?",
    "options": [
      "A hardware purchase order with no service dependencies",
      "A network address list without business-service relationships",
      "An incident count grouped only by reporting month",
      "A service-to-configuration-item dependency map",
    ],
    "answer": 3,
    "explanation": "A service dependency model, often maintained in a CMDB or service map, links business services with their supporting configuration items."
  },
  {
    "id": "EPSO-ICT1-022",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "medium",
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
    "level": "medium",
    "question": "A parallel application spends most of its time exchanging data between compute nodes. Which improvement is most likely to help?",
    "options": [
      "Disable profiling to reduce the visibility of synchronisation delays",
      "Use an interconnect with lower latency and higher bandwidth",
      "Increase node count without measuring communication overhead",
      "Optimise only local disk capacity when no disk I/O occurs",
    ],
    "answer": 1,
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
    "level": "medium",
    "question": "Why is crypto-agility important in planning for post-quantum cryptography?",
    "options": [
      "It replaces all cryptographic algorithms with a fixed hardware dependency",
      "It makes certificate and protocol compatibility testing unnecessary",
      "It enables cryptographic algorithms and keys to be changed with controlled impact as standards and threats evolve",
      "It guarantees that current algorithms never need replacing",
    ],
    "answer": 2,
    "explanation": "Crypto-agility allows inventories, protocols and systems to transition algorithms without redesigning every dependent service."
  },
  {
    "id": "EPSO-ICT1-027",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "medium",
    "question": "Which public-key cryptographic problem is most directly threatened by a sufficiently capable fault-tolerant quantum computer running Shor’s algorithm?",
    "options": [
      "Compressing arbitrary messages without information loss",
      "Integer factorisation underlying RSA",
      "Exhaustive symmetric-key search with Grover’s quadratic speed-up",
      "Predicting the output of every correctly implemented random generator",
    ],
    "answer": 1,
    "explanation": "Shor’s algorithm can efficiently solve integer factorisation and discrete logarithm problems on a sufficiently capable quantum computer."
  },
  {
    "id": "EPSO-ICT1-028",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "medium",
    "question": "An organisation is prioritising systems for migration to post-quantum cryptography. Which factor is most relevant?",
    "options": [
      "Sensitivity and required confidentiality lifetime of protected information",
      "Only the age of the operating system, regardless of protected data",
      "Only whether the service is hosted on physical or virtual servers",
      "Only the current CPU utilisation of the endpoints",
    ],
    "answer": 0,
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
    "level": "medium",
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
    "question": "Which design avoids a single PSU or power-feed failure taking down a critical server?",
    "options": [
      "Two PSUs connected to the same single power feed",
      "One PSU supported only by a monitoring agent",
      "Dual power supplies connected to independent power feeds",
      "One high-wattage PSU connected to a single circuit",
    ],
    "answer": 2,
    "explanation": "Redundant PSUs connected to independent feeds avoid both a single-PSU and a single-feed failure point. Two PSUs on the same feed do not remove that feed as a shared failure domain."
  },
  {
    "id": "EPSO-ICT1-035",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "medium",
    "question": "A managed laptop becomes non-compliant with the organisation’s security policy. Which control can restrict its access to the corporate cloud suite?",
    "options": [
      "A longer authentication session regardless of device compliance",
      "MDM compliance integrated with a conditional access policy",
      "DNS round-robin alone, without checking device status",
      "A directory display-name change without an access decision",
    ],
    "answer": 1,
    "explanation": "Device management assesses compliance, and conditional access uses that status in the access decision. For example, Intune compliance can be integrated with Microsoft Entra Conditional Access. Configure and test the policy and its remediation path."
  },
  {
    "id": "EPSO-ICT1-036",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "easy",
    "question": "A DNS resolver returns an old IP address after a service migration. Which factor most directly determines cache expiry?",
    "options": [
      "DNS TTL",
      "DNSSEC validation status",
      "The authoritative server’s zone serial alone",
      "The reverse DNS record’s hostname",
    ],
    "answer": 0,
    "explanation": "Time to live controls how long a cached DNS record may remain valid."
  },
  {
    "id": "EPSO-ICT1-037",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "easy",
    "question": "What does LDAP provide in an enterprise identity environment?",
    "options": [
      "Issuing OpenID Connect ID tokens as its native protocol",
      "Routing packets between Internet autonomous systems",
      "Replacing all application-specific authorisation decisions",
      "Directory operations such as searching entries and establishing a session’s authentication state",
    ],
    "answer": 3,
    "explanation": "LDAP is a directory access protocol. It includes Search operations and Bind operations that establish authentication state. Directory access is distinct from a complete web SSO solution or an application’s authorisation rules."
  },
  {
    "id": "EPSO-ICT1-038",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "medium",
    "question": "A RAID 5 array of four equal disks loses one disk. Assuming the remaining disks are healthy, which statement is accurate?",
    "options": [
      "The remaining disks no longer need parity during the rebuild",
      "The array provides a full independent backup of its data",
      "Data remains available but fault tolerance is exhausted until rebuild",
      "The array can tolerate a second disk failure without data loss",
    ],
    "answer": 2,
    "explanation": "RAID 5 tolerates one disk failure; another failure before rebuilding may cause loss."
  },
  {
    "id": "EPSO-ICT1-039",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "easy",
    "question": "Which RAID level generally survives failure of any two disks in one array?",
    "options": [
      "A two-disk RAID 1 mirror after both member disks fail",
      "RAID 6",
      "RAID 5 with one parity disk",
      "RAID 0 across four disks",
    ],
    "answer": 1,
    "explanation": "RAID 6 uses dual distributed parity to tolerate two disk failures."
  },
  {
    "id": "EPSO-ICT1-040",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "medium",
    "question": "Why do consensus protocols require a majority quorum before accepting a change?",
    "options": [
      "Prevent conflicting decisions by requiring sufficient participating replicas",
      "Remove the need for a leader election or consensus protocol",
      "Keep every partition writable even when it lacks a majority",
      "Replace agreement between replicas with encrypted network traffic",
    ],
    "answer": 0,
    "explanation": "Majorities intersect, so the quorum and the protocol’s leader, term and log rules prevent two isolated groups from independently committing conflicting changes. A group without a majority normally cannot continue writes safely."
  },
  {
    "id": "EPSO-ICT1-041",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "medium",
    "question": "A cluster loses communication between its two sites. What mechanism best reduces split-brain risk?",
    "options": [
      "Allow both isolated sites to continue writing without arbitration",
      "Rely only on a DNS timeout with no fencing or quorum",
      "Promote a replica automatically without checking the other site",
      "A witness or fencing mechanism with quorum rules",
    ],
    "answer": 3,
    "explanation": "Fencing and quorum arbitration prevent both isolated partitions from acting as the active writer."
  },
  {
    "id": "EPSO-ICT1-042",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "medium",
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
    "question": "An SMTP server returns success after the end of DATA. What does this establish?",
    "options": [
      "The recipient has opened and read the message",
      "It has accepted responsibility for delivery, relay or reporting a later failure",
      "The message has necessarily reached the recipient’s inbox",
      "Every downstream mail server has already completed processing",
    ],
    "answer": 1,
    "explanation": "SMTP acceptance is a handoff of responsibility, not proof of final inbox delivery. Subsequent delivery or relay can still fail; investigate the message path and any resulting delivery-status notification."
  },
  {
    "id": "EPSO-ICT1-044",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "easy",
    "question": "Which feature limits broadcast traffic between distinct enterprise subnets?",
    "options": [
      "Layer 3 routing boundary",
      "A VLAN trunk that bridges all subnets at Layer 2",
      "A DHCP relay with unchanged broadcast domains",
      "A DNS forwarding rule between the subnets",
    ],
    "answer": 0,
    "explanation": "Routers separate broadcast domains; switches normally forward broadcasts within a VLAN."
  },
  {
    "id": "EPSO-ICT1-045",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "medium",
    "question": "A Tomcat JDBC pool is fully borrowed and new requests wait until maxWait expires. What should be investigated before simply increasing maxActive?",
    "options": [
      "Only the HTTP response compression setting",
      "Only whether the server hostname is present in DNS",
      "Only the size of the application’s static resource cache",
      "Slow or leaked connections and the database’s connection capacity",
    ],
    "answer": 3,
    "explanation": "maxActive limits active pool connections; maxWait bounds the wait for a returned connection. Check query duration, connections not returned to the pool and database limits. Increasing the pool blindly can move or worsen the bottleneck."
  },
  {
    "id": "EPSO-ICT1-046",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "easy",
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
    "level": "medium",
    "question": "Which topology minimises east-west data-centre network oversubscription at scale?",
    "options": [
      "Independent racks connected only through one shared narrow uplink",
      "A properly provisioned leaf-spine fabric",
      "A deliberately oversubscribed aggregation tier with one uplink per rack",
      "A serial chain of top-of-rack switches for all east-west traffic",
    ],
    "answer": 1,
    "explanation": "Leaf-spine topologies provide multiple equal-cost paths and predictable bisection bandwidth."
  },
  {
    "id": "EPSO-ICT1-048",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "easy",
    "question": "What does OpenID Connect add to OAuth 2.0 for enterprise single sign-on?",
    "options": [
      "An identity layer and ID Tokens describing the authenticated end-user",
      "A directory search protocol that replaces LDAP operations",
      "A guarantee that an API access token is valid for every application",
      "Automatic assignment of all application permissions to the user",
    ],
    "answer": 0,
    "explanation": "OpenID Connect is an identity layer built on OAuth 2.0. It introduces ID Tokens and standardised end-user claims. Clients must validate the token according to the protocol; authentication does not replace application authorisation."
  },
  {
    "id": "EPSO-ICT1-049",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "medium",
    "question": "What does PostgreSQL point-in-time recovery need to restore a chosen moment between a base backup and a later accidental deletion?",
    "options": [
      "Only the latest SQL dump, without transaction history",
      "Only a filesystem copy made after the deletion",
      "Only a list of database users and their passwords",
      "A restorable physical base backup and an unbroken WAL archive covering the target time",
    ],
    "answer": 3,
    "explanation": "Continuous archiving combines a base backup with the required sequence of WAL records. Recovery replays changes up to the selected target. A base backup alone cannot reproduce all later points in time; test the recovery procedure."
  },
  {
    "id": "EPSO-ICT1-050",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "medium",
    "question": "Which measurement best indicates storage performance under concurrent random I/O?",
    "options": [
      "The storage interface’s advertised line rate alone",
      "Total provisioned capacity without workload measurements",
      "IOPS and latency",
      "Sequential throughput from one stream without latency information",
    ],
    "answer": 2,
    "explanation": "Random storage workloads are characterised by completed I/O operations and response latency."
  },
  {
    "id": "EPSO-ICT1-051",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "medium",
    "question": "For a database with strict transactional consistency, which storage consideration matters most?",
    "options": [
      "Only the number of available volume mount points",
      "Durable writes and predictable write latency",
      "Only the size of the array’s read cache",
      "Only peak sequential throughput from a read-only benchmark",
    ],
    "answer": 1,
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
    "level": "medium",
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
    "level": "easy",
    "question": "What is the main purpose of a reverse proxy in front of web applications?",
    "options": [
      "Expose every backend directly without mediating requests",
      "Synchronise application data between database replicas",
      "Terminate and forward incoming client requests to backends",
      "Select Internet routes between independent autonomous systems",
    ],
    "answer": 2,
    "explanation": "Reverse proxies route inbound application traffic and may terminate TLS or enforce policies."
  },
  {
    "id": "EPSO-ICT1-055",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "medium",
    "question": "An application uses long-lived WebSocket connections. Which load-balancer feature matters?",
    "options": [
      "A timeout shorter than the application’s expected idle connection period",
      "Support for connection upgrades and appropriate idle timeouts",
      "Only the maximum request-body size for ordinary short HTTP requests",
      "Only a shorter DNS cache lifetime with no connection support",
    ],
    "answer": 1,
    "explanation": "WebSocket upgrades and connection timeout behaviour must be supported for persistent connections."
  },
  {
    "id": "EPSO-ICT1-056",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "medium",
    "question": "A virtualisation host shows sustained swapping while its workloads run. What is the most useful next diagnostic step?",
    "options": [
      "Compare available host memory, swap-in/out activity and VM memory allocations",
      "Increase every VM’s vCPU count without inspecting host memory",
      "Use guest uptime alone to rule out all host resource pressure",
      "Measure only storage capacity without inspecting memory or swap activity",
    ],
    "answer": 0,
    "explanation": "Investigate host memory and swap behaviour together with the allocation and workload of its VMs. Swapping is a diagnostic signal; it is not by itself proof that a particular guest needs more memory."
  },
  {
    "id": "EPSO-ICT1-057",
    "category": "epso_ad7_infrastructure",
    "topic": "Enterprise infrastructure",
    "level": "medium",
    "question": "Which design improves resilience of an application's database connections during primary failover?",
    "options": [
      "Use a permanent connection with no reconnection handling",
      "Hard-code the current primary’s address and disable DNS updates",
      "Retry every failed write indefinitely without considering duplicate effects",
      "A stable service endpoint with reconnection and retry logic",
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
    "level": "easy",
    "question": "A workaround restores a repeatedly failing service, but the cause has not been removed. What is the correct conclusion?",
    "options": [
      "Every affected configuration item must be decommissioned",
      "The incident may be resolved while the underlying problem still needs investigation",
      "The problem is permanently resolved as soon as service returns",
      "The workaround eliminates the need to track recurring incidents",
    ],
    "answer": 1,
    "explanation": "Restoring service and eliminating an underlying problem are different outcomes. Record the workaround, link recurring incidents and continue problem investigation; a workaround is not proof of a permanent fix."
  },
  {
    "id": "EPSO-ICT1-060",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "easy",
    "question": "Which metric describes the average elapsed time to restore service after incidents?",
    "options": [
      "Mean time to restore service",
      "Mean time between failures of the same service",
      "Mean time to detect an incident before restoration starts",
      "Average elapsed time to approve a normal change",
    ],
    "answer": 0,
    "explanation": "MTTR measures average restoration duration across relevant incidents."
  },
  {
    "id": "EPSO-ICT1-061",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "easy",
    "question": "Which metric is most appropriate for monitoring service desk answer timeliness?",
    "options": [
      "The total number of tickets closed regardless of age",
      "The number of knowledge articles created per month",
      "The average CPU utilisation of the ticketing server",
      "Percentage of contacts answered within a defined target",
    ],
    "answer": 3,
    "explanation": "Service desk responsiveness can be tracked against a defined response-time target."
  },
  {
    "id": "EPSO-ICT1-062",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "medium",
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
    "level": "easy",
    "question": "A CMDB lists hundreds of retired servers as active. Which quality dimension is most directly affected?",
    "options": [
      "Accuracy",
      "The number of approved maintenance windows",
      "The confidentiality classification of support tickets",
      "The average duration of an application deployment",
    ],
    "answer": 0,
    "explanation": "Incorrect operational states reduce CMDB accuracy."
  },
  {
    "id": "EPSO-ICT1-065",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "medium",
    "question": "A monitoring alert is triggered repeatedly by the same normal scheduled job. What should be improved?",
    "options": [
      "The incident priority matrix without changing the alert",
      "The storage retention period of unrelated audit logs",
      "The number of people authorised to approve purchases",
      "Event rules and alert thresholds",
    ],
    "answer": 3,
    "explanation": "Event management should reduce false-positive alert noise."
  },
  {
    "id": "EPSO-ICT1-066",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "medium",
    "question": "Which measure best demonstrates that a change had the intended outcome?",
    "options": [
      "The number of people invited to the change meeting",
      "The age of the change ticket without checking results",
      "Post-implementation review against success criteria",
      "The number of approval messages generated",
    ],
    "answer": 2,
    "explanation": "A review compares outcomes, incidents and expected benefits with defined criteria."
  },
  {
    "id": "EPSO-ICT1-067",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "easy",
    "question": "What is the purpose of a change schedule?",
    "options": [
      "Define business continuity objectives independently of deployments",
      "Show planned changes and potential conflicts",
      "Record only emergency changes after implementation",
      "Replace the approval and impact assessment for every change",
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
      "The amount of monitoring data retained on disk",
      "The number of software releases made by the development team",
      "Incidents resolved within agreed target times",
      "The total number of tickets closed without their priorities",
    ],
    "answer": 2,
    "explanation": "Target-based resolution performance measures service fulfilment outcomes."
  },
  {
    "id": "EPSO-ICT1-071",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "medium",
    "question": "An external supplier causes an SLA breach. Which agreement sets that supplier's contractual service commitments?",
    "options": [
      "A configuration baseline approved by the architecture team",
      "The supplier contract and its agreed service levels",
      "An operational level agreement between internal teams",
      "An internal incident priority matrix",
    ],
    "answer": 1,
    "explanation": "External supplier commitments are set by the supplier contract, including agreed service levels and reporting or escalation duties. Internal operational agreements do not replace those external contractual obligations."
  },
  {
    "id": "EPSO-ICT1-072",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "easy",
    "question": "A service depends on an internal database team restoring access within 30 minutes. Where should that commitment be recorded?",
    "options": [
      "In an internal operational agreement covering targets, handoffs and escalation",
      "Only in a software licence assigned to the end user",
      "Only in a supplier brochure without internal responsibilities",
      "Only in an asset list that contains no support targets",
    ],
    "answer": 0,
    "explanation": "Record internal responsibilities, service targets and escalation so the teams can support the end-to-end service commitment."
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
    "level": "medium",
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
    "level": "easy",
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
    "level": "easy",
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
    "level": "medium",
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
      "Increase the severity of every service request",
      "Analyse high-volume repeat service desk contacts",
      "Review only the largest supplier invoices",
      "Count all open project risks without classifying requests",
    ],
    "answer": 1,
    "explanation": "Frequent repeat requests can reveal opportunities for automation and self-service."
  },
  {
    "id": "EPSO-ICT1-080",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "medium",
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
    "level": "easy",
    "question": "What is the main purpose of continual improvement registers?",
    "options": [
      "Store only incident records without improvement ownership",
      "Replace all service performance measures with a project budget",
      "Automatically approve every proposed change",
      "Record opportunities, priorities, owners and progress",
    ],
    "answer": 3,
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
    "level": "medium",
    "question": "An incident affects 2,000 users but has a low ticket count. What should determine its priority?",
    "options": [
      "The age of the oldest server involved, regardless of impact",
      "Impact and urgency under the agreed priority matrix",
      "Ticket count alone, regardless of business effect",
      "The seniority of the person who reported the incident",
    ],
    "answer": 1,
    "explanation": "Priority should follow defined impact and urgency criteria rather than raw ticket volume."
  },
  {
    "id": "EPSO-ICT1-084",
    "category": "epso_ad7_infrastructure",
    "topic": "IT service management",
    "level": "easy",
    "question": "Which record should link a recurring incident pattern to investigation of its root cause?",
    "options": [
      "Problem record",
      "A change record that contains no incident links",
      "A software licence entitlement record",
      "A service request catalogue entry with no investigation",
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
      "Deployment frequency during working hours",
      "The number of package repositories configured",
      "Reproducible builds",
      "Code coverage of the automated unit tests",
    ],
    "answer": 2,
    "explanation": "Reproducibility aims to generate identical build outputs from the same inputs."
  },
  {
    "id": "EPSO-ICT1-087",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "easy",
    "question": "What is a software bill of materials primarily used for?",
    "options": [
      "Replacing dependency vulnerability analysis with a version number",
      "Inventorying software components and dependencies",
      "Guaranteeing that all listed components are vulnerability-free",
      "Recording only the servers where software is deployed",
    ],
    "answer": 1,
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
      "Because short-lived credentials eliminate the need for authorisation",
      "Because CI runners cannot execute code supplied in a pull request",
      "Because long-lived credentials guarantee reproducible builds",
    ],
    "answer": 0,
    "explanation": "Short-lived scoped credentials reduce the blast radius of a compromised runner."
  },
  {
    "id": "EPSO-ICT1-089",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "medium",
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
    "level": "medium",
    "question": "A developer commits a cloud access key to a repository. What should happen first?",
    "options": [
      "Revoke or rotate the exposed key and assess use",
      "Delete the current line but leave the credential valid",
      "Rewrite repository history first while keeping the key active",
      "Wait for the next planned password rotation before acting",
    ],
    "answer": 0,
    "explanation": "Exposed credentials must be invalidated because repository history may preserve them."
  },
  {
    "id": "EPSO-ICT1-093",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "medium",
    "question": "Which release approach can detect elevated application error rates in a small production cohort and stop promotion?",
    "options": [
      "A rolling deployment that checks only process startup",
      "A blue-green switch with no post-switch health evaluation",
      "A deployment timer that promotes regardless of service metrics",
      "A canary rollout with application-level health analysis and configured abort or rollback",
    ],
    "answer": 3,
    "explanation": "A canary limits initial exposure. Automated stopping or rollback requires configured health analysis and failure criteria; it is not guaranteed merely by calling a rollout canary."
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
    "level": "medium",
    "question": "Why should database schema migrations be planned separately from application rollbacks?",
    "options": [
      "Testing the old application against the new schema is unnecessary",
      "Schema changes may not be backward compatible",
      "Application rollback always restores every previous data format",
      "All schema migrations are automatically reversed by deployment tools",
    ],
    "answer": 1,
    "explanation": "Irreversible schema/data transformations may prevent safe application rollback."
  },
  {
    "id": "EPSO-ICT1-096",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "easy",
    "question": "What does a policy-as-code tool primarily enforce?",
    "options": [
      "Machine-checkable compliance rules in automated workflows",
      "Store policy documents without evaluating them during deployment",
      "Apply the desired resource configuration without checking its rules",
      "Replace identity permissions with a pipeline success indicator",
    ],
    "answer": 0,
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
    "level": "easy",
    "question": "Which kind of automated test verifies interactions between two deployed services?",
    "options": [
      "A formatting check on the service source files",
      "A benchmark of one isolated arithmetic function",
      "Integration test",
      "A unit test with every external dependency replaced by a mock",
    ],
    "answer": 2,
    "explanation": "Integration tests assess interfaces and behaviour across components."
  },
  {
    "id": "EPSO-ICT1-099",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "medium",
    "question": "A pipeline deployment stage passes on a developer laptop but fails in CI. Which improvement is most useful?",
    "options": [
      "Rebuild production manually using unrecorded dependency versions",
      "Standardise toolchain versions and build environment",
      "Disable CI validation because local execution succeeded",
      "Allow each runner to choose its toolchain version independently",
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
      "Prevent execution of attacker-controlled code with privileged secrets",
      "Force every pull-request test to use production administrator credentials",
      "Trust code automatically whenever its repository is public",
      "Rely on log redaction as the only barrier to malicious code",
    ],
    "answer": 0,
    "explanation": "Untrusted contributions must not inherit powerful credentials or access to deployment systems."
  },
  {
    "id": "EPSO-ICT1-101",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "medium",
    "question": "Why is a deployment artefact promoted unchanged across environments?",
    "options": [
      "Allow every environment to rebuild independently from changing dependencies",
      "Avoid signing or identifying the artefact after the first test",
      "Guarantee that environment-specific configuration cannot fail",
      "To preserve tested artefact identity",
    ],
    "answer": 3,
    "explanation": "Promoting the same artefact ensures production receives what passed prior checks."
  },
  {
    "id": "EPSO-ICT1-102",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "medium",
    "question": "Which test deliberately injects failures to assess resilience?",
    "options": [
      "A user acceptance review of the requirements",
      "A code coverage report from unit tests only",
      "Chaos engineering experiment",
      "A static analysis scan without running the service",
    ],
    "answer": 2,
    "explanation": "Controlled fault injection reveals system behaviour under failure conditions."
  },
  {
    "id": "EPSO-ICT1-103",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "easy",
    "question": "What does a CI quality gate do?",
    "options": [
      "Approve changes without any defined acceptance conditions",
      "Block progression when defined checks fail",
      "Guarantee that a release has no undiscovered vulnerabilities",
      "Replace operational monitoring after the release",
    ],
    "answer": 1,
    "explanation": "Quality gates enforce conditions such as tests, coverage or security findings before promotion."
  },
  {
    "id": "EPSO-ICT1-104",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "medium",
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
    "level": "easy",
    "question": "Why use a deployment lock when two automated pipelines target the same environment?",
    "options": [
      "Prevent infrastructure changes by every other team permanently",
      "Increase the service’s replication factor automatically",
      "Guarantee that every concurrent operation is idempotent",
      "Prevent conflicting concurrent modifications",
    ],
    "answer": 3,
    "explanation": "Deployment locks serialise changes to shared environments."
  },
  {
    "id": "EPSO-ICT1-106",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "easy",
    "question": "What is a drift-detection job for?",
    "options": [
      "Measure application response times without inspecting configuration",
      "Copy the live configuration over declared intent without review",
      "Identify deviations between declared and running infrastructure",
      "Check only whether the last pipeline exited successfully",
    ],
    "answer": 2,
    "explanation": "Drift detection compares desired configuration with deployed resources."
  },
  {
    "id": "EPSO-ICT1-107",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "medium",
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
    "level": "medium",
    "question": "What is the main security concern of installing dependencies without pinned versions?",
    "options": [
      "Unexpected or malicious upstream changes may be introduced",
      "Pinned versions guarantee that components have no vulnerabilities",
      "Only the deployment frequency is affected",
      "Dependency integrity is guaranteed by a successful build",
    ],
    "answer": 0,
    "explanation": "Lockfiles and pinning improve repeatability and constrain supply-chain changes."
  },
  {
    "id": "EPSO-ICT1-109",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "easy",
    "question": "Which practice gives traceability from source commit to running production release?",
    "options": [
      "Overwrite every released artefact under the same unversioned name",
      "Track only the current production hostname",
      "Record a release date without linking source or artefact identity",
      "Release provenance and deployment metadata",
    ],
    "answer": 3,
    "explanation": "Provenance connects source, build, artefact and deployed environment."
  },
  {
    "id": "EPSO-ICT1-110",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "medium",
    "question": "An automation job repeats after a transient API timeout. Which design reduces duplicate actions?",
    "options": [
      "Treat every timeout as proof that the remote action did not happen",
      "Start a separate non-idempotent action on each retry",
      "Idempotent operation with retry backoff",
      "Retry indefinitely without a request identifier or delay",
    ],
    "answer": 2,
    "explanation": "Idempotency and backoff limit duplicate side effects and provider overload."
  },
  {
    "id": "EPSO-ICT1-111",
    "category": "epso_ad7_infrastructure",
    "topic": "DevSecOps and automation",
    "level": "medium",
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
    "level": "easy",
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
    "level": "medium",
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
    "level": "easy",
    "question": "What does a SIEM principally provide?",
    "options": [
      "Centralised security event collection, correlation and investigation",
      "Guarantee that every collected event is a confirmed intrusion",
      "Replace endpoint protection and all network controls",
      "Perform backup restoration for failed business services",
    ],
    "answer": 0,
    "explanation": "SIEM supports detection and investigation by correlating security telemetry."
  },
  {
    "id": "EPSO-ICT1-117",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "medium",
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
    "level": "easy",
    "question": "What differentiates an authenticated vulnerability scan?",
    "options": [
      "It is limited to looking up the target’s public DNS records",
      "It guarantees that no vulnerability can be missed",
      "It uses authorised credentials to inspect internal system state",
      "It means no authorisation from the system owner is required",
    ],
    "answer": 2,
    "explanation": "Authenticated scans can inspect installed packages and configurations more deeply."
  },
  {
    "id": "EPSO-ICT1-119",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "medium",
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
    "level": "medium",
    "question": "Why maintain synchronised timestamps in security logs?",
    "options": [
      "Enable reliable cross-system correlation and timelines",
      "Make every source log use an unrelated local time with no offset",
      "Replace evidence retention with a daily event count",
      "Prevent all malicious activity merely by setting the correct time",
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
    "level": "medium",
    "question": "Which measure helps contain a compromised privileged account?",
    "options": [
      "Increase the account’s privileges until investigation is complete",
      "Delete the account’s audit trail before containing access",
      "Rapid credential revocation and session termination",
      "Rotate a password but deliberately preserve every active session",
    ],
    "answer": 2,
    "explanation": "Revoking credentials and sessions limits continued attacker access."
  },
  {
    "id": "EPSO-ICT1-123",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "medium",
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
      "A written plan guarantees that all recovery targets will be met",
      "Backup-job success proves that application dependencies can recover",
      "Supplier assurances eliminate the need to test recovery assumptions",
    ],
    "answer": 0,
    "explanation": "Exercises reveal procedural and technical gaps in documented recovery assumptions."
  },
  {
    "id": "EPSO-ICT1-125",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "medium",
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
    "level": "easy",
    "question": "What is the key distinction between an IDS and an IPS?",
    "options": [
      "An IPS always encrypts traffic while an IDS only decrypts it",
      "An IDS replaces the need for endpoint detection",
      "An IPS can block matching traffic inline, while an IDS primarily detects and alerts",
      "An IDS necessarily blocks every packet before it reaches the target",
    ],
    "answer": 2,
    "explanation": "Intrusion prevention may actively enforce blocking decisions; detection primarily observes."
  },
  {
    "id": "EPSO-ICT1-127",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "easy",
    "question": "Which control is most appropriate for protecting a public API from excessive requests?",
    "options": [
      "Change the DNS name without limiting requests to the endpoint",
      "Rate limiting and abuse controls",
      "Increase the backup retention period of the API database",
      "Disable authentication to reduce request processing overhead",
    ],
    "answer": 1,
    "explanation": "Rate limits constrain abusive request volumes and protect service capacity."
  },
  {
    "id": "EPSO-ICT1-128",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "easy",
    "question": "What is the main function of a web application firewall?",
    "options": [
      "Filter suspicious application-layer HTTP traffic",
      "Guarantee that all application business logic is correct",
      "Replace patching and authentication for the application",
      "Encrypt every stored database record without application changes",
    ],
    "answer": 0,
    "explanation": "WAFs inspect application traffic against defined attack patterns and policies."
  },
  {
    "id": "EPSO-ICT1-129",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "medium",
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
    "level": "easy",
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
    "level": "easy",
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
    "level": "easy",
    "question": "Why classify information before defining controls?",
    "options": [
      "Protection can be matched to sensitivity and impact",
      "Make all information public so every team applies the same controls",
      "Eliminate the need to review access to sensitive information",
      "Use identical retention and access rules for every information type",
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
    "level": "medium",
    "question": "Which control helps prevent accidental disclosure of confidential files by email?",
    "options": [
      "Rely only on encrypting the mail server’s disks",
      "Disable attachment inspection to avoid false positives",
      "Data loss prevention rules with classification-aware checks",
      "Increase mailbox storage quotas without inspecting outgoing content",
    ],
    "answer": 2,
    "explanation": "DLP checks outbound data against defined protection policies."
  },
  {
    "id": "EPSO-ICT1-135",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "medium",
    "question": "What is the security risk of an overly broad wildcard firewall rule?",
    "options": [
      "It removes the need to inspect allowed application traffic",
      "Unnecessary services become reachable across trust boundaries",
      "It automatically reduces the privileges held by every user",
      "It prevents every external denial-of-service attack",
    ],
    "answer": 1,
    "explanation": "Overly broad rules increase exposure and potential lateral movement."
  },
  {
    "id": "EPSO-ICT1-136",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "medium",
    "question": "Which response action preserves endpoint investigation data for analysis before rebuilding?",
    "options": [
      "Collect an investigation package and preserve the evidence with appropriate handling",
      "Rebuild the device first and collect only the newly created logs",
      "Clear the device’s security logs before starting the investigation",
      "Delete the incident record once the endpoint is reinstalled",
    ],
    "answer": 0,
    "explanation": "Collect and preserve relevant investigation data before destructive remediation removes it. Record handling and access, and follow the incident response plan; rebuilding a device is not a substitute for preserving evidence."
  },
  {
    "id": "EPSO-ICT1-137",
    "category": "epso_ad7_infrastructure",
    "topic": "Information security and continuity",
    "level": "medium",
    "question": "A production system is infected but supplies a critical public service. Which decision should be based on risk assessment?",
    "options": [
      "Always disconnect every production component without considering consequences",
      "Keep the compromised system fully connected until business hours resume",
      "Rebuild the system before assessing evidence or service dependencies",
      "Containment strategy balancing spread risk against service impact",
    ],
    "answer": 3,
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
    "level": "medium",
    "question": "What should a hardware refresh business case consider beyond purchase price?",
    "options": [
      "Total cost of ownership including maintenance, energy and migration",
      "Only the initial purchase discount from the selected vendor",
      "Only the CPU benchmark score of the proposed model",
      "Only licence cost, excluding migration and operational support",
    ],
    "answer": 0,
    "explanation": "TCO includes ongoing operation and transition costs."
  },
  {
    "id": "EPSO-ICT1-141",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "medium",
    "question": "Why maintain a supported operating-system inventory?",
    "options": [
      "Guarantee compliance with every software licence automatically",
      "Replace the need for vulnerability monitoring",
      "Remove the need to identify owners of obsolete systems",
      "Identify end-of-support exposure and prioritise upgrades",
    ],
    "answer": 3,
    "explanation": "Inventory supports planning for products that no longer receive fixes."
  },
  {
    "id": "EPSO-ICT1-142",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "medium",
    "question": "Before upgrading a critical database, which compatibility test is essential?",
    "options": [
      "Only that the new server has more CPU cores",
      "Only that the database storage volume has enough free space",
      "Application queries, drivers and schema compatibility",
      "Only that the vendor’s demonstration database starts successfully",
    ],
    "answer": 2,
    "explanation": "Database changes can affect clients, schema and application behaviour."
  },
  {
    "id": "EPSO-ICT1-143",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "medium",
    "question": "When is a rollback plan inadequate for a major migration?",
    "options": [
      "When it documents how to return to a compatible prior state",
      "When data is irreversibly transformed without a restoration strategy",
      "When it includes a tested backup restoration procedure",
      "When it specifies measurable decision criteria",
    ],
    "answer": 1,
    "explanation": "Rollback requires a feasible path to restore the prior service state and data."
  },
  {
    "id": "EPSO-ICT1-144",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "hard",
    "question": "At a sustained ideal 100 Mbps, approximately how long does transferring 12 TB take, using decimal units and ignoring overhead?",
    "options": [
      "11.1 days",
      "1.1 days",
      "11.1 hours",
      "111 days",
    ],
    "answer": 0,
    "explanation": "12 TB = 12 × 10^12 bytes. At 100 × 10^6 bits/s, time = 12 × 10^12 × 8 / (100 × 10^6) = 960,000 seconds, or about 11.1 days. Overhead, contention and validation can make a real migration longer."
  },
  {
    "id": "EPSO-ICT1-145",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "medium",
    "question": "Why set explicit acceptance criteria for an infrastructure project?",
    "options": [
      "Treat a successful purchase as proof that every service target is met",
      "Leave completion criteria undefined until after handover",
      "Require no operational owner to accept the delivered service",
      "Define objectively what must work before handover",
    ],
    "answer": 3,
    "explanation": "Acceptance criteria provide measurable evidence of completion."
  },
  {
    "id": "EPSO-ICT1-146",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "easy",
    "question": "What is the principal purpose of capacity forecasting?",
    "options": [
      "Replace demand monitoring with a one-off hardware purchase",
      "Define an incident severity without measuring resource demand",
      "Predict demand and plan resources ahead of saturation",
      "Guarantee that no unexpected demand can ever occur",
    ],
    "answer": 2,
    "explanation": "Forecasting aligns resource additions with expected workload trends."
  },
  {
    "id": "EPSO-ICT1-147",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "medium",
    "question": "Which action should accompany an operating-system version upgrade?",
    "options": [
      "Grant users permanent administrator privileges to avoid compatibility testing",
      "Update security baselines and verify hardening",
      "Reuse an obsolete baseline without reviewing changed settings",
      "Disable endpoint protection until the next annual audit",
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
    "level": "easy",
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
    "level": "easy",
    "question": "Which lifecycle process should track supplier end-of-support notifications?",
    "options": [
      "Invoice approval without recording technical support dates",
      "User access recertification without an asset lifecycle inventory",
      "Technology lifecycle and obsolescence management",
      "Incident closure alone, without tracking supported versions",
    ],
    "answer": 2,
    "explanation": "Obsolescence tracking enables planned replacement before support ends."
  },
  {
    "id": "EPSO-ICT1-151",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "medium",
    "question": "Which handover package best establishes operational readiness for a new production service?",
    "options": [
      "A successful development demo without recovery or support validation",
      "Validated runbooks, monitoring, ownership, escalation, recovery procedures and accepted residual risks",
      "Architecture diagrams and source code, with support ownership to be decided later",
      "A completed purchase order and supplier installation confirmation only",
    ],
    "answer": 1,
    "explanation": "Operational readiness includes the ability to operate, monitor, support and recover the service, with named owners and explicit acceptance of remaining risks. A purchase or a demonstration alone does not establish that readiness."
  },
  {
    "id": "EPSO-ICT1-152",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "medium",
    "question": "Why schedule a pilot before fleet-wide workstation deployment?",
    "options": [
      "Validate compatibility and operational impact on a limited group",
      "Replace the need for testing with a supplier compatibility claim",
      "Prove that every future version will work without another pilot",
      "Avoid gathering feedback from the users in the pilot",
    ],
    "answer": 0,
    "explanation": "Pilots expose faults before widespread rollout."
  },
  {
    "id": "EPSO-ICT1-153",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "easy",
    "question": "Which metric best measures server capacity utilisation trends?",
    "options": [
      "The number of incidents alone, without resource measurements",
      "The current purchase price of replacement servers",
      "The number of applications listed in the service catalogue",
      "CPU, memory, storage and network usage over time",
    ],
    "answer": 3,
    "explanation": "Capacity requires resource-demand trend measurements."
  },
  {
    "id": "EPSO-ICT1-154",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "medium",
    "question": "A storage supplier ends firmware support next quarter. Which risk should be evaluated first?",
    "options": [
      "Whether purchase invoices have been archived for all affected devices",
      "Whether rack labels follow the current naming standard",
      "Security and operational supportability of the affected systems",
      "Whether a newer model has a higher advertised benchmark",
    ],
    "answer": 2,
    "explanation": "Unsupported firmware creates security and maintenance constraints."
  },
  {
    "id": "EPSO-ICT1-155",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "medium",
    "question": "Why should test and production environments have separate credentials?",
    "options": [
      "Avoid reviewing environment access once initial deployment succeeds",
      "Prevent privilege spillover and reduce cross-environment compromise",
      "Allow production secrets in every development runner to simplify testing",
      "Use one shared account so access cannot be attributed to an environment",
    ],
    "answer": 1,
    "explanation": "Environment separation limits lateral movement and accidental production access."
  },
  {
    "id": "EPSO-ICT1-156",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "medium",
    "question": "Which factor should drive patch deployment priority?",
    "options": [
      "Exploitability, exposure, business criticality and compensating controls",
      "The alphabetical order of server hostnames",
      "Only how long the patch has been available, regardless of exposure",
      "Only the purchase price of the affected equipment",
    ],
    "answer": 0,
    "explanation": "Risk-based prioritisation targets the greatest probable impact."
  },
  {
    "id": "EPSO-ICT1-157",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "medium",
    "question": "A stateful service must move between cloud providers with minimal data loss. What should the cutover plan establish?",
    "options": [
      "Only that both providers support the same VM image format",
      "Only that DNS can be changed to the new service endpoint",
      "Only that the target provider offers more aggregate storage",
      "A validated replication and consistency strategy, cutover criteria and a recovery path",
    ],
    "answer": 3,
    "explanation": "Application portability alone does not preserve state. Validate data replication, consistency, final synchronisation, cutover and the conditions under which the source or target can safely resume service."
  },
  {
    "id": "EPSO-ICT1-158",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "easy",
    "question": "Which document records why an architectural option was chosen over alternatives?",
    "options": [
      "An asset purchase receipt without considered alternatives",
      "A deployment log containing only process exit codes",
      "Architecture decision record",
      "An incident timeline that contains no design rationale",
    ],
    "answer": 2,
    "explanation": "ADRs capture rationale, context and consequences of design choices."
  },
  {
    "id": "EPSO-ICT1-159",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "medium",
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
    "level": "easy",
    "question": "Which inventory attribute is critical for planning OS replacement?",
    "options": [
      "The asset’s naming prefix without its software version",
      "Its most recent purchase invoice alone",
      "The number of users currently logged on, without a support status",
      "Installed version and vendor support end date",
    ],
    "answer": 3,
    "explanation": "Version and support status determine exposure and upgrade timing."
  },
  {
    "id": "EPSO-ICT1-162",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "medium",
    "question": "What should be done before removing an old DNS service?",
    "options": [
      "Change the server hostname without identifying static clients",
      "Keep an undocumented server running without testing the replacement",
      "Identify all consumers and migrate dependencies with validation",
      "Delete the service after confirming that its process is idle once",
    ],
    "answer": 2,
    "explanation": "Dependency mapping prevents hidden consumers from losing name resolution."
  },
  {
    "id": "EPSO-ICT1-163",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "medium",
    "question": "Which test best proves a newly installed UPS meets a system's continuity needs?",
    "options": [
      "Measure only the normal utility voltage with no failover",
      "Controlled load and failover test under realistic conditions",
      "Verify only the manufacturer’s advertised maximum runtime",
      "Inspect the UPS label without connecting the intended load",
    ],
    "answer": 1,
    "explanation": "Load and failover testing verifies real runtime and transfer behaviour."
  },
  {
    "id": "EPSO-ICT1-164",
    "category": "epso_ad7_infrastructure",
    "topic": "ICT infrastructure lifecycle",
    "level": "medium",
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
    "level": "medium",
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
    "level": "medium",
    "question": "What is the main benefit of confidential computing?",
    "options": [
      "Removing the need to trust or attest the execution environment",
      "Protect certain data during processing using trusted execution environments",
      "Protecting every workload from all software vulnerabilities",
      "Encrypting only data sent over a network",
    ],
    "answer": 1,
    "explanation": "Confidential computing aims to reduce exposure of data in use."
  },
  {
    "id": "EPSO-ICT1-168",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "easy",
    "question": "Why use an open telemetry standard across infrastructure tools?",
    "options": [
      "Enable consistent collection and export of observability data",
      "Guarantee that all traces, metrics and logs use identical storage",
      "Replace service instrumentation with a shared dashboard template",
      "Require all monitored services to use one programming language",
    ],
    "answer": 0,
    "explanation": "Open telemetry conventions and protocols improve interoperability."
  },
  {
    "id": "EPSO-ICT1-169",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "easy",
    "question": "Which factor is central to evaluating edge computing for a latency-sensitive service?",
    "options": [
      "The number of features in the management dashboard alone",
      "The provider’s advertised storage capacity without measuring response time",
      "The length of the procurement contract alone",
      "Latency and locality of data processing",
    ],
    "answer": 3,
    "explanation": "Processing near data sources can reduce round-trip time and bandwidth needs."
  },
  {
    "id": "EPSO-ICT1-170",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "easy",
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
    "level": "medium",
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
      "Model and simulate behaviour of a corresponding physical or logical system",
      "Replace the need to observe the real infrastructure",
      "Guarantee exact predictions without validating the model",
      "Provide an independent backup of every production data record",
    ],
    "answer": 0,
    "explanation": "Digital twins represent systems for monitoring or scenario analysis."
  },
  {
    "id": "EPSO-ICT1-173",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "medium",
    "question": "What is the principal concern when adopting an immature open-source component?",
    "options": [
      "The visual design of the repository landing page",
      "The length of the component name without maintenance evidence",
      "The total number of downloads without evaluating support and security",
      "Maintenance capacity, security response and community sustainability",
    ],
    "answer": 3,
    "explanation": "Open-source selection must assess governance and long-term maintenance."
  },
  {
    "id": "EPSO-ICT1-174",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "medium",
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
      "Buy more storage for the same unvalidated alerts without tuning detection",
      "Signal quality, baselines and alert validation",
      "Increase the number of identical alerts sent to every team",
      "Disable all event correlation permanently",
    ],
    "answer": 1,
    "explanation": "Anomaly tools need tuning to avoid alert fatigue."
  },
  {
    "id": "EPSO-ICT1-176",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "easy",
    "question": "What does a service mesh most commonly provide?",
    "options": [
      "Traffic management, identity and policy for service-to-service communication",
      "Create parity blocks for a storage array",
      "Replace the underlying physical network and all application code",
      "Schedule batch compute jobs across an HPC cluster",
    ],
    "answer": 0,
    "explanation": "Service meshes manage communication between distributed services."
  },
  {
    "id": "EPSO-ICT1-177",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "medium",
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
      "Average CPU utilisation divided by rack power capacity",
      "Power usage effectiveness",
      "Energy used by IT equipment divided by total facility energy",
      "Total cooling energy divided by server purchase price",
    ],
    "answer": 1,
    "explanation": "PUE compares total facility energy with IT equipment energy."
  },
  {
    "id": "EPSO-ICT1-180",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "medium",
    "question": "What limitation must be considered for containerising legacy applications?",
    "options": [
      "Persistent state and operating-system dependencies may constrain portability",
      "Containers remove all host-kernel and operating-system compatibility concerns",
      "Every stateful dependency is made portable automatically",
      "Containerisation automatically removes licence and support restrictions",
    ],
    "answer": 0,
    "explanation": "Legacy dependencies and state management can complicate migration."
  },
  {
    "id": "EPSO-ICT1-181",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "easy",
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
    "level": "medium",
    "question": "Which concern is important when applying generative AI to incident data?",
    "options": [
      "Send all raw secrets and personal data to any available model endpoint",
      "Treat every generated recommendation as an approved production change",
      "Protection of sensitive logs and potential inaccurate outputs",
      "Assume generated summaries are accurate because logs were supplied",
    ],
    "answer": 2,
    "explanation": "Sensitive operational data and output reliability require governance."
  },
  {
    "id": "EPSO-ICT1-183",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "easy",
    "question": "What is the core idea of platform engineering?",
    "options": [
      "Measure success only by the number of platform features published",
      "Provide reusable self-service capabilities and standardised internal developer services",
      "Require each team to build its own incompatible deployment tools",
      "Replace application teams with a single approval queue for every task",
    ],
    "answer": 1,
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
    "level": "medium",
    "question": "Which architecture improves resilience against one cloud region becoming unavailable?",
    "options": [
      "Multiple availability zones wholly within the unavailable region",
      "A larger VM in the same failed region",
      "A second DNS name pointing only to the unavailable endpoint",
      "Multi-region design with validated failover and data replication",
    ],
    "answer": 3,
    "explanation": "Multi-region designs address regional failure domains when correctly tested."
  },
  {
    "id": "EPSO-ICT1-186",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "medium",
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
    "level": "medium",
    "question": "Which criterion matters for low-code workflow platforms in regulated environments?",
    "options": [
      "Auditability, access control and change governance",
      "Only the visual style of the workflow builder",
      "Only the number of templates supplied out of the box",
      "No access or change controls because no traditional code is written",
    ],
    "answer": 0,
    "explanation": "Enterprise workflows require traceable controlled changes and secure access."
  },
  {
    "id": "EPSO-ICT1-189",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "easy",
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
      "Guarantee that all copies of data remain in a region without checking the contract",
      "Eliminate the need to assess international data transfers",
      "Location and transfer rules may constrain where sensitive information is processed",
      "Determine the CPU instruction set used by every managed service",
    ],
    "answer": 2,
    "explanation": "Data placement can have contractual and legal implications."
  },
  {
    "id": "EPSO-ICT1-191",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "medium",
    "question": "What should a technology watch report distinguish?",
    "options": [
      "Only the age of the technology, irrespective of evidence",
      "Evidence from marketing claims and assessed applicability",
      "Product announcements without checking applicability",
      "Only benchmark claims supplied by the vendor",
    ],
    "answer": 1,
    "explanation": "Technology assessment should separate verified capability from assertions and relevance."
  },
  {
    "id": "EPSO-ICT1-192",
    "category": "epso_ad7_infrastructure",
    "topic": "Emerging technologies",
    "level": "medium",
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
    "level": "easy",
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
    "level": "easy",
    "question": "What is the principal purpose of a project risk register?",
    "options": [
      "Record risks without owners, impact or response actions",
      "Replace project decisions with a list of current software versions",
      "Track likelihood, impact, owner and treatment of risks",
      "List only problems that have already occurred",
    ],
    "answer": 2,
    "explanation": "A risk register supports active risk treatment and accountability."
  },
  {
    "id": "EPSO-ICT1-195",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "medium",
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
    "level": "easy",
    "question": "What does an architecture diagram need to remain operationally useful?",
    "options": [
      "Version, ownership and alignment with the deployed state",
      "A one-off design snapshot with no named owner",
      "An attractive vendor diagram unrelated to the deployed configuration",
      "A list of hostnames without versions or change history",
    ],
    "answer": 0,
    "explanation": "Current version-controlled diagrams support troubleshooting and change planning."
  },
  {
    "id": "EPSO-ICT1-197",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "medium",
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
    "level": "easy",
    "question": "What information is essential in a service dependency map?",
    "options": [
      "Only a list of service names with no relationship information",
      "Only the number of incidents per calendar month",
      "Upstream and downstream relationships between services and components",
      "Only the number of applications purchased from each vendor",
    ],
    "answer": 2,
    "explanation": "Dependency mapping supports impact analysis and recovery sequencing."
  },
  {
    "id": "EPSO-ICT1-199",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "easy",
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
    "level": "medium",
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
    "level": "medium",
    "question": "How can a project avoid ambiguous completion status?",
    "options": [
      "Declare completion whenever the supplier issues its final invoice",
      "Allow each team to decide privately what delivered means",
      "Close the project after the final development demonstration only",
      "Use measurable deliverables and explicit acceptance sign-off",
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
    "level": "medium",
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
      "Clarify who is responsible, accountable, consulted and informed",
      "Prescribe one universal escalation path for every technical incident",
      "Replace an accountability decision with a list of all team members",
      "Allocate CPU and storage resources automatically",
    ],
    "answer": 0,
    "explanation": "RACI separates execution from accountability and communication roles."
  },
  {
    "id": "EPSO-ICT1-205",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "medium",
    "question": "What is an architecture review board primarily intended to assess?",
    "options": [
      "Approve staff schedules independently of architecture constraints",
      "Replace all service acceptance and security testing",
      "Select a vendor solely from its marketing presentation",
      "Design alignment with agreed standards and constraints",
    ],
    "answer": 3,
    "explanation": "Architecture governance evaluates solution decisions and exceptions."
  },
  {
    "id": "EPSO-ICT1-206",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "medium",
    "question": "A portfolio includes projects with double-booked specialist staff. What should be reviewed?",
    "options": [
      "Only the number of reports submitted to the steering committee",
      "Only the total original budget without considering available skills",
      "Resource capacity and project scheduling",
      "Only which project sponsor submitted the first request",
    ],
    "answer": 2,
    "explanation": "Capacity planning prevents unachievable parallel commitments."
  },
  {
    "id": "EPSO-ICT1-207",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "medium",
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
      "Allow every exception indefinitely once requested",
      "Keep exceptions informal so they do not affect audit results",
      "Treat a vendor recommendation as automatic approval of an exception",
    ],
    "answer": 0,
    "explanation": "Documented exceptions make risk acceptance explicit and reviewable."
  },
  {
    "id": "EPSO-ICT1-209",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "easy",
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
    "level": "easy",
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
    "level": "easy",
    "question": "What information is needed to evaluate a project cost variance?",
    "options": [
      "The current hardware capacity without any financial baseline",
      "Baseline budget, actuals and forecast at completion",
      "The original purchase order alone, without actual expenditure",
      "The number of closed project tasks without their costs",
    ],
    "answer": 1,
    "explanation": "Variance assessment compares expenditure and expected final cost with baseline."
  },
  {
    "id": "EPSO-ICT1-212",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "easy",
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
    "level": "medium",
    "question": "What should an infrastructure operating model define?",
    "options": [
      "Only how many employees appear on the organisation chart",
      "Only which vendor provides the service dashboard",
      "Only the initial cost of the infrastructure equipment",
      "Responsibilities, processes, escalation, tooling and service boundaries",
    ],
    "answer": 3,
    "explanation": "Operating models clarify how services are operated and supported."
  },
  {
    "id": "EPSO-ICT1-214",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "easy",
    "question": "Which observability signal follows a request as it crosses several microservices?",
    "options": [
      "A monthly count of closed incidents",
      "An asset list without request or timing relationships",
      "A distributed trace made of related spans",
      "A single host’s average CPU utilisation",
    ],
    "answer": 2,
    "explanation": "Distributed tracing records a request’s path through services as linked spans, exposing timing, dependencies and errors. An architecture diagram describes a design but does not record an individual live request."
  },
  {
    "id": "EPSO-ICT1-215",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "medium",
    "question": "What is the purpose of configuration item relationships in change impact analysis?",
    "options": [
      "Determine the purchase price of unrelated assets",
      "Identify services that may be affected by a component change",
      "Guarantee that every change has no business impact",
      "Replace all testing with a list of configuration item names",
    ],
    "answer": 1,
    "explanation": "CI dependencies support evaluation of blast radius."
  },
  {
    "id": "EPSO-ICT1-216",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "medium",
    "question": "Which measure helps verify portfolio value after project completion?",
    "options": [
      "Benefits realisation review against initial objectives",
      "The number of documents archived at project closure alone",
      "Only whether every project invoice was paid on time",
      "The count of implementation tasks regardless of outcomes",
    ],
    "answer": 0,
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
      "Prevent unauthorised disclosure or alteration of sensitive topology and operational information",
      "Make all diagrams publicly editable",
      "Replace audit logging",
    ],
    "answer": 1,
    "explanation": "Control access to sensitive operational documentation and protect its integrity. Keep passwords and tokens in an approved secret manager; documentation should describe authorised retrieval procedures rather than embed live credentials."
  },
  {
    "id": "EPSO-ICT1-218",
    "category": "epso_ad7_infrastructure",
    "topic": "Infrastructure portfolios and documentation",
    "level": "medium",
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
    "level": "medium",
    "question": "What should a decommissioning portfolio track?",
    "options": [
      "Only software licence invoices without retirement verification",
      "Assets, dependencies, migration status and verified retirement",
      "Only assets purchased during the current financial year",
      "Only the number of project meetings held",
    ],
    "answer": 1,
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
      "Insufficient network bandwidth in a job doing no inter-node communication",
      "A GPU launch bottleneck in a kernel using only CPU memory",
      "Memory bandwidth",
      "A branch prediction bottleneck despite idle memory channels",
    ],
    "answer": 2,
    "explanation": "Memory-bound kernels are limited by data movement rates."
  },
  {
    "id": "EPSO-ICT1-223",
    "category": "epso_ad7_infrastructure",
    "topic": "High-performance computing",
    "level": "medium",
    "question": "What is a GPU most suited to in HPC?",
    "options": [
      "Guaranteeing lower latency for every single-threaded task",
      "Massively parallel operations on large data sets",
      "A strictly serial workload with extensive unpredictable branching",
      "Running the cluster’s central metadata service by itself",
    ],
    "answer": 1,
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
      "Additional nodes automatically parallelise all unchanged serial code",
      "Communication overhead disappears as soon as node count increases",
      "Increasing the number of cores removes every dependency between tasks",
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
    "level": "medium",
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
    "level": "medium",
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
      "Reading one large sequential file with few metadata operations",
      "Increasing CPU frequency without changing the file workload",
      "Reusing already-open files with no create or delete operations",
      "Creating millions of tiny files",
    ],
    "answer": 3,
    "explanation": "Large numbers of small-file operations place heavy demand on metadata services."
  },
  {
    "id": "EPSO-ICT1-230",
    "category": "epso_ad7_infrastructure",
    "topic": "High-performance computing",
    "level": "easy",
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
    "level": "medium",
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
    "level": "medium",
    "question": "What should be considered when choosing HPC interconnects?",
    "options": [
      "Only the advertised link bandwidth, without latency or workload behaviour",
      "Only the physical length of the cable, without communication requirements",
      "Only the vendor name, without congestion or collective-operation tests",
      "Latency, bandwidth, congestion and collective communication patterns",
    ],
    "answer": 3,
    "explanation": "Interconnect performance affects distributed computation and data exchange."
  },
  {
    "id": "EPSO-ICT1-234",
    "category": "epso_ad7_infrastructure",
    "topic": "High-performance computing",
    "level": "medium",
    "question": "An HPC pilot meets a compute benchmark but cannot use enterprise identity or the required data services. What is the appropriate acceptance decision?",
    "options": [
      "Replace end-to-end acceptance with the supplier’s factory hardware test",
      "Treat the failed identity and data integrations as irrelevant to the service",
      "Validate the complete integrated workflow, security controls and agreed service KPIs before production acceptance",
      "Accept production readiness solely because the compute benchmark passed",
    ],
    "answer": 2,
    "explanation": "The notice places HPC in an infrastructure role, including integration with enterprise services, service-management KPIs and security controls. Compute performance alone does not establish readiness of the integrated production service."
  },
  {
    "id": "EPSO-ICT1-235",
    "category": "epso_ad7_infrastructure",
    "topic": "High-performance computing",
    "level": "medium",
    "question": "A job requests 64 cores but consistently uses only 8. What should be investigated?",
    "options": [
      "Disable accounting so low utilisation no longer appears in reports",
      "Parallel efficiency and resource allocation",
      "Increase every future allocation to 128 cores without profiling",
      "Judge efficiency only from the number of cores reserved",
    ],
    "answer": 1,
    "explanation": "Unused allocated cores indicate poor utilisation or a scheduling mismatch."
  },
  {
    "id": "EPSO-ICT1-236",
    "category": "epso_ad7_infrastructure",
    "topic": "High-performance computing",
    "level": "medium",
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
    "level": "easy",
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
      "Operations per byte used to describe arithmetic intensity",
      "FLOPS",
      "Instructions per cycle, independent of elapsed time",
      "Bytes transferred per second between memory and a processor",
    ],
    "answer": 1,
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
    "level": "easy",
    "question": "What is an HPC job array useful for?",
    "options": [
      "Force unrelated tasks to share a single process memory space",
      "Replace all input parameters with a single fixed job configuration",
      "Launching many related independent tasks under a scheduler",
      "Automatically parallelise the internal code of one serial executable",
    ],
    "answer": 2,
    "explanation": "Job arrays simplify many similar parameter-sweep tasks."
  },
  {
    "id": "EPSO-ICT1-243",
    "category": "epso_ad7_infrastructure",
    "topic": "High-performance computing",
    "level": "medium",
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
      "RDMA-capable fabric",
      "A DNS cache with a longer time to live",
      "An HTTP reverse proxy on the login node",
      "A backup scheduler that serialises all compute traffic",
    ],
    "answer": 0,
    "explanation": "RDMA supports data transfer with reduced CPU involvement and copies."
  },
  {
    "id": "EPSO-ICT1-245",
    "category": "epso_ad7_infrastructure",
    "topic": "High-performance computing",
    "level": "medium",
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
    "level": "easy",
    "question": "Which metric measures scheduler resource occupancy rather than actual CPU execution efficiency in an HPC cluster?",
    "options": [
      "Application speed-up divided by the number of allocated cores",
      "Floating-point operations per second achieved by the job",
      "Allocated core-hours divided by available core-hours over the same period",
      "Average CPU busy time within allocated cores",
    ],
    "answer": 2,
    "explanation": "Allocated capacity measures reservation or occupancy. It must not be confused with actual CPU/GPU utilisation or parallel efficiency; use comparable units and the same measurement window."
  },
  {
    "id": "EPSO-ICT1-247",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "hard",
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
    "level": "easy",
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
    "level": "medium",
    "question": "A web service uses RSA key exchange. What should its PQC migration inventory identify?",
    "options": [
      "Protocols, algorithms, key sizes and dependent endpoints",
      "Only the number of application servers, without their cryptographic use",
      "Only current certificate expiry dates, ignoring algorithms and dependencies",
      "Only network bandwidth without protocols or key information",
    ],
    "answer": 0,
    "explanation": "Cryptographic inventories map where vulnerable mechanisms are used."
  },
  {
    "id": "EPSO-ICT1-253",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "easy",
    "question": "What does harvest-now-decrypt-later refer to?",
    "options": [
      "Rotate encryption keys while deliberately discarding all retained ciphertext",
      "Recover a forgotten password from a current backup only",
      "Replace public-key algorithms after every scheduled backup completes",
      "Storing intercepted encrypted data for possible future decryption",
    ],
    "answer": 3,
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
    "level": "easy",
    "question": "What is a cryptographic agility inventory intended to record?",
    "options": [
      "Only key lengths without protocols, certificates or dependencies",
      "Algorithms, keys, protocols, certificates and owners",
      "Only certificate expiration dates without algorithms or owners",
      "Only server versions without identifying where cryptography is used",
    ],
    "answer": 1,
    "explanation": "Inventory enables coordinated algorithm replacement and lifecycle planning."
  },
  {
    "id": "EPSO-ICT1-256",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "easy",
    "question": "What is the difference between quantum key distribution and post-quantum algorithms?",
    "options": [
      "QKD uses quantum communication; PQC algorithms run on conventional computers",
      "Both approaches require quantum hardware at every application endpoint",
      "PQC requires a dedicated quantum communication channel",
      "QKD automatically authenticates classical endpoints without any other trust mechanism",
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
    "level": "medium",
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
    "level": "medium",
    "question": "A quantum/HPC pilot claims a speed-up using only quantum-kernel time. What is needed to assess the infrastructure benefit?",
    "options": [
      "Assume every use case benefits once quantum hardware is available",
      "Compare the full hybrid workflow with a suitable classical baseline, including data movement, queueing and required result quality",
      "Compare only the advertised number of qubits",
      "Ignore classical preprocessing and postprocessing because they are not quantum operations",
    ],
    "answer": 1,
    "explanation": "Evaluate an end-to-end use case, not an isolated kernel claim. Include classical work, orchestration, data transfers, queueing, result quality and operational constraints. A pilot should test whether a benefit exists rather than assume quantum advantage."
  },
  {
    "id": "EPSO-ICT1-260",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "hard",
    "question": "Why is quantum error correction essential to scalable computation?",
    "options": [
      "Physical qubits are noisy and logical computation needs fault tolerance",
      "It eliminates the need to control noise in physical qubits",
      "It makes every noisy physical qubit operate perfectly by itself",
      "It guarantees that every quantum algorithm has zero computational overhead",
    ],
    "answer": 0,
    "explanation": "Error correction protects logical qubits from physical noise and errors."
  },
  {
    "id": "EPSO-ICT1-261",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "medium",
    "question": "Which data requirements belong in the acceptance criteria for a quantum-sensing pilot integrated with enterprise systems?",
    "options": [
      "Only a dashboard colour convention, without measurement metadata",
      "Only sample count, regardless of units or calibration",
      "Only the sensor vendor’s marketing accuracy claim",
      "Documented units, timestamps, calibration traceability and measurement uncertainty",
    ],
    "answer": 3,
    "explanation": "Data integration must preserve the meaning and quality of measurements. Define units, timing, calibration/traceability and uncertainty, along with formats and access controls. These are metrology and integration requirements, not a claim that quantum sensors are automatically more accurate."
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
      "Only exhaustive search of classical passwords, regardless of the implementation",
      "Side-channel attacks",
      "Only attacks that require a large fault-tolerant quantum computer",
      "No implementation attacks, because standardising the algorithm prevents them",
    ],
    "answer": 1,
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
    "level": "medium",
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
    "level": "medium",
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
    "level": "medium",
    "question": "Which PQC migration goal is especially urgent for archives kept confidential for decades?",
    "options": [
      "Reduce the number of users authorised to view public information",
      "Retain only current certificate expiry dates without protecting captured ciphertext",
      "Protect data against future decryption of captured ciphertext",
      "Guarantee that every archived dataset can be published immediately",
    ],
    "answer": 2,
    "explanation": "Long-term confidentiality can be threatened even before a capable quantum attacker exists."
  },
  {
    "id": "EPSO-ICT1-271",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "medium",
    "question": "Why test both key rotation and algorithm replacement during a crypto-agility exercise?",
    "options": [
      "Avoid testing disaster recovery",
      "Verify that keys and algorithms can change without loss of service",
      "Increase the number of permanent credentials",
      "Remove certificate expiry dates"
    ],
    "answer": 1,
    "explanation": "Rotating a key and replacing an algorithm are distinct operations. Test both, including dependent certificates, protocol support, recovery and continued service operation; key rotation alone does not establish algorithm agility."
  },
  {
    "id": "EPSO-ICT1-272",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "easy",
    "question": "What is quantum annealing primarily associated with?",
    "options": [
      "Optimisation-oriented quantum approaches",
      "A universal guarantee of polynomial-time solutions to all hard problems",
      "A direct substitute for all fault-tolerant gate-model algorithms",
      "A classical digital-signature scheme standardised as ML-DSA",
    ],
    "answer": 0,
    "explanation": "Quantum annealing is explored for particular optimisation problems rather than universal replacement of classical computing."
  },
  {
    "id": "EPSO-ICT1-273",
    "category": "epso_ad7_infrastructure",
    "topic": "Quantum technologies",
    "level": "medium",
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
    "level": "easy",
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
    "level": "medium",
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
    "level": "medium",
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
      "A purchase invoice that names the equipment but no operational roles",
      "A supplier marketing brochure without agreed responsibilities",
      "A list of support tools with no escalation contacts or ownership",
      "Joint operating procedures and escalation matrix",
    ],
    "answer": 3,
    "explanation": "Explicit joint procedures make multi-supplier escalation actionable."
  },
  {
    "id": "EPSO-ICT1-278",
    "category": "epso_ad7_infrastructure",
    "topic": "Teams, suppliers and SLAs",
    "level": "easy",
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
    "level": "medium",
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
    "level": "easy",
    "question": "What is a practical purpose of regular supplier service reviews?",
    "options": [
      "Examine KPIs, incidents, risks and improvement actions",
      "Replace monitoring with the supplier’s verbal assurances",
      "Remove all past incidents from the review once the invoice is paid",
      "Assess only whether the account manager attended the meeting",
    ],
    "answer": 0,
    "explanation": "Service reviews support evidence-based corrective action and risk oversight."
  },
  {
    "id": "EPSO-ICT1-281",
    "category": "epso_ad7_infrastructure",
    "topic": "Teams, suppliers and SLAs",
    "level": "medium",
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
    "level": "medium",
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
    "level": "medium",
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
    "level": "medium",
    "question": "What should a contract exit plan explicitly cover?",
    "options": [
      "Only the purchase price of replacement licences",
      "Only the date of the final invoice without transition responsibilities",
      "Only a promise to retain the provider’s portal login indefinitely",
      "Data return, knowledge transfer, access revocation and transition support",
    ],
    "answer": 3,
    "explanation": "Exit planning protects continuity and information during provider changes."
  },
  {
    "id": "EPSO-ICT1-286",
    "category": "epso_ad7_infrastructure",
    "topic": "Teams, suppliers and SLAs",
    "level": "easy",
    "question": "Why should support commitments between internal teams be aligned with the customer-facing SLA?",
    "options": [
      "So an internal agreement replaces all supplier contracts",
      "So every internal task can ignore the customer’s restoration target",
      "So internal response and handover times support the end-to-end service promise",
      "So internal teams never need named owners",
    ],
    "answer": 2,
    "explanation": "An end-to-end service target depends on the internal teams and handoffs supporting it. Agree realistic internal responsibilities and timings rather than assuming the external promise can be met independently."
  },
  {
    "id": "EPSO-ICT1-287",
    "category": "epso_ad7_infrastructure",
    "topic": "Teams, suppliers and SLAs",
    "level": "medium",
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
    "level": "easy",
    "question": "What is a supplier dependency concentration risk?",
    "options": [
      "Critical operations rely too heavily on one provider or shared failure domain",
      "Critical vendors use different company names but are evaluated separately",
      "Two providers have different invoice formats",
      "Support is provided from more than one building with no shared dependencies",
    ],
    "answer": 0,
    "explanation": "Concentrated dependencies can amplify outages and commercial exposure."
  },
  {
    "id": "EPSO-ICT1-289",
    "category": "epso_ad7_infrastructure",
    "topic": "Teams, suppliers and SLAs",
    "level": "easy",
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
    "level": "medium",
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
    "level": "medium",
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
    "level": "easy",
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
    "level": "medium",
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
    "level": "medium",
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
    "level": "medium",
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
    "level": "medium",
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
    "level": "medium",
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
