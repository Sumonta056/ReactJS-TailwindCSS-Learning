
![Alt text](image.png)


# React + Vite Setup

```
    npm create vite@latest
```
```
    cd UseEffect_useCallback_useRef_useState
```
```
    npm install
```
```
    npm run dev
```


## Tailwind CSS Setup ( [Resource Link](https://tailwindcss.com/docs/guides/vite#react) )
  

```
    npm install -D tailwindcss postcss autoprefixer
```
```
    npx tailwindcss init -p
```


  

##### Paste it in tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```


##### Paste it into Root Css


```
@tailwind base;
@tailwind components;
@tailwind utilities;
```