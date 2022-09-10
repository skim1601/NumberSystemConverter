const Label = (props) => {
    const getNumberSystem = (num, base) => {
        if (num == ""){
            num = 0;
        }
        if (isNaN(parseInt(num, base))){
            alert("Invalid input");
        } else {
            return (num >>> 0).toString(base);
        }
    }
    
    return (
        <p>{props.label}: {getNumberSystem(props.number, props.value)}</p>
    );
}

export default Label;