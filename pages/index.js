import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Bars from "../components/Bars";
import Footer from "../components/Footer";

export default function Home() {
  const [showDesc, setShowDesc] = useState(false);

  const router = useRouter();

  const handleClick = () => {
    setShowDesc(showDesc ? false : true);
  };

  return (
    <>
      <header className="font-display">
        <section className="bg-hero-pattern text-white h-xs w-xs  bg-cover bg-center z-10 relative  md:bg-black lg:bg-black before:w-full before:h-full before:bg-home before:absolute before:-z-10'">
          <div className="flex justify-between  pr-16 pl-16 pt-8 relative z-index items-center ">
            <svg
              fill="red"
              height={50}
              width={100}
              viewBox="0 0 111 30"
              class="svg-icon svg-icon-netflix-logo"
              focusable="true"
            >
              <g id="netflix-logo">
                <path
                  d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                  id="Fill-14"
                ></path>
              </g>
            </svg>
            <div className="btnContainer">
              <button className="mr-6  text-cyan-50  rad rounded-sm bg-login-overlay text-3xl p-1 pl-8 pr-8">
                English
              </button>
              <button
                className="bg-netflix text-3xl p-1 pl-8 pr-8 rounded-md ml-8"
                onClick={() => router.push("/login")}
              >
                Sign In
              </button>
            </div>
          </div>
          <div className="grid place-items-center p-3.5 leading-8 mt-32 relative z-index">
            <p className="font-bold text-4xl text-center  leading-5 md:leading-xl max-w-4xl md:text-7xl">
              Unlimited movies, TV shows and more.
            </p>
            <p className="font-semibold text-4xl mt-10 ">
              Watch anywhere. Cancel anytime.
            </p>
            <p className="text-center text-2xl font-semibold mt-9">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div className="flex flex-col md:flex-row  mt-5">
              <input
                className="text-3xl block  w-full  h-24 focus:outline-none text-black md:w-input"
                type="text"
                placeholder="Email address"
              />
              <button
                className="flex m-auto md:m-0
            justify-center items-center   bg-netflix text-white  w-56 h-16 mt-10 font-semibold text-2xl md:h-24 "
              >
                Get Started
                <svg
                  className="ml-3"
                  fill="white"
                  height="20px"
                  viewBox="0 0 6 12"
                >
                  <desc>chevron</desc>
                  <path
                    d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"
                    fill="white"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </section>
      </header>
      <hr className="w-full h-3 bg-hr border-none" />
      <section>
        <div
          className="flex flex-col md:flex md:flex-row 
          p-5 pb-15 md:justify-between md:items-center md:p-6 md:pl-60 md:pr-60 md:pb-12 pt-14"
        >
          <div className="textContainer">
            <p className="text-white font-bold text-4xl text-center md:text-7xl">
              Enjoy on your TV.
            </p>
            <p
              className="text-white  text-3xl  max-w-2xl
          text-center mt-5 md:text-4xl md:mt-0"
            >
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          <div className="imageContainer">
            <Image src="/home-tv.jpg" width={530} height={392} />
          </div>
        </div>
      </section>
      <hr className="w-full h-3 bg-hr border-none" />
      <section>
        <div className="flex-col md:flex md:flex-row items-center justify-between pt-10 pb-12  ">
          <div className="ml-24">
            <Image
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
              width={530}
              height={392}
            />
          </div>
          {/* text-white font-bold text-4xl text-center md:text-7xl */}
          <div className=" mt-12">
            <p className="text-white font-bold text-4xl md:odd:max-w-xsm leading-xl md:text-7xl text-center  md:text-left ">
              Download your shows to watch offline.
            </p>
            <p
              className="text-white  text-3xl  max-w-2xl
          text-center mt-5 md:text-4xl md:mt-0 md:text-left"
            >
              Save your favourites easily and always have something to watch.
            </p>
          </div>
        </div>
      </section>
      <hr className="w-full h-3 bg-hr border-none" />
      <section>
        <div
          className="flex flex-col md:flex md:flex-row 
      p-5 pb-15 md:justify-between md:items-center md:p-6 md:pl-60 md:pr-60 md:pb-12 pt-14"
        >
          <div className="textContainer">
            <p className="text-white font-bold text-4xl text-center md:text-7xl">
              Watch everywhere.
            </p>
            <p
              className="text-white  text-3xl  max-w-2xl
          text-center mt-5 md:text-4xl md:mt-0"
            >
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
          <div className="imageContainer">
            <Image src="/home-imac.jpg" width={530} height={392} />
          </div>
        </div>
      </section>
      <hr className="w-full h-3 bg-hr border-none" />
      <section>
        <div className="flex-col md:flex md:flex-row items-center justify-between pt-10 pb-12 pl-5 pr-5 ">
          <div className="ml-12">
            <Image src="/image.png" width={530} height={392} />
          </div>
          <div className="textContainer ml-20">
            <p className="text-white font-bold text-4xl md:odd:max-w-xsm leading-xl md:text-7xl text-center  md:text-left ">
              Create profiles for children.
            </p>
            <p
              className="text-white  text-3xl  max-w-2xl
          text-center mt-5 md:text-4xl md:mt-0 md:text-left "
            >
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </p>
          </div>
        </div>
      </section>
      <hr className="w-full h-3 bg-hr border-none" />
      <section className="md:grid md:place-items-center">
        {/* text-white font-bold text-7xl p-9 text-center */}
        <div>
          <p className="text-white font-bold text-4xl p-9 text-center md:text-7xl">
            Frequently Asked Questions
          </p>
        </div>
        <div className="border  p-7">
          <Bars
            showDesc={showDesc}
            handleClick={handleClick}
            setShowDesc={setShowDesc}
            question="What is netflix?"
            answer="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more  on thousands of internet-connected devices."
          />
          <Bars
            showDesc={showDesc}
            setShowDesc={setShowDesc}
            handleClick={handleClick}
            question="How much does Netflix cost?"
            answer="Watch Netflix on your smartphone,tablet, Smart Tv, laptop, or streaming device, all for one fixed monthly fee"
          />
          <Bars
            showDesc={showDesc}
            setShowDesc={setShowDesc}
            handleClick={handleClick}
            question="Where can I watch?"
            answer="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
          />
          <Bars
            showDesc={showDesc}
            setShowDesc={setShowDesc}
            handleClick={handleClick}
            question="How do I cancel?"
            answer="Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
          />
        </div>
      </section>
      <section className="grid place-items-center p-12">
        <div className="mb-5">
          <p className="text-center text-white text-2xl font-semibold mt-9">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </div>
        <div className="flex flex-col md:flex-row  mt-5">
          <input
            className="text-3xl block  w-full  h-24 focus:outline-none text-black md:w-input"
            type="text"
            placeholder="Email address"
          />
          <button
            className="flex m-auto md:m-0
            justify-center items-center   bg-netflix text-white  w-56 h-16 mt-10 font-semibold text-2xl md:h-24 "
          >
            Get Started
            <svg className="ml-3" fill="white" height="20px" viewBox="0 0 6 12">
              <desc>chevron</desc>
              <path
                d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z"
                fill="white"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </section>
      <hr className="w-full h-3 bg-hr border-none" />
      <section className="w-fw m-auto p-12">
        <Footer />
      </section>
    </>
  );
}
