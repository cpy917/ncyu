const videoModal = document.getElementById('videoModal');
const youtubePlayer = document.getElementById('youtubePlayer');

videoModal.addEventListener('show.bs.modal', event => {
    const trigger = event.relatedTarget;
    const videoId = trigger.getAttribute('data-id');
    const title = trigger.getAttribute('data-title');
    youtubePlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    document.getElementById('videoModalLabel').innerText = title;
});

videoModal.addEventListener('hidden.bs.modal', () => {
    youtubePlayer.src = "";
});

function scrollCards(direction, wrapperId) {
    const wrapper = document.getElementById(wrapperId);
    const scrollAmount = 300;
    wrapper.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}