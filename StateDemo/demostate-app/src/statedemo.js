import React,{Component} from "react";

class StateDemo extends React.Component{
    constructor(){
        super();
        this.state={
            Data:"data from database soon........!",
            Product:[{"Pid":111, "P_name":"p_one","P_cost":1000},
                    {"Pid":222, "P_name":"p_two","P_cost":2000},
                    {"Pid":333, "P_name":"p_three","P_cost":3000},
                    {"Pid":444, "P_name":"p_four","P_cost":4000},
                    {"Pid":555, "P_name":"p_five","P_cost":5000}],
            "version":16.3,
            "obj":{"name":"Ramesh"}
        }
    }
    render(){
        return(
            <div>
                <div>
                <h1 style={{color:"pink"}}>{this.state.Data}</h1>
                </div>
                <div>
                    <table border="1px"
                            cellPadding="10px"
                            cellSpacing="10px"
                            align="center">
                        <tr>
                            <th>SLNO</th>
                            <th>PID</th>
                            <th>PNAME</th>
                            <th>PCOST</th>
                        </tr>
                        {this.state.Product.map((element, index)=>(
                        <tr>
                            <td>{index+1}</td>
                            <td>{element.Pid}</td>
                            <td>{element.P_name}</td>
                            <td>{element.P_cost}</td>
                            
                        </tr>
                            ))}   

                    </table>
                    
                </div>
                <div>
                    <h1 style={{color:"blue"}}>{this.state.version}</h1>
                </div>
                <div>
                    <h1 style={{color:"green"}}>{JSON.stringify(this.state.obj)}</h1>
                </div>
               
            </div>
        )
    }


} 
export default StateDemo;