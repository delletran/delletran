import React, { ReactNode, useState } from 'react'

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider, IconButton } from '@mui/material';
import { formatToId } from '@/helpers/parser/formater';
import { MdClose, MdSearch } from 'react-icons/md';
import { IMUIColor } from '@/types/style_types';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  borderRadius: 4,
  boxShadow: 24,
  p: 4,
};

type Props = {
  title: string
  buttonName: string
  disabled: boolean
  initOpen?: boolean
  cleanExit?: boolean
  type?: IMUIColor
  children: ReactNode
}

const CustomModal = ({
  title,
  buttonName,
  disabled,
  initOpen = false,
  cleanExit = true,
  type,
  children
}: Props) => {
  const [open, setOpen] = useState(initOpen);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        variant="contained"
        color={type ? type : 'secondary'}
        startIcon={<MdSearch />}
        onClick={handleOpen}
        disabled={disabled}
      >
        {buttonName}
      </Button>
      <Modal
        aria-labelledby={formatToId(`${title}-transition-modal`)}
        aria-describedby={formatToId(`${title}-transition-modal-desc`)}
        open={open}
        onClose={cleanExit ? () => { } : handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              id={formatToId(`${title}-transition-modal`)}
              variant="h5"
              component="h2"
            >
              {title}
            </Typography>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <MdClose />
            </IconButton>
            <Divider sx={{ mt: 2, mb: 4 }} />
            {children}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default CustomModal
