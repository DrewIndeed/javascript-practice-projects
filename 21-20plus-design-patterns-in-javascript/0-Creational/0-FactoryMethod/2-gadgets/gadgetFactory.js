import { Laptop } from "./Laptop.js";
import { Tablet } from "./Tablet.js";

const gadget = { Laptop, Tablet };

export const gadgetFactory = {
  createGadget(type, attributes) {
    const GadgetType = gadget[type];

    return new GadgetType(attributes);
  },
};
