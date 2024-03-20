import '@testing-library/jest-dom'
import PasswordGenerator from '.'
import { screen, render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe(PasswordGenerator, () => {
  it('should update password strength when checkboxes are clicked', async () => {
    const user = userEvent.setup()
    render(<PasswordGenerator />)

    const checkboxInputElements = [
      screen.getByTestId('includeUppercase'),
      screen.getByTestId('includeLowercase'),
      screen.getByTestId('includeNumbers'),
      screen.getByTestId('includeSymbols')
    ]

    const expectedResults = ['TOO WEAK!', 'WEAK', 'MEDIUM', 'STRONG']

    for (let i = 0; i < checkboxInputElements.length; i++) {
      await user.click(checkboxInputElements[i])

      await user.click(screen.getByTestId('generate-button'))

      expect(screen.getByTestId('password-strength')).toHaveTextContent(
        expectedResults[i]
      )
    }
  })

  it('should update password when generate is clicked', async () => {
    render(<PasswordGenerator />)

    const user = userEvent.setup()
    const generatedPassword = screen.getByTestId('generated-password')
    const defaultPasswordValue = 'P4$5W0rD!'

    expect(generatedPassword).toHaveTextContent(defaultPasswordValue)

    await user.click(screen.getByTestId('includeUppercase'))

    await user.click(screen.getByTestId('generate-button'))

    const updatedPasswordText = generatedPassword.textContent

    expect(updatedPasswordText).not.toEqual(defaultPasswordValue)
  })

  it("should update bar's color when generate is clicked", async () => {})

  it('should update password length when slider is dragged and generate is clicked', async () => {
    const {getByTestId} = render(<PasswordGenerator />)

    const user = userEvent.setup()

    const rangeInput = getByTestId('range-input')
    const generatedPassword = getByTestId('generated-password')

    fireEvent.change(rangeInput, {target: {value: 10}})

    await user.click(screen.getByTestId('includeUppercase'))
    await user.click(screen.getByTestId('generate-button'))

    expect(generatedPassword.textContent).toHaveLength(10)
  })
})
