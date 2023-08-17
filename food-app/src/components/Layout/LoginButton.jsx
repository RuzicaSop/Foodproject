import classes from './LoginButton.module.css';



const LoginButton = (props) => {
    return (
    <div >
        <button className={classes.button}  onClick={props.onClick}>
           <span> Login</span>
        </button>
        </div>


    );
};

export default LoginButton;