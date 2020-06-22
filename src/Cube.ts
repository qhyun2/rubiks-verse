import * as THREE from "three";

export class Corner {
    group: THREE.Group;

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

        const qt = Math.PI / 2;
        const size = 1;
        const margin = 0.1;
        const offset = size / 2 + margin;
        this.group = new THREE.Group();
        scene.add(this.group)

        const material = new THREE.MeshStandardMaterial({ color: "blue" });
        material.side = THREE.DoubleSide;

        const shape = new THREE.PlaneBufferGeometry(1, 1);

        this.stickerA = new THREE.Mesh(shape, material);
        this.stickerA.rotation.y = qt
        this.stickerA.position.x = offset;
        this.group.add(this.stickerA)

        this.stickerB = new THREE.Mesh(shape, material);
        this.stickerB.position.z = offset;
        this.stickerB.rotation.x = -Math.PI
        this.group.add(this.stickerB)

        this.stickerC = new THREE.Mesh(shape, material);
        this.stickerC.position.y = offset;
        this.stickerC.rotation.x = qt
        this.group.add(this.stickerC)
    }
}
