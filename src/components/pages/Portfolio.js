import React, { Fragment } from "react";
import Project_1 from "../../images/proj_1.png";
import Project_2 from "../../images/proj_2.png";
import Project_3 from "../../images/proj_3.png";
import Pic_1 from "../../images/zoe.jpeg";
import Pic_2 from "../../images/jason.jpeg";
import Pic_3 from "../../images/luqie.jpeg";
import Pic_4 from "../../images/jaabs.jpeg";
import Pic_5 from "../../images/joshua.jpg";
import Pic_6 from "../../images/tyla.jpeg";
import Me from "../../images/me.jpeg";

const Portfolio = () => {
  return (
    <Fragment>
      <header className="masthead" id="pageTop">
        <div className="container">
          <div className="masthead-subheading">
            Welcome To My Portfolio! <br />
          </div>
          <div className="masthead-heading text-uppercase">
            It's Great To Have You Here <br />I am Chelsea Erispe
          </div>
          <a
            className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
            href="#skillset"
          >
            Hop Right Into It
          </a>
          <a
            className="btn btn-primary btn-xl text-uppercase js-scroll-trigger"
            data-toggle="modal"
            href="#myModal"
          >
            More Information
          </a>
        </div>
      </header>
      <section className="page-section bg-light" id="skillset">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Skillset</h2>
            <h3 className="section-subheading text-muted">
              Rating Of Skills Aquired
            </h3>
          </div>
          <div className="row text-center">
            <div className="col-md-4">
              <span className="fa-stack fa-5x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-stack-1x fa-inverse">
                  <div className="rating">90%</div>
                </i>
              </span>
              <h4 className="my-3">HTML</h4>
              <p className="text-muted">
                I whole-heartedly enjoy HTML - Fornt-End really appeals to me. I
                think I would excel in a Front-End Career.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-5x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-stack-1x fa-inverse">
                  <div className="rating">70%</div>
                </i>
              </span>
              <h4 className="my-3">PYTHON</h4>
              <p className="text-muted">
                I am capable of doing Python although Back-End is not my passion
                and strong suit.
              </p>
            </div>
            <div className="col-md-4">
              <span className="fa-stack fa-5x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-stack-1x fa-inverse">
                  <div className="rating">75%</div>
                </i>
              </span>
              <h4 className="my-3">JAVASCRIPT</h4>
              <p className="text-muted">
                At times JavaScript can be cryptic but I am comfortable with it
                and I am willing and able do it if I put my mind to it.
              </p>
            </div>
            <div className="col-md-6">
              <span className="fa-stack fa-5x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-stack-1x fa-inverse">
                  <div className="rating">60%</div>
                </i>
              </span>
              <h4 className="my-3">MYSQL</h4>
              <p className="text-muted">
                MYSQL and I have a love-hate relationship. One day I like it and
                the next I don't. I'm sure with more exposure to I could come to
                like it and become more comfortable with it.
              </p>
            </div>
            <div className="col-md-6">
              <span className="fa-stack fa-5x">
                <i className="fas fa-circle fa-stack-2x text-primary"></i>
                <i className="fas fa-stack-1x fa-inverse">
                  <div className="rating">85%</div>
                </i>
              </span>
              <h4 className="my-3">REACT</h4>
              <p className="text-muted">
                I have grown to like React as I've learnt it. At first I was not
                too sure on my React abilities but through this project I've
                come to like it.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Projects */}
      <section className="page-section bg-dark" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">My Work</h2>
            <h3 className="section-subheading text-muted">
              Take A Quick Look At My Work
            </h3>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal1"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={Project_1} alt="" />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Github Finder</div>
                  <div className="portfolio-caption-subheading text-muted">
                    First React Project
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal2"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={Project_2} alt="" />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">
                    Contact Kepper
                  </div>
                  <div className="portfolio-caption-subheading text-muted">
                    Second React Project
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="portfolio-item">
                <a
                  className="portfolio-link"
                  data-toggle="modal"
                  href="#portfolioModal3"
                >
                  <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                      <i className="fas fa-plus fa-3x"></i>
                    </div>
                  </div>
                  <img className="img-fluid" src={Project_3} alt="" />
                </a>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">I.T Logger</div>
                  <div className="portfolio-caption-subheading text-muted">
                    Third React Project
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About */}
      <section className="page-section bg-light" id="about">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">About Me</h2>
            <h3 className="section-subheading text-muted">
              I am a diligent and hard-working person that strives for greatness
              in everything I do. I am creative, disciplined and motivated. My
              family is very important to me and put them at the centre of
              everything I do.
            </h3>
          </div>
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="" alt="" />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>General Information</h4>
                  <h4 className="subheading">Intoduction To Me</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Full Name: Chelsea Erispe <br />
                    Date of Birth: 03/08/2000 <br />
                    Gender: Female <br />
                    Location: Rondebosch East <br />
                    Nationality: South African <br />
                    Willing to relocate: No <br />
                    Any type of criminal record: No <br />
                    Are you blacklisted or credit issues: No
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="" alt="" />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>Get To Know Me Better</h4>
                  <h4 className="subheading">My Passions</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    <ul>
                      <li>Finding new places to eat</li>
                      <li>
                        Exploring, going on adventures and going on road trips
                      </li>
                      <li>Spending time with my family and friends</li>
                      <li>Playing games (I'm quite competetive)</li>
                      <li>Cooking</li>
                    </ul>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="" alt="" />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2014-2018</h4>
                  <h4 className="subheading">High School Career</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    I attended Groote Schuur High School in Newlands. I
                    throughly enjoyed school and made the most of the time I
                    spent there
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="" alt="" />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2016-Present</h4>
                  <h4 className="subheading">Work Experience</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Company: Perfect Solutions Period: 2016 - present Role:
                    Brand Ambassador (promotional work) Duties: <br />
                    <ul>
                      <li>Promote Products</li>
                      <li>Increase Sales</li>
                      <li>
                        Persuade Customers Into Purchasing More Than They
                        Intended
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="" alt="" />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2020</h4>
                  <h4 className="subheading">Introduction To Coding</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    I was first introduced to coding when I was 16. Code for
                    Cape Town visited our school and gave us a presentation. It
                    was the first time I've given coding a thought. When growing
                    up it was not mentioned as a career option - the only ones
                    mentioned were the basics (doctor, lawyer, businessman). So
                    when they did the presentation I found myself quite
                    interested. I joined the programme and loved it but due to
                    unforeseen circumstances, I had to stop. I then heard about
                    Life Choices through a friend who completed the program, I
                    knew this was my opportunity to start it up again.
                  </p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>My Journey Does Not Stop Here</h4>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* Testimonials */}
      <section className="page-section bg-dark" id="testimonials">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Testimonials</h2>
            <h3 className="section-subheading text-muted">Supporting Words</h3>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={Pic_1} alt="" />
                <h4>Zoe Erispe</h4>
                <p className="text-muted">Family Member</p>

                <p>
                  Chelsea is such a kind and calm person which translates into
                  her work. She is always strives for the best in everything she
                  does. I am confident Chelsea will do justice to her talents
                  and abilities. I have no hesitation saying that Chelsea will
                  rise to occassion and shows great potential.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={Pic_2} alt="" />
                <h4>Jason Wandrag</h4>
                <p className="text-muted">Lecturer</p>

                <p>
                  Chelsea has shown to be a diligent and independent developer,
                  who shows a big love for family, and brings the same amount of
                  care to her work.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={Pic_3} alt="" />
                <h4>Luqmaan Fortune</h4>
                <p className="text-muted">Fellow Peer</p>

                <p>
                  Well I'd definitely have to say this is determination at its
                  finest. She is well dedicated and always strives to give
                  everything her outmost best. She'd always seem to push her
                  self to be successful at the end of the day.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={Pic_4} alt="" />
                <h4>Jaabir Esau</h4>
                <p className="text-muted">Fellow Peer</p>

                <p>
                  The biggest breakthrough that i have achieved working with
                  Chelsea Erispe was that she could always keep her team mates
                  focused on the end goal. I liked most working with her because
                  of her quick thinking skills which helps maintain a steady
                  pace. I would recommend anyone to work with Chelsea. She is
                  focused, determined ans empowering. She definitely brings the
                  best out of you.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={Pic_5} alt="" />
                <h4>Joshua Davids</h4>
                <p className="text-muted">Fellow Peer</p>

                <p>
                  A hardworking woman with a keen eye for design. With every
                  design she follows uniform styling and choosing a great color
                  styling that has brought her true persona. With her
                  consistency, she has proven to learn and adapt quickly under
                  all situations, making her a natural. She has proven to be a
                  great communicator. Hiring Chelsea will be a benefit as she
                  contributes clean designs, and would be a great assest to your
                  company as she is self motivated, and has the ability to work
                  effectively on her own and on a team.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-member">
                <img className="mx-auto rounded-circle" src={Pic_6} alt="" />
                <h4>Tyla Cooper</h4>
                <p className="text-muted">Friend</p>

                <p>
                  Chelsea is someone enjoys a challenge, works well in a group
                  and gives her best. She i mature and principled, capable of
                  acting independently and taking initiative. When she works she
                  shows self-motivation, perserverance and a great work ethic.
                  Her work is always well-presented and executes it in a timely
                  manner.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">
                Testimonials from my fellow colleagues and comrads.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Contact */}
      <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Contact Me</h2>
            <h3 className="section-subheading text-muted">
              Get Intouch With Me!
            </h3>
          </div>
          <form
            id="contactForm"
            name="sentMessage"
            noValidate="noValidate"
            action="https://formspree.io/mgennynj"
            method="POST"
          >
            <div className="row align-items-stretch mb-5">
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    name="_replyto"
                    placeholder="Full Name"
                    required="required"
                    data-validation-required-message="Please enter your name."
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    name="message"
                    placeholder="Email Address"
                    required="required"
                    data-validation-required-message="Please enter your email address."
                  />
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group mb-md-0">
                  <input
                    className="form-control"
                    id="phone"
                    type="tel"
                    placeholder="Phone Number"
                    required="required"
                    data-validation-required-message="Please enter your phone number."
                  />
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-group-textarea mb-md-0">
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Your Message"
                    required="required"
                    data-validation-required-message="Please enter a message."
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div id="success"></div>
              <button
                className="btn btn-primary btn-xl text-uppercase"
                id="sendMessageButton"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* Footer */}
      <footer className="footer py-4">
        <div className="container">
          <div className="row align-items-center">Made By Chelsea Erispe</div>
        </div>
      </footer>
      {/* Portfolio Modals */
      /* Modal 1 */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal1"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <i className="fas fa-times" alt="Close modal" />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* Project Details Go Here */}
                    <h2 className="text-uppercase">Github Finder</h2>
                    <p className="item-intro text-muted">
                      Find Anyone's Github Project
                    </p>
                    <img
                      className="img-fluid d-block mx-auto"
                      src={Project_1}
                      alt=""
                    />
                    <p>
                      React app to search Github profiles. This app uses the
                      Context API along with the useContext and useReducer hooks
                      for state management
                    </p>
                    <ul className="list-inline">
                      <li>Date: June 2020</li>
                      <li>
                        <a href="https://github.com/crispyerispe/Git-hub-Finder">
                          Take a closer look
                        </a>
                      </li>
                    </ul>
                    <button
                      className="btn btn-primary"
                      data-dismiss="modal"
                      type="button"
                    >
                      <i className="fas fa-times mr-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal 2 */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal2"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <i className="fas fa-times" alt="Close modal" />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* Project Details Go Here */}
                    <h2 className="text-uppercase">Contact Keeper</h2>
                    <p className="item-intro text-muted">
                      Logs Your Contacts And Keeps Them Private
                    </p>
                    <img
                      className="img-fluid d-block mx-auto"
                      src={Project_2}
                      alt=""
                    />
                    <p>
                      Contact manager using React hooks and contex. Has both
                      front-end and back-end elements.
                    </p>
                    <ul className="list-inline">
                      <li>Date: June 2020</li>
                      <li>
                        <a href="https://github.com/crispyerispe/Contact-Keeper">
                          Take a closer look
                        </a>
                      </li>
                    </ul>
                    <button
                      className="btn btn-primary"
                      data-dismiss="modal"
                      type="button"
                    >
                      <i className="fas fa-times mr-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal 3 */}
      <div
        className="portfolio-modal modal fade"
        id="portfolioModal3"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <i className="fas fa-times" alt="Close modal" />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    {/* Project Details Go Here */}
                    <h2 className="text-uppercase">I.T Logger</h2>
                    <p className="item-intro text-muted">
                      Keeps Your Log System Organized
                    </p>
                    <img
                      className="img-fluid d-block mx-auto"
                      src={Project_3}
                      alt=""
                    />
                    <p>
                      React app to track IT department tasks and issues. Uses
                      JSON-Server as a mock backend.
                    </p>
                    <ul className="list-inline">
                      <li>Date: June-July 2020</li>
                      <li>
                        <a href="https://github.com/crispyerispe/IT-Logger">
                          Take a closer look
                        </a>
                      </li>
                    </ul>
                    <button
                      className="btn btn-primary"
                      data-dismiss="modal"
                      type="button"
                    >
                      <i className="fas fa-times mr-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* More Information Modal */}
      <div
        className="portfolio-modal modal fade"
        id="myModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModal"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="close-modal" data-dismiss="modal">
              <i className="fas fa-times" alt="Close modal" />
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    <h2 className="text-uppercase">Get In Touch With Me</h2>
                    <p className="item-intro text-muted">
                      I hope you enjoyed getting to know me and I hope you see
                      you in the future!
                    </p>
                    <img
                      className="img-fluid d-block mx-auto"
                      src={Me}
                      alt=""
                    />
                  </div>
                  <ul className="list-inline">
                    <li>Phone: 084 860 4537</li>
                    <li>Email: chelseaerispe3@gmail.com</li>
                    <a href="https://github.com/crispyerispe">
                      Check out my Github Page
                    </a>
                  </ul>
                  <button
                    className="btn btn-primary"
                    data-dismiss="modal"
                    type="button"
                  >
                    <i className="fas fa-times mr-1"></i>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Portfolio;
