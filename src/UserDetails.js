import React,{Component} from "react";
import "./App.css";
export default class UserDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            userData:"",
        }
    }
    componentDidMount()
    {
        fetch("http://localhost:5000/userData",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-control-Allow-origin":"*",
            },
            body:JSON.stringify({
                token:window.localStorage.getItem("token"),
            })

        }).then((res) =>res.json())
        .then((data) =>{
            console.log(data,"userData");
            this.setState({userData:data.data});
        })
    }
    render(){
        return(
            <div>
                <h1 style={{marginLeft:700}}>welcome to home page!!</h1>
                <div className="form">
                Name:<h1>{this.state.userData.fname}</h1>
                Email:<h1>{this.state.userData.email}</h1>
                </div>
                <div style={{marginLeft:1200,marginTop:-450}}>
                    <a href="./Quiz" className="button" style={{textDecoration:"none",marginRight:50,color:"black",fontSize:35}}>create Quiz</a>
                    <a href="./UserSearch" className="button" style={{textDecoration:"none",color:"black",fontSize:35}}>search for users</a>
                </div>
            </div>
        )
    }
}
