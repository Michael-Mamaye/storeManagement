import * as React from "react";
import { Admin,Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UsersList from "./Components/Users";
import Dashboard from "./Components/Dashboard"
import {PostCreate, PostEdit, PostsList} from "./Components/Posts";
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => {
  return(
    <Admin dashboard={Dashboard} dataProvider={dataProvider} >
      <Resource name="posts" list={PostsList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
      <Resource name="users" list={UsersList} icon={UserIcon}/>
    </Admin>
  )
}

export default App;