import React from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import GitHubIcon from "@material-ui/icons/GitHub";

function Card({ src, alt, proj, desc, lang, git, live }) {
  return (
    <section className="card-section">
      <div className="card">
        <div className="card__holder">
          <div className="card__holder--front">
            <img src={src} alt={alt} />
          </div>
          <div className="card__holder--back">
            <h1 className="card__holder--back--header">{proj}</h1>
            <hr className="card__holder--back--divider" />
            <p className="card__holder--back--desc">{desc}</p>
            <p className="card__holder--back--lang">{lang}</p>

            {/* start */}
            <div className="links">
              <button className="links__button">
                <VisibilityIcon />
                <a href={live} target="_blank" rel="noopener noreferrer">
                  Live project
                </a>
              </button>
              <button className="links__button">
                <GitHubIcon />
                <a href={git} target="_blank" rel="noopener noreferrer">
                  View Source
                </a>
              </button>
            </div>
            {/* end */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
