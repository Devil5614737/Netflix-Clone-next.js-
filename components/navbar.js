import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Navbar = () => {
  const router=useRouter()
  useEffect(() => {
    let nav = document.getElementById("nav");
    window.addEventListener("scroll", () => {
      window.scrollY > 150
        ? (nav.style.backgroundColor = "rgb(20, 20, 20)")
        : (nav.style.backgroundImage =
            "linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0))");
    });
  });

useEffect(()=>{
const btn=document.getElementById('btn')
const logoutModal=document.getElementById('logoutModal')

btn.addEventListener('click',()=>{
  if(logoutModal.classList.contains('hidden')){
   return logoutModal.classList.remove('hidden')
  }else if(!logoutModal.classList.contains('hidden')){
    return logoutModal.classList.add('hidden')
  }
  
  
})
})

const handleLogout=()=>{
  localStorage.removeItem('token')
  router.push('/login')
}

  return (
    <div
      id="nav"
      className="sticky w-full flex justify-between items-center  pl-sm pr-sm pt-5 h-sm top-0 z-index2 bg-nav"
    >
      <div className="  flex items-center">
        <svg
          fill="red"
          viewBox="0 0 111 30"
          className="w-logo  md:mr-20 mr-12  cursor-pointer"
          focusable="false"
        >
          <g id="netflix-logo">
            <path
              d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
              id="Fill-14"
            ></path>
          </g>
        </svg>
        <Link href='/home'>
          <a className="text-2xl text-white font-semibold mr-9" href="#">
            Home
          </a>
        </Link>
        <a className="text-2xl text-white font-semibold mr-9 hidden md:block" href="#">
          Series
        </a>
        <a className="text-2xl text-white font-semibold mr-9 hidden md:block" href="#">
          Films
        </a>
        <a className="text-2xl text-white font-semibold mr-9 hidden md:block" href="#">
          New & Popular
        </a>
        <Link href='/mylist'>
          <a className="text-2xl text-white font-semibold mr-9 " href="#">
            My List
          </a>
        </Link>
        <a className="text-2xl text-white font-semibold mr-9 hidden md:block" href="#">
          Audio & Subtitles
        </a>
      </div>
      <div className="flex items-center ">
        <svg
          className="mr-6"
          cursor="pointer"
          width={27}
          height={27}
          fill="white"
          enable-background="new 0 0 32 32"
          id="Glyph"
          version="1.1"
          viewBox="0 0 32 32"
        >
          <path
            d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
            id="XMLID_223_"
          />
        </svg>
        <svg
          className="mr-6"
          fill="white"
          width={27}
          height={27}
          id="Layer_1"
          version="1.1"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="M381.7,225.9c0-97.6-52.5-130.8-101.6-138.2c0-0.5,0.1-1,0.1-1.6c0-12.3-10.9-22.1-24.2-22.1c-13.3,0-23.8,9.8-23.8,22.1   c0,0.6,0,1.1,0.1,1.6c-49.2,7.5-102,40.8-102,138.4c0,113.8-28.3,126-66.3,158h384C410.2,352,381.7,339.7,381.7,225.9z" />
            <path d="M256.2,448c26.8,0,48.8-19.9,51.7-43H204.5C207.3,428.1,229.4,448,256.2,448z" />
          </g>
        </svg>
        <img
          id="btn"
          className="rounded-md cursor-pointer"
          src="https://occ-0-4409-3647.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
          alt="user avatar"
        />
      </div>
      <div
        id="logoutModal"
        className="border-white absolute text-white right-10 top-36 bg-login-overlay p-4 hidden"
      >
        <p className="text-3xl font-semibold hover:underline cursor-pointer" onClick={()=>router.back()}>
          Go to profile
        </p>
        <p className="text-3xl font-semibold hover:underline cursor-pointer mt-3" onClick={handleLogout}>
          Logout
        </p>
      </div>
    </div>
  );
};

export default Navbar;
