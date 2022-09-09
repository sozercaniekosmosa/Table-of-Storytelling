import {dataList} from './data.js';
import {listLinks} from './links.js';

let pre = 'http://tvtropes.org/pmwiki/pmwiki.php/Main/';

document.body.addEventListener('keydown', e => {
    if (e.key === "Escape") {
        let node = document.querySelector('.desc');
        node.setAttribute('hidden', '')
    }
});
document.querySelector('.table').addEventListener('click', e => {
    let name = e.target.parentElement.querySelector('.tropeName').innerText;
    let node = document.querySelector('.desc');
    if (!node.hasAttribute('hidden')) {
        node.setAttribute('hidden', '')
        return;
    }
    node.innerHTML = dataList[name].map((it, i) => i == 0 ? `<p><h3><a target="_blank" href="${pre + listLinks[name]}">${it}</a></h3></p><hr>` : `<p>${it}</p>`).join('');
    node.removeAttribute('hidden', '')
    node.scrollTop = 0;
});