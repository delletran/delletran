import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


type Props = {

}

const CustomButton = (props: Props) => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  )
}

export default CustomButton
