import React from "react";
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faCircleDot, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

import BodyItem from "../BodyItem/BodyItem";



const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};



class ImageSlide extends React.Component
{

    ParseImageFit()
    {
        switch(this.props.ImageFit)
        {
            case "fill":
                return "object-fill";
            case "contain":
                return "object-contain";
            case "cover":
                return "object-cover";
            case "none":
                return "object-none";
            case "scale-down":
                return "object-scale-down";
            default:
                return "object-cover";
        }
    }

    ParseImageAspectRatio()
    {
        switch(this.props.ImageAspectRatio)
        {
            case "1/1":
                return "aspect-1/1";
            case "2/1":
                return "aspect-2/1";
            case "3/2":
                return "aspect-3/2";
            case "4/3":
                return "aspect-4/3";
            case "5/4":
                return "aspect-5/4";
            case "16/9":
                return "aspect-16/9";
            case "1/2":
                return "aspect-1/2";
            case "2/3":
                return "aspect-2/3";
            case "3/4":
                return "aspect-3/4";
            case "4/5":
                return "aspect-4/5";
            case "9/16":
                return "aspect-9/16";
            default:
                return "4/3";
        }
    }

    componentDidMount()
    {}

    componentWillUnmount()
    {}

    render()
    {
        return(
            <motion.div 
                className="absolute flex items-center justify-center w-full h-full"
                custom={this.props.MotionCustom}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransitions}
                drag={this.props.MotionDrag}
                dragConstraints={this.props.MotionDrag == "x" ? { left: 0, right: 0 } : { top: 0, bottom: 0 }}
                dragElastic={1}
                onDragStart={()=>{ this.props.OnDragBegin?.(); }}
                onDragEnd={(e, {offset, velocity})=>{
                    const swipe = swipePower(
                        (this.props.MotionDrag == "x" ? offset.x : offset.y), 
                        (this.props.MotionDrag == "x" ? velocity.x : velocity.y));

                    if (swipe < -swipeConfidenceThreshold) { this.props.OnDragForward?.(); } 
                    else if (swipe > swipeConfidenceThreshold) { this.props.OnDragBackward?.(); }
                    else { this.props.OnDragEnd?.(); }
                }}
            >
                <div className={"relative block w-full " + this.ParseImageAspectRatio()}>
                    <Image
                        className={this.ParseImageFit()}
                        src={this.props.ImageSource}
                        alt={this.props.ImageAlt ?? ""}
                        width={this.props.ImageWidth ?? null}
                        height={this.props.ImageHeight ?? null}
                        layout={this.props.ImageLayout ?? null}
                    />
                </div>
            </motion.div>
        );
    }

}

class VideoSlide extends React.Component
{

    constructor(props)
    {
        super(props);

        this.videoRef = React.createRef();
        this.OnVideoPlayCallback = this.OnVideoPlay.bind(this);
        this.OnVideoPauseCallback = this.OnVideoPause.bind(this);
    }

    OnVideoPlay()
    {
        this.props.OnVideoPlay();
    }

    OnVideoPause()
    {
        const finished = this.videoRef.current.ended;
        this.props.OnVideoPaused(finished);
    }

    ParseVideoFit()
    {
        switch(this.props.VideoFit)
        {
            case "fill":
                return "object-fill";
            case "contain":
                return "object-contain";
            case "cover":
                return "object-cover";
            case "none":
                return "object-none";
            case "scale-down":
                return "object-scale-down";
            default:
                return "object-cover";
        }
    }

    ParseVideoAspectRatio()
    {
        switch(this.props.VideoAspectRatio)
        {
            case "1/1":
                return "aspect-1/1";
            case "2/1":
                return "aspect-2/1";
            case "3/2":
                return "aspect-3/2";
            case "4/3":
                return "aspect-4/3";
            case "5/4":
                return "aspect-5/4";
            case "16/9":
                return "aspect-16/9";
            case "1/2":
                return "aspect-1/2";
            case "2/3":
                return "aspect-2/3";
            case "3/4":
                return "aspect-3/4";
            case "4/5":
                return "aspect-4/5";
            case "9/16":
                return "aspect-9/16";
            default:
                return "4/3";
        }
    }

    componentDidMount()
    {
        this.videoRef.current.addEventListener("play", this.OnVideoPlayCallback);
        this.videoRef.current.addEventListener("pause", this.OnVideoPauseCallback);

        if(this.props.VideoAutoPlay){ 
            this.videoRef.current.play()
            .then(null, (reason)=>{
                this.videoRef.current.muted = true;
                this.videoRef.current.play();
            })
        }
    }

    componentWillUnmount()
    {
        this.videoRef.current.removeEventListener("play", this.OnVideoPlayCallback);
        this.videoRef.current.removeEventListener("pause", this.OnVideoPauseCallback);

        this.videoRef.current.pause();
    }

    render()
    {
        return(
            <motion.div 
                className="absolute flex items-center justify-center w-full h-full"
                custom={this.props.MotionCustom}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransitions}
                drag={this.props.MotionDrag}
                dragConstraints={this.props.MotionDrag == "x" ? { left: 0, right: 0 } : { top: 0, bottom: 0 }}
                dragElastic={1}
                onDragStart={()=>{ this.props.OnDragBegin?.(); }}
                onDragEnd={(e, {offset, velocity})=>{
                    const swipe = swipePower(
                        (this.props.MotionDrag == "x" ? offset.x : offset.y), 
                        (this.props.MotionDrag == "x" ? velocity.x : velocity.y));

                    if (swipe < -swipeConfidenceThreshold) { this.props.OnDragForward?.(); } 
                    else if (swipe > swipeConfidenceThreshold) { this.props.OnDragBackward?.(); }
                    else { this.props.OnDragEnd?.(); }
                }}
            >
                <div className={"relative block w-full " + this.ParseVideoAspectRatio()}>
                    <video
                        className={"relative block w-full h-full " + this.ParseVideoFit()}
                        src={this.props.VideoSource}
                        controls={this.props.VideoControls}
                        muted={this.props.VideoMuted}
                        loop={this.props.VideoLooped}
                        ref={this.videoRef}
                    />
                </div>
            </motion.div>
        );
    }

}



const slideVariants = 
{
    enter: ({direction, axis})=>
    {
        switch(axis)
        {
            case "x":
                return { x: direction > 0 ? "100%" : "-100%" };
                break;
            case "y":
                return { y: direction > 0 ? "100%" : "-100%" };
                break;
            default: 
                break;
        }
        
    },
    center: ({direction, axis})=> 
    {
        switch(axis)
        {
            case "x":
                return { x: "0"};
            case "y":
                return { y: "0"};
        }
    },
    exit: ({direction, axis})=>
    {
        switch(axis)
        {
            case "x":
                return { x: direction > 0 ? "-100%" : "100%" };
            case "y":
                return { y: direction > 0 ? "-100%" : "100%" };
            default:
                break;
        }
    }
}

const slideTransitions =
{
    type: 'spring',
    stiffness: 200,
    mass: 1,
    damping: 20
}



export default class SlideshowItem extends React.Component
{

    constructor(props)
    {
        super(props);

        this.state = 
        {
            currentSlide: 0,
            slideDirection: 0,
            slideIsDragged: false,
            slideVideoPlaying: false,
            autoPlayPaused: false
        }

        this.numSlides = this.props.SlideshowSlides.length;

        this.slides = this.props.SlideshowSlides.map((slide)=>
        {
            return({ showTime: Number.parseFloat(slide.time) });
        });

        this.timeout = null;

    }

    GetIncreasedSlideIndex()
    {
        let incSlideIndex = this.state.currentSlide + 1;
        if(incSlideIndex >= this.numSlides){ return 0; }
        else return incSlideIndex;
    }

    GetDecreasedSlideIndex()
    {
        let decSlideIndex = this.state.currentSlide -1;
        if(decSlideIndex < 0){return this.numSlides -1; }
        else return decSlideIndex;
    }

    StartWaitForNextSlide()
    {
        if(this.timeout)
        {
            console.warn("tried to wait for next slide while already waiting!"); 
            return;
        }

        const currentSlideTime = this.slides[this.state.currentSlide].showTime * 1000;
        const nextSlideIndex = this.GetIncreasedSlideIndex();

        this.timeout = setTimeout(this.SetSlide.bind(this, nextSlideIndex), currentSlideTime);
    }

    StopWaitForSlide()
    {
        if(this.timeout)
        { 
            clearTimeout(this.timeout); 
            this.timeout = null;
        }
    }

    SetSlide(slideIndex)
    {

        if(slideIndex == this.state.currentSlide){ return; }
        //Immediately cancel any timeout waiting to increase to next slide.
        this.StopWaitForSlide();

        //Determine if the slide is going forwards or backwards.
        const slideBackwards = (this.state.currentSlide != 0 && this.state.currentSlide != this.numSlides -1) ? 
                                slideIndex < this.state.currentSlide : 
                                (this.state.currentSlide == 0 ? slideIndex == this.numSlides -1 : slideIndex != 0);

        this.setState(
            {
                currentSlide: slideIndex,
                direction: (slideBackwards ? -1 : 1)
            },
            ()=>{ if(this.props.SlideshowAutoPlay){ this.StartWaitForNextSlide(); }}
        );

    }

    OnVideoSlidePlay()
    {
        if(this.props.SlideshowAutoPlay){ this.StopWaitForSlide(); }
        this.setState({slideVideoPlaying: true});
    }

    OnVideoSlidePaused(finished)
    {
        if(  this.props.SlideshowAutoPlay &&
            !this.state.autoPlayPaused &&
            !this.state.slideIsDragged)
        { 
            if(finished)
            {
                const nextSlideIndex = this.GetIncreasedSlideIndex();
                this.SetSlide(nextSlideIndex);
            }
            else{ this.StartWaitForNextSlide(); }
        }
        this.setState({slideVideoPlaying: false});
    }

    OnSlideDragBegin()
    {
        if(this.props.SlideshowAutoPlay){ this.StopWaitForSlide(); }
        this.setState({slideIsDragged: true});
    }

    OnSlideDragEnd()
    {
        if(  this.props.SlideshowAutoPlay   &&
            !this.state.autoPlayPaused      &&
            !this.state.slideVideoPlaying){ this.StartWaitForNextSlide(); }
        this.setState({slideIsDragged: false});
    }

    OnSlideDrag(slideIndex)
    {
        this.SetSlide(slideIndex);
        this.setState({slideIsDragged: false});
    }

    ToggleAutoPlayPaused()
    {
        this.setState({autoPlayPaused: !this.state.autoPlayPaused}, ()=>
        {
            if(this.state.autoPlayPaused){ this.StopWaitForSlide(); }
            else{ this.StartWaitForNextSlide(); }    
        })
    }

    ParseSlideAxisMotion()
    {
        switch(this.props.SlideshowAxis)
        {
            case "horizontal":
                return "x";
            case "vertical":
                return "y"
        }
    }

    ParseSlideAxis()
    {
        switch(this.props.SlideshowAxis)
        {
            case "horizontal":
                return "flex-row";
            case "vertical":
                return "flex-col";
        }
    }

    ParseSlideshowAspectRatio()
    {
        switch(this.props.SlideshowAspectRatio)
        {
            case "1/1":
                return "aspect-1/1";
            case "2/1":
                return "aspect-2/1";
            case "3/2":
                return "aspect-3/2";
            case "4/3":
                return "aspect-4/3";
            case "5/4":
                return "aspect-5/4";
            case "16/9":
                return "aspect-16/9";
            case "1/2":
                return "aspect-1/2";
            case "2/3":
                return "aspect-2/3";
            case "3/4":
                return "aspect-3/4";
            case "4/5":
                return "aspect-4/5";
            case "9/16":
                return "aspect-9/16";
            default:
                return "4/3";
        }
    }

    componentDidMount()
    {
        if(this.props.SlideshowAutoPlay){ this.StartWaitForNextSlide(); }
    }

    componentWillUnmount()
    {
        if(this.props.SlideshowAutoPlay){ this.StopWaitForSlide(); }
    }

    render()
    {

        let slideAxis = this.ParseSlideAxisMotion();
        let slideDescription = this.props.SlideshowSlides[this.state.currentSlide];
        let slideObject = null;
        
        switch(slideDescription.type)
        {
            case "image":
                slideObject =
                <ImageSlide
                    ImageSource={slideDescription.image}
                    ImageWidth={slideDescription.width ? Number.parseInt(slideDescription.width) : null}
                    ImageHeight={slideDescription.height ? Number.parseInt(slideDescription.height) : null}
                    ImageAspectRatio={slideDescription.aspectRatio}
                    ImageLayout={slideDescription.layout}
                    ImageFit={slideDescription.fit}
                    ImageAlt={null}
                    MotionCustom={{direction: this.state.direction, axis: slideAxis}}
                    MotionDrag={slideAxis}
                    OnDragForward={this.OnSlideDrag.bind(this, this.GetIncreasedSlideIndex())}
                    OnDragBackward={this.OnSlideDrag.bind(this, this.GetDecreasedSlideIndex())}
                    OnDragBegin={this.OnSlideDragBegin.bind(this)}
                    OnDragEnd={this.OnSlideDragEnd.bind(this)}
                    key={this.state.currentSlide}
                />;
                break;  
            case "video":
                slideObject =
                <VideoSlide
                    VideoSource={slideDescription.video}
                    VideoControls={slideDescription.controls}
                    VideoAutoPlay={slideDescription.autoPlay}
                    VideoMuted={slideDescription.muted}
                    VideoAspectRatio={slideDescription.aspectRatio}
                    VideoLayout={slideDescription.layout}
                    VideoFit={slideDescription.fit}
                    OnVideoPlay={this.OnVideoSlidePlay.bind(this)}
                    OnVideoPaused={this.OnVideoSlidePaused.bind(this)}
                    MotionCustom={{direction: this.state.direction, axis: slideAxis}}
                    MotionDrag={slideAxis}
                    OnDragForward={this.OnSlideDrag.bind(this, this.GetIncreasedSlideIndex())}
                    OnDragBackward={this.OnSlideDrag.bind(this, this.GetDecreasedSlideIndex())}
                    OnDragBegin={this.OnSlideDragBegin.bind(this)}
                    OnDragEnd={this.OnSlideDragEnd.bind(this)}
                    key={this.state.currentSlide}
                />;
                break;
            default:
                break;
        }

        return(
            <BodyItem
                ItemType="Slideshow"
                ItemName={(this.props.VideoName ?? null)}
                TypeSize="text-2xs"
                NameSize="text-xs"
                OpenBracketInline
                FullItemContent
                TypeNameBackgrounds
                NoTypeNames={this.props.BackgroundItem}
                Width={this.props.BackgroundItem ? "w-full" : null}
                Height={this.props.BackgroundItem ? "h-full" : null}
                AspectRatio={this.props.BackgroundItem ? this.ParseSlideshowAspectRatio() : null}
                Styles={this.props.BackgroundItem ? "rounded-none" : "my-1 sm:my-1.5"}
            >
                <div
                    className=
                    {
                        "relative grid w-full h-full justify-items-center items-center " + 
                        "grid-rows-slideshow grid-cols-slideshow " + 
                        this.ParseSlideshowAspectRatio() + " " +
                        this.ParseSlideAxis()
                    } 
                >
                    <AnimatePresence 
                        initial={false} 
                        custom={{direction: this.state.direction, axis: slideAxis}}
                    >
                        {slideObject}
                    </AnimatePresence>
                    { this.props.SlideshowControls ?
                        <>
                            {
                                this.props.SlideshowAutoPlay ?
                                <div
                                    className={
                                        "relative flex items-center justify-center w-6 h-6 aspect-square rounded-full mt-1 mr-1 " +
                                        "bg-eerie-black/80 text-gainsboro-600 " +
                                        "row-start-1 col-start-2 "
                                    } 
                                >
                                    <FontAwesomeIcon
                                        icon={this.state.autoPlayPaused ? faPlay : faPause}
                                        className="relative inline-flex items-center justify-center w-fit aspect-square text-xs leading-none"
                                        onClick={()=>{this.ToggleAutoPlayPaused()}}
                                    />
                                </div>:
                                null
                            }
                            <div
                                className={
                                    "relative flex items-center justify-center rounded-full box-border p-1 overflow-hidden " +
                                    "bg-eerie-black/80 text-gainsboro-600 " +
                                    "row-start-2 col-start-2 w-fit h-fit h-max-full flex-col gap-y-1.5"
                                }
                            >
                                {this.props.SlideshowSlides.map((value, index)=>{
                                    if(index == this.state.currentSlide)
                                    {
                                        return <FontAwesomeIcon 
                                                icon={faCircle} 
                                                key={index}
                                                className="relative inline-flex items-center justify-center w-fit aspect-square text-2xs leading-none"
                                            />
                                    }
                                    else
                                    {
                                        return <FontAwesomeIcon 
                                                icon={faCircleDot} 
                                                key={index}
                                                className="relative inline-flex items-center justify-center w-fit aspect-square text-2xs leading-none"
                                                onClick={this.SetSlide.bind(this, index)}
                                            />
                                    }
                                })}
                            </div>
                        </>
                        :
                        null
                    }
                </div>
            </BodyItem>
        );

    }

}



