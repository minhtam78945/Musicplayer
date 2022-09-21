function toast({
    title = ` `,
    message = ` `,
    type = `infor`,
    duation = 1000
}) {
    const main = document.getElementById("toast");
    if (main) {
        const toast = document.createElement("div");
        const Autohide = setTimeout(function () {
            main.removeChild(toast);
        }, duation + 1000);
        toast.onclick = function (e) {
            if (e.target.closest(`toast_close`)) {
                main.removeChild(toast);
                clearTimeout(Autohide);
            }
        }
        toast.classList.add('toast', `toast--${type}`);
        const delay = (duation / 100).toFixed(2);
        toast.style.animation = `sildeinleft ease-in-out 0.3s, fadeout ease-in-out 1s ${delay}s forwards`;
        const icon = {
            success: 'fa-solid fa-circle-check',
            error: 'fa-solid fa-circle-exclamation',
            warring:`fa-solid fa-circle-exclamation`
        };
        const icons = icon[type];
        toast.innerHTML = `
                    <div class="toast-icon">
                    <i class="${icons}"></i>
                </div>
                <div class="toast_body">
                    <h3 class="toast-title">${title}</h3>
                    <p class="toast_msg">${message}</p>
                </div>
                <div class="toast_close">
                    <i class="fa-solid fa-xmark"></i>
                </div>`
        main.appendChild(toast);
    }
}
