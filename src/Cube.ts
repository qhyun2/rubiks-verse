import * as THREE from "three";
import { QT } from "./Constants";

class Piece {
  group: THREE.Group;
  size: number;
  margin: number;
  shape: THREE.PlaneBufferGeometry;
  offset: number;
  material: THREE.MeshStandardMaterial;

  constructor(scene: THREE.Scene, size: number = 1) {
    this.size = size;
    this.margin = 0.05;
    this.offset = size / 2;
    this.group = new THREE.Group();
    scene.add(this.group);

    this.material = new THREE.MeshStandardMaterial({ color: "blue" });
    this.material.side = THREE.DoubleSide;

    const stickerSize = size - this.margin;
    this.shape = new THREE.PlaneBufferGeometry(stickerSize, stickerSize);
  }
}

export class Center extends Piece {
  stickerA: THREE.Mesh;

  constructor(scene: THREE.Scene) {
    super(scene);
    this.stickerA = new THREE.Mesh(this.shape, this.material);
    this.stickerA.position.y = this.offset;
    this.stickerA.rotation.x = QT;
    this.group.add(this.stickerA);
  }
}

export class Corner extends Piece {
  // Stickers on corner:
  //    +--------+
  //   /CCCCCCCC/|
  //  /CCCCCCCC/A|
  // +--------+AA|
  // |BBBBBBBB|AA|
  // |BBBBBBBB|AA+
  // |BBBBBBBB|A/
  // |BBBBBBBB|/
  // +--------+

  stickerA: THREE.Mesh;
  stickerB: THREE.Mesh;
  stickerC: THREE.Mesh;

  constructor(scene: THREE.Scene) {
    super(scene);

    this.stickerA = new THREE.Mesh(this.shape, this.material);
    this.stickerA.rotation.y = QT;
    this.stickerA.position.x = this.offset;
    this.group.add(this.stickerA);

    this.stickerB = new THREE.Mesh(this.shape, this.material);
    this.stickerB.position.z = this.offset;
    this.group.add(this.stickerB);

    this.stickerC = new THREE.Mesh(this.shape, this.material);
    this.stickerC.position.y = this.offset;
    this.stickerC.rotation.x = QT;
    this.group.add(this.stickerC);
  }
}

export class Edge extends Piece {
  // Stickers on edge:
  //    +--------+
  //   /AAAAAAAA/|
  //  /AAAAAAAA/ |
  // +--------+  |
  // |BBBBBBBB|  |
  // |BBBBBBBB|  +
  // |BBBBBBBB| /
  // |BBBBBBBB|/
  // +--------+

  stickerA: THREE.Mesh;
  stickerB: THREE.Mesh;

  constructor(scene: THREE.Scene) {
    super(scene);

    this.stickerA = new THREE.Mesh(this.shape, this.material);
    this.stickerA.rotation.x = QT;
    this.stickerA.position.y = this.offset;
    this.group.add(this.stickerA);

    this.stickerB = new THREE.Mesh(this.shape, this.material);
    this.stickerB.position.z = this.offset;
    this.group.add(this.stickerB);
  }
}
