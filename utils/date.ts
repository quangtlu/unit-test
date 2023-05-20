export class DateUtils {
  formatDate(date: Date, format: string): string {
    const FORMATS = ["yyyy/mm/dd", "yyyy/mm/dd hh:mm:ss", "yyyy年mm月dd日"];
    if (!FORMATS.includes(format)) {
      throw new Error("FormatInvalidException");
    }
    const { year, month, day, hour, minutes, seconds } =
      this.getDetailDate(date);

    switch (format) {
      case "yyyy/mm/dd":
        return `${year}/${month}/${day}`;
      case "yyyy/mm/dd hh:mm:ss":
        return `${year}/${month}/${day} ${hour}:${minutes}:${seconds}`;
      case "yyyy年mm月dd日":
        return `${year}年${month}月${day}日`;
      default:
        return ``;
    }
  }

  getDetailDate(date: Date) {
    return {
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
      hour: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
    };
  }
}
