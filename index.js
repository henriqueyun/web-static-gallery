const $ = document.querySelector.bind(document)

const image = $("#image")
const btnPrevious = $("#btnPrevious")
const btnNext = $("#btnNext")
const bg = $(".bg")

const imageRefs = [
    "kiki",
    "kikisHouse",
    "kusakabeHouse",
    "marnieTreeBridge",
    "movingCastle",
    "sleepingTotoro"
]

var imgIndex = 0;

const getImgPath = (index) => {
    console.log(index)
    return `./images/${imageRefs[index]}.jpg`
}

const previousImg = () => {
    if(imgIndex === 0) {
        imgIndex = imageRefs.length - 1
        return getImgPath(imgIndex)
    }
    imgIndex--
    return getImgPath(imgIndex)
}

const nextImg = () => {
    if(imgIndex === (imageRefs.length - 1)) {
        imgIndex = 0
        return getImgPath(imgIndex)
    }
    imgIndex++
    return getImgPath(imgIndex)
}

const updateImgs = (imgSrc) => {
    image.src = imgSrc
    bg.style.backgroundImage = `url(${imgSrc})`
}

btnPrevious.addEventListener("click", () => {
    updateImgs(previousImg())
})

btnNext.addEventListener("click", () => {
    updateImgs(nextImg())
})


const handleArrowsNavigation = (event) => {
    const { keyCode } = event
    if (keyCode === 37) {
        updateImgs(nextImg())
    } else if (keyCode === 39) {
        updateImgs(nextImg())
    }
}

document.addEventListener("keydown", handleArrowsNavigation)