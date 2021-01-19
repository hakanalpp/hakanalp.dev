import React, { useState, useRef } from 'react';
import './Home.css';
import { ReactComponent as GitHubLogo } from '../../Assets/svg/github-fa.svg';
import { ReactComponent as LinkedInLogo } from '../../Assets/svg/linkedin-fa.svg';
import { ReactComponent as MailLogo } from '../../Assets/svg/mail.svg';
import photo from '../../Assets/image/my_photo.jpeg';

function Home() {
  const contactRef = useRef();

  const scrollTo = (ref) => {
    window.scroll({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };

  const [isShown0, setIsShown0] = useState(false);
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [isShown3, setIsShown3] = useState(false);
  const [isShown4, setIsShown4] = useState(false);

  return (
    <div className="bg-gray-700">
      <div className="px-2 lg:px-0 sm:px-3 bg-gray-700 flex justify-center">
        <div className="mx-auto flex flex-row justify-between	mt-2" style={{ width: '64rem' }}>
          <button
            className={
              isShown0
                ? 'text-xl focus:outline-none text-yellow-400'
                : 'text-xl focus:outline-none text-white'
            }
            onMouseEnter={() => setIsShown0(true)}
            onMouseLeave={() => setIsShown0(false)}>
            Hakan ALP
          </button>

          <div className="flex flex-row">
            <a
              href="https://www.linkedin.com/in/hakan-alpp/"
              className="focus:outline-none"
              onMouseEnter={() => setIsShown1(true)}
              onMouseLeave={() => setIsShown1(false)}>
              <GitHubLogo className="w-6 h-6 ml-auto" fill={isShown1 ? '#FBBF24' : '#E9E9ED'} />
            </a>
            <a
              href="https://github.com/hakanalpp"
              className="focus:outline-none"
              onMouseEnter={() => setIsShown2(true)}
              onMouseLeave={() => setIsShown2(false)}>
              <LinkedInLogo className="w-6 h-6 ml-3" fill={isShown2 ? '#FBBF24' : '#E9E9ED'} />
            </a>
            <button
              onClick={() => scrollTo(contactRef)}
              className="focus:outline-none h-6"
              onMouseEnter={() => setIsShown4(true)}
              onMouseLeave={() => setIsShown4(false)}>
              <MailLogo className="w-6 h-6 ml-3" fill={isShown4 ? '#FBBF24' : '#E9E9ED'} />
            </button>
          </div>
        </div>
      </div>

      <div className="cont">
        <button
          className="focus:outline-none"
          onMouseEnter={() => setIsShown3(true)}
          onMouseLeave={() => setIsShown3(false)}>
          <img
            className="relative w-56 h-56 rounded-full border-2 border-gray-600"
            style={{ 'border-color': isShown3 ? '#F59E0B' : '#4B5563' }}
            src={photo}
            alt="ph"
          />
        </button>
        <p className="text-3xl text-center text-yellow-500 mt-8">Hi! I&apos;m Hakan.</p>
        <p className="text-3xl text-center text-yellow-500 mt-2">a Frontend developer.</p>
      </div>

      <section>
        <div className="cont mt-4">
          <p className="head">ABOUT ME</p>
          <div className="divider">
            <div className="mx-auto" style={{ width: '250px' }}></div>
            <div className="mx-auto" style={{ width: '250px' }}></div>
          </div>
          <div className="body">
            <div className="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat turpis at
              risus congue eleifend. Maecenas blandit enim nisl, vel viverra massa viverra eu. Duis
              ultricies lectus eu urna lobortis, eget ultricies tellus commodo. Vestibulum
              pellentesque dapibus lectus, et ullamcorper lectus tempus posuere. Interdum et
              malesuada fames ac ante ipsum primis in faucibus. Donec in mattis diam, et euismod
              nisl. Aliquam feugiat commodo libero non mollis. Suspendisse pulvinar cursus neque at
              imperdiet. Nulla scelerisque justo id dolor semper fermentum. Phasellus aliquet rutrum
              molestie. Morbi in velit non leo ultricies scelerisque. Integer aliquam lectus arcu,
              quis porttitor risus consectetur mattis.
            </div>
            <div className="paragraph pl-4">
              Integer ac diam sagittis, ullamcorper nunc eget, mollis dui. Integer id elit in justo
              finibus imperdiet. Maecenas hendrerit ligula vel sem rhoncus, at finibus nisi
              vehicula. Maecenas molestie nunc vitae justo viverra venenatis. Proin pellentesque
              enim vitae lorem faucibus, nec eleifend augue tincidunt. Curabitur eu auctor neque.
              Morbi ligula dolor, consequat vitae sagittis a, faucibus vitae urna. Duis ullamcorper
              sapien a iaculis aliquet. Ut eros nunc, eleifend quis sapien sit amet, posuere
              faucibus magna.
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="cont">
          <p className="head">PROJECTS</p>
          <div className="divider">
            <div className="mx-auto" style={{ width: '250px' }}></div>
            <div className="mx-auto" style={{ width: '250px' }}></div>
          </div>
          <div className="body">
            <div className="paragraph">
              Phasellus vel massa quis sem porttitor viverra. Aliquam sed mauris eget purus iaculis
              volutpat nec eu nunc. Vestibulum nulla nibh, scelerisque vitae metus at, mattis semper
              nunc. Phasellus pretium, orci pellentesque malesuada facilisis, lacus dolor tempor
              neque, nec mollis dolor sapien vel ex. Vivamus venenatis purus lacus, vel accumsan
              erat mollis congue. Cras venenatis tempor erat et gravida. Nam vel bibendum tellus.
              Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Nulla justo elit, placerat in lacus sed, pulvinar gravida elit. Fusce a
              magna non nunc tempus tempus vel quis purus
            </div>
            <div className="paragraph pl-4">
              Nulla nec commodo diam. Morbi consequat, massa tempus sodales convallis, justo massa
              laoreet metus, eu aliquam sem augue id purus. Pellentesque feugiat magna quis est
              egestas, eget aliquam metus consectetur. Ut dui lorem, sodales eget tristique at,
              volutpat vitae libero. Nullam ornare ligula ut orci tincidunt, vel consectetur lorem
              ullamcorper. Nulla faucibus dignissim congue. Phasellus lectus augue, finibus quis
              felis ac, mattis suscipit erat. Nullam suscipit sem et velit pulvinar, vel fringilla
              tellus interdum. Aenean rutrum nisi sed pretium ultricies. Ut ante massa, hendrerit eu
              finibus nec, posuere vel sapien. Donec ut fermentum libero. Vivamus volutpat tincidunt
              lorem in sollicitudin. Pellentesque sit amet congue tortor, hendrerit semper est.
              Donec sagittis tempor posuere. Nunc venenatis fringilla neque, id sollicitudin nibh
              rhoncus et. Sed vel ipsum id nunc mattis ultricies blandit a est.
            </div>
          </div>
        </div>
      </section>

      <section ref={contactRef}>
        <div className="cont">
          <p className="head justify-self-center">CONTACT ME</p>
          <div className="divider">
            <div className="mx-auto" style={{ width: '250px' }}></div>
            <div className="mx-auto" style={{ width: '250px' }}></div>
          </div>
          <p className="text-bold text-yellow-500">!!! This part is under construction !!!</p>
          <div className="inputgap">
            <div className="divider">
              <div className="cDivider"></div>
              <div className="cDivider"></div>
            </div>
            <input className="input justify-self-start" placeholder="E-mail" />
          </div>
          <div className="inputgap">
            <div className="divider">
              <div className="cDivider"></div>
              <div className="cDivider"></div>
            </div>
            <input className="input justify-self-start" placeholder="Name" />
          </div>
          <div className="inputgap">
            <div className="divider">
              <div className="cDivider"></div>
              <div className="cDivider"></div>
            </div>
            <input className="input justify-self-start" placeholder="Message" />
          </div>
          <div className="divider pt-14">
            <div className="cDivider"></div>
            <div className="cDivider"></div>
          </div>
        </div>
      </section>

      <div className="h-10 bg-gray-700 flex items-center grid justify-items-center">
        <p className="text-neutral-white text-sm">Copyright © Hakan ALP 2021</p>
      </div>
    </div>
  );
}

export default Home;
