import React from 'react'
import {List,Tab, Edit,ReferenceInput,SelectInput,Datagrid,Create,SimpleForm,TextInput, TextField, EmailField, UrlField, PasswordInput, Show, TabbedShowLayout, RichTextField,DateField,TabbedShowLayoutDateField} from 'react-admin'
import { Typography} from '@material-ui/core'
function UsersList(props) {
  return (
    <List {...props}>
        <Datagrid rowClick="edit">

            <TextField source="id"/>
            <TextField source="firstName" />
            <TextField source="username" />
            <EmailField source="email" />
            <TextField source="dateOfBirth" />
            <TextField source="gender" />

        </Datagrid>
    </List>
  )
}

export default UsersList

export function UserAdd(props){
  return(
      <Create {...props}>
          <SimpleForm>
              <TextInput type='number' source='id'/>
              <TextInput source='firstName'/>
              <TextInput source='lastName'/>
              <TextInput source='email'/>
              <TextInput source='gender'/>
              <TextInput source='dateOfBirth'/>
              <TextInput source='username'/>
              <PasswordInput source='password'/>
          </SimpleForm>
      </Create>
  )
}
const UserTitle=({record})=>{
  return <span>
      User{record?` "${record.username}"`:''}
  </span>
}
export function UserEdit(props){
  return(
      <Edit title={<UserTitle/>} {...props}>
          <SimpleForm>
              <TextInput disabled type='number' source='id'/>
              <TextInput source='firstName'/>
              <TextInput source='lastName'/>
              <TextInput source='email'/>
              <TextInput source='gender'/>
              <TextInput source='dateOfBirth'/>
              <TextInput source='username'/>
              <PasswordInput source='password'/>

          </SimpleForm>
      </Edit>
  )
}
const Aside = () => (
  <div style={{ width: 200, margin: '1em' }}>
      <Typography variant="h6">Post details</Typography>
      <Typography variant="body2">
          Posts will only be published once an editor approves them
      </Typography>
  </div>
);
const UserName=({record})=>
{
  return <span>{record?`${record.username}'s detail`:''}</span>;
}
export const UserShow=(props)=>(
  <Show title={<UserName/>} aside={<Aside/>} {...props}>
    <TabbedShowLayout>
        <Tab label="username">
            <TextField source="username"/>
        </Tab>
        <Tab label="full name">
            <TextField source="firstName"/>
            <TextField source="lastName"/>
        </Tab>
        <Tab label="birth date">
             <RichTextField source="dateOfBirth"/>
        </Tab>
        <Tab label="email" path="email">
            <DateField source="email"/>
            <TextField source='password' type="password" label="password"/>
        </Tab>
        
    </TabbedShowLayout>
  </Show>
)