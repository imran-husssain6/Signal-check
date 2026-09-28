import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import App from './App.jsx'

describe('Signal Check activity', () => {
  it('locks answers after submission and shows feedback', async () => {
    const user = userEvent.setup()
    render(<App />)

    const correctAnswer = screen.getByLabelText(/creates urgency/i)
    await user.click(correctAnswer)
    await user.click(screen.getByRole('button', { name: /check answer/i }))

    expect(screen.getByText('That’s right')).toBeInTheDocument()
    expect(correctAnswer).toBeDisabled()
    expect(screen.getByRole('button', { name: /next question/i })).toBeInTheDocument()
  })

  it('completes the activity and can restart', async () => {
    const user = userEvent.setup()
    render(<App />)

    const answers = [
      /creates urgency/i,
      /check the link destination/i,
      /deny the request/i,
      /do not open it/i,
      /verify the promotion/i,
      /combines secrecy/i,
      /use your mobile hotspot/i,
    ]

    for (const answer of answers) {
      await user.click(screen.getByLabelText(answer))
      await user.click(screen.getByRole('button', { name: /check answer/i }))
      await user.click(
        screen.getByRole('button', { name: /next question|see my results/i }),
      )
    }

    expect(screen.getByRole('heading', { name: /sharp instincts/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/scored 7 out of 7/i)).toBeInTheDocument()
    expect(screen.getByText(/best streak/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /see what you learned/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /try again/i }))
    expect(screen.getByText(/question/i, { selector: '.progress__meta span' })).toBeInTheDocument()
  })
})
