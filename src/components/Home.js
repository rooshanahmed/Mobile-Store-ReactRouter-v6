import React from 'react';
import ProductList from '../components/Products/ProductList';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    home: {
        marginTop: '7%'
    },
    welcome: {
        marginBottom: '2%'
    }
}));

function Home() {

    const styles = useStyles();

    return (
        <div className={styles.home}>
            <Typography className={styles.welcome} align='center' variant='h4'>WELCOME TO MOBILE ZONE</Typography>
            <ProductList />
        </div>
    );
}
export default Home