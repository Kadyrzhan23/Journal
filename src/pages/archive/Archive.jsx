import React from "react";
import styles from "./Archive.module.css";
import { useNavigate } from "react-router-dom";
export default function Archive() {
    const navigate = useNavigate()
  const items = [
    {
      date: "06-12-2024",
      volume: 1,
      issue: 1,
      month: "December",
      year: 2024,
    },
  ];
  return (
    <div>
      <h1>Архивы</h1>

      <div className={styles.archivesWrapper}>
        {items.map((item) => {
          return (
            <div className={styles.monthArchivewrapper}
            onClick={()=> navigate('/articles')}>
              <div>Date : {item.month + "  " + item.year}</div>
              <div>Volume : {item.volume}</div>
              <div>Issue : {item.issue}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const itemHtml = (data) => {
  return (
    <div>
      <div>Volume = {data.volume}</div>
      <div>Issue = {data.issue}</div>
      <div>Date = {data.month + "  " + date.year}</div>
    </div>
  );
};
