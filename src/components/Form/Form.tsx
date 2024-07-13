import { Container } from './styles'
import { toast, ToastContainer } from 'react-toastify'
import { useState } from 'react'
import validator from 'validator'
import emailjs from 'emailjs-com'

export function Form() {
  const [validEmail, setValidEmail] = useState(false)
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [submitting, setSubmitting] = useState(false)

  // Function to validate email
  function verifyEmail(email: string) {
    setValidEmail(validator.isEmail(email))
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validEmail || !message || !name) return // Ensure all fields are filled

    setSubmitting(true) // Set submitting state to true

    // Send email using EmailJS
    emailjs.send(
      'service_2rf7vbu', // Your EmailJS service ID
      'template_gj29ssl', // Your EmailJS template ID
      {
        from_name: name, // Send user's name
        from_email: email, // Send user's email
        message: message // Send user's message
      },
      '4o2UCeQJWrfsl1ezx' // Your EmailJS user ID
    )
    .then((response) => {
      toast.success('Email successfully sent!', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      })
      setSubmitting(false)
      setEmail('') // Clear email field
      setMessage('') // Clear message field
      setName('') // Clear name field
    }, (error) => {
      toast.error('Failed to send email. Please try again.', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'failed',
      })
      setSubmitting(false)
    })
  }

  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Your Name"
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            verifyEmail(e.target.value)
          }}
          required
        />
        <textarea
          required
          placeholder="Send a message to get started."
          id="message"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          disabled={submitting || !validEmail || !message || !name}
        >
          Submit
        </button>
      </form>
      <ToastContainer /> {/* Always render ToastContainer */}
    </Container>
  )
}
