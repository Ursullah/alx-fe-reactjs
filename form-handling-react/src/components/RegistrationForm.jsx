import {useState} from "react";

const RegistrationForm = () => {
    const[username, setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[errors, setErrors] = useState({});

        //validate fields
        const validateForm = (e) =>{
            const validationErrors= {};

            if (!username) {
                validationErrors.username = "Username is required"
            }
            if (!email) {
                validationErrors.email = "Email is required"
            }else if (!/\S+@\S+\.\S+/.test(email)){
                  validationErrors.email = "Email is required"
            }
            if (!password) {
                validationErrors.password = "Password is required"
            } else if(password.length < 8 ){
                validationErrors.password = "Password should be 8 characters"
            }
        
        setErrors(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    //handle input changes
    const handleChange = (e) => {
        const {name,value} = e.target;
       if(name === "username") setUsername(value);
       if(name === "email") setEmail(value);
       if(name === "passoword") setPassword(value);

    };

            //handle submission
        const handleSubmit =(e) =>{
        e.preventDefault(); //prevent default submission

        if(validateForm()){
        console.log("Form Submitted Successfully:", {username, email, password});
        alert("Form submitted successfully");

        //reset fields after submission
        setUsername("");
        setEmail("");
        setPassword("");
        setErrors("")
    };
}

    return(
        <form onSubmit={handleSubmit}>

            <h2>REGISTER</h2>
            <label>Name:</label>
            <input 
            type = "text" 
            name="username"
            value={username}
            onChange={handleChange}
            placeholder="name"
            />
            {errors.username && <span>{errors.username}</span>}
           
            <label>Email:</label>
            <input 
            type = "email"
            name = "email"
            value={email}
            onChange={handleChange}
            placeholder="example@email.com"
            />
            {errors.email && <span>{errors.email}</span>}
          
            <label>Password:</label>
            <input 
            type="password" 
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="12345678"
            />
            {errors.password && <span>{errors.password}</span>}
        
            <button type="submit">Submit</button>
        </form>
    );
};
export default RegistrationForm;