import React from 'react'

import styles from './icons.module.css'

const Icons = ({ cN }) => {
    const iconsStorage = [cN, cN, cN, cN]
    return (
        <div className={styles.icons}>
            {iconsStorage.map(apps => <div className={apps}></div>)}
        </div>
    )
}

export default Icons