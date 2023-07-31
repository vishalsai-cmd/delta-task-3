import React,{Component} from "react";
import "./App.css";
export default class Login extends Component{
    constructor(props){
        super(props);
        this.state ={
            email:"",
            password:""
        };
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        e.preventDefault();
        const {email,password}=this.state;
        console.log(email,password);
        fetch("http://localhost:5000/login-user",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-control-Allow-origin":"*",
            },
            body:JSON.stringify({
                email,
                password
            }),

        }).then((res) =>res.json())
        .then((data) =>{
            console.log(data,"userRegister");
            if(data.status == "ok"){
                alert("login successful");
                window.localStorage.setItem("token",data.data);
                window.location.href="./UserDetails";
            }
        })
    }
    render(){
        return(
           <div className="form">
            <form onSubmit={this.handleSubmit}>
                <h3 className="left">Sign in</h3>
                <div>
                    <label className="left2">email</label>
                    <input type="email" className="left2 down" placeholder="email" onChange={(e) =>this.setState({email:e.target.value})} />
                </div>
                <div>
                    <label className="left2">password</label>
                    <input type="password" className="down" placeholder="password" onChange={(e) =>this.setState({password:e.target.value})}/>
                </div>
                <button type="submit" className="left">log in</button>
            </form>
           </div>
        )
    }
}