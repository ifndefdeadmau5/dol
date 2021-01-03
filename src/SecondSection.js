import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  primaryTypo: {
    whiteSpace: "pre-wrap",
    marginBottom: theme.spacing(2),
  },
}));

const SmallBox = () => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="flex-end"
    alignItems="flex-start"
    width={300}
    height={150}
    style={{ backgroundColor: "darkgrey" }}
    p={2}
    borderRadius={12}
  >
    <Button variant="contained">Button</Button>
  </Box>
);

const SecondSection = () => {
  const classes = useStyles();
  return (
    <div style={{ background: "white" }}>
      <Container minWidth="lg">
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          paddingY={8}
        >
          <Typography
            variant="h3"
            className={classes.primaryTypo}
            gutterBottom
            align="center"
          >
            {"인공지능 Yoom과 함께,\n성장하는 나만의 주식 라이프"}
          </Typography>
          <Typography variant="body1" className={classes.primaryTypo}>
            {"백테스트, 주식 레포트로 견고해지는 나만의 주식 라이프"}
          </Typography>
          <Grid
            container
            spacing={2}
            justify="center"
            style={{ width: "auto" }}
          >
            <Grid item xs={4}>
              <SmallBox />
            </Grid>
            <Grid item xs={4}>
              <SmallBox />
            </Grid>
            <Grid item xs={4}>
              <SmallBox />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default SecondSection;
