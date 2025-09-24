"use client";
import styles from "./page.module.css";
import characterModel from "./models/characterModel.json";
import { Field, Form, Formik } from "formik";
import FormField from "./components/form/FormField";

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
            {({ values, errors, handleChange, handleSubmit }) => (
              <Form onSubmit={handleSubmit} className={"border"}>
                <div className={"d-flex gap-3 justify-content-start mb-3"}>
                  <div className={"d-flex flex-column align-self-center border gap-3 p-3"}>
                    <FormField
                      label={"character.name"}
                      name={"character.name"}
                      errors={errors}
                    />
                  </div>
                  <div className={"d-flex flex-column border gap-3 p-3"}>
                    <div className={"d-flex"}>
                      <FormField
                        label={"character.classes[0].name"}
                        name={"character.classes[0].name"}
                        errors={errors}
                      />
                      <FormField
                        label={"character.background"}
                        name={"character.background"}
                        errors={errors}
                      />
                      <FormField
                        label={"character.playerName"}
                        name={"character.playerName"}
                        errors={errors}
                      />
                    </div>
                    <div className={"d-flex"}>
                      <FormField
                        label={"character.race"}
                        name={"character.race"}
                        errors={errors}
                      />
                      <FormField
                        label={"character.alignment"}
                        name={"character.alignment"}
                        errors={errors}
                      />
                      <FormField
                        label={"character.xp"}
                        name={"character.xp"}
                        errors={errors}
                      />
                    </div>
                  </div>
                </div>
                <div className={"d-flex flex-column"}></div>
                <button type="submit" className="btn btn-primary">
                  Save Character
                </button>
              </Form>
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
