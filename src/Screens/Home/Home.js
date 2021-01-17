import React, { useState } from 'react';
import { ReactComponent as GitHubLogo } from '../../Assets/svg/github-fa.svg';
import { ReactComponent as LinkedInLogo } from '../../Assets/svg/linkedin-fa.svg';
import photo from '../../Assets/image/my_photo.jpeg';

function Home() {
  const [isShown0, setIsShown0] = useState(false);
  const [isShown1, setIsShown1] = useState(false);
  const [isShown2, setIsShown2] = useState(false);

  return (
    <div className="w-full h-screen bg-neutral-white">
      <div className="w-full h-28 bg-dark-green px-20 flex items-center justify-between">
        <div>
          <button
            className={
              isShown0
                ? 'text-6xl focus:outline-none text-light-green'
                : 'text-6xl focus:outline-none text-neutral-white'
            }
            onMouseEnter={() => setIsShown0(true)}
            onMouseLeave={() => setIsShown0(false)}>
            Hakan ALP
          </button>
        </div>
        <div className="flex flex-row">
          <div>
            <a
              href="https://www.linkedin.com/in/hakan-alpp/"
              className="focus:outline-none"
              onMouseEnter={() => setIsShown1(true)}
              onMouseLeave={() => setIsShown1(false)}>
              <GitHubLogo className="w-12 h-12 ml-8" fill={isShown1 ? '#9DC88D' : '#E9E9ED'} />
            </a>
          </div>
          <div>
            <a
              href="https://github.com/hakanalpp"
              className="focus:outline-none"
              onMouseEnter={() => setIsShown2(true)}
              onMouseLeave={() => setIsShown2(false)}>
              <LinkedInLogo className="w-12 h-12 ml-6" fill={isShown2 ? '#9DC88D' : '#E9E9ED'} />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-auto bg-light-green flex items-center grid justify-items-center py-20">
        <img
          className="relative w-72 h-72 rounded-full border-8 border-neutral-white -mt-8"
          src={photo}
          alt="ph"
        />
        <p className="text-5xl text-neutral-white mt-8">Hi! I&apos;m Hakan.</p>
        <br className="border-8" />
        <p className="text-5xl text-neutral-white">a Frontend developer.</p>
      </div>

      <div className="w-full h-auto bg-neutral-white flex items-center grid justify-items-center pb-20 pt-6 divide-y-2 divide-dark-green">
        <div>
          <p className="text-4xl font-semibold text-dark-green">ABOUT ME</p>
        </div>
        <div className="mx-96 divide-x-0 flex flex-column p-4">
          <div className="whitespace-pre-line text-2xl flex flex-1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi consequat turpis at risus
            congue eleifend. Maecenas blandit enim nisl, vel viverra massa viverra eu. Duis
            ultricies lectus eu urna lobortis, eget ultricies tellus commodo. Vestibulum
            pellentesque dapibus lectus, et ullamcorper lectus tempus posuere. Interdum et malesuada
            fames ac ante ipsum primis in faucibus. Donec in mattis diam, et euismod nisl. Aliquam
            feugiat commodo libero non mollis. Suspendisse pulvinar cursus neque at imperdiet. Nulla
            scelerisque justo id dolor semper fermentum. Phasellus aliquet rutrum molestie. Morbi in
            velit non leo ultricies scelerisque. Integer aliquam lectus arcu, quis porttitor risus
            consectetur mattis.
          </div>
          <div className="whitespace-pre-line pl-4 text-2xl flex flex-1">
            Integer ac diam sagittis, ullamcorper nunc eget, mollis dui. Integer id elit in justo
            finibus imperdiet. Maecenas hendrerit ligula vel sem rhoncus, at finibus nisi vehicula.
            Maecenas molestie nunc vitae justo viverra venenatis. Proin pellentesque enim vitae
            lorem faucibus, nec eleifend augue tincidunt. Curabitur eu auctor neque. Morbi ligula
            dolor, consequat vitae sagittis a, faucibus vitae urna. Duis ullamcorper sapien a
            iaculis aliquet. Ut eros nunc, eleifend quis sapien sit amet, posuere faucibus magna.
          </div>
        </div>
      </div>

      <div className="w-full h-auto bg-light-green flex items-center grid justify-items-center pb-20 pt-6 divide-y-2 divide-dark-green">
        <div>
          <p className="text-4xl font-semibold text-dark-green">PROJECTS</p>
        </div>
        <div className="mx-96 divide-x-0 flex flex-column flex-auto p-4">
          <div className="whitespace-pre-line text-2xl flex flex-1">
            Phasellus vel massa quis sem porttitor viverra. Aliquam sed mauris eget purus iaculis
            volutpat nec eu nunc. Vestibulum nulla nibh, scelerisque vitae metus at, mattis semper
            nunc. Phasellus pretium, orci pellentesque malesuada facilisis, lacus dolor tempor
            neque, nec mollis dolor sapien vel ex. Vivamus venenatis purus lacus, vel accumsan erat
            mollis congue. Cras venenatis tempor erat et gravida. Nam vel bibendum tellus. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            Nulla justo elit, placerat in lacus sed, pulvinar gravida elit. Fusce a magna non nunc
            tempus tempus vel quis purus
          </div>
          <div className="whitespace-pre-line pl-4 text-2xl flex flex-1">
            Nulla nec commodo diam. Morbi consequat, massa tempus sodales convallis, justo massa
            laoreet metus, eu aliquam sem augue id purus. Pellentesque feugiat magna quis est
            egestas, eget aliquam metus consectetur. Ut dui lorem, sodales eget tristique at,
            volutpat vitae libero. Nullam ornare ligula ut orci tincidunt, vel consectetur lorem
            ullamcorper. Nulla faucibus dignissim congue. Phasellus lectus augue, finibus quis felis
            ac, mattis suscipit erat. Nullam suscipit sem et velit pulvinar, vel fringilla tellus
            interdum. Aenean rutrum nisi sed pretium ultricies. Ut ante massa, hendrerit eu finibus
            nec, posuere vel sapien. Donec ut fermentum libero. Vivamus volutpat tincidunt lorem in
            sollicitudin. Pellentesque sit amet congue tortor, hendrerit semper est. Donec sagittis
            tempor posuere. Nunc venenatis fringilla neque, id sollicitudin nibh rhoncus et. Sed vel
            ipsum id nunc mattis ultricies blandit a est.
          </div>
        </div>
      </div>

      <div className="w-full h-auto bg-neutral-white flex items-center grid justify-items-center pb-20 pt-6 divide-y-2 divide-dark-green">
        <div>
          <p className="text-4xl font-semibold text-dark-green">CONTACT ME</p>
        </div>
        <div className="mx-96 divide-x-0 flex flex-column flex-auto p-4">
          <div className="whitespace-pre-line text-2xl flex flex-1">
            Phasellus lectus augue, finibus quis felis ac, mattis suscipit erat. Nullam suscipit sem
            et velit pulvinar, vel fringilla tellus interdum. Aenean rutrum nisi sed pretium
            ultricies. Ut ante massa, hendrerit eu finibus nec, posuere vel sapien. Donec ut
            fermentum libero. Vivamus volutpat tincidunt lorem in sollicitudin. Pellentesque sit
            amet congue tortor, hendrerit semper est. Donec sagittis tempor posuere. Nunc venenatis
            fringilla neque, id sollicitudin nibh rhoncus et. Sed vel ipsum id nunc mattis ultricies
            blandit a est.
          </div>
          <div className="whitespace-pre-line pl-4 text-2xl flex flex-1">
            Integer ac diam sagittis, ullamcorper nunc eget, mollis dui. Integer id elit in justo
            finibus imperdiet. Maecenas hendrerit ligula vel sem rhoncus, at finibus nisi vehicula.
            Maecenas molestie nunc vitae justo viverra venenatis. Proin pellentesque enim vitae
            lorem faucibus, nec eleifend augue tincidunt. Curabitur eu auctor neque. Morbi ligula
            dolor, consequat vitae sagittis a, faucibus vitae urna. Duis ullamcorper sapien a
            iaculis aliquet. Ut eros nunc, eleifend quis sapien sit amet, posuere faucibus magna.
          </div>
        </div>
      </div>
      <div className="w-full h-16 bg-dark-green flex items-center grid justify-items-center">
        <p className="text-neutral-white text-2xl">Copyright © Hakan ALP 2021</p>
      </div>
    </div>
  );
}

export default Home;
