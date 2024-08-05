import React from 'react'
import LayoutDashboard from '../layout/LayoutDashboard'
import Container from 'react-bootstrap/Container'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function Setting() {

  const handleClick = (event) => {

    const id = event.target.data-id.value;

    console.log(id);

  }

  const formik = useFormik({
    initialValues: {
        change: '',
        confirmchange: '' 

    }
  })

  return (
    <LayoutDashboard>
        <h1>Change Your Profile</h1>
        <Container>
        <div className='d-flex justify-content-center flex-column mb-auto w-50 align-items-lg-stretch'>
          <form>
          <label htmlFor="New Password">New Password</label>
          <input data-id="" type="password" name="change" id="change" />
          <label htmlFor="Confirm New Password">Confirm New Password</label>
          <input type="password" name="confirmchange" id="confirmchange" />
          <button>change</button>

          </form>
          
        </div>
        </Container>
    </LayoutDashboard>
  )
}

export default Setting;