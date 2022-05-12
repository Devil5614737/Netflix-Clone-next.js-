import Image from "next/image";



const MovieCard = ({img,width,height,data,handleAdd,...props}) => {

    return ( 
        <div className=" group aspect-video object-cover relative hover:before:w-full  hover:before:h-full hover:before:bg-lg hover:before:absolute hover:before:z-20 hover:before:left-0 hover:before:top-0 hover:cursor-pointer">
            <Image  width={width}  height={height}  src={img} alt="" objectFit="cover" objectPosition='center' className=' cursor-pointer '/>
            <div className=" text-white text-2xl absolute -bottom-6 left-5 opacity-0 flex group-hover:opacity-100 group-hover:bottom-12 group-hover:z-index transition-all">
                <div className="w-16 h-16 cursor-pointer  bg-white rounded-full grid place-items-center items-center mr-5 ">
              <svg height="24px" id="Layer_1"  version="1.1" viewBox="0 0 512 512" width="24px" ><path d="M405.2,232.9L126.8,67.2c-3.4-2-6.9-3.2-10.9-3.2c-10.9,0-19.8,9-19.8,20H96v344h0.1c0,11,8.9,20,19.8,20  c4.1,0,7.5-1.4,11.2-3.4l278.1-165.5c6.6-5.5,10.8-13.8,10.8-23.1C416,246.7,411.8,238.5,405.2,232.9z"/></svg>
                </div>
                <div {...props} id='infoBtn' className="w-16 h-16 cursor-pointer  bg-white rounded-full grid place-items-center items-center mr-5">
                <svg height="24px" width="24px"   version="1.1" viewBox="0 0 16 16" ><g id="Guide"/><g id="Layer_2"><g><path d="M8,2C4.69,2,2,4.69,2,8s2.69,6,6,6s6-2.69,6-6S11.31,2,8,2z M8,13c-2.76,0-5-2.24-5-5s2.24-5,5-5s5,2.24,5,5    S10.76,13,8,13z"/><path d="M8,6.85c-0.28,0-0.5,0.22-0.5,0.5v3.4c0,0.28,0.22,0.5,0.5,0.5s0.5-0.22,0.5-0.5v-3.4C8.5,7.08,8.28,6.85,8,6.85z"/><path d="M8.01,4.8C7.75,4.78,7.51,5.05,7.5,5.32c0,0.01,0,0.07,0,0.08c0,0.27,0.21,0.47,0.49,0.48c0,0,0.01,0,0.01,0    c0.27,0,0.49-0.24,0.5-0.5c0-0.01,0-0.11,0-0.11C8.5,4.98,8.29,4.8,8.01,4.8z"/></g></g></svg>
                </div>
                <div className="w-16 h-16 cursor-pointer  bg-white rounded-full grid place-items-center items-center">
            <svg onClick={()=>handleAdd(data)} class="feather feather-plus" fill="black" height="24" stroke="black" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" ><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>
                </div>
            </div>
        </div>
     );
}
 
export default MovieCard;