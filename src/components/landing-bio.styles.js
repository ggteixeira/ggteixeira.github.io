import styled from "@emotion/styled"

export const Content = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 1rem;
  margin-bottom: 2rem;
`

export const GreetingTitleCommaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
`
export const GreetingTitleComma = styled.span`
  align-self: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  line-height: 120%;
  text-align: center;
  max-width: 768px;
  width: 100%;
`
export const GrayStyle = styled.span`
  color: #6c757d;
`

export const Subtitle = styled.p`
  font-size: 1.3rem;
  color: #6c757d;
  text-align: match-parent;
  padding: auto;
  align-self: center;
  margin-bottom: 1rem;
  max-width: 384px;
  width: 100%;
`

export const ItalicParagraph = styled.p`
  font-style: italic;
`

export const ShinyName = styled.span`
  background: linear-gradient(
    to left,
    #333333 10%,
    #6c757d 30%,
    #6c757d 70%,
    #333333 90%
  );

  background-size: 200% auto;
  background-clip: text;
  color: transparent;
  animation: before 2s ease-in-out 1;

  @keyframes before {
    from {
      background-position: -200% center;
    }
    to {
      background-position: 0% center;
    }
  }

  &:hover {
    animation: shine 2s ease-in-out 1;

    @keyframes shine {
      from {
        background-position: 200% center;
      }
      to {
        background-position: 400%;
      }
    }
  }
`
