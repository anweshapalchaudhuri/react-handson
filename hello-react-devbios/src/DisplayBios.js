import React, { Component } from 'react'
import Developer from './Developer';
import DeveloperBio from './DeveloperBio';

export class DisplayBios extends Component {
    constructor(props){
        super(props);
        this.state = {
            developers: [
                new Developer(1, "Anwesha", "PalChaudhuri","Java", 2011),
                new Developer(2, "Bill", "Gates", "Basic", 1970)
            ]
        }
    }
    render() {
        return (
            this.state.developers.map((dev)=>{return(
            
            <DeveloperBio developer ={dev} />
            
            );
        })

        );
    }
}

export default DisplayBios;
