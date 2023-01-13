import { useAppSelector, useAppDispatch } from '../app/hooks';
import { swicthActions } from '../weatherFeature/switchSlice';
import '../css/Switch.css'

// Definition to the switch button who changes the units
const Switch = () => {
  const dispatch = useAppDispatch();
  const { switchSide } = useAppSelector((state) => state.switch);

  const switchToggleHandler = () => {
    dispatch(swicthActions.switchToogle());
  };
  return (
    <label className='SwitchContainer'>
      <input type="checkbox" checked={switchSide} onClick={switchToggleHandler} />
      <span className='slider' />
    </label>
  )
}

export default Switch;