import React from "react";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    button: {
        backgroundColor: "#770103",
        color: "#fff",
        "&:hover": {
            backgroundColor: "#380001",
        },
    }
})

const ButtonComponent = () => {

    const classes = useStyles();

    return (
        <Button className={classes.button} style={{marginTop: 10 }} variant="contained" color="primary" type="submit" >Submit</Button>
    )
}

export default ButtonComponent;