import { useRef, useState, useEffect} from 'react';

import { generateKey } from '../../global/utils';

import S from './styled';

interface IProps {
    img: {original: string; thumbnail: string;}[]
}

export const CustomGallery: React.FC<IProps> = ({img}) => {

    const originalWrapper = useRef<HTMLHeadingElement>(null);
    const body = useRef<HTMLHeadingElement>(null);
    const leftArrow = useRef<HTMLHeadingElement>(null);
    const rightArrow = useRef<HTMLHeadingElement>(null);
    const thumbNailsWrapper = useRef<HTMLHeadingElement>(null);
    const [offset, setOffset] = useState(0);
    const [selectedThumbImg, setSelectedThumbImg] = useState(0);

    useEffect(()=> {
        body.current!.style.transform = `translateX(-${offset}px)`;
    }, [offset])
    
    const nextOriginalImg = () => {
        const sliderWrapperWidth = originalWrapper.current!.offsetWidth;
        if (offset == sliderWrapperWidth * (img.length - 1)) {
            setOffset(0)
            setSelectedThumbImg(0);
        } else {
            setOffset((prev: number) => prev + sliderWrapperWidth)
            setSelectedThumbImg((prev: number) => prev + 1);
        }
    }

    const prevOriginalImg = () => {
        const sliderWrapperWidth = originalWrapper.current!.offsetWidth;
        if (offset == 0) {
            setOffset(sliderWrapperWidth * (img.length - 1))
            setSelectedThumbImg(img.length - 1);
        } else {
            setOffset((prev: number) => prev - sliderWrapperWidth)
            setSelectedThumbImg((prev: number) => prev - 1);
        }
    }

    const selectOriginalImg = (index: number) => {
        const sliderWrapperWidth = originalWrapper.current!.offsetWidth;
        setOffset(sliderWrapperWidth * index);
        setSelectedThumbImg(index);
    }

    const onWheel = (e: any) => {
        const container = thumbNailsWrapper.current!;
        const containerScrollPosition = container.scrollLeft
        container.scrollTo({
            top: 0,
            left: containerScrollPosition + e.deltaY,
        })
    }


    const preventDefault = (e: any) => {
        e = e || window.event
        if (e.preventDefault) {
            e.preventDefault()
        }
        e.returnValue = false
    }

    const disablePageScroll = (e: any) => {
        document.addEventListener('wheel', preventDefault, {passive: false})
    }

    const enablePageScroll = () => {
        document.removeEventListener('wheel', preventDefault, false)
    }
    
    return (
        <S.ImageGalleryWrapper >
            <S.OriginalWrapper ref={originalWrapper}>
                <S.LeftArrow ref={leftArrow} onClick={prevOriginalImg}/>
                <S.RightArrow ref={rightArrow} onClick={nextOriginalImg}/>
                <S.BodyOriginal ref={body} img={img}>
                    {img.map(item => {
                        return (
                            <S.ImgWrapper key={generateKey()} >
                                <S.OriginalImg src={item.original} />
                            </S.ImgWrapper>
                        )
                    })}
                </S.BodyOriginal>
            </S.OriginalWrapper>
            <S.ThumbNailsWrapper 
                onWheel={onWheel} 
                ref={thumbNailsWrapper} 
                onMouseEnter={disablePageScroll}
                onMouseLeave={enablePageScroll}

            >
                <S.BodyThumbNails img={img}  >
                    {img.map((item, index) => {
                        return (
                            <S.ThumbNailsItem   
                                    key={generateKey()} 
                                    onClick={() => selectOriginalImg((index))}
                                    selectedThumbImg={selectedThumbImg === index ? true : false} 
                            >
                                <S.ThumbNailsImg src={item.thumbnail} />
                            </S.ThumbNailsItem>
                        )
                    })}
                </S.BodyThumbNails>
            </S.ThumbNailsWrapper>
        </S.ImageGalleryWrapper>
    )
}