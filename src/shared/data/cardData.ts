import Chair from "../images/chair.png";
import Table from "../images/table.png";
import Books from "../images/books.png";

export const cardData = [
  {
    id: 1,
    group: "card",
    label: "Stol",
    defaultValue: "",
    image: Chair,
    price: "300sek",
    details: "Antik stol från 1800-talet. I fint skick.",
  },
  {
    id: 2,
    group: "card",
    label: "Bord",
    defaultValue: "",
    image: Table,
    price: "800sek",
    details: "Bord med två stolar, aningen slitet skick.",
  },
  {
    id: 3,
    group: "card",
    label: "Böcker",
    defaultValue: "",
    image: Books,
    price: "50sek / styck",
    details: "Gamla böcker, säljes styckvis.",
  },
];
