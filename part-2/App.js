const App = () => (
    <div>
        <Tweet
            username='blueturtle'
            name='Tyler'
            date='10/14/1988'
            msg='This is a tweet'
            userAge={33}
        />
        <Tweet
            username='bobo'
            name='bob'
            date='tomorrow'
            msg='This is a tweet 2'
            userAge={34}
        />
        <Tweet
            username='blueturtle'
            name='Tyler'
            date='10/14/1988'
            msg='This is asdfdsf'
            userAge={3345}
        />

    </div>
)



ReactDOM.render(<App />, document.getElementById("root"))