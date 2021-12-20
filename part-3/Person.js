const Person = (props) => {
    let msg;
    let shortName;

    if (props.age > 18) msg = 'Please Go vote!'
    else { msg = 'You must be 18' }

    if (props.name.length > 6) {
        shortName = props.name.slice(0, 7)
    } else {
        shortName = props.name
    }


    return (
        <div>
            <p>Learn some information about {shortName}</p>
            <h3>{msg}</h3>
            <h3>Hobbies</h3>
            <ol>
                {props.hobbies.map(h =>
                (
                    <li>{h}</li>
                )
                )}
            </ol>
        </div>
    )

}