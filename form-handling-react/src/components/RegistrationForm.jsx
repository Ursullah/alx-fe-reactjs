import {useState} from "react";

const RegistrationForm = () => {
    const[formData, setFormData] = useState({
        username:'',
         email:'', 
         password:''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData(prevState => ({...prevState, [name]:value}));
    };
    const handleSubmit =(e) =>{
        e.preventDefault(); //prevent default submission
        console.log(formData);

        //validate fields
        const validationErrors = {}
        if(!formData.username.trim()){
            validationErrors.username = "username is required"
        }
        if(!formData.email.trim()){
            validationErrors.email = "email is required"
        }else if (!/\S+@\S+\.\S+/.test(formData.email)){
              validationErrors.email = "email is required"
        }
        if(!formData.password.trim()){
            validationErrors.password = "password is required"
        } else if(formData.password.length < 8 ){
            validationErrors.password = "password should be 8 characters"
        }

        setErrors(validationErrors)
        if(Object.keys(validationErrors).length === 0){
            alert("Form submitted successfully")
        }
    };
    return(
        <form onSubmit={handleSubmit}>

            <h2>REGISTER</h2>
            <label>Name:</label>
            <input 
            type = "text" 
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="name"
            />
            {errors.username && <span>{errors.username}</span>}
           
            <label>Email:</label>
            <input 
            type = "email"
            name = "email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
            />
            {errors.email && <span>{errors.email}</span>}
          
            <label>Password:</label>
            <input 
            type="password" 
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="********"
            />
            {errors.password && <span>{errors.password}</span>}
        
            <button type="submit">Submit</button>
        </form>
    );
};
export default RegistrationForm;