import * as React from "react";
import { Admin,Resource, ListGuesser, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UsersList from "./Components/Users";
import {PostEdit, PostsList} from "./Components/Posts";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => {
  return(
    <Admin dataProvider={dataProvider} >
      <Resource name="posts" list={PostsList} edit={PostEdit}/>
      <Resource name="users" list={UsersList}/>
    </Admin>
  )
}

export default App;