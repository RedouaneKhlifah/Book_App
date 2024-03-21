// images.d.ts

declare module '*.png' {
    const value: any;
    export default value;
  }
  
  declare module '*.svg' {
    import { ReactNode } from 'react';
    const content: ReactNode;
    export default content;
  }
  
  declare module '*.jpg' {
    const value: any;
    export default value;
  }
  