import getSiblings from './getSiblings'

const cardMouseEffect = (featureEl) => {
  var featuresitems = featureEl;
  if (featuresitems) {
    featuresitems.forEach((item) => {
      item.onmouseover = function () {
        item.classList.add("active");
        let siblings = getSiblings(item);

        siblings.forEach((e) => e.classList.remove("active"));
      };
    });
  }
};

export default cardMouseEffect;
