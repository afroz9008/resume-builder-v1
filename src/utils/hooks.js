import { useEffect, useState } from "react";

export const useTemplateData = (templateId) => {
  const [state, setState] = useState();

  useEffect(() => {
    let data = {};
    if (templateId === "template-1") {
      data = {
        personalInfo: {
          title: "Personal Info",
          isMuti: true,
          data: [{ firstName: "", lastName: "", image: null, position: "" }],
        },
        about: {
          title: "About Me",
          isMulti: false,
          data: "",
        },
        refrances: {
          title: "Reference",
          isMulti: true,
          data: [{ name: "", mobile: "", adress: "" }],
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
