import React from 'react'

import Link from './Link'
import SessionForm from './styles/SessionForm'
import Form from './styles/Form'
import Button from './styles/Button'

function Signup () {
  return (
    <SessionForm>
      <div className='img'>
        <img alt='cash' src='https://source.unsplash.com/ZKVBM2_Dp84/600x400' />
      </div>

      <div className='form'>
        <h1 className='logo'>
          <span role='img' aria-label='Dinero'>
            💰
          </span>
        </h1>
        <div className='title'>
          <h1>Create your free account</h1>
          <p>
            Fill up the form below, and we will send you a magic link to your inbox.{' '}
            <span role='img' aria-label='Sparkles'>
              ✨
            </span>
          </p>
        </div>
        <Form method='post'>
          <label htmlFor='name'>
            Name
            <input id='name' name='name' type='name' placeholder='John Doe' />
          </label>
          <label htmlFor='email'>
            Email
            <input id='email' name='email' type='email' placeholder='johndoe@email.com' />
          </label>
          <Button type='submit' block>
            Join in
          </Button>
        </Form>
        <div className='links'>
          <Link href='/login' prefetch>
            Already have an account? Log In
          </Link>
        </div>
      </div>
    </SessionForm>
  )
}

export default Signup
