const Form = (props) => {
    const customOnChange = (e) => {
        var legalChars = []; /* Arr to store all legal characters */

        /* Add all number chars - For instance, 4 -> [0, 1, 2, 3] */
        for (var i = 0; i < Math.min(props.base.value, 10); i++){
            legalChars.push(String(i));
        }

        /* End when base count is below 0. For instance, 11 runs once, 12 runs twice... */
        var char = 'a';
        for (var base = props.base.value - 10; base > 0; base -= 1){
            legalChars.push(char);
            char = String.fromCharCode(char.charCodeAt(0) + 1); /* get next char (ASCII) */
        }

        /* Check if all digit provided by the user is valid (exists in the legalChars array) */
        e.target.value.split('').forEach(digit => {
            if (!legalChars.includes(digit)){
                alert("Invalid Input");
                e.SetValue(props.number);
                return false;
            }
        })
        props.setNumber(e.target.value);
    }

    return (
        <form>
            <p>{props.label}:
            <input
                type="text" 
                value={props.number}
                onChange={customOnChange}
                style={{marginLeft: '0.5rem'}}
            />
            </p>
        </form>
    );
}

export default Form;