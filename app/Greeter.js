// var config = require('./config.json')
import React, {Compoent, Component} from 'react'
import config from './config.json'
import styles from './Greeter.css'

// module.exports = function () {
//     var greeter =  document.createElement('div')
//     greeter.textContent = config.greetText
//     return greeter 
// }
class Greeter extends Component{
    render() {
        return (
            <div>
                {config.greetText}
            </div>
        )
    }
}

export default Greeter