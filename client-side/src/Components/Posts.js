import React from 'react'
import {List, Datagrid, TextField, ReferenceField, EditButton, Edit, SimpleForm, ReferenceInput, SelectInput, TextInput} from 'react-admin'

export function PostsList(props) {
  return (
    <List {...props}>
        <Datagrid rowClick="edit">
            
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <EditButton/>
        </Datagrid>
    </List>
  )
}

export function PostEdit(props){
    return(
        <Edit {...props}>
            <SimpleForm>
                <ReferenceInput source='userId' reference='users'>
                    <SelectInput optionText='name'/>
                </ReferenceInput>
                <TextInput source='id'/>
                <TextInput source='title'/>
                <TextInput multiline source='body'/>

            </SimpleForm>
        </Edit>
    )
}