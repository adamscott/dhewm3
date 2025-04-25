import module from "./dhewm3.mjs";

function getCurrentPath() {
  let href = window.location.href;
  if (href.endsWith("/")) {
    return href.slice(0, href.length - 1);
  }
  const lastSlashIndex = href.lastIndexOf("/");
  if (lastSlashIndex > 0) {
    href = href.slice(0, lastSlashIndex);
  }
  return href;
}

/**
 * @param {object} options
 */
export async function start(options) {
  const pk4Files = [
    "game00.pk4",
    "game01.pk4",
    "game02.pk4",
    "game03.pk4",
    "pak000.pk4",
    "pak001.pk4",
    "pak002.pk4",
    "pak003.pk4",
    "pak004.pk4",
    "pak005.pk4",
    "pak006.pk4",
    "pak007.pk4",
    "pak008.pk4",
  ];

  let counter = 0;
  const onJSFileLoad = async (event) => {
    console.log(`${event.target.src} loaded!`);
    event.target.removeEventListener("load", onJSFileLoad);
    counter += 1;

    if (counter >= 13) {
      Object.assign(window.Module, options);
      const engine = await module(window.Module);
      console.log(engine);
    }
  };

  /** @type {string} */
  for (const pk4File of pk4Files) {
    let pk4FileHref = getCurrentPath();
    const jsFile = `${pk4FileHref}/base/${pk4File}.js`;
    const scriptElement = document.createElement("script");
    scriptElement.src = jsFile;
    scriptElement.addEventListener("load", onJSFileLoad);
    document.head.appendChild(scriptElement);
  }
}

start({
  canvas: document.getElementById("dhewm3-screen"),
  locateFile: (path, prefix) => {
    if (path.includes("pk4")) {
      return `${getCurrentPath()}/base/${path}`;
    }
    return prefix + path;
  },
});
