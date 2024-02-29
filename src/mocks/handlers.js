import { HttpResponse, http } from "msw";

const data = [
  {
    id: 1,
    title: "Bag",
    price: "109.55",
    category: "Accessory",
    description: "",
    image: "",
  },
];

export const handlers = [
  http.get("https://fakestoreapi.com/products", (throwError = false) => {
    return HttpResponse.json({ data });
  }),
];
