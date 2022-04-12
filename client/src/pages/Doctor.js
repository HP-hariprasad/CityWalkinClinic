import React,{Component} from 'react'
import Navbar from '../components/Navbar'

class Doctor extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <p>I am a Doctor</p>
            </div>
        )
    }
}

export default Doctor