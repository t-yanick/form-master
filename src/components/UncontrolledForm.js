import React from 'react';

function UncontrolledForm() {

  function onSubmit(event) {
    event.preventDefault()
    const { username, password } = event.target
    console.log(username.value, password.value)
  }

  return (
    <div>
      <h1>Uncontrolled Form</h1>
      <form className="Control-form" onSubmit={onSubmit}>
        <label htmlFor="username" className="password">Username</label>
        <input type="text" name="username" id="username" />

        <label htmlFor="password" className="password">Password</label>
        <input type="text" name="password" id="password" />

        <div className="Control-form" >
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )

}

export default UncontrolledForm