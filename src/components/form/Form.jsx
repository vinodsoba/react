import React from 'react';
import { styled } from 'styled-components';

import './style.css';

const FormWrpper = styled.div`
    margin: 0;
    padding: 0;
    background-color: #f2f1f1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

function Form() {
  return (
    <div className='contact-form'>
        <FormWrpper className='my-form'>
        <h2>Lets Chat</h2>
        <form>
            <fieldset>
                <label>First Name:</label>
                <input type="text" name="first name" value="" required={true} />
                <label>Last Name:</label>
                <input type="text" name="last name" value="" />
                <label>Email:</label>
                <input type="email" name="email" value="" />
                <label>Phone Number:</label>
                <input type="phone" name="phone" value="" />
            </fieldset>
        </form>
        </FormWrpper>
    </div>
  )
}

export default Form