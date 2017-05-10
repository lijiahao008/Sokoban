function startListen() {
  sr = new webkitSpeechRecognition();
  sr.onresult = evt => (listenCallback(evt.results[0][0].transcript));
  sr.start();
  return sr;
}

function listenCallback(result) {
  processResult(result);
}

function continuousListen() {
  csr = new webkitSpeechRecognition();
  csr.continuous = true;
  csr.onresult = evt => (continuouslistenCallback(evt.results[evt.results.length - 1][0].transcript));
  csr.start();
}

function continuouslistenCallback(result) {
  processResult(result);
  if (result.split(" ").includes("stop")) {
    csr.stop();
  }
}

function processResult(result) {
  document.getElementById("command").innerHTML = result;
  result_array = result.split(" ");
  if (result_array.includes("start") || result_array.includes("restart")) {
    document.getElementById("start-button").click();
  }
  if (result_array.includes("next") && result_array.includes("level")) {
    document.getElementById("next-level").click();
  }
  directions = result_array.filter((word) => (word === "up" || word === "down" || word === "right" || word === "left"))
  directions.forEach((direction) => {
    if (direction === "up") {
      direction = 1;
      move_player(0,-1);
    }
    else if (direction === "down") {
      direction = 4;
      move_player(0,1);
    }
    else if (direction === "right") {
      direction = 3;
      move_player(1,0);
    }
    else if (direction === "left") {
      direction = 2;
      move_player(-1,0);
    }}
  )
}
