// ** MUI Imports
import { PaletteMode } from '@mui/material'
import IconButton from '@mui/material/IconButton'

// ** Icons Imports
import WeatherNight from 'mdi-material-ui/WeatherNight'
import WeatherSunny from 'mdi-material-ui/WeatherSunny'

// ** Type Import
import { Settings } from 'src/@core/context/settingsContext'
import * as gtag from '../../../../lib/gtag'


interface Props {
  settings: Settings
  saveSettings: (values: Settings) => void
}

const ModeToggler = (props: Props) => {
  // ** Props
  const { settings, saveSettings } = props

  const handleModeChange = (mode: PaletteMode) => {
    saveSettings({ ...settings, mode })
  }

  const handleModeToggle = () => {
    gtag.event({
      action: 'mode_toggler',
      category: 'mode_toggler',
      label: "mode_toggler",
      value:'mode_toggler'
    })
    if (settings.mode === 'light') {
      handleModeChange('dark')
    } else {
      handleModeChange('light')
    }
  }

  return (
    <IconButton color='inherit' aria-haspopup='true' onClick={handleModeToggle} sx={{marginLeft: '31px'}}>
      {settings.mode === 'dark' ? <WeatherSunny /> : <WeatherNight />}
    </IconButton>
  )
}

export default ModeToggler
