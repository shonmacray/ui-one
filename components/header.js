import React from 'react'
import styles from "./header.module.css"

export default function Header() {
    return (
        <div className={styles.header}>
             <div className="container-fluid">
                <h1>Loook</h1>
            </div>
        </div>
    )
}
