import md_preview from "../../Assets/md_preview.webp";
import my_site from "../../Assets/my_site.webp";
import focus_mode from "../../Assets/focus_mode.webp";
import ScrollToTop from "react-scroll-to-top";
import website from "../../Assets/website.webp";
import chatApp from "../../Assets/chatApp.webp";
import Shortly from "../../Assets/Shortly.webp";

const Projects = () => {
  return (
    <div className="resume-body">
      <div className="project-text">
        <h2 className="navbar-brand headline" href="/">
          <span className="dot align-top mr-3">do</span>Projects
        </h2>
        <p className>
          For a complete project dive check{" "}
          <a href="https://github.com/lowesilvan">my github page</a> <br />
          <br />
          Check out some of my projects down below!
        </p>

        <div className="experience d-flex mt-5">
          <div className="role desc-proj">
            <div className="button4-flex">
              <p className="role1">Chat app illustration</p>
              <a
                href="https://github.com/lowesilvan/chat-app-ui-illustration"
                className="btn button4"
                target="_blank"
                rel="noreferrer"
              >
                Check it out!
              </a>
            </div>
            <p className="role2 underline">Description</p>
            <p className="role3">
              A chat app UI illustration built completely with HTML and CSS, as
              part of the frontend mentor challenge. The only images I used for
              this project are the 3 dog images and user avatar everything else
              is CSS.
            </p>
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
              <p className="role1">
                Rest countries API with color theme switcher
              </p>
              <a
                href="https://github.com/lowesilvan/rest-countries"
                className="btn button4"
                target="_blank"
                rel="noreferrer"
              >
                Check it out!
              </a>
            </div>
            <p className="role2 underline">Description</p>
            <p className="role3">
              This is my solution to the dev challenge by frontend mentor to
              create a countries app with Dark theme mode, filtering and search
              functions following designs from jpeg images provided.
            </p>
            <p className="role2 underline">Technologies</p>
            <p className="role3">
              Reactjs, React router DOM v6, Material UI, rest counties API
            </p>
          </div>
          <div className="description img-place">
            <img src={my_site} alt="" className="md-preview" />
          </div>
        </div>

        <div className="experience d-flex mt-5">
          <div className="role desc-proj">
            <div className="button4-flex">
              <p className="role1">Url Shortener</p>
              <a
                href="https://github.com/lowesilvan/chat-app-ui-illustration"
                className="btn button4"
                target="_blank"
                rel="noreferrer"
              >
                Check it out!
              </a>
            </div>
            <p className="role2 underline">Description</p>
            <p className="role3">
              An applications that allows users to shorten valid links, copy this shortened link to Clipboard with a single click and displays
              list of shortened links even after browser refresh.
            </p>
            <p className="role2 underline">Technologies</p>
            <p className="role3">Reactjs, HTML5, SASS, Mobile first workflow, ShrtCode API, Clipboard API, Local Storage Hook</p>
          </div>
          <div className="description img-place">
            <img src={Shortly} alt="" className="md-preview" />
          </div>
        </div>

        <div className="experience d-flex mt-5">
          <div className="role desc-proj">
            <div className="button4-flex">
              <p className="role1">Weather by City</p>
              <a
                href="https://github.com/lowesilvan/Weather-by-City-App"
                className="btn button4"
                target="_blank"
                rel="noreferrer"
              >
                Check it out!
              </a>
            </div>
            <p className="role2 underline">Description</p>
            <p className="role3">
              A simple app that tells you the current weather condition of the
              city you searched and changes the background to a picture from
              that city. This project introduced me to APIs.
            </p>
            <p className="role2 underline">Technologies</p>
            <p className="role3">
              Javascript, Weather API, HTML5, CSS, API Key
            </p>
          </div>
          <div className="description img-place">
            <img src={md_preview} alt="" className="md-preview" />
          </div>
        </div>

        <div className="experience d-flex mt-5">
          <div className="role desc-proj">
            <div className="button4-flex">
              <p className="role1">
                Chrome Extension That Blocks Certain Distracting websites
              </p>
              <a
                href="https://github.com/lowesilvan/Focus-Mode-Chrome-Extension"
                className="btn button4"
                target="_blank"
                rel="noreferrer"
              >
                Check it out!
              </a>
            </div>
            <p className="role2 underline">Description</p>
            <p className="role3">
              It’s easy to get distracted when working on the same device which
              also provides you entertainment so focus mode extension serves as
              a subtle “Focus” mode for browsers given the selected hostnames,
              It blocks these websites and instead displays a custom webpage.
            </p>
            <p className="role2 underline">Technologies</p>
            <p className="role3">Javascript, HTML5, CSS</p>
          </div>
          <div className="description img-place">
            <img src={focus_mode} alt="" className="md-preview" />
          </div>
        </div>

        <div className="experience d-flex mt-5">
          <div className="role desc-proj">
            <div className="button4-flex">
              <p className="role1">My Portfolio</p>
              <a
                href="https://github.com/lowesilvan/Portfolio"
                className="btn button4"
                target="_blank"
                rel="noreferrer"
              >
                Check it out!
              </a>
            </div>
            <p className="role2 underline">Description</p>
            <p className="role3">
              I was going for a simple but pleasant design. For this, So I
              recreated a WIX design that caught my eye, manipulated the DOM to
              get specific details like colors, font size, etc and built the
              responsive design from scratch using JSX in Reactjs, For the call
              to email functionality, I followed the instructions from Emailjs
              documentation to implement emailjs SDK.
            </p>
            <p className="role2 underline">Technologies</p>
            <p className="role3">Reactjs, Emailjs Library, Bootstrap, CSS</p>
          </div>
          <div className="description img-place">
            <img src={website} alt="" className="md-preview" />
          </div>
        </div>
      </div>
      <ScrollToTop smooth color="#007bff" />
    </div>
  );
};

export default Projects;
