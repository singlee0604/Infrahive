import { store } from 'store';
import { openSnackbar } from 'store/slices/snackbar';

const snackbar = (message: any, color: string = 'success') => {
    store.dispatch(
        openSnackbar({
            open: true,
            message,
            variant: 'alert',
            transition: 'SlideLeft',
            alert: { color },
            anchorOrigin: { vertical: 'top', horizontal: 'right' }
        })
    );
};

export default snackbar;