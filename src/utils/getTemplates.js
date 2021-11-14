import template1 from "../assets/template1.png";
import template2 from "../assets/template2.png";
import template3 from "../assets/template3.png";

const images = { template1, template2, template3 };

export const templates = [...Array(3)].map((_, i) => ({
  image: images["template" + (i + 1)],
  templateId: `template-${i + 1}`,
}));
