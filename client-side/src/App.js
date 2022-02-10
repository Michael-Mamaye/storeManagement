import * as React from "react";
import { Admin,Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-json-server';
import UsersList, { UserAdd, UserEdit, UserShow } from "./Components/Users";
import Dashboard from "./Components/Dashboard"
import {PostCreate, PostEdit, PostsList} from "./Components/Posts";
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import AuthProvider from "./Components/AuthProvider";


const dataProvider = simpleRestProvider('http://localhost:5000');

const App = () => {
  return(
    <Admin dashboard={Dashboard} authProvider={AuthProvider} dataProvider={dataProvider} >
      
        <Resource name="users" show={UserShow} list={UsersList} edit={UserEdit} icon={UserIcon} create={UserAdd} />
        <Resource name="posts" list={PostsList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
      
    </Admin>
  )
}

export default App;