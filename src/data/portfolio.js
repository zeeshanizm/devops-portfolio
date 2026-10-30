// Edit all personal details here. Replace placeholder links before publishing.
export const profile = {
  name: 'Zeeshan Ahmad', initials: 'ZA', role: 'DevOps Engineer', secondaryRole: 'IT Infrastructure Consultant',
  headline: 'I ARCHITECT RESILIENT INFRASTRUCTURE AT SCALE.',
  intro: 'I design, automate and operate cloud infrastructure that keeps critical systems reliable, secure and ready to scale.',
  location: 'Gurugram, India', email: 'zeeshan.ahmad413@gmail.com', github: 'https://github.com/zeeshanizm', linkedin: 'https://www.linkedin.com/in/zeeshanizm/', resume: '/Zeeshan_Ahmad_Resume.pdf',
  experience: '10+', uptime: '99.98%', deployment: '75%', services: '100+',
};
export const capabilities = [
  { title: 'Cloud Architecture', label: '01 / DESIGN', description: 'Resilient, scalable infrastructure across AWS and Azure with a focus on availability, governance and cost efficiency.', stack: ['AWS','Azure','Networking','High Availability'] },
  { title: 'CI/CD Automation', label: '02 / AUTOMATE', description: 'Repeatable delivery pipelines that reduce manual steps and move code safely from commit to production.', stack: ['Jenkins','Git','CI/CD','Release Automation'] },
  { title: 'Containers & Orchestration', label: '03 / OPERATE', description: 'Containerized services and orchestrated workloads designed for consistency, observability and smooth rollouts.', stack: ['Docker','Kubernetes','Microservices','Linux'] },
  { title: 'Infrastructure as Code', label: '04 / STANDARDIZE', description: 'Version-controlled infrastructure definitions for predictable environments, faster recovery and safer changes.', stack: ['Terraform','IaC','Configuration Management','Git'] },
  { title: 'Observability & Reliability', label: '05 / PROTECT', description: 'Actionable monitoring, incident response and performance optimization to keep services dependable.', stack: ['Monitoring','Logging','SRE','Incident Management'] },
  { title: 'Performance & Cost', label: '06 / OPTIMIZE', description: 'Measure resource utilization, remove inefficiencies and improve infrastructure cost without compromising reliability.', stack: ['Cost Management','Capacity Planning','Performance','Optimization'] },
];
export const projects = [
  { number:'01', category:'AUTOMATION / DELIVERY', title:'CI/CD Pipeline Modernization', description:'Automated delivery for 25+ microservices using Jenkins, Docker and Kubernetes; reduced deployment time by 75% with SonarQube, Nexus and automated testing.', tags:['Jenkins','Docker','Kubernetes','SonarQube','Nexus'], icon:'pipeline' },
  { number:'02', category:'CLOUD / INFRASTRUCTURE', title:'Azure Infrastructure Automation with Terraform', description:'Reusable Terraform modules for Azure VNets, VMs, SQL Database and AKS across dev, stage and production, with Azure Blob Storage remote state.', tags:['Terraform','Azure','AKS','Ansible'], icon:'cloud' },
  { number:'03', category:'OBSERVABILITY / SRE', title:'Kubernetes Observability & Monitoring', description:'Prometheus, Grafana and Alertmanager monitoring with centralized EFK logs for 100+ microservices and custom SLO/SLI dashboards.', tags:['Kubernetes','Prometheus','Grafana','EFK'], icon:'boxes' },
  { number:'04', category:'RESILIENCE / RECOVERY', title:'Disaster Recovery & Backup Automation', description:'Automated AKS and Azure backup and recovery using Azure Backup, Velero and Terraform; conducted disaster recovery drills and standardized restoration procedures.', tags:['Azure Backup','Velero','Terraform','AKS'], icon:'cloud' },
  { number:'05', category:'MODERNIZATION / CONTAINERS', title:'Legacy Application Containerization & Migration', description:'Containerized legacy applications with Docker and migrated workloads to Kubernetes; developed Helm charts, ingress rules and rollback strategies.', tags:['Docker','Kubernetes','Helm','AWS'], icon:'boxes' },
];
export const experience = [
  { period:'FEB 2019 — PRESENT', title:'IT Infrastructure Consultant / DevOps Engineer', company:'Avaal Technologies India Pvt. Ltd.', detail:'CI/CD pipelines and infrastructure as code with Jenkins, GitLab CI/CD and Git; scalable Azure and AWS deployments.' },
  { period:'2016 — 2019', title:'Network Engineer', company:'IMSI India Pvt. Ltd.', detail:'Managed Cisco and Juniper networks, route-based IP infrastructure, packet analysis and critical incident escalations.' },
  { period:'2013 — 2016', title:'IT Coordinator', company:'Radisson Blu Haridwar', detail:'Delivered IT projects, managed infrastructure costs, policies, LAN/WAN connectivity and network equipment.' },
  { period:'2012 — JAN 2013', title:'Cyber Executive', company:'Teamlease Services Pvt. Ltd.', detail:'Provided Wi-Fi, internet, LAN and network troubleshooting support and assisted with project delivery.' },
];
export const education = [
  { period:'2008 — 2012', degree:'Bachelor of Technology — Information Technology', school:'Shobhit University, Meerut' },
  { period:'2006 — 2007', degree:'Higher Secondary / Intermediate', school:'Modern Era Public School, Bijnor' },
];
export const tools = ['Azure','AWS','Jenkins','Git','Docker','Kubernetes','Helm','Terraform','Prometheus','Grafana','Python','Jira','Trello','Slack','Zoho'];
