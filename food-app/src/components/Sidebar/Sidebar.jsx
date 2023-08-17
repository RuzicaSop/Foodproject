import React from "react";
import Filter from "./Filter/Filter";
import Users from "./Filter/Users/Users";
import { usersStore } from "../../store/UserStore";




const Sidebar = () => {
    return (
    <div>
    <div>
    <Filter/>
    </div> 
    <div>
    <Users store={usersStore}/>
    </div>
    </div> 

    );
};

export default Sidebar;