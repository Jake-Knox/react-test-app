import Pet from './Pet';
const Person = (props) => {
    return (
    <div>
        {/* <p>Hello from functional component!</p>   */}
        <p onClick={props.isClicked}>My name is {props.name}</p>
        {/* <Pet petName={props.petName} petType={props.petType} /> */}
    </div>   
    )  
};

export default Person;