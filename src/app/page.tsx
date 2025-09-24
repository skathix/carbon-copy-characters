"use client";
import { Formik } from "formik";

import styles from "./page.module.css";
import CharacterFormik from "./components/character/forms/CharacterFormik";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <CharacterFormik />
      </main>
      <footer className={styles.footer}>
        Carbon Copy Character Sheets - Built by Element Marketing LLC.
      </footer>
    </div>
  );
}
