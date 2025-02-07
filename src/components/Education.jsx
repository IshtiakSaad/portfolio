const Education = () => {
    return (
      <section id="education" className=" text-gray-300 py-16 md:px-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-green-400 font-mono mb-8">_education</h2>
  
          <div className="flex flex-col lg:flex-row gap-4 justify-center">
            {/* University */}
            <div className="bg-gray-900/50 border border-gray-700 p-6 rounded-lg shadow-lg shadow-green-500/20">
              <h3 className="text-xl text-orange-400 font-semibold">Rajshahi University of Engineering & Technology</h3>
              <p className="text-gray-400 mt-1">B.Sc. in Materials Science & Engineering | 2025</p>
            </div>
  
            {/* HSC */}
            <div className="bg-gray-900/50 border border-gray-700 p-6 rounded-lg shadow-lg shadow-green-500/20">
              <h3 className="text-xl text-orange-400 font-semibold">Gurudayal Govt. College</h3>
              <p className="text-gray-400 mt-1">Higher Secondary Certificate (HSC) | 2020</p>
            </div>
  
            {/* SSC */}
            <div className="bg-gray-900/50 border border-gray-700 p-6 rounded-lg shadow-lg shadow-green-500/20">
              <h3 className="text-xl text-orange-400 font-semibold">Kishoreganj Govt. Boys' High School</h3>
              <p className="text-gray-400 mt-1">Secondary School Certificate (SSC) | 2018</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Education;
  