import avater from './avater.png'
function createAvatar () {
    var img = new Image();
    img.src = avater;
    img.classList.add('avater')
    var dom = document.getElementById('root');
    dom.append(img);
}
export default createAvatar