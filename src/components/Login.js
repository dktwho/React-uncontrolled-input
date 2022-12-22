

import React from 'react'

const Login = () => {

  function handleFormSubmit(e) {
    e.preventDefault()
    // console.log(e.target.username.value)
    // console.log(e.target.password.value)
    console.log({username:e.target.username.value, password: e.target.password.value })
  }
  return (
    <>
    <div>
      <form action="" onSubmit={handleFormSubmit} >
        <label>Username:
          <input type="text" name="username" />
        </label>
        
        <label>Password:
          <input type="password" name="password" />
        </label>

        <button type="submit">Login</button>
      </form>
    </div>

    </>
  )
}

export default Login
