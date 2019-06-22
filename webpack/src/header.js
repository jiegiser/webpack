function Header() {
    var dom = document.getElementById('root');
    var header = document.createElement('div');
    header.innerHTML = 'header';
    dom.append(header);
}
// esModul 规范
// export default Header;

module.exports = Header
