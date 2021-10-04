import styles from '../styles/Home.module.scss'
import { useState } from 'react'
const BlogPost = ({text, id, onDelete, onEdit}) => {

    const [isEdit, setIsEdit] = useState(false)
    const [inputText, setInputText] = useState("")


    const onEditSubmit = (e) => {
        onEdit(e)
        setIsEdit(false);
    }

    const onEditOpen = () =>{
        setIsEdit(true);
        setInputText(text);
    }

    return(
        <div className={styles.card} >
            {!isEdit && (
                
                <div className={styles.flexcol}>
                    <div>{text}</div>
                    <div>
                        <button className={`${styles.button} ${styles.red}`} onClick={()=>onDelete(id)} >
                            Delete
                        </button>
                        <button className={`${styles.button} ${styles.grey}`} onClick={()=>onEditOpen()} >
                            Edit
                        </button>
                    </div>
                </div>

            )}
            {isEdit && (
                <form onSubmit={onEditSubmit} id={id}>
                    <div className={styles.flexcol}>
                        <input name="editName" value={inputText} onChange={(e) => setInputText(e.target.value)} className={styles.fullinput} placeholder="ex. Fix the printer... please ;-;"/>
                        <div>
                            <button className={`${styles.button} ${styles.blue}`} type="submit" >
                                Save
                            </button>
                            <button className={`${styles.button} ${styles.grey}`} onClick={()=>setIsEdit(false)} >
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            )}



        </div>
    )
}



export default BlogPost