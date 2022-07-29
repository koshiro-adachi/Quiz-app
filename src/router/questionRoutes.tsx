import { Question } from "../pages/Question";
import { Pinpon } from "../pages/Pinpon";
import { Bubu } from "../pages/Bubu";

export const questionRoutes = [
  {
    path: "/",
    exact: true,
    children: <Question />
  },
  {
    path: "/pinpon",
    exact: false,
    children: <Pinpon />
  },
  {
    path: "/bubu",
    exact: false,
    children: <Bubu />
  }
];
