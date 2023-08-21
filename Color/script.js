output = document.getElementById('output')
input = prompt('>>> ')
text = input.split(': ')
text.shift()
text = text.toString()
Colors = [{name: 'Yellow', code: '1f7e8'}, {name: 'Blue', code: '1f499'}, {name: 'Green', code: '1f7e9'}, {name: 'Red', code: 'fe0f'}, {name: 'Orange', code: '1f7e7'}, {name: 'White', code: '26aa'}, {name: 'Black', code: '1f5a4'}]
function emojiUnicode (emoji) {
    var comp;
    if (emoji.length === 1) {
        comp = emoji.charCodeAt(0);
    }
    comp = (
        (emoji.charCodeAt(0) - 0xD800) * 0x400
      + (emoji.charCodeAt(1) - 0xDC00) + 0x10000
    );
    if (comp < 0) {
        comp = emoji.charCodeAt(1);
    }
    return comp.toString("16");
};
emoji = emojiUnicode(text)
console.log(emoji)
find(emoji)

function find(emoji){
    condition = false
    for (let i = 0; i < Colors.length; i++) {
        if (emoji == Colors[i].code){
            output.innerHTML = Colors[i].name
        }   
    }
}
yellow = '1f7e8'
blue = '1f499'
green = '1f7e9'
red = 'fe0f'
orange = '1f7e7'
black = '1f5a4'
white = '26aa'