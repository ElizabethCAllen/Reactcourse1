const shortenString = (str, 10)=>{
    return `${str.substring(len)}...`
}
const MovieCard = (props){
    return(
        <div>
        <img src={props.posterUrl} />
        <p>{shortenString(props.title, 15)}</p>
        <p>{props.type}</p>
        </div>
    )
}
export default MovieCard;