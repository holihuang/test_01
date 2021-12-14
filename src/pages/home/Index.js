import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux'

import style from './index.less';

function Home(props) {

    const { dispatch, home } = props || {}
    const { count } = home || {}

    useEffect(() => {
        
    }, [])

    function handleClk() {
        dispatch({
            type: 'add',
            payload: {
                data: 1,
            }
        })
    }

    return (
        <div>
            home
            <h1>当前的数值 { count }</h1>
            <button onClick={() => { handleClk() }}>+</button>
        </div>
    )
}

function mapStateToProps({home}) {
    return {home}
}

export default connect(mapStateToProps)(Home);