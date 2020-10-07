import React from "react";

export default function Footer({ linkStyle }) {
  const date = new Date().getFullYear();

  return (
    <div class="footer">
      <div className="footer__content">
        <div className="flex">
          <div className="footer__content--contact">
            <h1>Get in touch with me?</h1>
            <a style={linkStyle} href="blossybab70@gmail.com">
              blossybab70@gmail.com
            </a>
          </div>
          <div className="footer__website-plug">
            <h1>
              {" "}
              View my website{" "}
              <a
                style={linkStyle}
                href="https://blossombabs.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
            </h1>
          </div>
        </div>
        <div className="footer__copyright">
          <p>
            Copyright &copy;
            {date}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
