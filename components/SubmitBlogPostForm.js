import styles from '../styles/Home.module.scss'
import React from 'react';

const SubmitBlogPostForm = ({ onSubmit }) => {
    return(
        <form className={styles.fullform} onSubmit={onSubmit}>
            <div className={styles.flexcol}>
                <label>Post Blog</label>
                <input name="text" className={styles.fullinput} placeholder="ex. Fix the printer... please ;-;"/>
            </div>
            <button className={styles.fullbutton} type="submit">
                Submit
            </button>
        </form>
    )
}

export default SubmitBlogPostForm;