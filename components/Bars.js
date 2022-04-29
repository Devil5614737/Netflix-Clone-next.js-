const Bars = ({
  question,
  answer,
  setShowDesc,
  showDesc,
  handleClick,
  ...props
}) => {
  return (
    <>
      <div className="text-white  flex items-center justify-between bg-bar p-7 pl-12 pr-12 md:w-bw  w-full mb-5">
        <p className="text-white md:text-5xl text-4xl">{question}</p>
        {!showDesc && (
          <svg
            fill="white"
            onClick={handleClick}
            {...props}
            className="text-3xl cursor-pointer"
            height="50px"
            version="1.1"
            viewBox="0 0 512 512"
            width="50px"
          >
            <g>
              <path d="M384,265H264v119h-17V265H128v-17h119V128h17v120h120V265z" />
            </g>
          </svg>
        )}

        {showDesc && (
          <svg
            cursor="pointer"
            width="40px"
            height="22px"
            fill="white"
            onClick={handleClick}
            {...props}
            version="1.1"
            viewBox="0 0 50 50"
          >
            <g id="Layer_1">
              <polygon points="2.707,48.707 25,26.414 47.293,48.707 48.707,47.293 26.414,25 48.707,2.707 47.293,1.293 25,23.586 2.707,1.293    1.293,2.707 23.586,25 1.293,47.293  " />
            </g>
            <g />
          </svg>
        )}
      </div>
      {showDesc && (
        <div className="mt-1 text-white bg-bar p-7 pl-12 pr-12 md:w-bw  mb-5 w-full">
          <p className="md:text-4xl text-3xl">{answer}</p>
        </div>
      )}
    </>
  );
};

export default Bars;
