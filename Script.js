// Smooth reveal animation

const sections = document.querySelectorAll(
    ".section, .dark-section, .final-section"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.12
    }
);

sections.forEach((section) => {
    observer.observe(section);
});


// Tiny console easter egg 😭

console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   KENNETH ALLAN PROFILE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Flirting detected: 100%
Drawing detected: ✓
Gaming detected: ✓
Movie watching detected: ✓
3D skills detected: ✓

Girlfriend:
STATUS = SEARCHING...


━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);