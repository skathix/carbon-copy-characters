import { Formik } from "formik";
import styles from "../../../page.module.css"
import characterModel from "../../../models/characterModel.json";
import CharacterForm from "./CharacterForm";

export default function CharacterFormik() {
    return (
        <>
        <h1 className={styles.title}>Create your character</h1>
        <div
            className={"d-flex flex-column justify-content-around align-items-center"}
        >
            <Formik
                initialValues={characterModel}
                onSubmit={(values, actions) => {
                    console.log("Character data:", values);
                    // Handle form submission here
                    actions.setSubmitting(false);
                } }
            >
                {({ }) => (
                    <CharacterForm />
                )}
            </Formik>
        </div></>
    )
}