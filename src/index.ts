import App from "./app";
import Scene from "./scene";
import TriangularPrism from "./object/triangularPrism";
import Test from "./object/test";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;

const scene = new Scene(canvas);
// scene.add(new TriangularPrism());
scene.add(Test.build());

const app = new App(scene);

// Pick hollow object buttons event handler
// const prismBtn = document.getElementById("prism") as HTMLElement;
// prismBtn.addEventListener("click", () => {
//   app.resetAll();
//   app.setShape(initShape("prism"));
// });

// const cubeBtn = document.getElementById("cube") as HTMLElement;
// cubeBtn.addEventListener("click", () => {
//   app.resetAll();
//   app.setShape(initShape("cube"));
// });

// const blockBtn = document.getElementById("block") as HTMLElement;
// blockBtn.addEventListener("click", () => {
//   app.resetAll();
//   app.setShape(initShape("block"));
// });

// Perspective buttons event handler
const orthographicBtn = document.getElementById("orthographic") as HTMLElement;
orthographicBtn.addEventListener("click", () => {
  app.setSceneProjection("orthographic");
});

const obliqueBtn = document.getElementById("oblique") as HTMLElement;
obliqueBtn.addEventListener("click", () => {
  app.setSceneProjection("oblique");
});

const perspectiveBtn = document.getElementById("perspective") as HTMLElement;
perspectiveBtn.addEventListener("click", () => {
  app.setSceneProjection("perspective");
});

// Toggle shading event handler
const shadingToggle = document.getElementById("shading") as HTMLInputElement;
shadingToggle.addEventListener("change", () => {
  app.toggleShading(shadingToggle.checked);
});

app.start();

// // function for debugging block / cube as well
// function initShape(shapeName: ShapeType): Shape {
//   let obj: Shape;
//   switch (shapeName) {
//     case "prism":
//       obj = new TriangularPrism(canvas);
//       break;
//   }
//   const shadingElmt = document.getElementById("shading") as HTMLInputElement;
//   obj.setUseShading(shadingElmt.checked);
//   return obj;
// }
//
// // Init default shapes
// // change this to prism later
// const defaultObj = initShape("prism");
//
// // Init app
// const app = new App();
// app.setShape(defaultObj);
//
// // Pick hollow object buttons event handler
// const prismBtn = document.getElementById("prism") as HTMLElement;
// prismBtn.addEventListener("click", () => {
//   app.resetAll();
//   app.setShape(initShape("prism"));
// });
//
// const cubeBtn = document.getElementById("cube") as HTMLElement;
// cubeBtn.addEventListener("click", () => {
//   app.resetAll();
//   app.setShape(initShape("cube"));
// });
//
// const blockBtn = document.getElementById("block") as HTMLElement;
// blockBtn.addEventListener("click", () => {
//   app.resetAll();
//   app.setShape(initShape("block"));
// });
//
// // Perspective buttons event handler
// const orthographicBtn = document.getElementById("orthographic") as HTMLElement;
// orthographicBtn.addEventListener("click", () => {
//   app.setShapeProjection("orthographic");
// });
//
// const obliqueBtn = document.getElementById("oblique") as HTMLElement;
// obliqueBtn.addEventListener("click", () => {
//   app.setShapeProjection("oblique");
// });
//
// const perspectiveBtn = document.getElementById("perspective") as HTMLElement;
// perspectiveBtn.addEventListener("click", () => {
//   app.setShapeProjection("perspective");
// });
//
// // Reset button event handler
// const resetBtn = document.getElementById("reset") as HTMLElement;
// resetBtn.addEventListener("click", () => {
//   app.resetShape();
// });
//
// const camResetBtn = document.getElementById("cam-reset") as HTMLElement;
// camResetBtn.addEventListener("click", () => {
//   app.resetCamera();
// });
//
// const shadingToggle = document.getElementById("shading") as HTMLInputElement;
// shadingToggle.addEventListener("change", () => {
//   app.toggleShading(shadingToggle.checked);
// });
// // Start app
// app.start();
