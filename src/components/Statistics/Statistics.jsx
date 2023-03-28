import React from 'react';
import { StatList, StatItem, StatItemValue } from './Statistics.styled';

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