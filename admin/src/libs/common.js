// 设置全局公共函数存取、删除localstorage
export function setItem (key,value) {
    localStorage.setItem(key,value);
}
export function getItem (key) {
    return localStorage.getItem(key);
}
export function removeItem (key) {
    localStorage.removeItem(key);
}
export function clearItem () {
    localStorage.clear();
}