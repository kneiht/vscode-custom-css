// Set up a MutationObserver to watch for changes in the DOM
const observer = new MutationObserver(() => {
    const iframe = document.querySelector('#antigravity\\.agentPanel');
    if (iframe) {
        iframe.style.margin = "0px 5px 0px 0px";
        iframe.style.border = "none";
        iframe.style.borderRadius = "var(--rounded-border-radius)";
        iframe.style.width = "calc(100% - 5px)";
        iframe.style.height = "calc(100%)";
        iframe.style.display = "flex";
        iframe.style.flexDirection = "column";
        iframe.style.overflow = "hidden";
        iframe.style.justifyContent = "space-between";
        iframe.style.alignItems = "stretch";
        console.log("Element Codium has been updated with new styles.");
    }
});

// Start observing the document body for added or removed nodes
observer.observe(document.body, { childList: true, subtree: true });
