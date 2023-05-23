declare module 'typed.js' {
    interface TypedOptions {
      typeSpeed?: number;
      backSpeed?: number;
      loop?: boolean;
      showCursor?: boolean;
      onComplete?: () => void;
      strings?: string[];
    }
  
    class Typed {
      constructor(element: HTMLElement, options: TypedOptions);
      destroy(): void;
    }
  
    export default Typed;
  }
  