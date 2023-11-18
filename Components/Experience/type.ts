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
        workPeriod: "9th Feb 2023 – 10th June 2023",
        jobType: jobType.INTERNSHIP,
        company: "Zedblock",
        workingMode: workMode.ONLINE,
        role: "MERN stack developer Intern",
        description: [`Applied a knowledge (Mongo DB, Nest.js, Next.js , Typescript, Node.js) to create robust and effective web applications.`,
            `Actively participated in team Collaborations , effectively communicating ideas and contributing to the success of project.`],
        certificate: "https://drive.google.com/file/d/1bPeToA8bbWFfKb_o3HRaRPOGTAF1wjWT/view",
        report: "https://drive.google.com/file/d/1RohbPSnFzhFnQo3LFPBEbDhCz4ouCKCu/view"
    },
    {
        workPeriod: "Nov 2022 – Dec 2022",
        jobType: jobType.INTERNSHIP,
        company: "SUVIDHA FOUNDATION",
        workingMode: workMode.ONLINE,
        role: "Web Development",
        description: [`Applied a knowledge (React.js , HTML, CSS, JavaScript) to create single page web applications.`],
        certificate: "https://drive.google.com/file/d/1WyTaG9zfB7eaZY1S584PR1KDK3qLALC2/view",
    },
]