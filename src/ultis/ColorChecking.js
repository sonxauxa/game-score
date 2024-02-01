export const isColorLight = (color) => {
  // Chuyển đổi màu từ HEX sang RGB
  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  };

  // Tính toán độ sáng trong mô hình RGB
  const calculateBrightness = (rgb) => {
    return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
  };

  // Kiểm tra xem màu có độ sáng lớn hơn 128 hay không (ngưỡng tùy chọn)
  const brightnessThreshold = 140;
  const rgbColor = hexToRgb(color);
  const brightness = calculateBrightness(rgbColor);

  return brightness > brightnessThreshold;
};

export const areColorsSimilar = (color1, color2, threshold = 50) => {
  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  };

  const calculateColorDifference = (rgb1, rgb2) => {
    const deltaR = Math.abs(rgb1.r - rgb2.r);
    const deltaG = Math.abs(rgb1.g - rgb2.g);
    const deltaB = Math.abs(rgb1.b - rgb2.b);
    return deltaR + deltaG + deltaB;
  };

  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);

  const difference = calculateColorDifference(rgb1, rgb2);

  return difference <= threshold;
};

export const increaseColorTone = (color, factor) => {
  const hexToRgb = (hex) => {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
  };

  const rgbToHex = (rgb) => {
    return `#${((1 << 24) | (rgb.r << 16) | (rgb.g << 8) | rgb.b).toString(16).slice(1)}`;
  };

  const rgbColor = hexToRgb(color);

  // Tăng giá trị của các thành phần màu (R, G, B)
  rgbColor.r = Math.min(255, rgbColor.r + factor);
  rgbColor.g = Math.min(255, rgbColor.g + factor);
  rgbColor.b = Math.min(255, rgbColor.b + factor);

  // Chuyển đổi lại thành màu HEX
  return rgbToHex(rgbColor);
};

export const BACKGROUND_GROUP_COLOR = "#ffe082";
