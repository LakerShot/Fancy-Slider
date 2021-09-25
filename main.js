document.addEventListener('DOMContentLoaded', (event) => {
    const upButton = document.querySelector('.up-button')
    const downButton = document.querySelector('.down-button')
    const sideBar = document.querySelector('.sidebar')
    const mainSlide = document.querySelector('.main-slide')
    const container = document.querySelector('.container')

    const DIRECTIONS = {
        UP: 'UP',
        DOWN: 'DOWN',
    }

    const AVAILABEL_KEYS = {
        ARROW_UP: 'ArrowUp',
        ARROW_DOWN: 'ArrowDown'
    }

    const slidesCount = mainSlide.querySelectorAll('div').length
    const height = container.clientHeight
    let activeSlideIndex = 0

    sideBar.style.top = `-${(slidesCount - 1) * 100}vh`

    const makeSlideChanges = () => {
        mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
        sideBar.style.transform = `translateY(${activeSlideIndex * height}px)`
    }

    const changeSlide = (direction) => {
        switch (direction) {
            case DIRECTIONS.UP:
                activeSlideIndex++
                if (activeSlideIndex === slidesCount) activeSlideIndex = 0
                break
            case DIRECTIONS.DOWN:
                activeSlideIndex--
                if (activeSlideIndex < 0) activeSlideIndex = slidesCount - 1
                break
        }
        makeSlideChanges()
    }

    upButton.addEventListener('click', () => {
        changeSlide(DIRECTIONS.UP)
    })

    downButton.addEventListener('click', () => {
        changeSlide(DIRECTIONS.DOWN)
    })

    document.addEventListener('keydown', (e) => {
        if (e.key === AVAILABEL_KEYS.ARROW_UP) changeSlide(DIRECTIONS.UP)
        if (e.key === AVAILABEL_KEYS.ARROW_DOWN) changeSlide(DIRECTIONS.DOWN)
    })
})
