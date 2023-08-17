import { observer } from "mobx-react";
import { useState } from "react";
import classes from './Users.module.css';

const Users = observer(({ store }) => {
  const [inputValue, setInputValue] = useState("");
  const addUser = () => {
    store.addUser(inputValue);
    setInputValue("");
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>Win a free coupon: {store.total}</div>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className={classes.add}
        />
        <button className={classes.button} onClick={addUser}>Sing up</button>
      </div>
      <div>
        {store.users.map((user, index) => (
          <div key={index}>{user.name}</div>
        ))}
      </div>
    </div>
  );
});
export default Users;