import React, { ReactNode } from 'react'

import Typography from '@mui/material/Typography';
import { Divider, Paper, Slide, Stack } from '@mui/material';
import { formatToId } from '@/helpers/parser/formater';
import { IMUIColor } from '@/types/style_types';
import { IObject } from '@/types';


const style = {
  p: 4,
  width: '100%',
  maxWidth: 520,
  bgcolor: 'background.paper',
  border: '1px solid #CCC',
  borderRadius: 2,
  shadow: '2 2 2',
  position: 'relative',
};

type Props = {
  title?: string
  type?: IMUIColor
  headers?: ReactNode
  children?: ReactNode
  styles?: IObject<any>
  divider?: boolean
}

const PaperWrapper = ({
  title,
  headers,
  children,
  styles,
  divider = true,
}: Props) => {

  return (
    <Slide direction="right" in={true} mountOnEnter unmountOnExit>
    <Paper elevation={2} sx={{ ...style, ...styles }}>
      <Stack
        display={'flex'}
        direction={'row'}
        alignItems='bottom'
        justifyContent={'space-between'}
        sx={{ my: 0, width: '100%' }}
      >
        {
          title &&
          <Typography
            id={formatToId(`${title}-transition-modal`)}
            variant="h5"
            component="h2"
          >
            {title}
          </Typography>}
        {headers}
      </Stack>
      {
        divider &&
        <Divider sx={{ mt: 2, mb: 1 }} />
      }
      {children}
    </Paper>
    </Slide>
  );
}

export default PaperWrapper
