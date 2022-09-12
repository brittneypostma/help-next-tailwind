import HeaderItem from "../components/HeaderItem/HeaderItem";
import TextBlockItem from "../components/TextBlockItem/TextBlockItem";
import DividerItem from "../components/DividerItem/DividerItem";
import ImageItem from "../components/ImageItem/ImageItem";
import VideoItem from "../components/VideoItem/VideoItem";
import SlideshowItem from "../components/SlideshowItem/SlideshowItem";
import BodyItem from "../components/BodyItem/BodyItem";
import ButtonItem from "../components/ButtonItem/ButtonItem";



export function ParseContentItems(itemDescriptions)
{
    return itemDescriptions.map((description, index) => { return ParseContentItem(description, index); });
}

export function ParseContentItem(itemDescription, itemIndex)
{

    let itemType = itemDescription.type;

    switch(itemType)
    {
        case "header":
            return CreateHeaderItem(itemDescription, itemIndex);
            break;
            
        case "textblock":
            return CreateTextBlockItem(itemDescription, itemIndex);
            break;

        case "divider":
            return CreateDividerItem(itemDescription, itemIndex);
            break;

        case "image":
            return CreateImageItem(itemDescription, itemIndex);
            break;

        case "video":
            return CreateVideoItem(itemDescription, itemIndex);
            break;

        case "slideshow":
            return CreateSlideshowItem(itemDescription, itemIndex);
            break;

        case "button":
            return CreateButtonItem(itemDescription, itemIndex);
            break;
    }

}

function CreateHeaderItem(description, itemIndex)
{
    return (
        <HeaderItem
            HeaderSize={description.size ?? "base"}
            HeaderWeight={description.weight ?? "normal"}
            HeaderAlignment={description.alignment ?? "center"}
            key={itemIndex}
        >
            {description.content}
        </HeaderItem>
    );
}

function CreateTextBlockItem(description, itemIndex)
{
    return(
        <TextBlockItem
            TextSize={description.size ?? "base"}
            TextWeight={description.weight ?? "normal"}
            TextAlignment={description.alignment ?? "center"}
            key={itemIndex}
        >
            {description.content}
        </TextBlockItem>
    );

}

function CreateDividerItem(description, itemIndex)
{
    return(
        <DividerItem
            DividerThickness={description.thickness}
            Title={description.text?.content ?? null}
            TitleSize={description.text?.size ??  "base"}
            TitleWeight={description.text?.weight ?? "normal"}
            TitleAlignment={description.text?.alignment ?? "center"}
            key={itemIndex}
        />
    );
}

function CreateImageItem(description, itemIndex)
{
    let imagePath = description.image.replace('/public/media', '/media');

    return(
        <ImageItem
            ImageSource={imagePath}
            ImageWidth={description.width ? Number.parseInt(description.width) : null}
            ImageHeight={description.height ? Number.parseInt(description.height) : null}
            ImageAspectRatio={description.aspectRatio}
            ImageLayout={description.layout}
            ImageFit={description.fit}
            ImageAlt={null}
            key={itemIndex}
        />
    );
}

function CreateVideoItem(description, itemIndex)
{
    let videoPath = description.video.replace('/public/media', '/media');

    return(
        <VideoItem
            VideoSource={videoPath}
            VideoControls={description.controls}
            VideoAutoPlay={description.autoPlay}
            VideoLooped={description.looped}
            VideoMuted={description.muted}
            VideoAspectRatio={description.aspectRatio}
            VideoLayout={description.layout}
            VideoFit={description.fit}
            key={itemIndex}
        />
    );

}

function CreateSlideshowItem(description, itemIndex)
{

    let slides = description.slides.map((slide)=>
    {
        let slideDesc = slide;
        if(slideDesc.type == "image")
        {
            slideDesc.image = slideDesc.image.replace('/public/media', '/media');
        }
        if(slideDesc.type == "video")
        {
            slideDesc.video = slideDesc.video.replace('/public/media', '/media');
        }
        return slideDesc;
    });
    
    return(
        <SlideshowItem
            SlideshowAspectRatio={description.aspectRatio}
            SlideshowAutoPlay={description.autoPlay}
            SlideshowControls={description.controls}
            SlideshowAxis={description.direction}
            SlideshowSlides={slides}
            key={itemIndex}
        />
    );

}

function CreateButtonItem(description, itemIndex)
{

    console.log(description);
    let actionData = description.action[0];
    if(actionData.type == "download")
    {
        actionData.target = actionData.target.replace('/public/media', '/media');
    }

    return(
        <ButtonItem 
            IconType={description.icon.iconType[0]?.type ?? "none"}
            IconName={description.icon.iconType[0]?.iconName}
            IconSize={description.icon.size}
            IconAlignment={description.iconAlignment}
            IconAttached={description.iconAttached}
            Title={description.title}
            TitleSize={description.size}
            TitleWeight={description.weight}
            TitleAlignment={description.alignment}
            ActionData={actionData}
            key={itemIndex}
        />
    );

}