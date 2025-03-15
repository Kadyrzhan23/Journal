import React from 'react'
import styles from './Volumes.module.css'
import { useNavigate } from 'react-router-dom'
export default function Volumes({ data }) {
    const navigate = useNavigate()
    return (
        <div className={styles.card}
        onClick={()=> navigate(`/volume?v=${data.identifier}`)}
        >
            <div className={styles.cardContent}>
                {/* <h2 className={styles.productName}>{name}</h2> */}
                <p className={styles.releaseDate}>Выпуск: {data.year}</p>
            </div>
        </div>
    )
}
