import todoLogo from "../assets/direct-hit.png";
import doneLogo from "../assets/check-mark-button.png";
import inProgressLogo from "../assets/glowing-star.png";

export const STATUS = [
  {
    heading: "Todo",
    logo: todoLogo,
  },
  {
    heading: "In Progress",
    logo: inProgressLogo,
  },
  {
    heading: "Done",
    logo: doneLogo,
  },
];

export const TAGS = ["Home","Office","Personal","Learning"]
export const STATUSOPTION = [
  {
    value: "Todo",
    class: "todo",
  },
  {
    value: "In Progress",
    class: "inProgress",
  },
  {
    value: "Done",
    class: "Done",
  },
];