module.exports = ({ text, eleSelector, cps }) => {
    const ele = document.querySelector(eleSelector);
    if (!ele) return;
    const textArr = text.split('');
    let i = 0;
    ele.classList.add('typing');
    const interval = setInterval(() => {
        ele.innerHTML += textArr[i++];
        if (i === textArr.length) {
            clearInterval(interval);
            ele.classList.remove('typing');
        }
    }, 1000 / cps);
};
