import React,{Component} from "react";
import "./App.css";
export default class UserProfile extends Component {
    constructor(props){
        super(props);
        this.state={
            userData:"",
        }
    }
    componentDidMount()
    {
        fetch("http://localhost:5000/userDataone",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-control-Allow-origin":"*",
            },
            body:JSON.stringify({
                token1:window.localStorage.getItem("token1"),
            })

        }).then((res) =>res.json())
        .then((data) =>{
            console.log(data,"userData");
            this.setState({userData:data.data});
        })
    }
    render(){
        return(
            <div className="form4">
                <div style={{marginLeft:130}}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Lk8ZQGZnwxAkptEjMtZ5b_K_UJjWVqjEBd2UL-NKiQ&s" alt=""/>
                </div>
                <h1 style={{marginLeft:80}}>First Name:{this.state.userData.fname}</h1>
                <h1 style={{marginLeft:80}}>Last Name:{this.state.userData.lname}</h1>
                <h1 style={{marginLeft:80}}>Email:{this.state.userData.email}</h1>
                <h1 style={{marginLeft:80}}>Phone:xyz..</h1>
                <p>if you want to challenge my quiz,here you go..</p>
                <a href="./QuizChallenge" className="button" style={{marginLeft:140,textDecoration:"none",color:"black"}}>challenge quiz</a>
            </div>
        )
    }
}
