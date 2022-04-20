var queue = [];
var graph = {
  you: ['alice', 'bob', 'claire'],

  bob: ['anuj', 'peggy'],
  alice: ['peggy'],
  claire: ['thom', 'jonny', 'peggy'],

  anuj: [],
  peggy: [],
  thom: [],
  jonny: []
};

function enqueue(friends) {
  for(var i = 0; i < friends.length; i++) {
    queue.push(friends[i]);
  }
}

function its_merchant(friend) {
  if (friend.indexOf('m') > -1) return 1;
  else return 0;
}

function BFS(queue, graph) {
  var guess;
  var verified = [];

  while(queue.length != 0) {
    guess = queue.shift();

    if(verified.find(element => element == guess) == undefined) {
      if(its_merchant(guess)) {
        document.getElementById('result').innerHTML = 'Среди ваших друзей ' + guess + ' торгует манго';
        return;
      } else {
        enqueue(graph[guess]);
        verified.push(guess);
      }
    }
  }
  document.getElementById('result').innerHTML = 'Среди ваших друзей никто не торгует манго';
}

enqueue(graph['you']);
BFS(queue, graph);
