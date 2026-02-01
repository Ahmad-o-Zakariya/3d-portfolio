import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Reach me directly on any platform below"
        />

        <div className="grid-12-cols mt-16 items-stretch">
          {/* LEFT: CONTACT LINKS */}
          <div className="xl:col-span-5 flex">
            <div className="card-border rounded-2xl p-14 flex-1 flex items-center justify-center">
              <div className="flex flex-col gap-8 text-xl">
                
                <a
                  href="https://www.linkedin.com/in/ahmad-zakariya-482567323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:underline transition"
                >
                  <FaLinkedin size={26} className="shrink-0" />
                  <span>LinkedIn · ahmad-zakariya</span>
                </a>

                <a
                  href="mailto:ahmadzakariya.jk@email.com"
                  className="flex items-center gap-4 hover:underline transition"
                >
                  <MdEmail size={26} className="shrink-0" />
                  <span>ahmadzakariya.jk@email.com</span>
                </a>

                <a
                  href="https://github.com/Ahmad-o-Zakariya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:underline transition"
                >
                  <FaGithub size={26} className="shrink-0" />
                  <span>GitHub · Ahmad-o-Zakariya</span>
                </a>

              </div>
            </div>
          </div>

          {/* RIGHT: 3D / VISUAL */}
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e]/90 w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
