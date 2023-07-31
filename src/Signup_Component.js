import React,{Component} from "react";
import "./App.css";
export default class Signup extends Component {
    constructor(props){
        super(props);
        this.state={
            fname:"",
            lname:"",
            email:"",
            password:""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        const{fname,lname,email,password}=this.state;
        console.log(fname,lname,email,password);
        fetch("http://localhost:5000/register",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-control-Allow-origin":"*",
            },
            body:JSON.stringify({
                fname,
                email,
                lname,
                password
            }),

        }).then((res) =>res.json())
        .then((data) =>{
            console.log(data,"userRegister")
        })
    }
    render(){
        return(
           <div className="form2">
            <form onSubmit={this.handleSubmit}>
                <h3 style={{marginLeft:100}}>sign up</h3>

                <div>
                    <label style={{marginLeft:20}}>first name</label>
                    <input type="text" placeholder="first name" style={{marginLeft:30,marginBottom:30,borderRadius:5}} onChange={(e) =>this.setState({fname:e.target.value})}/>
                </div>
                <div>
                    <label style={{marginLeft:20}}>last name</label>
                    <input type="text" placeholder="last name" style={{marginLeft:30,marginBottom:30,borderRadius:5}} onChange={(e) => this.setState({lname:e.target.value})}/>
                </div>
                <div>
                    <label style={{marginLeft:20}}>email</label>
                    <input type="text" placeholder="email" style={{marginLeft:60,marginBottom:30,borderRadius:5}} onChange={(e) => this.setState({email:e.target.value})}/>
                </div>
                <div>
                    <label style={{marginLeft:20}}>password</label>
                    <input type="text" placeholder="password" style={{marginLeft:30,marginBottom:30,borderRadius:5}} onChange={(e) => this.setState({password:e.target.value})}/>
                </div>
                <button type="submit" style={{marginLeft:100}}>Sign Up</button>
                <p>already registered?</p>
                <a href="/sign-in" className="button" style={{marginLeft:100,textDecoration:"none",color:"black"}}>sign in</a>
            </form>
           </div> 
        )
    }
}