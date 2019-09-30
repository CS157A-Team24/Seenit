import React from 'react';
import PostFrame from '../components/PostFrame';
import { useDispatch, useSelector } from 'react-redux';
import { simpleAction } from '../actions/simpleAction'; 

const Home = () => {
    const state = useSelector(state => state.simpleReducer);
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(simpleAction())}>Test redux action</button>
            <pre>
                {
                    JSON.stringify(state.result)
                }
            </pre>
        </div>
    );
}

export default Home;