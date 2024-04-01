const container = document.createElement('div');
container.classList.add('container');

const tour1 = document.createElement('div');
tour1.classList.add('list');
const first1 = document.createElement('div');
first1.classList.add('first');
const title1 = document.createElement('h5');
title1.classList.add('one');
title1.innerHTML = 'Автобусный тур';
const subtitle1 = document.createElement('h3');
subtitle1.classList.add('two');
subtitle1.innerHTML = 'Обзорная по Сочи (из Адлера)';

const second1 = document.createElement('div');
second1.classList.add('second');
const category1 = document.createElement('div');
category1.classList.add('cat');
const duration1 = document.createElement('p');
duration1.innerHTML = '6 часов';
const price1 = document.createElement('div');
price1.classList.add('cat');
const cost1 = document.createElement('p');
cost1.innerHTML = '618 ₽';

const desc1 = document.createElement('p');
desc1.classList.add('main');
desc1.innerHTML = 'Приглашаем вас на экскурсию "Обзорная по Большому Сочи": Экскурсия начнется с подъёма на гору Большой Ахун - это высшая точка (665 метров) на побережьи Сочи. На вершине горы Большой Ахун есть смотровая башня, построенная в 1935-36 годах по проекту архитектора С. И. Воробьева...';

const button1 = document.createElement('div');
button1.classList.add('but');
const btn1 = document.createElement('button');
btn1.classList.add('button');
const btnText1 = document.createElement('p');
btnText1.innerHTML = 'Подробнее';

const tour2 = document.createElement('div');
tour2.classList.add('list_sec');
const first2 = document.createElement('div');
first2.classList.add('first');
const title2 = document.createElement('h5');
title2.classList.add('one');
title2.innerHTML = 'Конный тур';
const subtitle2 = document.createElement('h3');
subtitle2.classList.add('two');
subtitle2.innerHTML = 'Конные прогулки';

const second2 = document.createElement('div');
second2.classList.add('second');
const category2 = document.createElement('div');
category2.classList.add('cat');
const duration2 = document.createElement('p');
duration2.innerHTML = '1,5 часа';
const price2 = document.createElement('div');
price2.classList.add('cat');
const cost2 = document.createElement('p');
cost2.innerHTML = '1 809 ₽';

const desc2 = document.createElement('p');
desc2.classList.add('main');
desc2.innerHTML = 'Конные прогулки проходят в Лазурной долине. С долины открывается красивый вид на море, горы и лес. На всем пути следования экскурсии вас будут сопровождать опытные инструктора. Катание на лошадях или иппотерапия очень полезна для детей и взрослых...';

const button2 = document.createElement('div');
button2.classList.add('but');
const btn2 = document.createElement('button');
btn2.classList.add('button');
const btnText2 = document.createElement('p');
btnText2.innerHTML = 'Подробнее';


const tour3 = document.createElement('div');
tour3.classList.add('list_third');
const first3 = document.createElement('div');
first3.classList.add('first');
const title3 = document.createElement('h5');
title3.classList.add('one');
title3.innerHTML = 'Квадротур';
const subtitle3 = document.createElement('h3');
subtitle3.classList.add('two');
subtitle3.innerHTML = 'Пасть дракона';

const second3 = document.createElement('div');
second3.classList.add('second');
const category3 = document.createElement('div');
category3.classList.add('cat');
const duration3 = document.createElement('p');
duration3.innerHTML = '2,5 часа';
const price3 = document.createElement('div');
price3.classList.add('cat');
const cost3 = document.createElement('p');
cost3.innerHTML = '3 515 ₽';

const desc3 = document.createElement('p');
desc3.classList.add('main');
desc3.innerHTML = "Маршрут на Квадроциклах проходит по горной реке Мзымта вдоль белых скал и самшитовый лес к водопаду Глубокий Яр или Пасть Дракона (экскурсионное название). Высота водопада 41,5 метр - это один из самых высоких водопадов Большого Сочи..."


const button3 = document.createElement('div');
button3.classList.add('but');
const btn3 = document.createElement('button');
btn3.classList.add('button');
const btnText3 = document.createElement('p');
btnText3.innerHTML = 'Подробнее';




first1.append(title1);
first1.append(subtitle1);
category1.append(duration1);
price1.append(cost1);
second1.append(category1);
second1.append(price1);
btn1.append(btnText1);
button1.append(btn1);
tour1.append(first1);
tour1.append(second1);
tour1.append(desc1);
tour1.append(button1);
first2.append(title2);
first2.append(subtitle2);
category2.append(duration2);
price2.append(cost2);
second2.append(category2);
second2.append(price2);
btn2.append(btnText2);
button2.append(btn2);
tour2.append(first2);
tour2.append(second2);
tour2.append(desc2);
tour2.append(button2);
first3.append(title3);
first3.append(subtitle3);
category3.append(duration3);
price3.append(cost3);
second3.append(category3);
second3.append(price3);
btn3.append(btnText3);
button3.append(btn3);
tour3.append(first3);
tour3.append(second3);
tour3.append(desc3);
tour3.append(button3);

container.append(tour1 , tour2 , tour3)
document.body.append(container)