import md_preview from "../../Assets/md_preview.webp"
import my_site from "../../Assets/my_site.webp"
import focus_mode from "../../Assets/focus_mode.webp"
import ScrollToTop from "react-scroll-to-top"
import anime_quotes from "../../Assets/anime_quotes.webp"
import survey from "../../Assets/survey.webp"
import website from "../../Assets/website.webp"
import chatApp from "../../Assets/chatApp.webp"

const Projects = () => {
    return (
        <div className="resume-body">
            <div className="project-text">
                <h2 className="navbar-brand headline" href="/"><span className="dot align-top mr-3">do</span>Projects</h2>
                <p className>For a complete project dive check <a href="https://github.com/lowesilvan">my github page</a> <br/><br/>Check out some of my projects down below!</p>
                <div className="experience d-flex mt-5">
                    <div className="role desc-proj">
                        <div className="button4-flex">
                            <p className="role1">Rest countries API with color theme switcher</p>
                            <a href="https://github.com/lowesilvan/rest-countries" className="btn button4" target="_blank" rel="noreferrer">Check it out!</a>
                        </div>
                        <p className="role2 underline">Description</p>
                        <p className="role3">This is my solution to the dev challenge by 
                        frontend mentor to create a countries app with Dark theme mode, filtering and search functions 
                        following designs from jpeg images provided.</p>
                        <p className="role2 underline">Technologies</p>
                        <p className="role3">Reactjs, React router DOM v6, Material UI, rest counties API</p>
                    </div>
                    <div className="description img-place">
                        <img src={my_site} alt="" className="md-preview" />
                    </div>
                </div>

                <div className="experience d-flex mt-5">
                    <div className="role desc-proj">
                        <div className="button4-flex">
                            <p className="role1">My Portfolio</p>
                            <a href="https://github.com/lowesilvan/Portfolio" className="btn button4" target="_blank" rel="noreferrer">Check it out!</a>
                        </div>
                        <p className="role2 underline">Description</p>
                        <p className="role3">I was going for a simple but pleasant design. For this, So
                            I recreated a WIX design that caught my eye, manipulated the DOM to get
                            specific details like colors, font size, etc and built the responsive design
                            from scratch using JSX in Reactjs, For the call to email functionality,
                            I followed the instructions from Emailjs documentation to implement
                            emailjs SDK.</p>
                        <p className="role2 underline">Technologies</p>
                        <p className="role3">Reactjs, Emailjs Library, Bootstrap, CSS</p>
                    </div>
                    <div className="description img-place">
                        <img src={website} alt="" className="md-preview" />
                    </div>
                </div>

                <div className="experience d-flex mt-5">
                    <div className="role desc-proj">
                        <div className="button4-flex">
                            <p className="role1">Weather by City</p>
                            <a href="https://github.com/lowesilvan/Weather-by-City-App" className="btn button4" target="_blank" rel="noreferrer">Check it out!</a>
                        </div>
                        <p className="role2 underline">Description</p>
                        <p className="role3">A simple app that tells you the current weather condition of the city you searched.</p>
                        <p className="role2 underline">Technologies</p>
                        <p className="role3">Javascript, Weather API, HTML5, CSS, API Key</p>
                    </div>
                    <div className="description img-place">
                        <img src={md_preview} alt="" className="md-preview" />
                    </div>
                </div>

                <div className="experience d-flex mt-5">
                    <div className="role desc-proj">
                        <div className="button4-flex">
                            <p className="role1">Chat app illustration</p>
                            <a href="https://github.com/lowesilvan/Weather-by-City-App" className="btn button4" target="_blank" rel="noreferrer">Check it out!</a>
                        </div>
                        <p className="role2 underline">Description</p>
                        <p className="role3">A chat app UI illustration built from screenshots provided by frontend mentor challenge</p>
                        <p className="role2 underline">Technologies</p>
                        <p className="role3">HTML5, SASS (scss), Mobile first workflow</p>
                    </div>
                    <div className="description img-place">
                        <img src={chatApp} alt="" className="md-preview" />
                    </div>
                </div>
               
                <div className="experience d-flex mt-5">
                    <div className="role desc-proj">
                        <div className="button4-flex">
                            <p className="role1">Random Anime Quotes Generator</p>
                            <a href="https://github.com/lowesilvan/Random-Quote-Generator" className="btn button4" target="_blank" rel="noreferrer">Check it out!</a>
                        </div>
                        <p className="role2 underline">Description</p>
                        <p className="role3">A js app that generates my favorite anime quotes randomly, with the option of tweeting quotes directly to your followers.</p>
                        <p className="role2 underline">Technologies</p>
                        <p className="role3">Javascript, HTML5, CSS, JSON</p>
                    </div>
                    <div className="description img-place">
                        <img src={anime_quotes} alt="" className="md-preview" />
                    </div>
                </div>

                <div className="experience d-flex mt-5">
                    <div className="role desc-proj">
                        <div className="button4-flex">
                            <p className="role1">Chrome Extension That Blocks Certain Distracting websites</p>
                            <a href="https://github.com/lowesilvan/Focus-Mode-Chrome-Extension" className="btn button4" target="_blank" rel="noreferrer">Check it out!</a>
                        </div>
                        <p className="role2 underline">Description</p>
                        <p className="role3">It’s easy to get
                            distracted when working on the same device which also provides you entertainment so focus mode
                            extension serves as a subtle “Focus” mode for browsers given the selected hostnames, It blocks
                            these websites and instead displays a custom webpage.</p>
                        <p className="role2 underline">Technologies</p>
                        <p className="role3">Javascript, HTML5, CSS</p>
                    </div>
                    <div className="description img-place">
                        <img src={focus_mode} alt="" className="md-preview"/>
                    </div>
                </div>

                <div className="experience d-flex mt-5">
                    <div className="role desc-proj">
                        <div className="button4-flex">
                            <p className="role1">Survey Form</p>
                            <a href="https://github.com/lowesilvan/Survey-Form" className="btn button4" target="_blank" rel="noreferrer">Check it out!</a>
                        </div>
                        <p className="role2 underline">Description</p>
                        <p className="role3">A simple survey form with radio buttons, select options, background gradient etc.</p>
                        <p className="role2 underline">Technologies</p>
                        <p className="role3">HTML5, CSS</p>
                    </div>
                    <div className="description img-place">
                        <img src={survey} alt="" className="md-preview" />
                    </div>
                </div>

            </div>
            <ScrollToTop smooth color="#007bff" />
        </div>
    );
}

export default Projects;