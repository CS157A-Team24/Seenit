import React from 'react';

import DetailContainer from './DetailContainer';
import ListOfModerators from './ListOfModerators';
import FooterContainer from './FooterContainer';

const ChannelContainers = () => {
    return(
        <div >
            <DetailContainer/>
            <ListOfModerators/>
            <FooterContainer/>
        </div>
    )
}

export default ChannelContainers;