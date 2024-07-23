const calcScrollPercentage = (scrollValue, containerRef, startHeight) => {
    return ((scrollValue - startHeight) / ((containerRef.current.clientHeight + 200) - startHeight)) * 100
}

export const SkewedElementAnimation = (elementRef, containerRef, scrollY, screenHeight) => {
    const scrollValue = scrollY + (screenHeight - containerRef.current.offsetTop);
    const containerHeight = containerRef.current.clientHeight
    if (scrollValue >= containerHeight && scrollValue <= (containerHeight + 200)) {
        const calcFormula = ((scrollValue - containerHeight) / ((containerHeight + 200) - containerHeight)) * 100;
        elementRef.current.style.opacity = `${(1 / 100) * calcFormula}`;
    } else if (scrollValue > (containerHeight + 200)) {
        elementRef.current.style.opacity = '1';
    } else {
        elementRef.current.style.opacity = "0";
    }
}

export const BackgroundImageAnimation = (bgImageRef, containerRef, scrollY, screenHeight) => {
    const scrollValue = scrollY + (screenHeight - containerRef.current.offsetTop)
    const containerHeight = containerRef.current.clientHeight

    if (scrollValue >= (containerHeight - 200) && scrollValue <= (containerHeight + 200)) {
        const calcFormula = ((scrollValue - (containerHeight - 200)) / ((containerHeight + 200) - (containerHeight - 200))) * 100;
        const calcPaddingLeft = Math.round(calcFormula);
        const calcPaddingBottom = Math.round((50 / 100) * calcFormula);
        const calcHeight = Math.round((50 / 100) * calcFormula);
        const calcBrightness = Math.round((3 / 100) * calcFormula);

        bgImageRef.current.style.paddingBottom = `${50 - calcPaddingBottom}px`;
        bgImageRef.current.style.paddingLeft = `${100 - calcPaddingLeft}px`;
        bgImageRef.current.style.height = `${100 + calcHeight}%`;
        bgImageRef.current.style.filter = `brightness(${1 - (calcBrightness / 10)})`;
    } else if (scrollValue > containerHeight) {
        bgImageRef.current.style.paddingLeft = "0px";
        bgImageRef.current.style.paddingBottom = "0px";
        bgImageRef.current.style.height = "150%";
        bgImageRef.current.style.filter = "brightness(0.60)";
    } else {
        bgImageRef.current.style.paddingLeft = "100px";
        bgImageRef.current.style.paddingBottom = "50px";
        bgImageRef.current.style.height = "100%";
        bgImageRef.current.style.filter = "brightness(1)";
    }
}

export const TextElementAnimation = (textRef, containerRef, scrollY, screenHeight) => {
    const scrollValue = scrollY + (screenHeight - containerRef.current.offsetTop)
    const containerHeight = containerRef.current.clientHeight

    if (scrollValue >= (containerHeight - 300) && scrollValue <= (containerHeight + 300)) {
        const calcFormula = ((scrollValue - (containerHeight - 300)) / ((containerHeight + 300) - (containerHeight - 300))) * 100;
        textRef.current.style.opacity = `${(1 / 100) * calcFormula}`;
        textRef.current.style.transform = `translate(-50%, ${100 - (Math.round(calcFormula))}%)`;
    } else if (scrollValue > containerHeight) {
        textRef.current.style.opacity = "1";
        textRef.current.style.transform = "translate(-50%, 0)";
    } else {
        textRef.current.style.opacity = "0";
    }
}

export const CardContainerAnimation = (cardRef, containerRef, scrollY, screenHeight, position) => {
    const scrollValue = scrollY + (screenHeight - containerRef.current.offsetTop)

    if ((scrollValue - 300) >= 0 && scrollValue <= (containerRef.current.clientHeight + 200)) {
        const scrollPercentage = calcScrollPercentage(scrollValue, containerRef, 300);
        const calcWidthPercentage = Math.round((35 / 100) * scrollPercentage)
        cardRef.current.style.width = `${35 - calcWidthPercentage}%`;

        if (position === "left") {
            const calcPaddingLeft = Math.round((18 / 100) * scrollPercentage);
            cardRef.current.style.paddingLeft = `${18 - calcPaddingLeft}px`;
        } else if (position === "right") {
            const calcPaddingRight = Math.round((27 / 100) * scrollPercentage);
            cardRef.current.style.paddingRight = `${27 - calcPaddingRight}px`;
        }
    } else if (scrollValue > containerRef.current.clientHeight) {
        cardRef.current.style.width = `0%`;
        position === "left" ? cardRef.current.style.paddingLeft = "0px" : cardRef.current.style.paddingRight = "0px"
    } else {
        cardRef.current.style.width = `35%`;
        position === "left" ? cardRef.current.style.paddingLeft = "18px" : cardRef.current.style.paddingRight = "27px"
    }
}

// Left Card Animation JS
export const HonamiCardAnimation = (cardRef, containerRef, scrollY, screenHeight) => {
    const scrollValue = scrollY + (screenHeight - containerRef.current.offsetTop)

    if ((scrollValue - 400) >= 0 && scrollValue <= (containerRef.current.clientHeight + 200)) {
        const scrollPercentage = calcScrollPercentage(scrollValue, containerRef, 400);
        cardRef.current.style.transform = `translateX(-${Math.round((250 / 100) * scrollPercentage)}px)`;
    } else if (scrollValue > containerRef.current.clientHeight) {
        cardRef.current.style.transform = `translateX(-250px)`;
    } else {
        cardRef.current.style.transform = `translateX(0px)`;
    }
}

export const SakiLanternCardAnimation = (cardRef, containerRef, scrollY, screenHeight) => {
    const scrollValue = scrollY + (screenHeight - containerRef.current.offsetTop)

    if ((scrollValue - 500) >= 0 && scrollValue <= (containerRef.current.clientHeight + 200)) {
        const scrollPercentage = calcScrollPercentage(scrollValue, containerRef, 500);
        const translateX = `-${Math.round((250 / 100) * scrollPercentage)}px`;
        const translateY = `-${Math.round((200 / 100) * scrollPercentage)}px`
        cardRef.current.style.transform = `translate(${translateX}, ${translateY})`;
    } else if (scrollValue > containerRef.current.clientHeight) {
        cardRef.current.style.transform = `translate(-250px, -200px)`;
    } else {
        cardRef.current.style.transform = `translate(0px)`;
    }
}

export const IchikaCardAnimation = (cardRef, containerRef, scrollY, screenHeight) => {
    const scrollValue = scrollY + (screenHeight - containerRef.current.offsetTop)

    if ((scrollValue - 400) >= 0 && scrollValue <= (containerRef.current.clientHeight + 200)) {
        const scrollPercentage = calcScrollPercentage(scrollValue, containerRef, 400);
        const translateX = `-${Math.round((500 / 100) * scrollPercentage)}px`;
        const translateY = `${Math.round((300 / 100) * scrollPercentage)}px`
        cardRef.current.style.transform = `translate(${translateX}, ${translateY})`;
    } else if (scrollValue > containerRef.current.clientHeight) {
        cardRef.current.style.transform = `translate(-500px, -300px)`;
    } else {
        cardRef.current.style.transform = `translate(0px)`;
    }
}

export const ShihoGuitar2CardAnimation = (cardRef, containerRef, scrollY, screenHeight) => {
    const scrollValue = scrollY + (screenHeight - containerRef.current.offsetTop)

    if ((scrollValue - 500) >= 0 && scrollValue <= (containerRef.current.clientHeight + 200)) {
        const scrollPercentage = calcScrollPercentage(scrollValue, containerRef, 500);
        const translateX = `-${Math.round((500 / 100) * scrollPercentage)}px`;
        cardRef.current.style.transform = `translateX(${translateX})`;
    } else if (scrollValue > containerRef.current.clientHeight) {
        cardRef.current.style.transform = `translateX(-500px)`;
    } else {
        cardRef.current.style.transform = `translateX(0px)`;
    }
}

// Right Card Animation JS
export const SakiCardAnimation = (cardRef, containerRef, scrollY, screenHeight) => {
    const scrollValue = scrollY + (screenHeight - containerRef.current.offsetTop)

    if ((scrollValue - 400) >= 0 && scrollValue <= (containerRef.current.clientHeight + 200)) {
        const scrollPercentage = calcScrollPercentage(scrollValue, containerRef, 400);
        const translateX = `${Math.round((500 / 100) * scrollPercentage)}px`;
        cardRef.current.style.transform = `translateX(${translateX})`;
    } else if (scrollValue > containerRef.current.clientHeight) {
        cardRef.current.style.transform = `translateX(500px)`;
    } else {
        cardRef.current.style.transform = `translateX(0px)`;
    }
}

export const ShihoGuitarCardAnimation = (cardRef, containerRef, scrollY, screenHeight) => {
    const scrollValue = scrollY + (screenHeight - containerRef.current.offsetTop)

    if ((scrollValue - 500) >= 0 && scrollValue <= (containerRef.current.clientHeight + 200)) {
        const scrollPercentage = calcScrollPercentage(scrollValue, containerRef, 500);
        const translateX = `${Math.round((500 / 100) * scrollPercentage)}px`;
        const translateY = `${Math.round(scrollPercentage)}px`
        cardRef.current.style.transform = `translate(${translateX}, ${translateY})`;
    } else if (scrollValue > containerRef.current.clientHeight) {
        cardRef.current.style.transform = `translate(500px, 100px)`;
    } else {
        cardRef.current.style.transform = `translate(0px)`;
    }
}

export const IchikaSnowCardAnimation = (cardRef, containerRef, scrollY, screenHeight) => {
    const scrollValue = scrollY + (screenHeight - containerRef.current.offsetTop)

    if ((scrollValue - 400) >= 0 && scrollValue <= (containerRef.current.clientHeight + 200)) {
        const scrollPercentage = calcScrollPercentage(scrollValue, containerRef, 400);
        const translateX = `${Math.round((250 / 100) * scrollPercentage)}px`;
        const translateY = `${Math.round((300 / 100) * scrollPercentage)}px`
        cardRef.current.style.transform = `translate(${translateX}, ${translateY})`;
    } else if (scrollValue > containerRef.current.clientHeight) {
        cardRef.current.style.transform = `translate(250px, 300px)`;
    } else {
        cardRef.current.style.transform = `translate(0px)`;
    }
}

export const HonamiDrumCardAnimation = (cardRef, containerRef, scrollY, screenHeight) => {
    const scrollValue = scrollY + (screenHeight - containerRef.current.offsetTop)

    if ((scrollValue - 500) >= 0 && scrollValue <= (containerRef.current.clientHeight + 200)) {
        const scrollPercentage = calcScrollPercentage(scrollValue, containerRef, 500);
        const translateX = `${Math.round((250 / 100) * scrollPercentage)}px`;
        const translateY = `-${Math.round((550 / 100) * scrollPercentage)}px`
        cardRef.current.style.transform = `translate(${translateX}, ${translateY})`;
    } else if (scrollValue > containerRef.current.clientHeight) {
        cardRef.current.style.transform = `translate(250px, -300px)`;
    } else {
        cardRef.current.style.transform = `translate(0px)`;
    }
}