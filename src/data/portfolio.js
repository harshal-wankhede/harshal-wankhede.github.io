// All the text on the site lives here. Edit this file to update your portfolio.
export const PROFILE = {
  name: "Harshal Wankhede",
  email: "harshalw771@gmail.com",
  github: "https://github.com/harshal-wankhede",
  linkedin: "https://www.linkedin.com/in/harshal-w",
};

export const NAV = ["About", "Work", "Projects", "Skills", "Certifications", "Contact"];

export const MARQUEE = ["GitLab CI/CD", "MSBuild", "PowerShell", "Docker", "AWS", "Ansible", "Jenkins", "IIS", "C#", "React"];

export const STAGES = [
  ["Commit", "git push → merge request approved on release branch"],
  ["Build", "msbuild + nuget restore … .dll artifacts compiled"],
  ["Artifact", "versioned build stored in GitLab for traceability"],
  ["Deploy", "PowerShell (WebAdministration): publish, recycle AppPool, restart"],
  ["Verify", "HTTP health check on Service.svc … smoke test passed"],
];

export const WHAT_I_DO = [
  ["GitLab administration", "Repositories, access controls and branching strategies across Dev, QA, Release and Production."],
  ["Build & release", "Weekly release builds through GitLab CI/CD, with build checks and deployment checklists."],
  ["Deployment automation", "PowerShell scripts that publish to IIS, manage AppPools and verify the deployment."],
  ["Production support", "Log analysis and root-cause work with QA and Operations, fixing defects in C#, ASP.NET MVC and SQL."],
];

export const JOBS = [
  {
    title: "Technical Support Engineer, Build, Release & GitLab Operations",
    company: "Peocit Software Solutions, remote · K3one Core Banking Solution",
    period: "Nov 2023 – now",
    points: [
      "Review and approve merge requests and resolve conflicts during release cycles.",
      "Coordinate release execution with Development, QA, Infrastructure and Deployment teams.",
      "Resolve defect (DF) tickets and production incidents to keep the application available.",
    ],
  },
  {
    title: "Junior Associate, Frontend Developer",
    company: "ProSofos Inc., remote",
    period: "Dec 2021 – Aug 2022",
    points: [
      "Built responsive interfaces in React.js, JavaScript and Bootstrap, integrated with REST APIs.",
      "Took part in Agile/Scrum ceremonies and peer code reviews.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Core banking CI/CD and automated IIS deployment",
    stack: ["GitLab CI/CD", "Windows Runner", "PowerShell", "MSBuild", "NuGet", "IIS"],
    description:
      "A multi-stage GitLab pipeline for the K3one .NET modules. Windows runners compile with MSBuild and NuGet, pass .dll artifacts between dependent services, then deploy to IIS with PowerShell.",
    points: [
      "Post-deployment HTTP health checks (Service.svc) and smoke tests on target web portals.",
      "Build artifacts stored and versioned in GitLab for release traceability and simpler rollbacks.",
    ],
  },
  {
    title: "Personal project: Docker to AWS EC2 pipeline",
    stack: ["GitLab CI/CD", "Docker", "AWS EC2"],
    description:
      "A self-directed pipeline I built outside my job: a sample app containerized with custom Dockerfiles, then deployed to AWS EC2 automatically on every change.",
    points: [
      "Consistent environment from build to deploy.",
      "Scripted continuous deployment that removes manual steps and shortens the cycle.",
    ],
  },
];

export const SKILLS = [
  ["CI/CD and version control", ["Git", "GitLab Administration", "GitLab CI/CD", "Windows GitLab Runner", "Merge Requests", "Jenkins"]],
  ["Build and release", ["MSBuild", "NuGet", "Artifact Versioning", "Release Coordination", "Deployment Checklists"]],
  ["Scripting, platforms, cloud", ["PowerShell", "Shell Scripting", "Ansible", "Docker", "Windows Server", "IIS", "Linux (Ubuntu/RHEL)", "AWS: EC2, S3, IAM, VPC"]],
  ["Application and data", [".NET Framework", "C#", "ASP.NET MVC", "JavaScript", "React.js", "REST APIs", "MySQL", "MS SQL Server", "MongoDB"]],
  ["Practices", ["SDLC", "Agile/Scrum", "Log Analysis", "Root Cause Analysis", "Defect Triage", "ServiceNow"]],
];

export const EDUCATION = [
  { degree: "M.Sc. Computer Science, 2022", school: "North Maharashtra University · CGPA 9.88/10" },
  { degree: "B.Sc. Computer Science, 2019", school: "North Maharashtra University" },
];

export const SERVICENOW = {
  suite: "Suite Certification: Application Developer Core Skills",
  micro: ["Welcome to ServiceNow", "Introduction to App Engine Studio", "UI Builder", "Flows", "Integration Hub", "Automated Test Framework"],
};

export const TRAINING = [
  "AWS Zero to Hero — Train with Shubham",
  "Core Java Certification — Radical Technologies",
  "DevOps Professional Certification — Naresh I Technologies",
];
