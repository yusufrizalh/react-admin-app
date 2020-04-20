import React from 'react';
import { List, SimpleList, Datagrid, TextField, 
    ReferenceField, EditButton, Edit, Create, 
    SimpleForm, ReferenceInput, 
    SelectInput, TextInput, Filter } from 'react-admin';

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostList = props => (
    <List filters={<PostFilter />} {...props}>
        {/* <Datagrid rowClick="edit"> */}
        <Datagrid>
        <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                {/* <TextField source="id" /> */}
                <TextField source="name" />
            </ReferenceField>
            {/* <TextField source="id" /> */}
            <TextField source="title" />
            {/* <TextField source="body" /> */}
            <EditButton />
        </Datagrid>
    </List>
);

export const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
);

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);