import Frontend from "./frontend";
import Backend from "./backend";
import Database from "./database";
import React, {Component} from "react";

class Fullstack extends React.Component{
    render(){
        return(
            <div>
            <Frontend/>
            <Backend/>
            <Database/>
            </div>
            
        )
    }
}
export default Fullstack;