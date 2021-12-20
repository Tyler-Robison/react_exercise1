const App = () => (
    <div>
        <Person
            name='Tyler'
            age={33}
            hobbies={['gaming', 'coding', 'hiking']}
        />
        <Person
            name='Jeannie'
            age={63}
            hobbies={['walking', 'swimming', 'writing']}
        />
        <Person
            name='Sheba'
            age={13}
            hobbies={['eating', 'smelling', 'eating']}
        />
    </div>
)



ReactDOM.render(<App />, document.getElementById("root"))