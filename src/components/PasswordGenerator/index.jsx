import { useState } from 'react'
import {
  Main,
  Password,
  PasswordContainer,
  StrengthBar,
  Title,
  PasswordOptions,
  CharacterOptions,
  Options,
  CopyButton,
  CharacterLength,
  CharacterLengthText,
  CharacterLengthNumber,
  PasswordStrength,
  GenerateButton,
  Input,
  StrengthContainer,
  StrengthBars,
  RangeInput,
  ButtonCopyContainer
} from './styles'
import IconCopy from '../IconCopy'

const PasswordGenerator = () => {
  const [rangeValue, setRangeValue] = useState(2)
  const [wasClicked, setWasClicked] = useState(false)
  const [generatedPassword, setGeneratedPassword] = useState('P4$5W0rD!')
  const [includeUppercase, setIncludeUppercase] = useState(false)
  const [includeLowercase, setIncludeLowercase] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)
  const [passwordStrength, setPasswordStrength] = useState('')
  const [optionsCount, setOptionsCount] = useState(0)

  const handleCopyButtonClick = () => {
    setWasClicked(true)
    navigator.clipboard.writeText(generatedPassword)
  }

  const handleGenerateButtonClick = () => {
    setWasClicked(false)
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercase = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-='
    let characters = ''
    let password = ''
    let optionsCount = 0

    if (includeUppercase) {
      characters += uppercase
      optionsCount++
    }

    if (includeLowercase) {
      characters += lowercase
      optionsCount++
    }

    if (includeNumbers) {
      characters += numbers
      optionsCount++
    }

    if (includeSymbols) {
      characters += symbols
      optionsCount++
    }

    for (let i = 0; i < rangeValue; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      )
    }

    setGeneratedPassword(optionsCount !== 0 ? password : 'P4$5W0rD!')

    switch (optionsCount) {
      case 1:
        setPasswordStrength('TOO WEAK!')
        break
      case 2:
        setPasswordStrength('WEAK')
        break
      case 3:
        setPasswordStrength('MEDIUM')
        break
      case 4:
        setPasswordStrength('STRONG')
        break
      default:
        setPasswordStrength('')
    }

    setOptionsCount(optionsCount)
  }

  return (
    <>
      <Main>
        <header>
          <Title>Password Generator</Title>
        </header>
        <PasswordContainer>
          <Password data-testid="generated-password">{generatedPassword}</Password>
          <ButtonCopyContainer>
            <p>{wasClicked ? 'COPIED' : ''}</p>
            <CopyButton onClick={handleCopyButtonClick}>
              <IconCopy />
            </CopyButton>
          </ButtonCopyContainer>
        </PasswordContainer>
        <PasswordOptions>
          <CharacterOptions>
            <header>
              <CharacterLength>
                <CharacterLengthText>Character Length</CharacterLengthText>
                <CharacterLengthNumber
                  $isDoubleDigits={rangeValue > 9 ? true : false}
                >
                  {rangeValue}
                </CharacterLengthNumber>
              </CharacterLength>
              <RangeInput
                type="range"
                min="2"
                max="20"
                value={rangeValue}
                onChange={(event) => setRangeValue(event.target.value)}
                $size={rangeValue}
              />
            </header>
            <Options>
              <label>
                <Input
                  type="checkbox"
                  onChange={(e) => setIncludeUppercase(e.target.checked)}
                  data-testid="includeUppercase"
                />
                Include Uppercase Letters
              </label>
              <label>
                <Input
                  type="checkbox"
                  onChange={(e) => setIncludeLowercase(e.target.checked)}
                  data-testid="includeLowercase"
                />
                Include Lowercase Letters
              </label>
              <label>
                <Input
                  type="checkbox"
                  onChange={(e) => setIncludeNumbers(e.target.checked)}
                  data-testid="includeNumbers"
                />
                Include Numbers
              </label>
              <label>
                <Input
                  type="checkbox"
                  onChange={(e) => setIncludeSymbols(e.target.checked)}
                  data-testid="includeSymbols"
                />
                Include Symbols
              </label>
            </Options>
          </CharacterOptions>
          <PasswordStrength>
            <h2>STRENGTH</h2>
            <StrengthContainer>
              <p data-testid="password-strength">{passwordStrength}</p>
              <StrengthBars>
                {[...Array(4)].map((_, i) => (
                  <StrengthBar data-testid="strength-bar" key={i} $filled={optionsCount > i ? optionsCount : 0}></StrengthBar>
                ))}
              </StrengthBars>
            </StrengthContainer>
          </PasswordStrength>
          <GenerateButton onClick={handleGenerateButtonClick} data-testid="generate-button">
            GENERATE
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#24232C"
                d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
              />
            </svg>
          </GenerateButton>
        </PasswordOptions>
      </Main>
    </>
  )
}

export default PasswordGenerator
