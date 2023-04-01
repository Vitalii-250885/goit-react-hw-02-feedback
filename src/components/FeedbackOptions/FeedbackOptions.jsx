import { Button, Buttons } from './FeedbackOptions.styled'
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback}) => {
return (
        <Buttons>
            {options.map(button => (<Button key={button} name={button} onClick={onLeaveFeedback}>{button}</Button>))}
        </Buttons>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired,
}