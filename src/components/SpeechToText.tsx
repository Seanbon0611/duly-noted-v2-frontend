import React, { useEffect } from "react";

type Props = {
  setContent?: any;
  handleSubmit: any;
  transcript: any;
  resetTranscript: any;
  SpeechRecognition: any;
};

const SpeechToText: React.FC<Props> = ({
  handleSubmit,
  setContent,
  transcript,
  resetTranscript,
  SpeechRecognition,
}) => {
  useEffect(() => {
    //Initiate speech recognition on component mounting
    SpeechRecognition.startListening({ continuous: true });
    console.log("Now listening...");
    return () => {
      //cleanup
      SpeechRecognition.stopListening();
      console.log("Stopped Listening");
    };
  }, []);
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    alert("Browser does not support speech to text");
  }
  return (
    <div>
      <form className="flex-col" onSubmit={handleSubmit}>
        <textarea
          className="flex justify-center border border-black border-solid rounded w-80"
          name="text"
          rows={10}
          cols={20}
          value={transcript}
          onChange={(): void => setContent(transcript)}
        ></textarea>
        <div className="flex justify-between w-56 pt-4 mx-auto">
          <button type="submit" className="p-2 border border-black rounded">
            Save note
          </button>
          <button
            type="reset"
            onClick={resetTranscript}
            className="p-2 border border-black rounded"
          >
            Clear note
          </button>
        </div>
      </form>
    </div>
  );
};

export default SpeechToText;
