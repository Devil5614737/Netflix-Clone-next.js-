module.exports = {
  "editor.quickSuggestions": {
    strings: true,
  },
  "files.associations": {
    "*.css": "tailwindcss",
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#1fb6ff",
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
        gray2: "#5d5d5d",
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/8459cea4-79ab-4f27-9ef0-a7c92a30a9bb/6defa446-a465-465d-9975-d2ec35582ebe/IN-en-20220411-popsignuptwoweeks-perspective_alpha_website_small.jpg')",
        "login-background":
          "url('https://assets.nflxext.com/ffe/siteui/vlv3/8459cea4-79ab-4f27-9ef0-a7c92a30a9bb/6defa446-a465-465d-9975-d2ec35582ebe/IN-en-20220411-popsignuptwoweeks-perspective_alpha_website_small.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
        nav: "linear-gradient(to bottom,rgba(0,0,0,.7) 10%,rgba(0,0,0,0))",
        hero: "linear-gradient(77deg,rgba(0, 0, 0, 0.6) 0,rgba(0, 0, 0, 0) 85%)",
        home: "linear-gradient(to top, rgba(0, 0, 0, 0.9) 0px, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.9) 100%)",
      },
      backgroundColor: {
        transparent: "rgba(255, 255, 255, .25)",
        netflix: "#e50914",
        cardBg: "rgba(0,0,0,.75)",
        input: "#333333",
        inputFocus: "#464545",
        "login-overlay": "rgba(0,0,0,.7)",
        hr: "#222222",
        btn: "#505152",
        bar: "#303030",
        lg: "rgba(1,1,1,.7)",
      },
      height: {
        xs: "100vh",
        sm: "70px",
        full: "100%",
        card: "400px",
        h: "150px",
      },
      width: {
        xs: "100vw",
        full: "100%",
        input: "53rem",
        xxl: "300px",
        logo: "95px",
        card: "400px",
        w: "150px",
        bw: "800px",
        fw: "71%",
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        tiny: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
      textAlign: {
        "text-center": "center",
      },
      translateX: {
        slide: "100%",
      },
      borderRadius: {
        curve: "5px",
      },
      margin: {
        "margin-top": "-20px",
        mtop: "-191px",
        mt: "14rem",
      },
      zIndex: {
        index: "9999",
        index2: "999911",
      },
      maxWidth: {
        mw: "514px",
        xsm: "68%",
        ms: "47rem",
        msw: "60%",
      },
      color: {
        netflix: "#e50914",
      },
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      lineHeight: {
        xl: "1.1",
      },
      media: {
        "max-w-sm": "24rem",
        "max-w-full": "100%",
        "max-w-min": "min-content",
        "max-w-max": "max-content",
        "max-w-fit": "fit-content",
        "max-w-prose": "65ch",
        "max-w-screen-sm": "640px",
        "max-w-screen-md": "768px",
        "max-w-screen-lg": "1024px",
        "max-w-screen-xl": "1280px",
        "max-w-screen-2xl": "1536px",
      },
      padding: {
        sm: "4%",
      },
      invert: {
        i: "-1",
      },
      top:{
        t:'-50%'
      },
      left:{
        l:'-50%'
      }
    },
  },
  plugins: [],
};
