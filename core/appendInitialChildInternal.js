import * as THREE from 'three';

import r3rInstanceSymbol from './r3rInstanceSymbol';

export default function appendInitialChildInternal(parentInstance, child) {
  const parentInternalInstance = parentInstance[r3rInstanceSymbol];
  const childInternalInstance = child[r3rInstanceSymbol];

  const parentType = parentInternalInstance.type;
  const childType = childInternalInstance.type;

  switch (parentType) {
    case 'mesh':
      if (child instanceof THREE.Geometry) {
        parentInstance.geometry = child;
      } else if (child instanceof THREE.Material) {
        parentInstance.material = child;
      } else {
        throw new Error('cannot add ' + childType + ' as a child to ' + parentType);
      }
      break;
    case 'scene':
      if (child instanceof THREE.Object3D) {
        parentInstance.add(child);
      } else {
        throw new Error('cannot add ' + childType + ' as a child to ' + parentType);
      }
      break;
    case 'webglRenderer':
      if (!parentInstance.userData) {
        parentInstance.userData = {};
      }

      if (child instanceof THREE.Scene) {
        parentInstance.userData._scene = child;
      } else {
        throw new Error('cannot add ' + childType + ' as a child to ' + parentType);
      }

      break;
    default:
      throw new Error('cannot add ' + childType + ' as a child to ' + parentType);
      break;
  }
}