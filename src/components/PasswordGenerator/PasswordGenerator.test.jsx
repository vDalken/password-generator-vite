import '@testing-library/jest-dom'
import PasswordGenerator from '.'
import { screen, render } from '@testing-library/react'
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

  it("should update bar's color when generate is clicked", async () => {
    const user = userEvent.setup()
    const { getByTestId } = render(<PasswordGenerator />)
    const strengthBar1 = getByTestId('strength-bar-1')
    const strengthBar2 = getByTestId('strength-bar-2')

    const strengthBar1Style = window.getComputedStyle(strengthBar1)
    const strengthBar1PreviousColor = strengthBar1Style.getPropertyValue('background-color:')
    console.log(strengthBar1Style.getPropertyValue('background-color:'))
  
    
    const strengthBar2Style = window.getComputedStyle(strengthBar2)
    const strengthBar2PreviousColor = strengthBar2Style.getPropertyValue('background-color:')

    await user.click(getByTestId('includeUppercase'))
    await user.click(getByTestId('generate-button'))

    console.log(strengthBar2PreviousColor)
    expect(strengthBar1).not.toHaveStyle(strengthBar1PreviousColor)
    //expect(strengthBar2).toHaveStyle(strengthBar2PreviousColor)
  })

  it('should update password length when slider is dragged and generate is clicked', async () => {})
})
