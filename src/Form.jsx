const Form = (props) => {
    const onChange = (e) => {
        if (e.target.value === ""){
            e.target.value = 0;
        }
        if (isNaN(parseInt(e.target.value, props.base))){
          alert("Invalid Input");
        } else {
          props.setNumber(e.target.value);
        }
    }

    return (
        <form>
            <p>{props.label}:
            <input
                type="text" 
                value={props.number}
                onChange={onChange}
                style={{marginLeft: '0.5rem'}}
            />
            </p>
        </form>
    );
}

export default Form;