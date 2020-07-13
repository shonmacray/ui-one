import React from 'react'
import styles from "./header.module.css"

export default function Header() {
    return (
        <div className={styles.header}>
             <div className="container-fluid h-100">
                <div className="d-flex align-items-center h-100">
                    <div className={` ${styles.one}`}>
                        <img src="/logo.png" alt="ks"/>
                    </div>
                    <div className={`l1 d-flex justify-content-around ${styles.two}`}>
                        <span>Accounts</span>
                        <span>Paybill</span>
                        <span>Transfer</span>
                        <span>Reward</span>
                    </div>
                    <div className={`pl-3 pr-3 l2 d-flex justify-content-around ${styles.three}`}>
                        <span>Bank of America Corp <span className="ml-2 text-danger">26.55 <span className="co"/></span></span>
                        <span>Apple Inc <span className="ml-2 text-success">26.55 <span className="co"/></span></span>
                        <span>Nike<span className="ml-2 text-success">1.77 <span className="co"/></span></span>
                        <span>Starbucks<span className="ml-2 text-danger">0.11 <span className="co"/></span></span>
                    </div>
                    <div className={` ${styles.four}`}>
                        
                     
                    </div>
                </div>
            </div>
        </div>
    )
}
