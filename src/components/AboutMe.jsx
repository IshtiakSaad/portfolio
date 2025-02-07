const AboutMe = () => {
  return (
    <section id="about-me" className="relative text-gray-300 py-16 md:px-12">
      <div className="lg:container lg:mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Left - About Text */}
        <div className="md:max-w-4xl">
          <h2 className="text-3xl font-bold text-green-400 font-mono mb-4">
            _about-me
          </h2>
          <p className="text-gray-400 leading-relaxed text-justify">
            Hey, I'm{" "}
            <span className="text-orange-400 font-semibold">Ishtiak Saad</span>,
            a passionate{" "}
            <span className="text-green-400">MERN Stack Developer</span> with a
            love for crafting seamless digital experiences. My journey in
            programming started with a fascination for problem-solving and
            creating applications that leave an impact.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed text-justify">
            I enjoy building scalable, high-performance web applications, and
            I'm particularly drawn to designing elegant and cinematic UIs.
            Whether it's a news portal, a movie management app, or a hostel
            system, I believe in making technology both functional and visually
            engaging.
          </p>

          <div className="relative w-full h-32 my-4 lg:hidden bg-gray-900/50 border-2 border-green-400 shadow-lg shadow-green-500/20 p-6 flex items-center justify-center">
            <p className="text-green-400 font-mono text-xl">
              "Build. Inspire. Repeat."
            </p>
          </div>

          <p className="mt-4 text-gray-400 leading-relaxed text-justify">
            I’ve taken on leadership roles in various technical and
            entrepreneurial initiatives. As a mechanical designer for{" "}
            <span className="text-orange-400 font-semibold">
              Team Crack Platoon
            </span>
            , I contributed to the design of a Formula Student car, ensuring
            competition-ready engineering. I’ve also led technological
            development at Project Khadija and played a key role in organizing{" "}
            <span className="text-green-400 font-semibold">TEDxRUET</span>{" "}
            events. My involvement in cybersecurity, CAD, and debating
            communities reflects my dedication to continuous learning and
            knowledge-sharing.
          </p>

          <p className="mt-4 text-gray-400 leading-relaxed text-justify">
            When I'm not coding or producing videos, you’ll find me diving into
            new tech, refining my projects, or mentoring others. I believe in
            continuous learning and creating things that truly matter.
          </p>
        </div>

        {/* Right Box */}
        <div className="relative w-80 h-80 bg-gray-900/50 border-2 hidden border-green-400 shadow-lg shadow-green-500/20 p-6 lg:flex items-center justify-center">
          <p className="text-green-400 font-mono text-xl">
            "Build. Inspire. Repeat."
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
