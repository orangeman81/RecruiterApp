export default class Logger {
  static log(text: string, value: unknown) {
    return console.log(
      `%c${text}: ${value}`,
      "color: #8bc34a; background-color: #424242; padding: 8px 16px; margin:8px; border-radius: 24px;font-size: 16px;font-weight: bold"
    );
  }

  static warn(text: string, value: unknown) {
    return console.log(
      `%c${text}: ${value}`,
      "color: #f44336; border: solid 2px #f44336; padding: 8px 16px; margin:8px; border-radius: 24px;font-size: 16px;font-weight: bold"
    );
  }

  static info(text: string, values: any[]) {
    return console.log(
      `%c${text}`,
      "color: #ff9800; background-color: #424242; padding: 8px 16px; margin:8px; border-radius: 24px;font-size: 16px;font-weight: bold",
      "\n",
      ...values
    );
  }
}
