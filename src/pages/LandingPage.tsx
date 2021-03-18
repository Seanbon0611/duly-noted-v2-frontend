import { Link } from "react-router-dom";
import SpeechToText from "../components/SpeechToText";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
const LandingPage = () => {
  const commands = [
    {
      command: "clear",
      callback: ({ resetTranscript }: any) => resetTranscript(),
    },
  ];
  const { transcript, resetTranscript } = useSpeechRecognition({ commands });
  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(
      `You can save this note: "${e.target.text.value}" if you've signed up!`
    );
  };

  return (
    <div className="flex justify-center px-1">
      <div className="flex flex-col items-center justify-center h-screen prose text-center">
        <h1 className="text-4xl font-bold">
          Take Better Notes with Speech-to-text Technology
        </h1>
        <span className="text-xl">Don't be shy, speak up!</span>
        <SpeechToText
          handleSubmit={handleSubmit}
          transcript={transcript}
          resetTranscript={resetTranscript}
          SpeechRecognition={SpeechRecognition}
        />
        <div className="py-7">
          <Link to="/signup">
            <button className="px-20 py-5 text-lg text-white transition duration-100 bg-blue-800 rounded hover:bg-blue-600">
              Sign up for free here
            </button>
          </Link>
        </div>
        <Link to="/signin">
          <p className="hover:text-blue-800">
            Have an account already? Sign-in here.
          </p>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
