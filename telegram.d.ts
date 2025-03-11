export {};

declare global {
  interface Window {
    Telegram: {
      WebApp: {
        showAlert: (message: string) => void;
      };
    };
  }
}
