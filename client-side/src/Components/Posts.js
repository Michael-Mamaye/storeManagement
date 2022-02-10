import React from 'react'
import { useMediaQuery } from '@material-ui/core';
import {List, SimpleList,Datagrid,TextField,ReferenceField,EditButton, Edit, SimpleForm, ReferenceInput, SelectInput, TextInput, Create} from 'react-admin'

const postFilters=[
    <TextInput source="q" label="Search" alwaysOn/>,
    <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
        <SelectInput optionText="name" />
    </ReferenceInput>,
    <ReferenceInput source="userId" label="User name" reference="users" allowEmpty>
        <SelectInput optionText="username" />
    </ReferenceInput>,
];
export function PostsList(props) {

    const isSmall = useMediaQuery(theme=>theme.breakpoints.down('sm'))
  return (
    <List filters={postFilters} {...props}>
       {
       isSmall?
            <SimpleList
                    primaryText={record=>record.title}
                    secondaryText={record=>`${record.id} views`}
                    tertiaryText={record => new Date(record.id).toLocaleDateString()}
            />:
            <Datagrid rowClick="edit">
                <TextField source="id" />
                <ReferenceField source="userId" reference="users">
                    <TextField source="name" />
                </ReferenceField>
                <TextField source="title" />
                <EditButton/>
            </Datagrid>
    }
    </List>
  )
}

const PostTitle=({record})=>{
    return <span>
        post{record?` "${record.title}"`:''}
    </span>
}
export function PostEdit(props){
    return(
        <Edit title={<PostTitle/>} {...props}>
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

export function PostCreate(props){
    return(
        <Create {...props}>
            <SimpleForm>
                <ReferenceInput source='userId' reference='users'>
                    <SelectInput optionText='name'/>
                </ReferenceInput>
                <TextInput source='id'/>
                <TextInput source='title'/>
                <TextInput multiline source='body'/>

            </SimpleForm>
        </Create>
    )
}