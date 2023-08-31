import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { IconArrowDownBar, IconArrowNarrowDown } from '@tabler/icons';
import { List, ListItem } from '@mui/material';
import Image from 'next/image';

const PdfIcon = '/assets/images/icons/pdficon.svg';
const CsvIcon = '/assets/images/icons/csvicon.svg';
const DocIcon = '/assets/images/icons/docicon.svg';

export default function ExportPopover() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        sx={{ background: '#202224 !important', color: 'white', mt: 0.3 }}
      >
        <IconArrowNarrowDown /> Export
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        <List>
          <ListItem sx={{ padding: '5px 20px' }}>
            <Button>
              <Image src={PdfIcon} alt="icon" width={20} height={20} />
              <Typography sx={{ mr: 6, ml: 1, width: '60px' }}>PDF</Typography>
              <IconArrowNarrowDown color="#09BD3C" />
            </Button>
          </ListItem>
          <hr />
          <ListItem sx={{ padding: '5px 20px' }}>
            <Button>
              <Image src={CsvIcon} alt="icon" width={20} height={20} />
              <Typography sx={{ mr: 6, ml: 1, width: '60px' }}>CSV</Typography>
              <IconArrowNarrowDown color="#09BD3C" />
            </Button>
          </ListItem>
          <hr />
          <ListItem sx={{ padding: '5px 20px' }}>
            <Button>
              <Image src={DocIcon} alt="icon" width={20} height={20} />
              <Typography sx={{ mr: 6, ml: 1, width: '60px' }}>DOC</Typography>
              <IconArrowNarrowDown color="#09BD3C" />
            </Button>
          </ListItem>
        </List>
      </Popover>
    </div>
  );
}
