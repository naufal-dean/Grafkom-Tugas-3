import Node from "../../node";
import DrawMode from "../../../util/drawMode";
import { mat4 } from "../../../util/matrix";
import { buildCubePoints } from "../../utils/cubePoints";

class Head extends Node {
  constructor() {
    super();
    this.setupPoints();
    this.setTransformation("translate", [0, 0.1, 0.35]);
    this.setTransformation("scale", [0.75, 0.75, 0.25]);
  }

  public setupPoints() {
    this.normals = [];
    this.points = buildCubePoints(this.normals);
  }

  public render(baseTransformMatrix: number[] = mat4.identity()) {
    this.applyMaterialProperties();
    this.applyPosition();
    this.applyNormal();
    this._transformMatrixChangedCallback!(baseTransformMatrix);

    // render each rectangle separately
    for (let i = 0; i < Math.floor(this.points.length / (this.dimension * 4)); i++) {
      this.draw(DrawMode.TRIANGLE_FAN, 4 * i, 4);
    }
  }
}

export default Head;