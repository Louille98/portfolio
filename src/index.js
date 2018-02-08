import React from 'react'
import ReactDOM from 'react-dom'
import './css/app.css'
import Header from './components/header'
import registerServiceWorker from './registerServiceWorker'

const headerText = ['Designing and coding', 'products is so much fun.']

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Header firstText={headerText[0]} secondText={headerText[1]} />
                <main className="works">

                </main>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
