const Bars= ({question,answer,...props}) => {
    return (  
        <>
        <div className="text-white  flex items-center justify-between bg-bar p-7 pl-12 pr-12 md:w-bw  w-full mb-5">
            <p className="text-white md:text-5xl text-4xl">{question}</p>
            <svg fill="white" id="btn" {...props} className="text-3xl cursor-pointer" height="50px"  version="1.1" viewBox="0 0 512 512" width="50px"  ><g><path d="M384,265H264v119h-17V265H128v-17h119V128h17v120h120V265z"/></g></svg>
        </div>
        <div id="ans" {...props} className="mt-1 text-white bg-bar p-7 pl-12 pr-12 md:w-bw hidden mb-5 w-full">
            <p className="md:text-4xl text-3xl">{answer}</p>
        </div>
        </>
    );
}
 
export default Bars
;