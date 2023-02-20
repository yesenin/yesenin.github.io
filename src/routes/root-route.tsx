import {createStyles, CssBaseline, Theme, Toolbar, Typography, withStyles} from '@material-ui/core';
import * as React from 'react';
import {Link, Outlet} from 'react-router-dom';

const styles = (theme: Theme) => createStyles({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing() * 3,
        marginRight: theme.spacing() * 3,
        [theme.breakpoints.up(1100 + theme.spacing() * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    toolbarTitle: {
        flex: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        marginTop: theme.spacing() * 8,
        padding: `${theme.spacing() * 6}px 0`,
    },
});

interface RootRouteProps {
    classes: any;
}

const RootRoute = (props: RootRouteProps) => {
    const {classes} = props;
    return <>
        <CssBaseline />
        <div className={classes.layout}>
            <Toolbar>
                <Typography variant='h5' align='center' className={classes.toolbarTitle}>
                    Набор интерактивных занимательных WEB-страниц от Антона Есенина
                </Typography>
            </Toolbar>
            <main>
                <Toolbar variant="dense">
                    <Typography color="inherit" noWrap>
                        <Link to='/armenian'>Армянский язык</Link>
                    </Typography>
                </Toolbar>
                <Outlet />
            </main>
        </div>
        <footer>
            <Typography variant="h6" align="center" gutterBottom>
                <a href='mailto:anton.yesenin@gmail.com'>Антон Есенин</a>
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Футер, в котором можно узнать, что последний раз что-то новое на этом сайте
                появилось 19 февраля 2023 года.
            </Typography>
        </footer>
        {/* <AppBar className={classes.appBar} position='static'>
            <Toolbar>
            </Toolbar>
        </AppBar>
        <main>
            <List>
                <ListItem button component={Link} to='/'>
                    <ListItemText primary='Начало'/>
                </ListItem>
                <ListItem button component={Link} to='/armenian'>
                    <ListItemText primary='Armenian'/>
                </ListItem>
            </List>
        </main> */}
    </>;
};

export default withStyles(styles)(RootRoute);
