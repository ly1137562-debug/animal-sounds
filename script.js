let sound = null;

const animals = {
    lion: { img: "images/lion.jpg", sound: "sounds/lion.mp3", text: "🦁 زئير مخيف" },
    bird: { img: "images/bird.jpg", sound: "sounds/bird.mp3", text: "🐦 تغريد سريع" },
    whale: { img: "images/whale.jpg", sound: "sounds/whale.mp3", text: "🐋 صوت عميق" },
    camel: { img: "images/camel.jpg", sound: "sounds/camel.mp3", text: "🐪 صوت غريب" },
    frog: { img: "images/frog.jpg", sound: "sounds/frog.mp3", text: "🐸 نقيق مزعج" },
    wolf: { img: "images/wolf.avif", sound: "sounds/wolf.mp3", text: "🐺 عواء مرعب" },
    parrot: { img: "images/parrot.webp", sound: "sounds/parrot.mp3", text: "🦜 تقليد مجنون" },
    monkey: { img: "images/monkey.jpg", sound: "sounds/monkey.mp3", text: "🐒 صراخ مضحك" },
    owl: { img: "images/owl.webp", sound: "sounds/owl.mp3", text: "🦉 صوت ليلي" },
    seal: { img: "images/seal.jpg", sound: "sounds/seal.mp3", text: "🦭 ضحك غريب" }
};

function selectAnimal(name) {
    const animal = animals[name];
    if (!animal) return;

    document.body.style.backgroundImage = `url('${animal.img}')`;
    document.getElementById("animalName").innerText = animal.text;

    if (sound) {
        sound.pause();
        sound.currentTime = 0;
    }

    sound = new Audio(animal.sound);
}

function playSound() {
    if (sound) sound.play();
}
