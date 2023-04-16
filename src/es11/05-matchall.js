const regex = /\b(Apple)+\b/g; //esto nos ayuda a filtrar tal "x" palabra dentro de un String

const fruit = 'Apple, Banana, Kiwi, Orange, Coco';

for(const match of fruit.matchAll(regex)){
    console.log(match);
}