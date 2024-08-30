import MainNavbar from "@/components/navbars/MainNavbar";
import Webpage from "@/components/webpage/page";

export default function webdevelopment() {
    return (
        <>
        <MainNavbar />
        <div className=" pl-20 gap-24 pb-20 flex flex-row">
            <Webpage 
                title="AutoBot" 
                listItems={["React", "Node JS", "MySQL","Typescript","Tailwind"]}
                websitelink="https://auto-bot-amber.vercel.app"
                githublink="https://github.com/fernandogarcia2504/AutoBot"
                description="Software as a Service for automating small businesses sales with a chatbot that takes charge of whatsapp interactions, as well as re scheduling appointments and handling google reviews." 
                src="/fernando.png"
                imageHoverSrc="/autobot.png" />

            <Webpage 
                title="DoMore" 
                listItems={["Next JS","MySQL","Typescript","Tailwind"]}
                websitelink="https://todo-app-hazel-nu.vercel.app"
                githublink="https://github.com/fernandogarcia2504/todo-app"
                description="Software as a Service for managing and creating tasks that can be repeteaded as many times as the user wants, DoMore will help users to be more organized and keep track of their activities in an user-friendly app."
                src="/domore2.png"
                imageHoverSrc="/domore2.png" />
         </div>
         <div className=" pl-20 gap-24 pb-20 flex flex-row">
            <Webpage 
                title="Movies Nando" 
                listItems={["React","Tailwind","Typescript"]}
                websitelink="https://movies-nando.vercel.app"
                githublink="https://github.com/fernandogarcia2504/MoviesNando"
                description="School project for managing a real time movies API, showing most popular and top rated movies ."
                src="/movies.png"
                imageHoverSrc="/movies.png" />

            <Webpage 
                title="Construction App" 
                listItems={["React","MySQL","Node JS","Tailwind"]}
                websitelink="https://construction-app-github-io.vercel.app"
                githublink="https://github.com/fernandogarcia2504/constructionApp.github.io"
                description="Software as a Service for managing and creating tasks that can be repeteaded as many times as the user wants, DoMore will help users to be more organized and keep track of their activities in an user-friendly app."
                src="/construction.png"
                imageHoverSrc="/construction.png" />
        </div>
        </>
    )
}