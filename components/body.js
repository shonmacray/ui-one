import React from 'react'
import styles from "./body.module.css"

export default function Body() {
    return (
        <div className={styles.body}>
            <div className="container-fluid">
                <div className="d-flex pl-5 pr-2 pt-5">
                    <div className="w-25 pl-3">My Cards <i className="fas fa-edit"/> </div>
                    <div className="w-25 pl-3">Send Money</div>
                    <div className="w-50 pl-3">All Transcations</div>
                </div>
            </div>
        </div>
    )
}
