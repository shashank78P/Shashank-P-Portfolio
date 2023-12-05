export interface projectDto {
    Title :string,
    description : string,
    imageUrl : string,
    isImageAllowToScroll : boolean,
    route : string,
    live : string | undefined
}

export const projectsData : projectDto[] = [
    {
        Title:"Daily Dash",
        imageUrl:"/images/DailyDash/Computer-home-page.png",
        description : "DailyDash is a dynamic project I contributed to, offering a versatile communication and productivity platform. Leveraging JWT token authentication, it ensures secure user logins while monitoring device activity. Users can register manually, via Google, and manage their device logins effectively. The platform integrates quick access features, bookmark organization with sorting and filtering capabilities, and a robust chat system supporting private conversations, file sharing, and group interactions. Additionally, DailyDash facilitates seamless scheduled meetings with email notifications, real-time chat, multimedia sharing, and participant engagement features. My involvement encompassed feature design, implementation, and user experience enhancements within the DailyDash project.",
        isImageAllowToScroll : false,
        route : "daily-dash",
        live:process.env.NEXT_PUBLIC_DAILY_DASH_LIVE
    },
    {
        Title:"Advance ToDo List",
        imageUrl:"/images/AdvanceToDoList/HomePageFullScreenMobile.png",
        description : "The Advance To-Do List web app allows a user to create, read, update or delete to-do tasks.Its user-friendly interface includes a secure login system to protect user data. The app features pagination for easy navigation through tasks, ensuring a smooth user experience, especially with a large number of entries. The search functionality allows users to quickly locate specific tasks by task name. Furthermore, users can filter tasks based on their status, distinguishing between active and completed tasks.",
        isImageAllowToScroll : true,
        route : "advance-to-do-list",
        live:process.env.NEXT_PUBLIC_TUTORIAL_ADVANCE_TODO_LIST_LIVE,
    },
    {
        Title:"Tutorial Management system",
        imageUrl:"/images/TutorialManagementSystem/HomePageDesktop.png",
        description : "Tutorial Management System is a project has some objective to be proficient suitable for most of the training center , it manages job of admin in admission of new student record ,updating fee of existing student and teachers by allocating them a classes .This help admin of respective tutorial go paperless and effortless in searching records.",
        isImageAllowToScroll : true,
        route : "tutorial-management-system",
        live:process.env.NEXT_PUBLIC_TUTORIAL_MANAGEMENT_SYSTEM_LIVE,
    }
]

