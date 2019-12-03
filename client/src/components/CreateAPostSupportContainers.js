import React from 'react';
import styled from 'styled-components';

import FooterContainer from './FooterContainer';

const CAPSContainers = () => {
    return(
        <div>
            <RuleContainer>
                <Style1>
                Guidelines for posting   
                </Style1>   
                <Style2>       
                <p>1. Remeber the human</p>
                <p>2. Behave like you would in real life</p>
                <p>3. Look for the original source of content</p> 
                <p>4. Search for duplicates before posting</p>
                <p>5. Read the community's rules</p>
                </Style2> 
            </RuleContainer>
            <FooterContainer/>
        </div>
    )
}

const RuleContainer = styled.div`
    border: 1px solid ${props => props.theme.border};
    background-color: ${props => props.theme.foreground};
    border-radius: 5px;
    margin-top: 20px;
    height: 250px;
    color: ${props => props.theme.normalText};
    //color: #c9c5c5;
    color: #bab5b5;
`;

const Style1 = styled.div`
    color: ${props => props.theme.normalText}; 
    color: #c46c31; 
    font-size: 18px;
`;   

const Style2 = styled.div`
    border-top: 3px solid ${props => props.theme.border};
    margin-top: 10px;
    height: 210px;
`;

export default CAPSContainers;
