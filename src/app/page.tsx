"use client";
import styles from "./page.module.css";
import characterModel from "./models/characterModel.json";
import { Field, Formik } from "formik";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Create your character</h1>
        <div
          className={
            "d-flex flex-column justify-content-around align-items-center"
          }
        >
          <Formik
            initialValues={characterModel}
            onSubmit={(values, actions) => {
              console.log("Character data:", values);
              // Handle form submission here
              actions.setSubmitting(false);
            }}
          >
            {({ values, handleChange, handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <div className={"d-flex"}>
                  <label htmlFor={"character.name"}>Character Name: </label>
                  <Field type={"text"} name={"character.name"} id={"character.name"} className="form-control"/>
                </div>

                <button type="submit" className="btn btn-primary">
                  Save Character
                </button>
              </form>
            )}
          </Formik>
        </div>
      </main>
      <footer className={styles.footer}>
        Carbon Copy Character Sheets - Built by Element Marketing LLC.
      </footer>
    </div>
  );
}
