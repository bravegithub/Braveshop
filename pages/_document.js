import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        <script src="https://cdn.tailwindcss.com"></script>
          <link href="https://fonts.googleapis.com/css?family=Work+Sans:200,400&display=swap" rel="stylesheet"/>
          <link rel="stylesheet" href="https://horizon-tailwind-react-corporate-7s21b54hb-horizon-ui.vercel.app/static/css/main.d7f96858.css" />
          <style>{`
            .work-sans {
              font-family: 'Work Sans', sans-serif;
            }

            #menu-toggle:checked + #menu {
              display: block;
            }

            .hover\:grow {
              transition: all 0.3s;
              transform: scale(1);
            }

            .hover\:grow:hover {
              transform: scale(1.02);
            }

            .carousel-open:checked + .carousel-item {
              position: static;
              opacity: 100;
            }

            .carousel-item {
              -webkit-transition: opacity 0.6s ease-out;
              transition: opacity 0.6s ease-out;
            }

            #carousel-1:checked ~ .control-1,
            #carousel-2:checked ~ .control-2,
            #carousel-3:checked ~ .control-3 {
              display: block;
            }

            .carousel-indicators {
              list-style: none;
              margin: 0;
              padding: 0;
              position: absolute;
              bottom: 2%;
              left: 0;
              right: 0;
              text-align: center;
              z-index: 10;
            }

            #carousel-1:checked ~ .control-1 ~ .carousel-indicators li:nth-child(1) .carousel-bullet,
            #carousel-2:checked ~ .control-2 ~ .carousel-indicators li:nth-child(2) .carousel-bullet,
            #carousel-3:checked ~ .control-3 ~ .carousel-indicators li:nth-child(3) .carousel-bullet {
              color: #000;
              /* Défini pour correspondre à la couleur Tailwind que vous souhaitez que la couleur active soit */
            }
           
            @import url(https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css)
            .form-radio {
              -webkit-appearance: none;
                 -moz-appearance: none;
                      appearance: none;
              -webkit-print-color-adjust: exact;
                      color-adjust: exact;
              display: inline-block;
              vertical-align: middle;
              background-origin: border-box;
              -webkit-user-select: none;
                 -moz-user-select: none;
                  -ms-user-select: none;
                      user-select: none;
              flex-shrink: 0;
              border-radius: 100%;
              border-width: 2px;
            }
            
            .form-radio:checked {
              background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
              border-color: transparent;
              background-color: currentColor;
              background-size: 100% 100%;
              background-position: center;
              background-repeat: no-repeat;
            }
            
            @media not print {
              .form-radio::-ms-check {
                border-width: 1px;
                color: transparent;
                background: inherit;
                border-color: inherit;
                border-radius: inherit;
              }
            }
            
            .form-radio:focus {
              outline: none;
            }
            
            .form-select {
              background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a0aec0'%3e%3cpath d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/%3e%3c/svg%3e");
              -webkit-appearance: none;
                 -moz-appearance: none;
                      appearance: none;
              -webkit-print-color-adjust: exact;
                      color-adjust: exact;
              background-repeat: no-repeat;
              padding-top: 0.5rem;
              padding-right: 2.5rem;
              padding-bottom: 0.5rem;
              padding-left: 0.75rem;
              font-size: 1rem;
              line-height: 1.5;
              background-position: right 0.5rem center;
              background-size: 1.5em 1.5em;
            }
            
            .form-select::-ms-expand {
              color: #a0aec0;
              border: none;
            }
            
            @media not print {
              .form-select::-ms-expand {
                display: none;
              }
            }
            
            @media print and (-ms-high-contrast: active), print and (-ms-high-contrast: none) {
              .form-select {
                padding-right: 0.75rem;
              }
            }


            @layer utilities {
              input[type="number"]::-webkit-inner-spin-button,
              input[type="number"]::-webkit-outer-spin-button {
                -webkit-appearance: none;
                margin: 0;
              }
            }

            <style>
  .login_img_section {
  background: linear-gradient(rgba(2,2,2,.7),rgba(0,0,0,.7)),url(https://images.unsplash.com/photo-1650825556125-060e52d40bd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) center center;
}
</style>
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
