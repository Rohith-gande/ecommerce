
const Buttons = ({onClickHandler,value,title}) => {
  return (
     <button onClick={onClickHandler} value={value}>{title}</button>
  )
}

export default Buttons
