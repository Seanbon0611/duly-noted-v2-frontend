import React from "react";

const ContactPage = () => {
  return (
    <div className="h-screen pt-24">
      <img
        alt="portrait"
        className="w-48 h-48 mx-auto rounded-full"
        src="https://duly-noted.s3-us-west-1.amazonaws.com/portrait.jpg"
      />
      <h1 className="text-center">Connect with me on:</h1>
      <div className="flex items-center justify-center">
        <p className="px-2">Linkedin:</p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/sean-dever/"
        >
          <img
            className="w-12"
            src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg"
            alt="linkedin"
          />
        </a>
        <p className="px-2">Medium: </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://sdever.medium.com/"
        >
          <img
            className="w-12"
            src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/medium.svg"
            alt="medium"
          />
        </a>
        <p className="px-2">Email: </p>
        <a href="mailto:seandever.developer@gmail.com">
          <img
            className="w-12"
            src="https://image.flaticon.com/icons/png/512/666/666162.png"
            alt="email"
          />
        </a>
        <p className="px-2">GitHub</p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Seanbon0611"
        >
          <img
            className="w-16"
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="github"
          />
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
