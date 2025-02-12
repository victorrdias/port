import { Object3DNode } from "@react-three/fiber";
import { AmbientLight, PointLight, Color, MeshStandardMaterial } from "three";

declare module "@react-three/fiber" {
  interface ThreeElements {
    ambientLight: Object3DNode<AmbientLight, typeof AmbientLight>;
    pointLight: Object3DNode<PointLight, typeof PointLight>;
    color: Object3DNode<Color, typeof Color>;
    meshStandardMaterial: Object3DNode<
      MeshStandardMaterial,
      typeof MeshStandardMaterial
    >;
  }
}
