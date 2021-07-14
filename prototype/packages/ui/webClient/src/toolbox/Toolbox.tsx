import { ListItemIcon, makeStyles, MenuItem, MenuList, Paper, Typography } from '@material-ui/core';
import { Redo, Settings, Tune, Undo, AddCircleSharp, AddBoxSharp } from '@material-ui/icons/';
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
const renderLabeledIcon = (
    icon: JSX.Element,
    label: string,
) => <>
        <ListItemIcon >
            {icon}
        </ListItemIcon>
        <Typography variant="inherit">{label}</Typography>
    </>

const renderMenuItem = ({
        elem,
        onClick,
    }:{
        elem: JSX.Element,
        onClick: () => void,
    }, index: number
) => <MenuItem
    key={index}
    onClick={onClick}
>
    {elem}
</MenuItem>

const Toolbox: React.FunctionComponent<IToolboxProps> = (props) => {
    const classes = useStyles();
    const [labelToolbox, setLabelToolbox] = React.useState("");
    const [labelTune, setLabelTune] = React.useState("");
    const [labelUndo, setLabelUndo] = React.useState("");
    const [labelRedo, setLabelRedo] = React.useState("");
    const [labelAddRectangle, setLabelAddRectangle] = React.useState("");
    const [labelAddCircle, setLabelAddCircle] = React.useState("");
    // fetch translations 
    React.useEffect(() => {
        const { getTranslation } = new ApplicationProxy();
        (async () => {
            const [
                valueToolbox,
                valueProductConfig,
                valueUndo,
                valueRedo,
                valueRectangle,
                valueCircle,
            ] = await Promise.all([
                getTranslation("toolbox"),
                getTranslation("productConfig"),
                getTranslation("undo"),
                getTranslation("redo"),
                getTranslation("addRectangle"),
                getTranslation("addCircle"),
            ]);
            setLabelToolbox(valueToolbox || "");
            setLabelTune(valueProductConfig || "");
            setLabelUndo(valueUndo || "");
            setLabelRedo(valueRedo || "");
            setLabelAddRectangle(valueRectangle || "");
            setLabelAddCircle(valueCircle || "");
        })();
    }, []);
    const items: {elem:JSX.Element, onClick:() => void}[] = React.useMemo(() => [
        {elem: renderLabeledIcon(<Settings fontSize={fontSize} />, labelToolbox), onClick:() => {console.warn("to be impl. Settings")}},
        {elem: renderLabeledIcon(<Tune fontSize={fontSize} />, labelTune), onClick:() => {console.warn("to be impl. Tune")}},
        {elem: renderLabeledIcon(<AddBoxSharp fontSize={fontSize} />, labelAddRectangle), onClick:() => {console.warn("to be impl. AddBoxSharp")}},
        {elem: renderLabeledIcon(<AddCircleSharp fontSize={fontSize} />, labelAddCircle), onClick:() => {console.warn("to be impl. AddCircleSharp")}},
        {elem: renderLabeledIcon(<Undo fontSize={fontSize} />, labelUndo), onClick:() => {console.warn("to be impl. Undo")}},
        {elem: renderLabeledIcon(<Redo fontSize={fontSize} />, labelRedo), onClick:() => {console.warn("to be impl. Redo")}},
    ], [labelAddCircle, labelAddRectangle, labelRedo, labelToolbox, labelTune, labelUndo]);

    return <Paper className={classes.root}>
        <MenuList>
            {items.map(renderMenuItem)}
        </MenuList>
    </Paper>
};

export default Toolbox;
