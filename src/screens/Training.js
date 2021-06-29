import React from 'react'
import List from '../components/business/training';
import { Grid } from '@material-ui/core'

function Training() {
    return (
        <div>
        <Grid container>
            <Grid item sm={12}>
                <List />
            </Grid>
        </Grid>
    </div>

    )
}

export default Training
