import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
  const styles = makeStyles(
    (theme) => {
      return ({
        root: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: theme.spacing(6),
          '& svg': {
            width: '100%',
          },
          [theme.breakpoints.up('sm')]: {
            '& svg': {
              width: '300px',
            },
          },
        },
        logo: {
          width: '100%',
          [theme.breakpoints.up('sm')]: {
            width: '300px',
          },
        },
        divider: {
          margin: theme.spacing(2, 0),
          "&.MuiLinearProgress-colorPrimary:not(.MuiLinearProgress-buffer)": {
            backgroundColor: "#8F00FF"
          },
          "& .MuiLinearProgress-colorPrimary": {
            backgroundColor: "#8F00FF"
          },
          "& .MuiLinearProgress-barColorPrimary": {
            backgroundColor: "#EAB9FE"
          },
          "& .MuiLinearProgress-dashedColorPrimary": {
            backgroundImage:
              "radial-gradient(#8F00FF 0%, #8F00FF 16%, transparent 42%)"
          }
        },
      });
    },
  )();

  return styles;
};
