import React from "react";

import SVGLogin from "../../shared/icons/SVGLogin";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

import './Login.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";     
import "primereact/resources/primereact.min.css"; 
class Login extends React.Component {
    render() {
        return (
    <div className="login-container">
      <div className="login-logo">
        <div className="background-logo">
          <center>
            <SVGLogin className="responsive-svg"/>
          </center>
        </div>
        <div className="login-email">
          <label htmlFor="email">E-mail</label>
          <InputText style={{ marginTop: '10px', marginBottom: '30px', border: '1px solid #ff9900', width: '300px' }} type="text" className="p-inputtext-sm" />

          <label htmlFor="password">Senha</label>
          <InputText style={{ marginTop: '10px', border: '1px solid #ff9900', width: '300px' }} type="text" className="p-inputtext-sm" />
          <Button style={{ marginTop: '15px', marginLeft: '215px', background: '#ff9900', borderColor: '#ff9900', color: 'black' }} label="Login" />
        </div>
      </div>
    </div>
        )
    }
}
export default (Login);