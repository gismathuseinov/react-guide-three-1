import React from 'react';
import FormInput from '../FormInput/FormInput';

const AddUser = (props) => {
    
    const saveData = (newData) => {
        const dataArr = {
            id:Math.random().toString(),
            ...newData,
        }

        props.onAddUser(dataArr);
    }
    return <div>
        <FormInput onSavehandler={saveData}/>
    </div>
}

export default AddUser;