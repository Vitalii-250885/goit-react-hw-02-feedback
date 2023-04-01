import React from 'react';
import { StatList, StatItem, StatItemValue } from './Statistics.styled';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
        return (
            <>
                <StatList>
                    <StatItem>Good: <StatItemValue>{good}</StatItemValue></StatItem>
                    <StatItem>Neutral: <StatItemValue>{neutral}</StatItemValue></StatItem>
                    <StatItem>Bad: <StatItemValue>{bad}</StatItemValue></StatItem>
                    <StatItem>Total: <StatItemValue>{total}</StatItemValue></StatItem>
                    <StatItem>Positive feedback: <StatItemValue>{positivePercentage} %</StatItemValue></StatItem>
                </StatList>
                
            </>
            
        )
}

Statistics.propTypes = {
    good: PropTypes.number,
    Neutral: PropTypes.number,
    Bad: PropTypes.number,
    Total: PropTypes.number,
    positivePercentage: PropTypes.number,
}