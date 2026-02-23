let filters = {
    brightness: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%",
    },
    contrast: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%",
    },
    saturation: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%",
    },
    hueRotation: {
        value: 0,
        min: -180,
        max: 180,
        unit: "deg",
    },
    blur: {
        value: 0,
        min: 0,
        max: 100,
        unit: "px",
    },
    grayscale: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%",
    },
    sepia: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%",
    },
    invert: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%",
    },
    opacity: {
        value: 100,
        min: 0,
        max: 100,
        unit: "%",
    }
}

const imageCanvas = document.querySelector("#image-canvas");
const imgInput = document.querySelector("#image-input");
const canvasCtx = imageCanvas.getContext("2d");
const resetBtn = document.querySelector("#reset-btn");
const downloadbtn = document.querySelector("#download-btn");
let file = null;
let image = null;

const filtersContainer = document.querySelector(".filters");

function createFilterElement(name, unit = "%", value, min, max) {
    const div = document.createElement("div");
    div.classList.add("filter");

    const input = document.createElement("input");
    input.type = "range";
    input.id = name;
    input.min = min;
    input.max = max;
    input.value = value;

    const p = document.createElement("p");
    p.innerText = name

    div.appendChild(p);
    div.appendChild(input);

    input.addEventListener("input", (e) => {
        filters[name].value = e.target.value;
        applyFilters();
    })

    return div;
}
function createFilters() {
    Object.keys(filters).forEach(key => {
        const filterElement = createFilterElement(key, filters[key].unit, filters[key].value, filters[key].min, filters[key].max);
        filtersContainer.appendChild(filterElement);
    })
}
createFilters();

imgInput.addEventListener("change", (e) => {
    file = e.target.files[0];
    const imagePlacehoder = document.querySelector(".placeholder");
    imageCanvas.style.display = "block";
    imagePlacehoder.style.display = "none";

    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = () => {

        image = img;
        imageCanvas.width = img.width;
        imageCanvas.height = img.height;
        canvasCtx.drawImage(img, 0, 0);
    }
})

function applyFilters() {
    canvasCtx.clearRect(0, 0, imageCanvas.width, imageCanvas.height);
    canvasCtx.filter = `blur(${filters.blur.value}${filters.blur.unit}) grayscale(${filters.grayscale.value}${filters.grayscale.unit}) sepia(${filters.sepia.value}${filters.sepia.unit}) invert(${filters.invert.value}${filters.invert.unit}) opacity(${filters.opacity.value}${filters.opacity.unit}) brightness(${filters.brightness.value}${filters.brightness.unit}) contrast(${filters.contrast.value}${filters.contrast.unit}) saturate(${filters.saturation.value}${filters.saturation.unit}) hue-rotate(${filters.hueRotation.value}${filters.hueRotation.unit})`;
    canvasCtx.drawImage(image, 0, 0);
}

resetBtn.addEventListener("click", () => {
    filters = {
        brightness: {
            value: 100,
            min: 0,
            max: 200,
            unit: "%",
        },
        contrast: {
            value: 100,
            min: 0,
            max: 200,
            unit: "%",
        },
        saturation: {
            value: 100,
            min: 0,
            max: 200,
            unit: "%",
        },
        hueRotation: {
            value: 0,
            min: -180,
            max: 180,
            unit: "deg",
        },
        blur: {
            value: 0,
            min: 0,
            max: 100,
            unit: "px",
        },
        grayscale: {
            value: 0,
            min: 0,
            max: 100,
            unit: "%",
        },
        sepia: {
            value: 0,
            min: 0,
            max: 100,
            unit: "%",
        },
        invert: {
            value: 0,
            min: 0,
            max: 100,
            unit: "%",
        },
        opacity: {
            value: 100,
            min: 0,
            max: 100,
            unit: "%",
        }
    }
    applyFilters();
    filtersContainer.innerHTML = "";
    createFilters();
});

downloadbtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = "edited-image.png";
    link.href = imageCanvas.toDataURL();
    link.click();
});
