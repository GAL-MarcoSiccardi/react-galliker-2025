import { createProxyMiddleware } from "http-proxy-middleware";

const REQUEST_DELAY = 0;
const RESPONSE_DELAY = 1500;

export default function setupProxy(expressApp) {
  expressApp.use(
    "/swapi",
    proxyDelay,
    createProxyMiddleware({
      target: "https://swapi.dev/",
      changeOrigin: true,
      logLevel: "debug",
      pathRewrite: {
        "^/swapi": "/api",
      },
      onProxyReq: (proxyReq, req, res) => {
        console.log("onProxyReq", req.url);
      },
    })
  );

  function proxyDelay(req, res, next) {
    console.log("proxyDelay", req.url);
    // if (req.url === "/people/1") {
    console.log("delaying request");
    setTimeout(next, REQUEST_DELAY); // Delay request

    // Delay response completion
    const endOriginal = res.end;
    res.end = function (...args) {
      setTimeout(function () {
        endOriginal.apply(res, args);
      }, RESPONSE_DELAY);
    };
    // } else {
    //   next();
    // }
  }
}
