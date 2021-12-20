const App = () => (
    <div>
        <FirstComponent/>
        <NamedComponent
        name='Tyler'
        />
    </div>
)



ReactDOM.render(<App />, document.getElementById("root"))