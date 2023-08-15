// ==UserScript==
// @name         Find on Nyaa
// @homepageURL  https://github.com/zigamacele/find-on-nyaa
// @supportURL   https://github.com/zigamacele/find-on-nyaa
// @version      0.1
// @description  Changes website icon links on Livechart to redirect to Nyaa and sorts by seeders in descending order.
// @author       Ziga Macele
// @license      MIT
// @match        https://www.livechart.me/**
// @icon         https://www.google.com/s2/favicons?sz=64&domain=livechart.me
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  const nyaaSearch = 'https://nyaa.si/?f=0&c=0_0&q=';
  const nyaaSorting = '&s=seeders&o=desc';

  function updateIconLink(iconSelector, title) {
    iconSelector.href = `${nyaaSearch}${title}${nyaaSorting}`;
  }

  function processAnimeCard(animeCard) {
    const titleSelector = animeCard.querySelector(
      '[data-anime-card-target="mainTitle"]'
    );
    const iconSelector = animeCard.querySelector('.website-icon');

    if (iconSelector && titleSelector) {
      const title = titleSelector.textContent.split(' ').slice(0, 2).join(' ');
      updateIconLink(iconSelector, title);
    }
  }

  function run() {
    const animeCards = document.querySelectorAll('.anime-card');
    animeCards.forEach(processAnimeCard);
  }

  run();
})();
