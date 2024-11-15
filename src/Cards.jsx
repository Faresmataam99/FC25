

export default (props) =>{
   
    return(
        <div className="bg-black flex items-center justify-center flex-col shadow-lg shadow-black gap-4 hover:-translate-y-5 transition-all duration-200 text-white m-10 ">
            <img className="w-full h-full object-cover" src={props.image} alt="" height={'500px'} width={'500px'} />
            <h2 className="text-3xl">{props.title}</h2>
            <div className="flex items-center justify-center gap-4">
            <h3 className="text-2xl">Rating:</h3><span className="font-bold text-2xl">{props.rating}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
            <h2 className="text-2xl">{props.price}</h2><span>£</span>
            <p>{props.text}</p>
            </div>
        
           <button className="flex items-center rounded-lg bg-orange-500 hover:bg-orange-300 text-white font-bold m-4 px-4 py-2 transition-all duration-200">Buy</button>
        </div>
    )
}