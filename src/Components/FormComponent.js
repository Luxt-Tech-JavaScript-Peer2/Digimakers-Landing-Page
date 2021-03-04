import React from "react";

function FormComponent(props) {
  return(
    <form
      onSubmit={props.handleSubmit}
    >
          <h2>Send Us a Message</h2>
          <p> We'll be glad to speek with you</p>
          <input
            name='name'
            type='text'
            placeholder='Name...'
            value={props.name}
            onChange={props.handleChange}
            required
          />
          <input
            name='email'
            type='email'
            placeholder='Email'
            value={props.email}
            onChange={props.handleChange}
            required
          />
          <textarea
            name='message'
            placeholder='Message...'
            value={props.message}
            onChange={props.handleChange}
            required
          />
          <input
            type='submit'
            value='submit'
          />
      </form>
  )
}
export default FormComponent




