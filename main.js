// Use a diffchecker https://www.diffchecker.com/ to spot differences in playlists
(() => {
    let titles = [];
    let all_video_nodes = document.querySelectorAll("a[id='video-title']");

    for (let i = 0; i < all_video_nodes.length; i++) {
        titles.push(all_video_nodes[i].innerText);
    }

    console.log(titles.join('\n'));
})();