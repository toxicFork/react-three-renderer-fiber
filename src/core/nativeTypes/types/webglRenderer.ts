import * as THREE from "three";
import {Scene, WebGLRenderer, WebGLRendererParameters} from "three";
import {ReactThreeRendererDescriptor} from "../common/ReactThreeRendererDescriptor";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      webglRenderer: IReactThreeRendererElement<THREE.WebGLRenderer> & IWebGLRendererProps;
    }
  }
}

interface IWebGLRendererProps extends WebGLRendererParameters {
  width: number;
  height: number;
}

class WebGLRendererDescriptor extends ReactThreeRendererDescriptor<IWebGLRendererProps,
  WebGLRenderer,
  HTMLCanvasElement,
  Scene> {

  public createInstance(props: IWebGLRendererProps, rootContainerInstance: HTMLCanvasElement): WebGLRenderer {
    return new WebGLRenderer({
      canvas: rootContainerInstance,
    });
  }

  public applyInitialPropUpdates(instance: WebGLRenderer, props: IWebGLRendererProps): void {
    const {
      width,
      height,
    } = props;

    instance.setSize(width, height);
  }

  public willBeRemovedFromParent(instance: WebGLRenderer, parent: HTMLCanvasElement): void {
    console.log("renderer will be removed...");
    // super.removedFromParent(parent);
  }

  public appendInitialChild(instance: WebGLRenderer, child: Scene): void {
    // if (!instance.userData) {
    //   instance.userData = {};
    // }
    //
    // if (child instanceof Scene) {
    //   instance.userData._scene = child;
    // } else {
    //   throw new Error('cannot add ' + childType + ' as a childInstance to ' + parentType);
    // }
    // super.appendInitialChild(instance, child);
  }

  public appendToContainer(instance: WebGLRenderer, container: HTMLCanvasElement): void {
    // super.appendToContainer(instance, container);
    console.log("party!");
  }
}

export default new WebGLRendererDescriptor();