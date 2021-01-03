import {
  Box,
  Button,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  primaryTypo: {
    whiteSpace: "pre-wrap",
    marginBottom: theme.spacing(2),
  },
  secondaryTypo: {
    whiteSpace: "pre-wrap",
    marginBottom: theme.spacing(4),
  },
  colorBox: {
    background: "grey",
    width: "22%",
    height: 400,
  },
}));

const FirstSection = () => {
  const classes = useStyles();

  return (
    <div style={{ background: "lightgrey" }}>
      <Container minWidth="lg">
        <Box display="flex" justifyContent="space-around" paddingY={4}>
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Typography variant="h3" className={classes.primaryTypo}>
              {"휩쓸리지 않고,\n나만의 투자가 필요할때, 돌핀"}
            </Typography>
            <Typography variant="h6" className={classes.secondaryTypo}>
              {"인공지능 YOON과 함께\n성장하는 나만의 주식 라이프"}
            </Typography>
            <Box display="flex" alignItems="center">
              <Button variant="contained" style={{ marginRight: 16 }}>
                Who is Yoom
              </Button>
              <Button variant="contained" size="large">
                Quantry
              </Button>
            </Box>
          </Box>
          <div className={classes.colorBox} />
        </Box>
      </Container>
    </div>
  );
};

export default FirstSection;
