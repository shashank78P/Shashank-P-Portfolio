enum jobType {
    "INTERNSHIP" = "Internship",
    "PART_TIME_JOB" = "Part time job",
    "FULL_TIME_JOB" = "Full time job",
}
enum workMode {
    "ONLINE" = "Online",
    "OFFLINE" = "Offline",
}

export type experienceDetailsDto = {
    workPeriod: string,
    jobType: jobType,
    company: string,
    workingMode: workMode
    role: string,
    description: string[],
    certificate?: string,
    report?: string,
}

export const experienceDetails: experienceDetailsDto[] = [
    {
      workPeriod: "Nov 2024 - Current",
      jobType: jobType.FULL_TIME_JOB,
      company: "Raphacure (Cure and Care Pvt Ltd)",
      workingMode: workMode.OFFLINE,
      role: "Node Js Developer",
      description: [
        "Building responsive UI components with React.js to enhance interactivity and user experience.",
        "Managing application state with Context API and Hooks, integrating external libraries, and providing real-time updates via Socket.io and API integrations.",
      ],
    },
    {
      workPeriod: "Mar 2024 – Nov 2024",
      jobType: jobType.FULL_TIME_JOB,
      company: "Datavector Tech",
      workingMode: workMode.ONLINE,
      role: "Software Developer",
      description: [
        "Built scalable RESTful APIs with Node.js, Express.js, PostgreSQL, and optimized with Redis and Zod for performance and security.",
        "Improved UI load times by 90% and accelerated development with reusable React components.",
      ],
      certificate:
        "https://drive.google.com/file/d/1OKqqZHx6o-FriOIlHjZSdeYWPySYLrim/view",
    },
    {
      workPeriod: "9th Feb 2023 – 10th June 2023",
      jobType: jobType.INTERNSHIP,
      company: "Zedblock",
      workingMode: workMode.ONLINE,
      role: "MERN stack developer Intern",
      description: [
        `Applied a knowledge (Mongo DB, Nest.js, Next.js , Typescript, Node.js) to create robust and effective web applications.`,
        `Actively participated in team Collaborations , effectively communicating ideas and contributing to the success of project.`,
      ],
      certificate:
        "https://drive.google.com/file/d/1bPeToA8bbWFfKb_o3HRaRPOGTAF1wjWT/view",
      report:
        "https://drive.google.com/file/d/1RohbPSnFzhFnQo3LFPBEbDhCz4ouCKCu/view",
    },
  ];
  