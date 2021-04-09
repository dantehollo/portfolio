import projectOne from './images/project-images/Developer/project1.png'
import projectTwo from './images/project-images/Developer/GuestBookImg.jpg'
import projectThree from './images/project-images/Developer/project2.png'

const developerProjects = [
    {
        title: "Legends of Al-Yehn",
        source: projectOne,
        description: "This is a demo visual novel created in React. It plays like a choose your own adventure game, only instead of flipping through pages to get to the next part of the story, each decision you make will set you down a new path automatically. It takes about thirty minutes to read through from start to end, with the possiblility of eight different endings.",
        repoLink: "https://github.com/dantehollo/choose-your-own-adventure",
        herokuLink: "https://legends-of-alyehn.herokuapp.com/"
    },
    {
        title: "Guest Log",
        source: projectTwo,
        description: "Just a small project to create a MERN stack app while experimenting with responsive design. Use the links below to pop by and leave a message, or head to the github repo for a look at the source code.",
        repoLink: "https://github.com/dantehollo/guestBook-project",
        herokuLink: "https://msc-guestbook.herokuapp.com/"
    },
    {
        title: "World Builder",
        source: projectThree,
        description: "Ever notice how the quality of Hollywood writing seems to be getting progressively worse? It seems every film and series isn't considered complete without some major plot contrivence, plot hole or acting so wooden you would think they hired trees. World Builder, this web-based React app, was made to help sort out continuity issues in writing. Potencial writers can build a timeline, move points around to make events more cohesive and sensible, all while having important lore and notes up front and in constant view so when the make a mistake they can't say they forgot.",
        repoLink: "https://github.com/dantehollo/world_builder_site",
        herokuLink: ""
    }
]

export {developerProjects}