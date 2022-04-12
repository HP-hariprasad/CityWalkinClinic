import React,{Component} from 'react'
import Navbar from '../components/Navbar'
import Register from '../components/Register'

class Authenticate extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <Register />
            </div>
        )
    }
}

export default Authenticate