/* eslint-disable max-len */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  /* Globl variables */

  const { extentionIcon } = require('./icon');

  const extention = document.querySelector('.extention');
  const preloader = document.querySelector('.preloader');

  const sliderInner = document.querySelector('.slider__inner');
  const sliderControls = document.querySelector('.slider__controls');

  /* Display Extention */

  extention.insertAdjacentHTML('beforeend', extentionIcon);

  extention.addEventListener('click', () => {
    const showExtention = () => {
      extention.classList.add('clicked');

      preloader.classList.add('active');

      setTimeout(() => {
        preloader.classList.remove('active');
        sliderInner.style.display = 'flex';
        sliderControls.style.display = 'flex';
      }, 900);
    };

    const hideExtention = () => {
      extention.classList.remove('clicked');
      sliderInner.style.display = 'none';
      sliderControls.style.display = 'none';
    };

    extention.className.includes('clicked')
      ? hideExtention()
      : showExtention();
  });

  /* Slider Realization */

  const showSlide = function(event) {
    const button = event.target.closest('.slider__controls-item');

    const lastClass = sliderInner.classList[sliderInner.classList.length - 1];

    switch (button) {
      case sliderControls.querySelector('#firstSlideBtn'):
        sliderInner.classList.remove(lastClass);
        sliderInner.classList.add('first-slide');
        break;
      case sliderControls.querySelector('#secondSlideBtn'):
        sliderInner.classList.remove(lastClass);
        sliderInner.classList.add('second-slide');
        break;
      case sliderControls.querySelector('#thirdSlideBtn'):
        sliderInner.classList.remove(lastClass);
        sliderInner.classList.add('third-slide');
        break;
      default: sliderControls.querySelector(':nth-child(1)');
    }
  };

  sliderControls.addEventListener('click', showSlide);
});
