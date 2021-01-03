import {
  AppBar,
  Button,
  Container,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  spacer: {
    flex: 1,
  },
  toolbar: {
    padding: theme.spacing(0, 10),
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Container minWidth="lg">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6">News</Typography>
          <div className={classes.spacer} />
          <div>
            <Button>서비스 체험</Button>
            <Button>Who is Yoom</Button>
            <Button>Quantry</Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
