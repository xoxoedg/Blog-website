import {Divider, Grid, Paper, Typography} from "@mui/material";

function Post() {

    const postStyle = {}
    const paperStyle =  {padding: 5,  width: 350, margin: "20px auto"};

    return (
        <Grid spacing={6} sx={{}}>
            <Paper elevation={4} sx={paperStyle}>
            <Grid item >
                <Typography variant="h4">hlleo</Typography>
            </Grid>
                <Divider />
            <Grid item sx={{marginTop:"10px"}}>
                <Typography>

                    Lorem Ipsum dasldaklösdkadkjakjd
                    daksdjadjkajkdajkdjkajkdajkldad
                    dasdkladklaödkla
                    Lorem Ipsum dasldaklösdkadkjakjd
                    daksdjadjkajkdajkdjkajkdajkldad
                    dasdkladklaödkla
                    Lorem Ipsum dasldaklösdkadkjakjd
                    daksdjadjkajkdajkdjkajkdajkldad
                    dasdkladklaödkla
                    Lorem Ipsum dasldaklösdkadkjakjd
                    daksdjadjkajkdajkdjkajkdajkldad
                    dasdkladklaödkla


                </Typography>

            </Grid>

            </Paper>
        </Grid>
    )
}


export default Post;