import socials from "../socials";
const ContactPage = () => {
  return (
    <div className="h-screen">
      <h1 className="text-4xl">Contact</h1>
      <img
        alt="portrait"
        className="w-48 h-48 mx-auto rounded-full"
        src="https://duly-noted.s3-us-west-1.amazonaws.com/portrait.jpg"
      />
      <h1 className="py-5 text-3xl text-center">Connect with me on:</h1>
      <div className="flex justify-center py-5">
        {socials.map((social: any) => {
          return (
            <div className="px-5" key={social.title}>
              <a
                className="flex items-center"
                target="_blank"
                rel="noopener noreferrer"
                href={social.link}
              >
                <p className="px-2 text-2xl font-bold">{social.title}:</p>
                <img className="w-10" src={social.icon} alt={social.alt} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactPage;

/*
<img
        alt="portrait"
        className="w-48 h-48 mx-auto rounded-full"
        src="https://duly-noted.s3-us-west-1.amazonaws.com/portrait.jpg"
      />
      <h1 className="text-3xl text-center">Connect with me on:</h1>
      <div className="flex items-center justify-center">
        <p className="px-2 text-2xl font-bold">Linkedin:</p>
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
        <p className="px-2 text-2xl font-bold">Medium: </p>
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
        <p className="px-2 text-2xl font-bold">Email: </p>
        <a href="mailto:seandever.developer@gmail.com">
          <img
            className="w-12"
            src="https://image.flaticon.com/icons/png/512/666/666162.png"
            alt="email"
          />
        </a>
        <p className="px-2 text-2xl font-bold">GitHub:</p>
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

*/
