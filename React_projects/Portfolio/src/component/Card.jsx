function Card() {
  return (
    <section className="Card" id="home">
      <div className="Card-left">
        <div className="tag"> Frontend Developer • Motion Designer</div>
        <h1>Building <span> Modern </span> Digital Experiences</h1>
        <p>
          I create cinematic motion graphics,
          premium frontend websites,
          modern UI designs,
          and interactive digital experiences
          using React.js, JavaScript,
          CSS, and After Effects.
        </p>
        <div className="buttons">
          <button className="primary-btn">View Projects</button>
          <button className="secondary-btn">Hire Me</button>
        </div>
      </div>

      <div className="Card-right">
        <div className="glass-box">
          <div className="floating-icons">
            <div id="A" className="icon-box"><i className="fa-brands fa-react react"></i></div>
            <div id="B" className="icon-box"><i className="fa-brands fa-js js"></i></div>
            <div id="C" className="icon-box"><i className="fa-solid fa-film ae"></i></div>
            <div id="D" className="icon-box"><i className="fa-solid fa-code code"></i></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card