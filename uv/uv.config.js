// This file overwrites the stock UV config.js

self.__uv$config = {
  prefix: "/hyperviolet-french-server/uv/service/",
  bare: "https://x3hddv-8080.csb.app/",
  encodeUrl: Ultraviolet.codec.xor.encode,
  decodeUrl: Ultraviolet.codec.xor.decode,
  handler: "/hyperviolet/uv/uv.handler.js",
  client: "/hyperviolet/uv/uv.client.js",
  bundle: "/hyperviolet/uv/uv.bundle.js",
  config: "/hyperviolet/uv/uv.config.js",
  sw: "/hyperviolet/uv/uv.sw.js",
};
