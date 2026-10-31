import { AchievementItem, EducationItem, CertificationItem } from "@/types";

export const achievementsData: AchievementItem[] = [
  {
    id: "leetcode-knight",
    title: "LeetCode Knight Badge",
    metric: "1885 Max Rating",
    subtitle: "Top Competitive Programmer",
    description: "Achieved prestigious Knight status with global contest ranks of 539/30,000+ and 555/33,000+. Solved hundreds of advanced algorithmic challenges across graph theory, dynamic programming, and data structures.",
    icon: "Trophy",
    highlight: true
  },
  {
    id: "devcup-enigma",
    title: "DevCup Enigma 2022",
    metric: "Top 12 Finalist",
    subtitle: "ACM VIIT Hackathon",
    description: "Ranked among the top 12 finalists in an intensive 24-hour hackathon, engineering innovative software solutions assessed by industry judges.",
    icon: "Award",
    highlight: false
  },
  {
    id: "hacktoberfest",
    title: "Hacktoberfest 2023",
    metric: "5+ Repositories",
    subtitle: "Open-Source Contributor",
    description: "Successfully contributed and had 6+ pull requests merged into public open-source codebases, collaborating with international maintainers.",
    icon: "GitPullRequest",
    highlight: false
  },
  {
    id: "gdsc-speaker",
    title: "GDSC CP Co-Lead & Speaker",
    metric: "200+ Students Mentored",
    subtitle: "Community Leadership",
    description: "Competitive Programming Co-Lead & Core Team member at Google Developer Student Clubs, DIT Pune. Conducted seminars and algorithmic bootcamps for 100+ attendees.",
    icon: "Users",
    highlight: false
  }
];

export const educationData: EducationItem = {
  institution: "Dr. D. Y. Patil Institute of Technology",
  degree: "Bachelor of Engineering (B.E.)",
  field: "Computer Engineering",
  period: "2021 – 2025",
  location: "Pimpri, Pune, India",
  score: "8.83",
  scoreType: "CGPA",
  highlights: [
    "Graduated with distinction and a strong foundation in core computing theory, mathematics, and systems design",
    "Competitive Programming Co-Lead in Google Developer Student Clubs (GDSC) DIT Pune",
    "Coursework: Advanced Data Structures, Cloud Computing, System Architecture, Database Systems"
  ]
};

export const certificationsData: CertificationItem[] = [
  {
    name: "Getting Started with Terraform for Google Cloud",
    issuer: "Qwiklabs",
    issueDate: "Dec 2022",
    credentialId: "3047323",
    badge: "Credential ID: 3047323",
    icon: "Cloud"
  },
  {
    name: "Automating Infrastructure on Google Cloud with Terraform",
    issuer: "Google Cloud Skills Boost",
    issueDate: "Dec 2022",
    credentialId: "3050243",
    badge: "Credential ID: 3050243",
    icon: "Cloud"
  },
  {
    name: "Set Up and Configure a Cloud Environment in Google Cloud",
    issuer: "Qwiklabs",
    issueDate: "Dec 2022",
    credentialId: "3033088",
    badge: "Credential ID: 3033088",
    icon: "Cloud"
  },
  {
    name: "Perform Foundational Infrastructure Tasks in Google Cloud",
    issuer: "Qwiklabs",
    issueDate: "Dec 2022",
    credentialId: "3025157",
    badge: "Credential ID: 3025157",
    icon: "Cloud"
  },
  {
    name: "Create and Manage Cloud Resources",
    issuer: "Qwiklabs",
    issueDate: "Dec 2022",
    credentialId: "3031031",
    badge: "Credential ID: 3031031",
    icon: "Cloud"
  },
  {
    name: "Google Cloud Fundamentals: Core Infrastructure",
    issuer: "Qwiklabs",
    issueDate: "Dec 2022",
    credentialId: "3018079",
    badge: "Credential ID: 3018079",
    icon: "Cloud"
  },
  {
    name: "Getting Started with Google Kubernetes Engine",
    issuer: "Qwiklabs",
    issueDate: "Dec 2022",
    badge: "GKE Certified",
    icon: "Cloud"
  },
  {
    name: "Java (Gold Badge)",
    issuer: "HackerRank",
    badge: "5-Star Problem Solver",
    icon: "Code2"
  },
  {
    name: "Python (Basic Certificate)",
    issuer: "HackerRank",
    badge: "Skill Verified",
    icon: "CheckCircle2"
  }
];
