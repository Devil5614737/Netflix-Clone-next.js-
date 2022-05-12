import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
// import MovieCard from "../components/MovieCard";
import {
  actionMovies,
  documentaries,
  horror,
  romantic,
  topRated,
  trendings,
} from "../api";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import MovieCard from "../components/MovieCard";
import { useRouter } from "next/router";
import Image from "next/image";
import Footer from "../components/Footer";
import MovieInfo from "../components/MovieInfo";

const imageLink = "https://image.tmdb.org/t/p/original";

function home({ movies, movies2, movies3, movies4, movies5, movies6 }) {
  const [imgSrc, setImgSrc] = useState("");
  const [movie, setMovie] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/login");
    }
  }, [typeof window !== "undefined" && localStorage.getItem("token")]);

  useEffect(() => {
    const fetchData = () => {
      let title = document.getElementById("title");
      let desc = document.getElementById("desc");
      let data = movies[Math.floor(Math.random() * movies.length - 1)];
      title.textContent = (data && data.title) || data.original_name;
      desc.textContent = data && data.overview;
      let i = data && data.backdrop_path;
      setImgSrc(i);
    };

    fetchData();
  }, []);

  const handleAdd = (data) => {
    setMovie([...movie, data]);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(movie));
  }, []);

  useEffect(() => {
    const infoBtn = document.getElementById("infoBtn");
    const modal = document.getElementById("modal");

    infoBtn.addEventListener("click", () => {
      modal.showModal();
    });
  }, []);

  return (
    <>
     <Navbar />
      <header>
       
        <div className="w-xs h-xs before:w-full before:h-full before:bg-hero before:absolute before:z-20 before:left-0 before:top-0 ">
          <Image
            className=""
            src={`${imageLink}${imgSrc}`}
            width="100vw"
            height="100vh"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <div className="text-white  pl-sm pr-sm pt-5 relative z-30 mt-52">
            <p id="title" className="font-bold text-4xl md:text-8xl"></p>
            <p id="desc" className="text-2xl max-w-4xl mt-4 md:text-3xl"></p>
          </div>
          <div className="relative z-30 pl-sm pr-sm pt-5 flex items-center">
            <button className="flex items-center bg-white text-3xl font-bold p-3 pl-11 pr-11 rounded-md mr-7">
              <svg
                className="mr-4"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                class="Hawkins-Icon Hawkins-Icon-Standard"
              >
                <path
                  d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                  fill="currentColor"
                ></path>
              </svg>{" "}
              Play
            </button>
            <button className="bg-btn text-3xl font-bold p-3 pl-11 pr-11 rounded-md flex items-center text-white">
              <svg
                className="mr-4"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
                class="Hawkins-Icon Hawkins-Icon-Standard"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
                  fill="currentColor"
                ></path>
              </svg>{" "}
              More Info
            </button>
          </div>
        </div>
      </header>
      {/* <MovieInfo /> */}
      <div className="pb-8">
        <div className="">
          <div className="container max-w-fit mt-mtop  ">
            <div className="pt-0 p-12">
              <p className="text-white text-3xl font-bold">Trending Now</p>
            </div>
            <Splide
              options={{
                perPage: 5,
                pagination: false,
                gap: 6,
                rewind: true,
                breakpoints: {
                  640: {
                    height: "40rem",
                    perPage: 2,
                  },
                },
              }}
              className="my-carousel mt-margin-top"
            >
              {movies.map((movie) => (
                <SplideSlide>
                  <MovieCard
                    img={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    width={400}
                    height={700}
                    rounded="true"
                    handleAdd={handleAdd}
                    data={movie}
                  />
                </SplideSlide>
              ))}
            </Splide>
          </div>
          <div className="container max-w-fit mt-12 ">
            <div className="pt-0 p-12">
              <p className="text-white text-3xl font-bold">Actions</p>
            </div>
            <Splide
              options={{
                perPage: 5,
                pagination: false,
                gap: 6,
                rewind: true,
                arrows: "false",
                breakpoints: {
                  640: {
                    height: "13rem",
                    perPage: 2,
                  },
                },
              }}
              className="my-carousel mt-margin-top  "
            >
              {movies2.map((movie) => (
                <SplideSlide>
                  <MovieCard
                    img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    width={500}
                    height={300}
                    rounded="false"
                    handleAdd={handleAdd}
                    data={movie}
                  />
                </SplideSlide>
              ))}
            </Splide>
          </div>
          <div className="container max-w-fit mt-12 ">
            <div className="pt-0 p-12">
              <p className="text-white text-3xl font-bold">Romantic</p>
            </div>
            <Splide
              options={{
                perPage: 5,
                pagination: false,
                gap: 6,
                rewind: true,
                breakpoints: {
                  640: {
                    height: "13rem",
                    perPage: 2,
                  },
                },
              }}
              className="my-carousel mt-margin-top  "
            >
              {movies3.map((movie) => (
                <SplideSlide>
                  <MovieCard
                    img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    width={500}
                    height={300}
                    rounded="false"
                    handleAdd={handleAdd}
                    data={movie}
                  />
                </SplideSlide>
              ))}
            </Splide>
          </div>
          <div className="container max-w-fit mt-12 ">
            <div className="pt-0 p-12">
              <p className="text-white text-3xl font-bold">Top Rated</p>
            </div>
            <Splide
              options={{
                perPage: 5,
                pagination: false,
                gap: 6,
                rewind: true,
                breakpoints: {
                  640: {
                    height: "13rem",
                    perPage: 2,
                  },
                },
              }}
              className="my-carousel mt-margin-top  "
            >
              {movies4.map((movie) => (
                <SplideSlide>
                  <MovieCard
                    img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    width={500}
                    height={300}
                    rounded="false"
                    handleAdd={handleAdd}
                    data={movie}
                  />
                </SplideSlide>
              ))}
            </Splide>
          </div>
          <div className="container max-w-fit mt-12 ">
            <div className="pt-0 p-12">
              <p className="text-white text-3xl font-bold">Horror</p>
            </div>
            <Splide
              options={{
                perPage: 5,
                pagination: false,
                gap: 6,
                rewind: true,
                breakpoints: {
                  640: {
                    height: "13rem",
                    perPage: 2,
                  },
                },
              }}
              className="my-carousel mt-margin-top  "
            >
              {movies5.map((movie) => (
                <SplideSlide>
                  <MovieCard
                    img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    width={500}
                    height={300}
                    rounded="false"
                    handleAdd={handleAdd}
                    data={movie}
                  />
                </SplideSlide>
              ))}
            </Splide>
          </div>
          <div className="container max-w-fit mt-12 ">
            <div className="pt-0 p-12">
              <p className="text-white text-3xl font-bold">Documentaries</p>
            </div>
            <Splide
              options={{
                perPage: 5,
                pagination: false,
                gap: 6,
                rewind: true,
                breakpoints: {
                  640: {
                    height: "13rem",
                    perPage: 2,
                  },
                },
              }}
              className="my-carousel mt-margin-top  "
            >
              {movies6.map((movie) => (
                <SplideSlide>
                  <MovieCard
                    img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    width={500}
                    height={300}
                    rounded="false"
                    handleAdd={handleAdd}
                    data={movie}
                  />
                </SplideSlide>
              ))}
            </Splide>
          </div>
          <hr className="w-full h-3 bg-hr border-none" />
        </div>

        <div className="w-full m-auto p-12">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default home;

export async function getStaticProps(context) {
  const res = await fetch(trendings);
  const res2 = await fetch(actionMovies);
  const res3 = await fetch(romantic);
  const res4 = await fetch(topRated);
  const res5 = await fetch(horror);
  const res6 = await fetch(documentaries);
  const data = await res.json();
  const data2 = await res2.json();
  const data3 = await res3.json();
  const data4 = await res4.json();
  const data5 = await res5.json();
  const data6 = await res6.json();
  const movies = data.results;
  const movies2 = data2.results;
  const movies3 = data3.results;
  const movies4 = data4.results;
  const movies5 = data5.results;
  const movies6 = data6.results;
  return {
    props: { movies, movies2, movies3, movies4, movies5, movies6 },
  };
}
