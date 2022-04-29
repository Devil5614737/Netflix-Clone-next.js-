import Image from 'next/image';

const MovieInfo = () => {
    return (  
        <div className="absolute -top-1/2 -left-1/2 translate-x-1/2 translate-y-1/2 z-index2">
            <Image objectFit='cover' objectPosition='center' width={500} height={500} src='https://images.unsplash.com/photo-1650468760822-0b2221713479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'/>
            <div className="infoContainer">
                <p>Title</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore delectus dolore, accusantium asperiores sapiente voluptatem repellat deserunt eius consequuntur officia fugiat labore, necessitatibus, nam sunt consectetur. Quidem voluptates aspernatur alias.</p>
            </div>
        </div>
    );
}
 
export default MovieInfo
;