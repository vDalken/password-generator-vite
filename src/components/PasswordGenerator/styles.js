import styled from "styled-components";

export const Main = styled.main`
    max-width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--white);
    gap: 1.1rem;
`;

export const Title = styled.h2`
    font-size: 1.2rem;
    opacity: 0.4;
`;

export const PasswordStyle = styled.section`
    background-color: var(--light-black);
    padding: .8rem;
`;

export const PasswordContainer = styled(PasswordStyle)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Password = styled.p`
    opacity: .3;
    font-size: 1.2rem;
`;

export const PasswordOptions = styled(PasswordStyle)`
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
`;

export const CharacterOptions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    width:100%;

    >header{
        display: flex;
        flex-direction: column;
        gap: 1.2rem;
    }
`;

export const RangeInput = styled.input`
    cursor: pointer;
    background: var(--light-black);

  &::-moz-range-progress{
    background: var(--green);
    height:6px;
  }

  &::-moz-range-track{
    background-color: var(--black);
    height: 6px;
  }

  &::-moz-range-thumb{
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border:none;
  }

  &::-moz-range-thumb:hover{
    border: 2px solid var(--green);
    background-color: var(--black);
  }
`;

export const Options = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.6rem;

    >label{
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: .8rem;
        margin-right: 3rem;
    }
`;

export const CopyButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    transform: scale(1);

    &:hover{
        filter: brightness(0) invert(1);
    }
`;

export const CharacterLength = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12rem;
`;

export const CharacterLengthText = styled.p`
    font-size: .8rem;
`;

export const CharacterLengthNumber = styled.p`
    font-size: 1.3rem;
    color: var(--green);
    width: 26px;
    text-align: ${({$isDoubleDigits}) => $isDoubleDigits ? "left" : "right"};
`;

export const PasswordStrength = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: var(--black);

    >h2{
        font-size: .8rem;
        opacity: 0.4;
    }
`;

export const GenerateButton = styled.button`
    padding: 1.2rem;
    border-radius: 0;
    border: 1px solid #000;
    background-color: var(--green);
    opacity: 0.8;
    font-size: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;

    &:hover{
        background-color: var(--light-black);
        color: var(--green);
        border-color: var(--green);
        cursor: pointer;
    }

    &:hover path{
        fill: var(--green);
    }

    >svg{
        transform: scale(.8);
    }
`;

export const Input = styled.input`
    position: relative;
    appearance: none;
    width: 14px;
    height: 14px;
    border: 1px solid var(--white);
    cursor: pointer;

    &:checked{
        border: none;
        background-color: var(--green);
        background-image: url('data:image/svg+xml,<svg width="14" height="12" xmlns="http://www.w3.org/2000/svg"><path stroke="%2318171F" stroke-width="3" fill="none" d="M1 5.607 4.393 9l8-8"/></svg>');
        background-position: center;
        background-size: 8px;
        background-repeat: no-repeat;
    }
`;

export const StrengthContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;

    >p{
        font-size: .8rem;
    }
`;

export const StrengthBars = styled.div`
    display: flex;
    gap: .4rem;
`;

export const StrengthBar = styled.div`
    width: 8px;
    height: 22px;
    border: ${({$filled}) => $filled ? 'none' : '1px solid var(--white)'};
    background-color: ${({$filled}) => {
        switch ($filled) {
            case 1:
              return 'var(--red)';
            case 2:
              return 'var(--orange)';
            case 3:
              return 'var(--yellow)';
            case 4:
              return 'var(--green)';
            default:
              return 'var(--black)';
          }
    }};
`;

export const ButtonCopyContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .6rem;
    color: var(--green);
    transform:scale(.8);
`;