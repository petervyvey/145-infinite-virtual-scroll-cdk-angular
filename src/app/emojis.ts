export const emojis =
  '😀,😃,😄,😁,😆,😅,😂,🤣,😊,🙂,🙃,😉,😌,😍,😘,😗,😙,😚,😋,😛,😝,😜,🤪,🤨,🧐,🤓,😎,🤩,😏,😒,😞,😔,😟,😕,🙁,😣,😖,😫,😩,😢,😭,😤,😠,😡,🤬,🤯,😳,😱,😨,😰,😥,😓,🤗,🤔,🤭,🤫,🤥,😶,😐,😑,😬,🙄,😯,😦,😧,😮,😲,😴,🤤,😪,😵,🤐,🤢,🤮,🤧,😷,🤒,🤕,🤑,🤠,😈,👿,👹,👺,🤡,💩,👻,💀,👽,👾,🤖,🎃,😺,😸,😹,😻,😼,😽,🙀,😿,😾,🤲,👐,🙌,👏,🤝,👍,👎,👊,✊,🤛,🤞,🤟,🤘,👌,👉,👈,👆,👇,✋,🤚,🖐,🖖,👋,🤙,💪,🖕,🙏';

export const emojisArray = emojis.split(',');
export const emojiRandom = () =>
  emojisArray[Math.floor(Math.random() * emojisArray.length)];
