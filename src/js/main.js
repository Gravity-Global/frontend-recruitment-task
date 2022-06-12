'use strict';
import popup from './popup.js';

window.onload = () => {
    const content = `
            <div id="content">
                <img id="close" src="images/x-icon.svg">
                <h1>Alert!</h1>
                <p>
                   You have clicked <span id="calls">0 times</span> to related button.
                </p>
                <button name="button" id="reset">
                    Reset
                </button>
            </div>`;

    popup({ content });
}