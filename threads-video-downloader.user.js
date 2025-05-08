// == Injector for Threads Video Downloader ==
(() => {
    const domTools = {
        observeDom() {
            document.querySelectorAll("video").forEach(video => {
                const root = domTools.findRoot(video);
                if (root && !root.querySelector(".dw")) {
                    root.append(domTools.getBtn(video.src || null));
                }
            });
            document.querySelectorAll("img").forEach(img => {
                if (
                    img.width >= 200 &&
                    img.height >= 200 &&
                    img.parentElement &&
                    !img.parentElement.querySelector(".dw")
                ) {
                    img.parentElement.prepend(domTools.getBtn(img.src || null));
                }
            });
        },
        getBtn(mediaUrl) {
            const btn = document.createElement("button");
            btn.innerText = browser.i18n.getMessage("btn_title");
            btn.className = "dw";
            const icon = document.createElement("span");
            icon.className = "icon";
            btn.append(icon);
            btn.setAttribute("data-src", mediaUrl);
            btn.addEventListener("click", domTools.handleDownload);
            return btn;
        },
        findRoot(element, depth = 0) {
            // Limite di profondità per evitare ricorsione infinita
            if (!element || depth > 10) return null;
            const parent = element.parentNode;
            if (!parent) return null;
            const visualDiv = parent.querySelector("div[data-visualcompletion]");
            return visualDiv || domTools.findRoot(parent, depth + 1);
        },
        handleDownload(event) {
            event.preventDefault();
            event.stopPropagation();
            const btn = event.target.closest("button.dw");
            const mediaUrl = btn && btn.getAttribute("data-src");
            if (mediaUrl) {
                browser.runtime.sendMessage({
                    action: "downloadFile",
                    url: mediaUrl
                });
            }
        }
    };

    // Usa MutationObserver invece di setInterval
    const observer = new MutationObserver(() => {
        domTools.observeDom();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    // Esegui subito all'avvio
    domTools.observeDom();
})();