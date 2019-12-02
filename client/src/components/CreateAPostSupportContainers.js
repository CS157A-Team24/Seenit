import React from 'react';
import styled from 'styled-components';

import FooterContainer from './FooterContainer';

const CAPSContainers = () => {
    return(
        <div>
            <RuleContainer>
                Guidelines for posting 
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
    height: 250px
`

export default CAPSContainers;