import socials from "../socials";
const ContactPage = () => {
  return (
    <div className="h-screen">
      <h1 className="px-10 pt-5 text-4xl">Contact</h1>
      <div className="flex flex-col pt-11">
        <img
          alt="portrait"
          className="w-48 h-48 mx-auto rounded-full"
          src="https://duly-noted.s3-us-west-1.amazonaws.com/portrait.jpg"
        />
        <h1 className="py-5 text-3xl text-center">Connect with me on:</h1>
        <div className="flex flex-col items-center justify-center py-5 sm:flex-row">
          {socials.map((social: any) => {
            return (
              <div className="p-5" key={social.title}>
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
    </div>
  );
};

export default ContactPage;
