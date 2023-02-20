import {Toolbar, Typography} from '@material-ui/core';
import * as React from 'react';
import {Link, Outlet} from 'react-router-dom';

const ArmenianRootRoute = () => {
    return <>
        <Typography variant="subtitle1" align="left" color="textSecondary" component="p">
            С 1 марта 2022 года я временно живу и работаю в городе Ереван, Республика Армения.
            Поэтому приходится пытаться учить армянский язык.
        </Typography>
        <Toolbar variant="dense">
            <Typography color="inherit" noWrap>
                <Link to='/armenian/alphabet'>Армянский алфавит</Link>
            </Typography>
        </Toolbar>
        <Outlet />
    </>;
};

export default ArmenianRootRoute;
