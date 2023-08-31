// material-ui
import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Button, Divider, Grid, IconButton, InputBase, Paper } from '@mui/material';
import AlertDialog from 'components/ui-elements/advance/UIDialog/AlertDialog';
import ScrollDialog from 'components/ui-elements/advance/UIDialog/ScrollDialog';
import AlertDialogSlide from 'components/ui-elements/advance/UIDialog/AlertDialogSlide';
import ConfirmationDialog from 'components/ui-elements/advance/UIDialog/ConfirmationDialog';
import CustomizedDialogs from 'components/ui-elements/advance/UIDialog/CustomizedDialogs';
import DraggableDialog from 'components/ui-elements/advance/UIDialog/DraggableDialog';
import FormDialog from 'components/ui-elements/advance/UIDialog/FormDialog';
import FullScreenDialog from 'components/ui-elements/advance/UIDialog/FullScreenDialog';
import MaxWidthDialog from 'components/ui-elements/advance/UIDialog/MaxWidthDialog';
import ResponsiveDialog from 'components/ui-elements/advance/UIDialog/ResponsiveDialog';
import SimpleDialog from 'components/ui-elements/advance/UIDialog/SimpleDialog';

// ==============================|| Default DASHBOARD ||============================== //


const ChatGPT_Plugins = () => {
    return (
        <div>
            <AlertDialog></AlertDialog>
            <AlertDialogSlide></AlertDialogSlide>
            <ConfirmationDialog></ConfirmationDialog>
            <DraggableDialog></DraggableDialog>
            <FormDialog></FormDialog>
            <FullScreenDialog></FullScreenDialog>
            <MaxWidthDialog></MaxWidthDialog>
            <ResponsiveDialog></ResponsiveDialog>
            <ScrollDialog></ScrollDialog>
            <SimpleDialog></SimpleDialog>
        </div>
    );
};
ChatGPT_Plugins.Layout = 'authGuard';
export default ChatGPT_Plugins;