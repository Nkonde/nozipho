import {
  Brain,
  Clock,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Award,
  BookOpen,
  Users,
  Heart,
  HelpCircle,
  GraduationCap,
  Briefcase,
} from "lucide-react";
import { useRef } from "react";

function App() {
  const aboutSectionRef = useRef<HTMLElement>(null);

  const scrollToAbout = () => {
    aboutSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div className="app">
      <header className="hero">
        <div
          className="hero-bg"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1545987796-200677ee1011?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
          }}
        />
        <div className="hero-content">
          <h1 className="hero-title">Nozipho Ndaba</h1>
          <p className="hero-subtitle">Clinical Psychologist</p>
          <div className="btn-container">
            <button className="btn btn-primary">Schedule Consultation</button>
            <button className="btn btn-outline" onClick={scrollToAbout}>Learn More</button>
          </div>
        </div>
      </header>

      <section className="section section-gray" ref={aboutSectionRef}>
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div>
              <img
                src="./src/images/dioxy.png"
                alt="Psychologist portrait"
                className="about-image"
              />
            </div>
            <div>
              <p className="about-text">
                I am a registered HPCSA Clinical Psychologist located in
                Pretoria. My practices encompass a wide array of offerings,
                including individual, couples, and family therapy. I have an
                interest in working with children, teenagers, and adults with a
                wide range of emotional and psychological difficulties. I use an
                integrative approach to cater for every client's needs. I strive
                to create an open and unconditionally accepting therapeutic
                environment in which you feel safe to explore your problems and
                concerns. I have much appreciation for the uniqueness of each
                individual and respect your innate ability to generate insight.
              </p>
              <div className="credentials">
                <div className="credential">
                  <Award size={20} />
                  <span>Licensed Psychologist</span>
                </div>
                <div className="credential">
                  <BookOpen size={20} />
                  <span>Master of Social Sciences in Clinical Psychology</span>
                </div>
                <div className="credential">
                  <Users size={20} />
                  <span>500+ Sessions</span>
                </div>
                <div className="credential">
                  <Brain size={20} />
                  <span>4+ Years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Education & Qualifications</h2>
          <div className="qualifications-container">
            <div className="qualifications-column">
              <h3 className="qualifications-subtitle">
                <GraduationCap size={24} />
                Education
              </h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">
                      Master of Social Sciences in Clinical Psychology
                    </h4>
                    <p className="timeline-institution">
                      North-west University
                    </p>
                   
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">BA Honours In Psychology</h4>
                    <p className="timeline-institution">
                      University of Johannesburg, Johannesburg
                    </p>
                   
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">
                      Bachelor of Social Science in Psychology
                    </h4>
                    <p className="timeline-institution">
                      North-West University, Mahikeng
                    </p>
                    {/* <p className="timeline-year">2002 - 2006</p>
                    <p className="timeline-description">
                      Graduated summa cum laude with honors in research
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="qualifications-column">
              <h3 className="qualifications-subtitle">
                <Briefcase size={24} />
                Professional Qualifications
              </h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">
                      Internship at Dr George Mukhari Academic hospital{" "}
                    </h4>

                    <p className="timeline-description"> 2020</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">
                    Community service at Department of Correctional Services 
                    </h4>

                    <p className="timeline-description"> 2022-2023</p>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">
                      Health Professions Council of South Africa Registration
                      number
                    </h4>

                    <p className="timeline-description">License #PS 0153974</p>
                  </div>
                </div>

                <div className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">BHF NUMBER</h4>

                    <p className="timeline-description"> Pr 1123513</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Areas of Expertise</h2>
          <div className="services-grid">
            {[
              {
                title: "Individual Psychotherapy",
                description:
                  "We offer collaborative sessions with a therapist to address personal challenges, improve mental well-being, and promote personal growth through confidential and tailored sessions.",
              },
              {
                title: "Marital/Family Therapy",
                description:
                  "We provide therapeutic support for improving relational dynamics and communication within family units.",
              },
              {
                title: "Trauma Recovery",
                description:
                  "Specialized treatment for trauma and PTSD using evidence-based approaches.",
              },
            ].map((service, index) => (
              <div key={index} className="service-card">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <h2 className="section-title">My Approach</h2>
          <div className="approach-grid">
            <div className="approach-column">
              <div className="approach-item">
                <Heart className="approach-icon" size={24} />
                <div>
                  <h3 className="approach-title">Compassionate Care</h3>
                  <p className="approach-text">
                    Creating a safe, non-judgmental space where you can explore
                    your thoughts and feelings freely.
                  </p>
                </div>
              </div>
              <div className="approach-item">
                <Brain className="approach-icon" size={24} />
                <div>
                  <h3 className="approach-title">Evidence-Based Methods</h3>
                  <p className="approach-text">
                    Utilizing proven therapeutic techniques tailored to your
                    unique needs and goals.
                  </p>
                </div>
              </div>
            </div>
            <div className="approach-column">
              <div className="approach-item">
                <Users className="approach-icon" size={24} />
                <div>
                  <h3 className="approach-title">Collaborative Healing</h3>
                  <p className="approach-text">
                    Working together to develop practical strategies for lasting
                    positive change.
                  </p>
                </div>
              </div>
              <div className="approach-item">
                <Award className="approach-icon" size={24} />
                <div>
                  <h3 className="approach-title">Professional Excellence</h3>
                  <p className="approach-text">
                    Committed to ongoing education and the highest standards of
                    psychological care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-container">
            {[
              {
                question: "What does therapy cost?",
                answer:
                  "My rate for 2025 financial year is R1 200.00 for 50-60minutes. For other services such as assessments please request for a quote.",
              },
              {
                question: "Medical aid scheme clients",
                answer:
                  "Sessions are charged based on the specific medical aid scheme rate.",
              },
            ].map((faq, index) => (
              <div key={index} className="faq-item">
                <h3 className="faq-question">
                  <HelpCircle size={20} />
                  {faq.question}
                </h3>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Contact Information</h2>
          <div className="contact-grid">
            <div className="contact-item">
              <Phone size={24} />
              <div>
                <h3 className="contact-label">Phone</h3>
                <p className="contact-value">083 229 2579</p>
              </div>
            </div>
            <div className="contact-item">
              <Mail size={24} />
              <div>
                <h3 className="contact-label">Email</h3>
                <p className="contact-value">Ndabanozipho6@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <MapPin size={24} />
              <div>
                <h3 className="contact-label">Location</h3>
                <p className="contact-value">Pretoria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container">
          <h2 className="section-title">Session Information</h2>
          <div className="schedule-grid">
            <div className="schedule-card schedule-card-white">
              <h3 className="schedule-title">
                <Clock size={20} />
                Office Hours
              </h3>
              <ul className="schedule-list">
                <li className="schedule-item">
                  <span>Monday - Friday</span>
                  <span>16:00 PM - 20:00 PM</span>
                </li>
                <li className="schedule-item">
                  <span>Saturday</span>
                  <span>9:00 AM - 13:00 PM</span>
                </li>
              </ul>
            </div>
            <div className="schedule-card schedule-card-dark">
              <h3 className="schedule-title">
                <Calendar size={20} />
                Initial Consultation
              </h3>
              <p className="schedule-text">
                Schedule a 30-minute initial consultation to discuss your needs
                and determine if we're a good fit for your therapeutic journey.
              </p>
              <button className="btn btn-primary">Book Consultation</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Nozipho Ndaba clinical psychologist. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
