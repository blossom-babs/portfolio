import seasons from "../assets/weather-app.png";
import personalWeb from "../assets/w-v1.png";
import finance from "../assets/finance-buddy.png";
import vote from "../assets/vote-app.png";
import insure from "../assets/insure.png";
import todo from "../assets/todo-app.png";
import keeper from "../assets/keeper-app.png";
import hr from "../assets/hr.png";
import portfolio from "../assets/portfolio.png";

const projects = [
  {
    img: personalWeb,
    name: "Personal Website",
    desc:
      "A developer's personal website built using flask as the backend framework for the contacts section",
    lang: "FLASK, JAVASCRIPT, HTML, SCSS",
    gitLink: "https://github.com/blossom-babs/website-template",
    liveLink: "https://blossom-app.herokuapp.com/",
    tag: "flask",
  },
  {
    img: finance,
    name: "Finance buddy",
    desc: "This website help users keep track of their finances.",
    lang: "Javascript, html, scss",
    gitLink: "https://github.com/blossom-babs/Finance-Manager",
    liveLink: "https://blossom-babs.github.io/Finance-Manager/",
    tag: "vanilla",
  },
  {
    img: vote,
    name: "Voting App",
    desc: "A fun website to vote for housemates of the 2020 Big Brother Naija",
    lang: "Javascript, html, scss",
    gitLink: "https://github.com/blossom-babs/voting_system_using-javascript",
    liveLink: "https://vote-app.netlify.app/",
    tag: "vanilla",
  },
  {
    img: seasons,
    name: "Seasons",
    desc:
      "A progressive web application for monitoring the weather anywhere in the world",
    lang: "Javascript, html, scss",
    gitLink: "https://github.com/blossom-babs/weather-app",
    liveLink: "https://weather-app-242e9.web.app/",
    tag: "vanilla",
  },
  {
    img: insure,
    name: "Insure",
    desc: "Implement a landing page. Challenge gotten from frontendmentor.io",
    lang: "html, css",
    gitLink: "https://github.com/blossom-babs/insure",
    liveLink: "https://blossom-babs.github.io/insure/",
    tag: "html",
  },
  {
    img: todo,
    name: "To do list",
    desc: "A simple to do list",
    lang: "react",
    gitLink: "https://github.com/blossom-babs/react-to-do-list",
    liveLink: "https://blossom-keep-note.netlify.app/",
    tag: "react",
  },
  {
    img: keeper,
    name: "Keeper app",
    desc: "Google keep clone for taking notes",
    lang: "react",
    gitLink: "https://github.com/blossom-babs/keeper-app",
    liveLink: "https://notes-keeper-app.netlify.app/",
    tag: "react",
  },
  {
    img: hr,
    name: "Landing page",
    desc: "Implement a simple landing page using react",
    lang: "react",
    gitLink: "https://github.com/blossom-babs/hr-landing-page",
    liveLink: "https://hrworks.netlify.app/",
    tag: "react",
  },
  {
    img: personalWeb,
    name: "Personal Website",
    desc: "A developer's website without the backend framework flask",
    lang: "html, scss, javascript",
    gitLink: "https://github.com/blossom-babs/website",
    liveLink: "https://blossombabs.netlify.app/",
    tag: "vanilla",
  },
  {
    img: portfolio,
    name: "Portfolio",
    desc: "A website for showcasing a developer's projects",
    lang: "react",
    gitLink: "https://github.com/blossom-babs/portfolio",
    liveLink: "https://github.com/blossom-babs/portfolio",
    tag: "react",
  },
];

export default projects;
