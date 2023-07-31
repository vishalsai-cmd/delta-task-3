import React,{Component} from "react";
import "./App.css";
export default class Search extends Component{
    constructor(props){
        super(props);
        this.state ={
            email:"",
        };
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        event.preventDefault();
        const {email}=this.state;
        console.log(email);
        fetch("http://localhost:5000/search",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-control-Allow-origin":"*",
            },
            body:JSON.stringify({
                email
            }),

        }).then((res) =>res.json())
        .then((data) =>{
            console.log(data,"userRegister");
            if(data.status == "ok"){
                window.localStorage.setItem("token1",data.data);
                window.location.href="./UserProfile";
            }
        })
    }
    render(){
        return(
            <div className="form">
            <form onSubmit={this.handleSubmit}>
                <h3>Search for Users</h3>
                <div>
                    <label>email</label>
                    <input type="email" placeholder="email" onChange={(e) =>this.setState({email:e.target.value})} />
                </div>
                <button type="submit" style={{marginLeft:65,marginTop:50}}>view</button>
            </form>
            </div>
        )
    }
}
