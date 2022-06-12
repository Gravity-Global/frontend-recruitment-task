'use strict';

export default ({ content }) => {
    let container = 'popup';

    use(
        create(container, content),
        mount
    )();

    use(
        getByIds('root', 'popup', 'content', 'open', 'close', 'reset', 'calls'),
        click(openWindow(), 'open'),
        click(resetCounter, 'reset'),
        click(closeWindow(), 'close'),
        click(closeWindow())
    )();
}

const setCount = (key, count) =>
    localStorage.setItem(key, count);

const getCount = (key, count) =>
    localStorage.getItem(key, count) || 0;

const delCount = (key) =>
    localStorage.removeItem(key);

const resetCounter = ({ calls, reset }) => {
    delCount('calls');
    calls.innerHTML = `${0} times`;
    console.log(reset)
    hide(reset);
}

const openWindow = () => {
    return ({ root, open, popup, content, calls, reset }) => {
        show(root, popup, content);
        let countOpenWindowCalls = getCount('calls');
        setCount('calls', ++countOpenWindowCalls);

        if (+getCount('calls') >= 5) {
            show(reset);
        }

        calls.innerHTML = `${getCount('calls')} times`;
    }
}

const closeWindow = () =>
    ({ root, popup, content }, e) =>
        (e.target === popup ||
            e.target.id === 'close') ?
                hide(root, popup, content) : undefined;


const click = (handler, element) =>
    (components) =>
        listen(handler, (components[element]) ? components[element] : document, 'click')(components);

const listen = (handler, element, type) =>
    (components) => {
        element.addEventListener(type, e => {
            e.preventDefault();
            handler(components, e);
        });
        return components;
    }

const show = (...elements) => elements.map(el => el.classList.add('active'));
const hide = (...elements) => elements.map(el => el.classList.remove('active'));

const getByIds = (...elements) => () =>
    elements.reduce((els, el) => ({ ...els, [el]: getById(el) }), {})

const getById = id => document.getElementById(id);

const create = (name, content) =>
    () => {
        const div = document.createElement('div');
        div.id = name;
        div.innerHTML = content;
        return div;
    }

const mount = element =>
    document.body.insertBefore(element, document.getElementById('root'));

const use = (...fns) =>
    (arg) =>
        fns.reduce((composed, f) => f(composed), arg);