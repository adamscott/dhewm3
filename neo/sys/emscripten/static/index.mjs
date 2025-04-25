import module from "./dhewm3.mjs";

/**
 * @param {object} options
 */
export async function start(options) {
  const engine = await module({
    ...options,
  });
  console.log(engine);
}

start({
  canvas: document.getElementById("dhewm3-screen"),
});
