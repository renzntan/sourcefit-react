import React from 'react';

import Aux from '../../hoc/Auxl';
import classes from './Layout.css';

const layout = (props) => (
    <Aux>
        <div>

        </div>
        <main className={classes.Container}>
            {props.children}
        </main>
    </Aux>
);

export default layout;
