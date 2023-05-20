import { DateUtils } from "./utils/date";

describe("Test formatDate method", () => {
  const dateUtil = new DateUtils();
  const dateTest = new Date();
  const { year, month, day, hour, minutes, seconds } =
    dateUtil.getDetailDate(dateTest);
  test("invalid format", () => {
    expect(() => dateUtil.formatDate(dateTest, "DD/MM/YYYY")).toThrow(
      "FormatInvalidException"
    );
  });
  test("format: yyyy/mm/dd", () => {
    expect(dateUtil.formatDate(dateTest, "yyyy/mm/dd")).toBe(
      `${year}/${month}/${day}`
    );
  });
  test("format: yyyy/mm/dd hh:mm:ss", () => {
    expect(dateUtil.formatDate(dateTest, "yyyy/mm/dd hh:mm:ss")).toBe(
      `${year}/${month}/${day} ${hour}:${minutes}:${seconds}`
    );
  });
  test("format: yyyy年mm月dd日", () => {
    expect(dateUtil.formatDate(dateTest, "yyyy年mm月dd日")).toBe(
      `${year}年${month}月${day}日`
    );
  });
});
