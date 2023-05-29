import { convertToLCD } from "../src/kata-number-to-lcd/convert";

describe("Test Kata NumberToLCD", () => {
  it("should return LCD of 0 when input is 0", () => {
    expect(convertToLCD(0)).toStrictEqual([
      " _ ",
      "| |",
      "|_|",
    ]);
  });
  it("should return LCD of 1 when input is 1", () => {
    expect(convertToLCD(1)).toStrictEqual([
      "   ",
      "  |",
      "  |",
    ]);
  });
  it("should return LCD of 123 when input is 123", () => {
    expect(convertToLCD(123)).toStrictEqual([
      "   ",
      "  |",
      "  |",
      " _ ",
      " _|",
      "|_ ",
      " _ ",
      " _|",
      " _|",
    ]);
  });
  it("should return LCD of 8912634570 when input is 8912634570", () => {
    expect(convertToLCD(8912634570)).toStrictEqual([
      " _ ",
      "|_|",
      "|_|",
      " _ ",
      "|_|",
      " _|",
      "   ",
      "  |",
      "  |",
      " _ ",
      " _|",
      "|_ ",
      " _ ",
      "|_ ",
      "|_|",
      " _ ",
      " _|",
      " _|",
      "   ",
      "|_|",
      "  |",
      " _ ",
      "|_ ",
      " _|",
      " _ ",
      "  |",
      "  |",
      " _ ",
      "| |",
      "|_|",
    ]);
  });
  fit("should return LCD of 2 with width: 3 and height: 2", () => {
    expect(convertToLCD(2, 3, 2)).toStrictEqual([
      "___",
      "   |",
      "___|",
      "|   ",
      "|___",
    ])
  })
});
