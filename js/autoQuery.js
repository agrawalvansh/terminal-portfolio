window.addEventListener("load", () => {

  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get("q");

  if (query) {
    if (typeof addLine === "function") {
      addLine("visitor@agrawalvansh.me:~$ ask " + query, "no-animation", 0);
    }

    if (typeof askGemini === "function") {
      askGemini(query).then((answer) => {
        if (typeof addLine === "function") {
          addLine(answer, "color2", 80);
        }
      });
    }
  }
});
