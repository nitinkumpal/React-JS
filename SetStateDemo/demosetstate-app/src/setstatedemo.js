import React, {Component} from 'react';

class SetStateDemo extends React.Component{
    constructor(){
        super();
        this.state={
            Data:"React"
        }
    }

    myFun= ()=>{
        this.setState({
            Data:"ReactJS"
        })
    }
    myFun1=(arg1, arg2)=>{
        if(arg1==="admin" && arg2==="admin"){
            this.setState({
                Data:"React Native"
            })
        }
        else{
            this.setState({
                Data:"Vue Js"
            })
        }

    }




    render(){
        return(
            <div>
                <div>
                <h1>{this.state.Data}</h1>
                </div>
                <div>
                   <button onClick={this.myFun} style={{color:"green"}}>change 1</button>
                </div>
                <div>
                    <button onClick={()=>{
                        this.myFun1("admin", "admin")
                    }} style={{color:"blue"}}>change 2</button>
                    
                </div>            
            </div>
        )
    }

}
export default SetStateDemo;