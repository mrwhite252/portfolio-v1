import "./aboutMe.scss";

export default function AboutMe() {
  return (
    <div className="about-me" id="about-me">
      <h1>About Me</h1>

      <div className="content-container">
        <div className="img-container">
          <img src="assets/about-me.jpeg" alt="about-me" />
        </div>
        <p className="about-me">
          <span>
            With previous academic background in publishing and editing, I have
            knowledge, enthusiasm and experiences in dealing with the
            transformation from traditional publishing to electronic/digital
            publishing.
          </span>
          <span>
            After the study at Yoobee college Christchurch, I’ve gained the
            up-to-date web development and UI/UX design knowledge, and I am keen
            to find a practical opportunity to further develop and sharpen my
            skill sets.
          </span>
          <span>
            From years of working in a major airport in China and a social media
            company in New Zealand, I’ve been trained to be a fast learner, a
            team player, and multi-task handler, well managed with pressures and
            good time management skills.
          </span>
        </p>
      </div>
    </div>
  );
}
