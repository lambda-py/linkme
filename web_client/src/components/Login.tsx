import { useState } from 'react';
import { loginFields } from "../constants/formFields";
import Input from "./Input";
import FormExtra from "./FormExtra";
import FormAction from "./FormAction";
import { fieldsType } from '../shared/types';

type fieldsStateType = {
  [key: string]: string;
}

const fields: fieldsType = loginFields;
const fieldsState: fieldsStateType = {};
fields.forEach(field => fieldsState[field.id]='');

const Login = () => {
  const [loginState, setLoginState] = useState(fieldsState);
  const handleChange = (e: any) => {
    setLoginState({...loginState, [e.target.id]: e.target.value})
  }

  const handleSubmit=(e)=>{
      e.preventDefault();
      authenticateUser();
  }

  //Handle Login API Integration here
  const authenticateUser = () => {}
  return(
    <form className="mt-8 space-y-6">
      <div className="-space-y-px">
        {
          fields.map(field =>
            <Input
              key={field.id}
              handleChange={handleChange}
              value={loginState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
              />
          )
        }
      </div>
      <FormExtra />
      <FormAction handleSubmit={handleSubmit} text="Login"/>
    </form>
  )
}

export default Login
