declare module 'emoji-mart' {
  import { ReactNode } from 'react';

  interface PickerProps {
    // Define the props you're using in your component
    color?: string;
    title?: string;
    emoji?: string;
    onSelect?: (emoji: any) => void; // Adjust the type of the 'emoji' parameter
  }

  export class Picker extends React.Component<PickerProps> {}

  // Export other components if needed
}
