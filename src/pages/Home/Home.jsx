import React, { useRef } from 'react';
import '../../App.css';
import { ReactComponent as GitHubLogo } from '../../Assets/svg/github-fa.svg';
import { ReactComponent as LinkedInLogo } from '../../Assets/svg/linkedin-fa.svg';
import { ReactComponent as MailLogo } from '../../Assets/svg/mail.svg';
import photo from '../../Assets/image/my_photo.png';

function Home() {
  const contactRef = useRef(null);

  const scrollToBottom = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-main-dark h-screen w-screen overflow-auto">
      <div className="px-2 lg:px-0 sm:px-3 bg-main-dark flex justify-center">
        <div className="mx-auto flex flex-row justify-between	mt-2" style={{ width: '64rem' }}>
          <h1 className="text-xl focus:outline-none text-neutral-white hover:text-main-yellow cursor-default">
            Hakan ALP
          </h1>

          <div className="flex flex-row">
            <a
              href="https://github.com/hakanalpp"
              className="focus:outline-none text-neutral-white hover:text-main-yellow">
              <GitHubLogo className="w-6 h-6 ml-auto" fill="currentColor" />
            </a>
            <a
              href="https://www.linkedin.com/in/hakan-alpp/"
              className="focus:outline-none text-neutral-white hover:text-main-yellow">
              <LinkedInLogo className="w-6 h-6 ml-3" fill="currentColor" />
            </a>
            <button
              type="button"
              onClick={() => scrollToBottom()}
              className="focus:outline-none h-6 text-neutral-white hover:text-main-yellow">
              <MailLogo className="w-6 h-6 ml-3" fill="currentColor" />
            </button>
          </div>
        </div>
      </div>

      <div className="cont">
        <img
          className="relative w-56 h-56 rounded-full border-2 border-gray-600 focus:outline-none border-neutral-white hover:border-main-yellow"
          src={photo}
          alt="ph"
        />
        <h1 className="text-3xl text-center text-main-yellow mt-8">Hi! I&apos;m Hakan.</h1>
        <h1 className="text-3xl text-center text-main-yellow mt-2">a Frontend developer.</h1>
      </div>

      <section>
        <div className="cont mt-4">
          <h1 className="head">About Me</h1>
          <div className="divider">
            <div className="mx-auto" style={{ width: '250px' }} />
            <div className="mx-auto" style={{ width: '250px' }} />
          </div>
          <div className="body">
            <div className="paragraph">
              <p>
                I&apos;m a senior year computer engineering student at IZTECH. I&apos;m also working
                as a Frontend developer located in Izmir. I&apos;m a frontend developer who develops
                cross-platform apps, responsive websites using Javascript technologies.
              </p>
              <p>I also spend my outsite time on being a fullstack javascript developer.</p>
              <p>
                I&apos;m always interested in becoming a better software developer, and working with
                good people as a team.
              </p>
              <p>
                <a
                  className="text-main-yellow font-semibold hover:underline"
                  href="https://www.linkedin.com/in/hakan-alpp/">
                  See my LinkedIn profile
                </a>{' '}
                for more career details.
              </p>
            </div>
            <div className="paragraph pl-4">
              <h2 className="text-main-yellow text-xl font-bold uppercase">Highlights</h2>
              <ul className="pl-4 list-disc list-inside">
                <li>
                  Went to Germany with Erasmus+ program for a whole year. Travelled 15 different
                  cities in Europe
                </li>
                <li>Competitive Programming enthusiast</li>
                <li>Had 3.48 GPA</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="cont">
          <h1 className="head">Interests</h1>
          <div className="divider">
            <div className="mx-auto" style={{ width: '250px' }} />
            <div className="mx-auto" style={{ width: '250px' }} />
          </div>
          <div className="body">
            <div className="paragraph">
              <p className="text-xl font-bold">My personal interests include:</p>
              <ul className="pl-4 list-disc list-inside space-y-2">
                <li>
                  <span className="font-bold">Software development.</span> Developing things was
                  always exciting for me. I&apos;m interested in new backend and frontend
                  technologies. (Mostly using Javascript)
                </li>
                <li>
                  <span className="font-bold">Visual Computing.</span> I got Image processing and
                  Computer Graphics courses both on my school and Erasmus. Those fields are very fun
                  and challenging for me.
                </li>
                <li>
                  <span className="font-bold">Creating things in general.</span> I&apos;ve always
                  been into creating stuff. When I was teenager I tried making games, maps and some
                  illustration on photoshop.
                </li>
              </ul>
            </div>
            <div className="paragraph pl-4">
              <h2 className="text-main-yellow text-xl font-bold">CURRENT JOB (Prighter)</h2>
              <ul className="pl-4 mb-2 list-disc list-inside">
                <li>
                  Developing a new product from scratch which will be used for the company for
                  client’s records using React and Flask.
                </li>
                <li>
                  Maintaining/improving the main project’s codebase using HTML, Javascript, Alpine
                  JS and Flask
                </li>
                <li>
                  Working with an agile team of 10 people. Using a well structured DevOps Lifecycle
                  tool GitLab
                </li>
              </ul>
              <h2 className="text-main-yellow text-xl uppercase font-bold ">Outsite Work</h2>
              <ul className="pl-4 list-disc list-inside">
                <li>
                  Leading/Mentoring developers on my previous company (Deltasmart Tech.) on my spare
                  time.
                </li>
                <li>
                  Helping{' '}
                  <a
                    href="http://helpimal.com/"
                    className="hover:underline text-neutral-white font-semibold">
                    <span>my friend&apos;s project</span>
                  </a>{' '}
                  about stray animals on its admin panel. We used React and material-ui.
                </li>
                <li>This website. It is done by using React and Tailwind CSS.</li>
              </ul>
              <h2 className="text-main-yellow text-xl uppercase font-bold ">Other Things</h2>
              <ul className="pl-4 list-disc list-inside">
                <li>
                  Took astro and landscape photos. Also editing and illustrating using Adobe
                  Softwares.
                </li>
                <li>Listen music almost 4 hours every day. Mostly metal and classical music.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section ref={contactRef}>
        <div className="cont">
          <h1 className="head justify-self-center">Contact Me</h1>
          <div className="divider">
            <div className="mx-auto" style={{ width: '250px' }} />
            <div className="mx-auto" style={{ width: '250px' }} />
          </div>
          <form
            target="_blank"
            className="form mt-6"
            action="https://formsubmit.co/6af9e4ef38230987925bb7fc91f30910"
            method="POST">
            <div className="inputgap">
              <div className="divider">
                <div className="cDivider" />
                <div className="cDivider" />
              </div>
              <div className="px-6 py-2">
                <input
                  type="text"
                  name="name"
                  className="form-control input"
                  placeholder="Name"
                  required
                />
              </div>
            </div>
            <div className="inputgap">
              <div className="divider">
                <div className="cDivider" />
                <div className="cDivider" />
              </div>
              <div className="px-6 py-2">
                <input
                  type="email"
                  name="email"
                  className="form-control input"
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>
            <div className="inputgap">
              <div className="divider">
                <div className="cDivider" />
                <div className="cDivider" />
              </div>
              <div className="px-6 py-2">
                <textarea
                  rows="6"
                  name="message"
                  className="form-control textarea"
                  style={{ resize: 'none' }}
                  placeholder="Message"
                  required
                />
              </div>
            </div>
            <div className="divider">
              <div className="cDivider" />
              <div className="cDivider" />
            </div>
            <div className="grid justify-items-end">
              <button
                type="submit"
                className="mr-6 mt-2 font-bold border border-main-yellow bg-main-yellow w-20 h-9 rounded-md hover:bg-main-dark hover:border-main-yellow hover:text-main-yellow">
                Send
              </button>
            </div>
          </form>
        </div>
      </section>

      <div className="h-10 bg-main-dark flex items-center grid justify-items-center">
        <p className="text-neutral-white text-sm">Copyright © Hakan ALP 2021</p>
      </div>
    </div>
  );
}

export default Home;
