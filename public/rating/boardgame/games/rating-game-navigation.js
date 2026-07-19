(() => {
    const reviewTitle = document.querySelector('[data-review-title]');
    const stickyTitle = document.querySelector('[data-sticky-game-title]');

    if (!reviewTitle || !stickyTitle) {
        return;
    }

    const setTitleVisibility = (isVisible) => {
        stickyTitle.classList.toggle('is-visible', isVisible);
        stickyTitle.setAttribute('aria-hidden', String(!isVisible));
    };

    if ('IntersectionObserver' in window) {
        const navHeight = document.querySelector('nav')?.offsetHeight || 80;
        const observer = new IntersectionObserver(([entry]) => {
            setTitleVisibility(!entry.isIntersecting);
        }, {
            rootMargin: `-${navHeight}px 0px 0px 0px`,
            threshold: 0
        });

        observer.observe(reviewTitle);
        return;
    }

    const updateFromScroll = () => {
        setTitleVisibility(reviewTitle.getBoundingClientRect().bottom <= 80);
    };

    window.addEventListener('scroll', updateFromScroll, { passive: true });
    updateFromScroll();
})();
