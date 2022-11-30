const CLIP_PATHS_POLYGON = [
  "polygon(50% 0%, 100% 0, 100% 60%, 100% 100%, 0 100%, 0% 60%, 0 0)",
  "polygon(37% 41%, 90% 20%, 45% 56%, 85% 50%, 2% 96%, 29% 56%, 10% 20%)",
  "polygon(81% 65%, 25% 88%, 94% 11%, 38% 17%, 10% 52%, 77% 86%, 15% 20%)",
  "polygon(100% 100%, 26% 0, 98% 20%, 71% 100%, 0 100%, 100% 47%, 0 0)",
  "polygon(76% 30%, 96% 59%, 76% 97%, 50% 71%, 30% 93%, 4% 60%, 55% 0%)",
];

const stranger = document.getElementById("stranger");
const starangerText = document.getElementById("stranger-text");

function animateStranger() {
  new Promise((resolve) => {
    const duration = 130;

    setTimeout(() => {
      // stranger.animate(
      // 	[
      // 		{
      // 			clipPath: CLIP_PATHS_POLYGON[0]
      // 		},
      // 		{
      // 			clipPath: CLIP_PATHS_POLYGON[1]
      // 		}
      // 	],
      // 	{
      // 		duration: 500,
      // 		easing: "ease-in-out",
      // 		fill: "forwards"
      // 	}
      // );

      resolve(duration);
    }, 500);
  })
    .then((waitFor) => {
      // 1. blood out
      const duration = 700;
      const delay = 150;

      return new Promise((resolve) => {
        setTimeout(() => {
          stranger.animate(
            [
              {
                background:
                  "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(101,0,0,1) 40%, rgba(255,0,0,1) 100%)",
                backgroundSize: "100% 4000%",
                backgroundPosition: "0 100%",
              },
              {
                background:
                  "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(101,0,0,1) 40%, rgba(255,0,0,1) 100%)",
                backgroundSize: "100% 4000%",
                backgroundPosition: "0 0%",
              },
            ],
            {
              duration,
              easing: "linear",
              fill: "forwards",
              delay,
            }
          );

          resolve(duration + delay);
        }, waitFor);
      });
    })
    .then((waitFor) => {
      // 2. rotate right
      const duration = 932;
      const delay = 1000;

      return new Promise((resolve) => {
        setTimeout(() => {
          stranger.animate(
            [
              {
                transform: "translateX(0%) rotate(0deg)",
              },
              {
                transform: "translateX(100%) rotate(90deg)",
              },
            ],
            {
              duration,
              fill: "forwards",
              easing: "cubic-bezier(.22,.49,.83,.51)",
              delay,
            }
          );

          resolve(duration + delay);
        }, waitFor);
      });
    })
    .then((waitFor) => {
      // 3. transform
      const duration = 898;
      const delay = 1258;

      return new Promise((resolve) => {
        setTimeout(() => {
          stranger.animate(
            [
              {
                transform: "translateX(100%) rotate(90deg)",
                clipPath: CLIP_PATHS_POLYGON[0],
              },
              {
                transform: "translateX(200%) rotate(180deg)",
                clipPath: CLIP_PATHS_POLYGON[4],
              },
            ],
            {
              duration,
              fill: "forwards",
              easing: "cubic-bezier(.63,.34,.43,.77)",
              delay,
            }
          );

          resolve(duration + delay);
        }, waitFor);
      });
    })
    .then((waitFor) => {
      const duration = 898;
      const delay = 76;

      return new Promise((resolve) => {
        const articleContainer = document.querySelector(".article-container");

        setTimeout(() => {
          articleContainer.classList.add("enlighten");
        }, waitFor + delay);
      });
    });
}

window.onload = animateStranger;
