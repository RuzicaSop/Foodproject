import Modal from '../UI/Modal';
import classes from './Login.module.css';
import { useRef, useState } from 'react';

const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 10;

const Login = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        firstname: true,
        lastname: true,
        email: true,
        password: true,
      });

    const [values, setValues] = useState({
        password: "",
        showPassword: false,
    });
 
    const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    
      const firstnameInputRef = useRef();
      const lastnameInputRef = useRef();
      const emailInputRef = useRef();
      const passwordInputRef = useRef();
    
      const confirmHandler = (event) => {
        event.preventDefault();
    
        const enteredFirstname = firstnameInputRef.current.value;
        const enteredLastname = lastnameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
    
        const enteredFirstnameIsValid = !isEmpty(enteredFirstname);
        const enteredLastnameIsValid = !isEmpty(enteredLastname);
        const enteredEmailIsValid = !isEmpty(enteredEmail);
        const enteredPasswordIsValid = isFiveChars(enteredPassword);
    
        setFormInputsValidity({
          firstname: enteredFirstnameIsValid,
          lastname: enteredLastnameIsValid,
          email: enteredEmailIsValid,
          password: enteredPasswordIsValid,
        });
    
        const formIsValid =
        enteredFirstnameIsValid &&
          enteredLastnameIsValid &&
          enteredEmailIsValid &&
          enteredPasswordIsValid;
    
        if (!formIsValid) {
          return;
        }
    
        props.onConfirm({
            firstname: enteredFirstname,
            lastname: enteredLastname,
            email: enteredEmail,
            passworde: enteredPassword,
        });
      };
    
      const firstnameControlClasses = `${classes.control} ${
        formInputsValidity.firstname ? '' : classes.invalid
      }`;
      const lastnameControlClasses = `${classes.control} ${
        formInputsValidity.lastname ? '' : classes.invalid
      }`;
      const emailControlClasses = `${classes.control} ${
        formInputsValidity.email ? '' : classes.invalid
      }`;
      const passwordControlClasses = `${classes.control} ${
        formInputsValidity.password ? '' : classes.invalid
      }`;
    
      return (
        <Modal>
        <form className={classes.form} onSubmit={confirmHandler}>
        <h1 className={classes.title}>Login</h1>
          <div className={firstnameControlClasses}>
            <label htmlFor='firstname'>Firstname</label>
            <input type='text' id='firstname' ref={firstnameInputRef} />
            {!formInputsValidity.firstname && <p>Please enter your firstname!</p>}
          </div>
          <div className={lastnameControlClasses}>
            <label htmlFor='lastname'>Lastname</label>
            <input type='text' id='lastname' ref={lastnameInputRef} />
            {!formInputsValidity.lastname && <p>Please enter your lastname!</p>}
          </div>
          <div className={emailControlClasses}>
            <label htmlFor='email'>Email</label>
            <input type='text' id='email' ref={emailInputRef} />
            {!formInputsValidity.email && (
              <p>Please enter your email!</p>
            )}
          </div>
          <div className={passwordControlClasses}>
            <label htmlFor='password'>Password</label>
            <input type={values.showPassword ? "text" : "password"} 
            id='password' ref={passwordInputRef} 
            onChange={handlePasswordChange('password')} 
            value={values.password}
   
            
            />
            {!formInputsValidity.password && <p>Please enter your password!</p>}
          </div>
          <div className={classes.actions}>
            <button type='button' onClick={props.onClose}>
              Close
            </button>
            <button className={classes.submit}>Confirm</button>
          </div>
        </form>
        </Modal>
      );
    };
 

export default Login;