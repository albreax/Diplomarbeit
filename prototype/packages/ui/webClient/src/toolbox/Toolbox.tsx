import { ListItemIcon, makeStyles, MenuItem, MenuList, Paper, Typography } from '@material-ui/core';
import { Redo, Settings, Tune, Undo } from '@material-ui/icons/';
import * as React from 'react';
import ApplicationProxy from '../ApplicationProxy';
interface IToolboxProps {
}

const fontSize = "small";

const useStyles = makeStyles({
  root: {
    width: 230,
  },
});
const renderLabeledIcon = (icon: JSX.Element, label: string) => <>
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <Typography variant="inherit">{label}</Typography>
    </>

const renderMenuItem = (elem: JSX.Element, index: number) => <MenuItem key={index}>{elem}</MenuItem>

const Toolbox: React.FunctionComponent<IToolboxProps> = (props) => {
  const classes = useStyles();
  const [labelToolbox, setLabelToolbox] = React.useState("");
  const [labelTune, setLabelTune] = React.useState("");
  const [labelUndo, setLabelUndo] = React.useState("");
  const [labelRedo, setLabelRedo] = React.useState("");

  // fetch translations 
  React.useEffect(() => {
    const {getTranslation} = new ApplicationProxy();
    (async () => {
      const [
        valueToolbox,
        valueProductConfig,
        valueUndo,
        valueRedo,
      ] = await Promise.all([
        getTranslation("toolbox"),
        getTranslation("productConfig"),
        getTranslation("undo"),
        getTranslation("redo"),
      ]);
      setLabelToolbox(valueToolbox || "");
      setLabelTune(valueProductConfig || "");
      setLabelUndo(valueUndo || "");
      setLabelRedo(valueRedo || "");
    })();
  }, []);

  const items: JSX.Element[] = React.useMemo(() => [
    renderLabeledIcon(<Settings fontSize={fontSize} />, labelToolbox),
    renderLabeledIcon(<Tune fontSize={fontSize} />, labelTune),
    renderLabeledIcon(<Undo fontSize={fontSize} />, labelUndo),
    renderLabeledIcon(<Redo fontSize={fontSize} />, labelRedo),
  ], [labelRedo, labelToolbox, labelTune, labelUndo]);

  return <Paper className={classes.root}>
    <MenuList>
        {items.map(renderMenuItem)}
    </MenuList>
  </Paper>
};

export default Toolbox;
