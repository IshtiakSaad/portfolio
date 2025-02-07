const ContactInfo = () => {
  return (
    <section id="contact-info" className=" text-gray-300 py-16 md:px-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-green-400 font-mono mb-8">_contact-info</h2>

        <div className="max-w-2xl mx-auto bg-[radial-gradient(#1a1a1a,#000)] bg-opacity-80 border border-gray-700 p-6 rounded-lg shadow-lg shadow-green-500/20">
          <p className="text-xl font-semibold text-orange-400 mb-4">Get in Touch</p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-sm">
              <span className="text-green-400 font-mono">📧</span>
              <span className="text-gray-400">Email: <a href="mailto:ishtiak.m.saad@gmail.com" className="text-orange-400 hover:text-orange-500">ishtiak.m.saad@gmail.com</a></span>
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              <span className="text-green-400 font-mono">📞</span>
              <span className="text-gray-400">Phone: <a href="tel:+8801876961930" className="text-orange-400 hover:text-orange-500">01876961930</a></span>
            </div>
            
            <div className="flex items-center space-x-4 text-sm">
              <span className="text-green-400 font-mono">💬</span>
              <span className="text-gray-400">WhatsApp: <a href="https://wa.me/8801876961930" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-500">01876961930</a></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
