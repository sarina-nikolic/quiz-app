export function configureToggleableBookmark() {
  const toggleBookmark = document.querySelector('[data-js="bookmark-tag"]');
  console.log(toggleBookmark);
  console.log(toggleBookmark.innerText);

  const showBookmarkTagged = document.querySelector(
    '[data-js="card__bookmark--active"]'
  );

  let bookmarkActive = false;

  toggleBookmark.addEventListener('click', () => {
    if (bookmarkActive) {
      showBookmarkTagged.classList.remove('card__bookmark--active');
      bookmarkActive = false;
    } else {
      showBookmarkTagged.classList.add('card__bookmark--active');
      bookmarkActive = true;
    }
    console.log();
  });
}
