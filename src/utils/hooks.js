import { useEffect, useState } from "react";

export const useTemplateData = (templateId) => {
  const [state, setState] = useState();

  useEffect(() => {
    let data = {};
    if (templateId === "template-1") {
      data = {
        personalInfo: {
          title: "Personal Info",
          isMulti: false,
          data: [
            { lable: "First Name", value: "", type: "string" },
            { lable: "Last Name", value: "", type: "string" },
            { image: null, type: "file" },
            { lable: "Position", value: "", type: "string" },
          ],
        },
        about: {
          title: "About Me",
          isMulti: false,
          data: [{ lable: "About", value: "", type: "richText" }],
        },
        refrances: {
          title: "Reference",
          isMulti: true,
          data: [
            [
              { lable: "Name", value: "", type: "string" },
              { lable: "Mobile", value: "", type: "mobile" },
              { lable: "Adress", value: "", type: "richText" },
            ],
          ],
        },
      };
    }
    setState(
      Object.keys(data).reduce(
        (prev, key) => [...prev, { key, [key]: data[key] }],
        []
      )
    );
  }, [templateId]);

  return state;
};
