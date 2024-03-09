import React, { ReactNode } from 'react'

import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import { Divider, IconButton } from '@mui/material';
import { formatToId } from '@/helpers/parser/formater';
import { MdClose } from 'react-icons/md';
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
  initOpen?: boolean
  cleanExit?: boolean
  type?: IMUIColor
  children: ReactNode
}

const ConfirmationModal = ({
  title,
  initOpen = false,
  cleanExit = true,
  children
}: Props) => {

  const handleClose = () => {

  }

  return (
    <div>
      <Modal
        aria-labelledby={formatToId(`${title}-transition-modal`)}
        aria-describedby={formatToId(`${title}-transition-modal-desc`)}
        open={initOpen}
        onClose={cleanExit ? () => { } : handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={initOpen}>
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

export default ConfirmationModal
