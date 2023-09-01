// import styles from 'styles/components/.module.scss'
import {
  IconButton,
  Stack,
} from '@mui/material'
import { MdModeEdit, MdDelete } from "react-icons/md";

type Props = {
  handleEdit: () => void;
  handleDelete: () => void;
  actions: boolean[];
}

function EditDeleteAction({ handleEdit, handleDelete, actions=[true, true] }: Props) {
  return (
    <Stack
      direction="row" 
      justifyContent="center"
      alignItems="center" 
      spacing={2}
    >
      { actions[0] &&
        <IconButton 
          onClick={handleEdit}
          color="info"
          aria-label="delete"
          size="small"
        >
          <MdModeEdit fontSize="medium" />
        </IconButton>
      }
      { actions[1] &&
        <IconButton 
          onClick={handleDelete}
          color="warning"
          aria-label="delete"
          size="small"
        >
          <MdDelete fontSize="medium" />
        </IconButton>
      }
    </Stack>
  )
}



export default EditDeleteAction
