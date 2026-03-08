import {BarLoader} from 'react-spinners'

const override = {
    display:'block',
    margin:'0 auto'
}
const Spinner = ({color = 'blue',size = '150'}) => {
  return (
    <BarLoader color={color} cssOverride={override} size={size} data-testid='loader'/>
  )
}

export default Spinner