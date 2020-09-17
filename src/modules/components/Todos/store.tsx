import uniqid from "uniqid";
const store = {
  counter: 3,
  items: [
    {
      id: uniqid(),
      title: "course",
      content: "eau, pain et lait faire un drive",
      isCompleted: true,
    },
    {
      id: uniqid(),
      title: "test-technique",
      content: "appli react TS a realiser",
      isCompleted: false,
    },
    {
      id: uniqid(),
      title: "jardin",
      content: "arracher les herbes, ceuillir les dernière tomates",
      isCompleted: false,
    },
  ],
};
export default store;
