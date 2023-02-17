const Garfield = (props) => {
    return (
    <div>
        <img className="garf" src={props.src} alt="could not display"/>
        <p>{props.description}</p>       
    </div>   
    )  
};

export default Garfield;