import template1 from "../assets/template1.png";
import template2 from "../assets/template2.png";
import template3 from "../assets/template3.png";

const images = { template1, template2, template3 };

export const templates = [...Array(10)].map((_, i) => ({
  image: images["template" + (Math.floor(Math.random() * 3) + 1)],
  templateId: `template-${i + 1}`,
}));
