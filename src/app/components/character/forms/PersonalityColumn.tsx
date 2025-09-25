import { Field } from 'formik';
import React from 'react';

export default function PersonalityColumn() {
    return (
      <div className={"d-flex flex-column gap-3"}>
        <div className={"d-flex border align-items-center gap-3 p-2"}>
          <div className={"d-flex flex-column flex-fill px-3"}>
            <Field
              as={"textarea"}
              rows={2}
              className={"form-control"}
              name={"character.personality.personalityTraits"}
            />
            <div className={"d-flex justify-content-center"}>
              <label>Personality Traits</label>
            </div>
          </div>
        </div>
        <div className={"d-flex border align-items-center gap-3 p-2"}>
          <div className={"d-flex flex-column flex-fill px-3"}>
            <Field
              as={"textarea"}
              rows={2}
              className={"form-control"}
              name={"character.personality.ideals"}
            />
            <div className={"d-flex justify-content-center"}>
              <label>Ideals</label>
            </div>
          </div>
        </div>
        <div className={"d-flex border align-items-center gap-3 p-2"}>
          <div className={"d-flex flex-column flex-fill px-3"}>
            <Field
              as={"textarea"}
              rows={2}
              className={"form-control"}
              name={"character.personality.bonds"}
            />
            <div className={"d-flex justify-content-center"}>
              <label>Bonds</label>
            </div>
          </div>
        </div>
        <div className={"d-flex border align-items-center gap-3 p-2"}>
          <div className={"d-flex flex-column flex-fill px-3"}>
            <Field
              as={"textarea"}
              rows={2}
              className={"form-control"}
              name={"character.personality.flaws"}
            />
            <div className={"d-flex justify-content-center"}>
              <label>Flaws</label>
            </div>
          </div>
        </div>
        <div className={"d-flex border align-items-center gap-3 p-2"}>
          <div className={"d-flex flex-column flex-fill px-3"}>
            <Field
              as={"textarea"}
              rows={24}
              className={"form-control"}
              name={"features.featuresAndTraits[0].name"}
            />
            <div className={"d-flex justify-content-center"}>
              <label>Features & Traits</label>
            </div>
          </div>
        </div>
      </div>
    );
}