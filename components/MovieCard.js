import Image from "next/image";



const MovieCard = ({img,width,height,rounded}) => {

    return ( 
        <div className="aspect-video object-cover ">
            <Image width={width}  height={height} className={rounded&&'rounded-lg'} src={img} alt="" objectFit="cover" objectPosition='center'/>
        </div>
     );
}
 
export default MovieCard;