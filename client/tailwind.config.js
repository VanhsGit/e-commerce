/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}'
  ],
  theme: {
    extend: {}
  },
  plugins: [
    // strategy 'class': chỉ áp style khi có class .form-input/.form-select...
    // Mặc định ('base') sẽ đè viền + padding lên mọi <input>, làm hỏng
    // <input matInput> của Angular Material (vốn phải không viền, không nền).
    require('@tailwindcss/forms')({ strategy: 'class' }),
    require('@tailwindcss/typography')
  ]
};
