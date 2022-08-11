import { FormControl, InputAdornment, InputLabel, OutlinedInput , IconButton, Tooltip} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import React, { useState } from 'react'

export default function Password(props) {
  const [showPassword, setShowPassword] = useState(true)
  return (
    
    <FormControl fullWidth>
    <InputLabel required htmlFor="outlined-adornment-password">
    {props.label}
    </InputLabel>
    <OutlinedInput
        required
        error = {props.error}
        name={props.name}
        type={showPassword ? 'password': 'text'}
        onChange={props.change}
        value={props.value}       
        endAdornment={
        <InputAdornment position="end">
          <Tooltip title={showPassword ? 'Show Password': 'Hide Password'}>
              <IconButton
              aria-label="toggle password visibility"
              edge="end"
              onClick={ () => setShowPassword(!showPassword)}
              >
              {showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}
              </IconButton>
          </Tooltip>
        </InputAdornment>
        }
        label={props.label}
    />
    </FormControl>

   
  )
}
