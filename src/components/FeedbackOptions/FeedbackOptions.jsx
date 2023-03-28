import { Button, Buttons } from './FeedbackOptions.styled'

export const FeedbackOptions = ({ options, onLeaveFeedback}) => {
return (
        <Buttons>
            {options.map(button => (<Button key={button} name={button} onClick={onLeaveFeedback}>{button}</Button>))}
        </Buttons>
    )
}