import React from 'react'
import styles from './IssueCard.module.css'
import { useLocation, useNavigate } from 'react-router-dom'
export default function IssueCard({ data }) {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const navigate = useNavigate()
    const volume = +queryParams.get('v');
    if (isNaN(volume) || volume <= 0) {
        navigate('*');
    }
 
    const date = `${data.date.day < 10 ? '0' + data.date.day : data.date.day}-${data.date.month < 10 ? '0' + data.date.month : data.date.month}-${data.date.year}`
    return (
        <div className={`${styles.wrapper} ${styles.card}`}
        onClick={()=> navigate(`/issue?v=${data.volume}&i=${data.identifier}`)}
        >
            <div className={styles.title}>{data.text}</div>
            <div className={styles.imageWrapper}>
                <img src={`${process.env.PUBLIC_SERVER}/${data.img}`} alt={data.text} />
            </div>
            <div className={styles.dates}>
                <div >{date}</div>
                <a href={data.linkToPdf !== '' ? data.linkToPdf : 'javascript:void(0)'}>Download</a>
            </div>
        </div>
    )
}
