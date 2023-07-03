
const ContactForm = () => {
    return (
      <div className="text-white my-12 px-6 w-full">
        <div className="md:flex items-center justify-center gap-7 mb-8">
          <div className="mb-8 basis-1/2">
            <label className="text-2xl">Hey, My name is</label>
            <input
              className="focus:outline-none text-2xl bg-transparent ms-5 border-b-2"
              type="text"
              placeholder="Type Here"
              name="full name"
              minLength="2"
              required=""
            ></input>
          </div>
          <div className="basis-1/2">
            <label className="text-2xl">I am looking for</label>
            <input
              className="focus:outline-none text-2xl bg-transparent ms-5 border-b-2"
              type="text"
              placeholder="Type Of service"
              name="full name"
              minLength="2"
              required=""
            ></input>
          </div>
        </div>
        <div className="md:flex items-center gap-7 mb-8 w-full">
          <label className="text-2xl">Get in touch with me at,</label>
          <input
            className="focus:outline-none text-2xl bg-transparent ms-5 border-b-2"
            type="text"
            placeholder="Your Email Id Here"
            name="full name"
            minLength="2"
            required=""
          ></input>
        </div>

        <div className="w-8/12 mb-4">
          <textarea
            className="focus:outline-none text-2xl bg-transparent border-b-2 resize-none w-full"
            placeholder="Your Message"
            name="message"
            required=""
            spellCheck="false"
          ></textarea>
        </div>
        <div>
          <button className="btn bg-[#10AFAF] border-none">Send Me</button>
        </div>
      </div>
    );
};

export default ContactForm;