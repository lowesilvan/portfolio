import md_preview from "../../Assets/md_preview.webp";
import Gallery_Collection from "../../Assets/Gallery_Collection.webp";
import focus_mode from "../../Assets/focus_mode.webp";
import ScrollToTop from "react-scroll-to-top";
import chatApp from "../../Assets/chatApp.webp";
import Shortly from "../../Assets/Shortly.webp";
import book from "../../Assets/book.webp";

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
              <p className="role1">Project Gutenberg Book App</p>
              <a
                href="https://lowesilvan.github.io/project-gutenberg-book-app/"
                className="btn button4"
                target="_blank"
                rel="noreferrer"
              >
                Check it out!
              </a>
            </div>
            <p className="role2 underline">Description</p>
            <p className="role3">
              A React app to search, mark favorites, read and ﬁlter books from
              Project Gutenberg API.
            </p>
            <p className="role2 underline">Technologies</p>
            <p className="role3">
              Reactjs, React router DOM v6, Chakra UI, Redux Toolkit, Redux Persist
            </p>
          </div>
          <div className="description img-place">
            <img src={book} alt="" className="md-preview" />
          </div>
        </div>

        <div className="experience d-flex mt-5">
          <div className="role desc-proj">
            <div className="button4-flex">
              <p className="role1">Gallery Collection</p>
              <a
                href="https://lowesilvan.github.io/multi-page-gallery/"
                className="btn button4"
                target="_blank"
                rel="noreferrer"
              >
                Check it out!
              </a>
            </div>
            <p className="role2 underline">Description</p>
            <p className="role3">
              A multi-page gallery application that lets users upload
              collections of images in the browser storage, with dark theme
              mode.
            </p>
            <p className="role2 underline">Technologies</p>
            <p className="role3">
              Javascript, Reactjs, React router DOM v6, Chakra UI, Redux Toolkit
            </p>
          </div>
          <div className="description img-place">
            <img src={Gallery_Collection} alt="" className="md-preview" />
          </div>
        </div>

        <div className="experience d-flex mt-5">
          <div className="role desc-proj">
            <div className="button4-flex">
              <p className="role1">Url Shortener</p>
              <a
                href="https://lowesilvan.github.io/url-shortener/"
                className="btn button4"
                target="_blank"
                rel="noreferrer"
              >
                Check it out!
              </a>
            </div>
            <p className="role2 underline">Description</p>
            <p className="role3">
              An applications that allows users to shorten valid links, copy
              this shortened link to Clipboard with a single click and displays
              list of shortened links even after browser refresh.
            </p>
            <p className="role2 underline">Technologies</p>
            <p className="role3">
              Reactjs, HTML5, SASS, Mobile first workflow, ShrtCode API,
              Clipboard API, Local Storage Hook
            </p>
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
      </div>
      <ScrollToTop smooth color="#007bff" />
    </div>
  );
};

export default Projects;
