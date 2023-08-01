import classes from './Card.module.css';

const Crad = (props) => {
    return (
        <div className={classes.card}>
            {props.children}
        </div>
    );
};

export default Crad;