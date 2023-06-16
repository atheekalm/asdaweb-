import { Box, AppBar, IconButton, Typography, Stack, Button, Toolbar } from "@mui/material"
import { Fragment, useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';

interface Props {
    setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>
}

export const ToolbarComponent: React.FC<Props> = (props) => {
    const { setOpenDrawer } = props;
    return (
        <Fragment>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box display={'flex'} gap={1} alignItems={'center'}>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                sx={{ mr: 2 }}
                                onClick={() => setOpenDrawer(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                ASDA
                            </Typography>
                            {/* <Stack direction={'row'} spacing={3} >
                            <Button disableRipple color="inherit">Home</Button>
                            <Button disableRipple color="inherit">Home</Button>
                            <Button disableRipple color="inherit">Home</Button>
                            <Button disableRipple color="inherit">Home</Button>
                            <Button disableRipple color="inherit">Home</Button>
                        </Stack> */}
                        </Box>
                        <Box display={'flex'} gap={1} alignItems={'center'}>
                            <Button variant='outlined' color="inherit" href="https://docs.google.com/forms/d/e/1FAIpQLSd2f60rDmTKC_Z8IZrnSnx9qejfW9nih3BZu31IdHXtTNl70Q/viewform?usp=sf_link">Registration - Short Course</Button>
                        </Box>
                    </Toolbar>

                </AppBar>
            </Box>
        </Fragment>
    )
}