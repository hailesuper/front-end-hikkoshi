import {Fragment} from "react";
import {NavLink, Outlet} from "react-router-dom";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import * as React from "react";

const Navigation = () => {
    return (
        <Fragment>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button>
                    <NavLink to={""}>Home</NavLink>
                </Button>
                <Button>
                    <NavLink to={"/register"}>Book service</NavLink>
                </Button>
                <Button>
                    <NavLink to={"/sign-in"}>Sign in</NavLink>
                </Button>
                <Button>
                    <NavLink to={"/service"}>Service</NavLink>
                </Button>
            </ButtonGroup>
            <Outlet/>
        </Fragment>

    )
}

export default Navigation;