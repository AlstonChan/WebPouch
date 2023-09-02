# Documentation

## Important theme setup

```javascript
breakpoints: {
    values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
    },
},
palette: {
    mode: "dark",
    primary: {
        main: "#001524",
    },
    secondary: {
        main: "#15616D",
    },
    background: {
        default: "#001524",
    },
    grey: {
        50: "#fafafa"
        100: "#f5f5f5"
        200: "#eeeeee"
        300: "#e0e0e0"
        400: "#bdbdbd"
        500: "#9e9e9e"
        600: "#757575"
        700: "#616161"
        800: "#424242"
        900: "#212121"
        A100: "#f5f5f5"
        A200: "#eeeeee"
        A400: "#bdbdbd"
        A700: "#616161"
    }
},
```

## Production Tina Cloud `/admin` login no response

**Behaviour :** When the application is hosted on Vercel, navigating to `/admin` to log in to the dashboard has some bug. The pop up windows that will authenticate user will not close by it's own and shows _logging in_ forever. A lot of CORS error will be shown in the console at `/admin` and the scripts relating to the Tina Cloud with address `https://identity.tinajs.io` will be 401 unauthorized.

**Problem :** `vercel.json` has set a header `Cross-Origin-Opener-Policy` set to `same-origin`

**Fix :** remove header `Cross-Origin-Opener-Policy` field in `vercel.json`

**Discord Support :** Tina Cloud [Discord](https://discord.com/invite/zumN63Ybpf) channel **#help** with title _`Tina Cloud Authorization no respond`_
