
import styles from './Button.module.css';

function Button(props) {
   const {isOutLine, icon, text, ...rest } = props;
  return (
    <div>
       <button {...rest} 
       
       className={`${isOutLine ? styles.outline_btn : (text === "Submit" ? styles.submit_btn : styles.primary_btn)}`}>
      {icon}{text}
    </button>
       
    </div>
  )
}

export default Button
