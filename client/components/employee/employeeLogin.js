import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useState } from 'react';
export default function EmployeeLogin() {
  //set some state with hooks
  const [redirect, setRedirect] = useState(false);
  if (redirect === false) {
    return (
      <div className='LoginComponent-Holder'>
        <a href='/auth/linkedin'>Sign in with LinkedIn </a>
        <Link to='/employeeProfile'>
          <div>work around Allison</div>
        </Link>
      </div>
    );
    setRedirect(true);
  } else if (redirect === true) {
    return <Redirect to='/employeeProfile' />;
  }
}
