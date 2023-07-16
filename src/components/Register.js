import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {

    const [first_name, first_namechange] = useState("");
    const [last_name, last_namechange] = useState("");
    const [age, agechange] = useState("");
    const [email, emailchange] = useState("");
    const [mobile, mobilechange] = useState("");
    const [password, passwordchange] = useState("");
    const [profile, profilechange] = useState("");
    

    const navigate = useNavigate();

   const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Please enter the value in ';
        if (first_name === null || first_name === '') {
            isproceed = false;
            errormessage += ' Username';
        }
        if (last_name === null || last_name === '') {
            isproceed = false;
            errormessage += ' Fullname';
        }
        if (password === null || password === '') {
            isproceed = false;
            errormessage += ' Password';
        }
        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' Email';
        }

        if(!isproceed){
            toast.warning(errormessage)
        }else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

            }else{
                isproceed = false;
                toast.warning('Please enter the valid email')
            }
        }
        return isproceed;
    }


    const handlesubmit = (e) => {
            e.preventDefault();
            let regobj = { first_name, last_name, age, mobile, email, password, profile};
            
            if (IsValidate()) {
            //console.log(regobj);
            fetch("https://demo.jaipurcomputerclasses.com/api/register",   {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(regobj),
                mode: "no-cors"
            
            })
            .then((res) => {
                toast.success('Registered successfully.')
                navigate('/login');
        
            }).catch((err) => {
                toast.error('Failed :' + err.message);
            });
        }
    }
    return (
        <div>
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>
                    <div className="card">
                        <div className="card-header">
                            <h1>User Registeration</h1>
                        </div>
                        <div className="card-body">

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>First Name <span className="errmsg">*</span></label>
                                        <input type="text" value={first_name} onChange={e => first_namechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label> Last Name <span className="errmsg">*</span></label>
                                        <input type="text" value={last_name} onChange={e => last_namechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label> Age <span className="errmsg">*</span></label>
                                        <input type="text" value={age} onChange={e => agechange(e.target.value)} className="form-control"></input>
                                    </div>
                                    <div className="col-lg-6">
                                    <div className="form-group">
                                        <label> Mobile no <span className="errmsg">*</span></label>
                                        <input type="text" value={mobile} onChange={e => mobilechange(e.target.value)} className="form-control"></input>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Email <span className="errmsg">*</span></label>
                                        <input value={email} onChange={e => emailchange(e.target.value)} type="text" className="form-control"></input>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Password <span className="errmsg">*</span></label>
                                        <input value={password} onChange={e => passwordchange(e.target.value)} type="text" className="form-control"></input>
                                    </div>
                                </div>
                
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Profile<span className="errmsg">*</span></label>
                                        <input value={profile} onChange={e => profilechange(e.target.value)} type="file" className="form-control"></input>
                                    </div>
                                </div>
                                
                                
                    

                            </div>

                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">Register</button> |
                            <Link to={'/login'} className="btn btn-danger">Close</Link>
                        </div>
                    </div>
                </form>
            </div>


        </div>
    );
}

export default Register;

