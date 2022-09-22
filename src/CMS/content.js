import HeaderItem from "../components/HeaderItem/HeaderItem";
import TextBlockItem from "../components/TextBlockItem/TextBlockItem";
import DividerItem from "../components/DividerItem/DividerItem";
import ImageItem from "../components/ImageItem/ImageItem";
import VideoItem from "../components/VideoItem/VideoItem";
import SlideshowItem from "../components/SlideshowItem/SlideshowItem";
import ButtonItem from "../components/ButtonItem/ButtonItem";
import FlexLayoutItem from "../components/FlexLayoutItem/FlexLayoutItem";



export function ParseContentItems(itemDescriptions)
{
    if(itemDescriptions?.length > 0)
    {
        return itemDescriptions.map((description, index) => { return ParseContentItem(description, index, false); });
    }
    return null;
}

export function ParseContentItem(itemDescription, itemIndex, backgroundItem)
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
            return CreateImageItem(itemDescription, itemIndex, backgroundItem);
            break;

        case "video":
            return CreateVideoItem(itemDescription, itemIndex, backgroundItem);
            break;

        case "slideshow":
            return CreateSlideshowItem(itemDescription, itemIndex, backgroundItem);
            break;

        case "button":
            return CreateButtonItem(itemDescription, itemIndex);
            break;

        case "flexLayout":
            return CreateFlexLayoutItem(itemDescription, itemIndex);
            break;
    }

}

function CreateHeaderItem(description, itemIndex)
{
    return (
        <HeaderItem
            HeaderContent={description.content}
            key={itemIndex}
        />
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

function CreateImageItem(description, itemIndex, backgroundItem)
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
            BackgroundItem={backgroundItem}
            key={itemIndex}
        />
    );
}

function CreateVideoItem(description, itemIndex, backgroundItem)
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
            BakgroundItem={backgroundItem}
            key={itemIndex}
        />
    );

}

function CreateSlideshowItem(description, itemIndex, backgroundItem)
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
            BackgroundItem={backgroundItem}
            key={itemIndex}
        />
    );

}

function CreateButtonItem(description, itemIndex)
{
    let actionData = description.action[0];
    if(actionData.type == "download")
    {
        actionData.target = actionData.target.replace('/public/media', '/media');
    }

    return(
        <ButtonItem 
            IconType={description.icon.content?.[0]?.type ?? "none"}
            IconName={description.icon.content?.[0]?.iconName}
            IconColor={description.icon.content?.[0]?.iconColor ?? null}
            IconAspectRatio={description.icon.aspectRatio}
            IconSize={description.icon.size}
            IconAlignment={description.icon.alignment}
            IconAttached={description.icon.attached}
            TitleContent={description.title}
            Width={description.width}
            ActionData={actionData}
            key={itemIndex}
        />
    );

}

function CreateFlexLayoutItem(description, itemIndex)
{

    return(
        <FlexLayoutItem
            Direction={description.direction}
            Wrap={description.wrap}
            AlignItems={description.align}
            JustifyContent={description.justify}
            key={itemIndex}
        >
            {ParseContentItems(description.content)}
        </FlexLayoutItem>
    ); 
    
}



export function ParseTextSize(size)
{
    switch(size)
        {
            case "xs":
                return "text-xs";
            case "sm":
                return "text-sm";
            case "base":
                return "text-base";
            case "lg":
                return "text-lg";
            case "xl":
                return "text-xl";
            case "2xl":
                return "text-2xl";
            case "3xl":
                return "text-3xl";
            case "4xl":
                return "text-4xl";
            case "5xl":
                return "text-5xl";
            case "6xl":
                return "text-6xl";
            case "7xl":
                return "text-7xl";
            case "8xl":
                return "text-8xl";
            case "9xl":
                return "text-9xl";
            default:
                return "text-base";
        }
}

export function ParseTextAlignment(alignment)
{
    return "text-" + alignment;
}

export function ParseFontWeight(weight)
{
    return "font-" + weight;
}

export function ParseAspectRatio(ratio)
{
    switch(ratio)
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
            return "1/1";
    }
}

export function ParseWidth(width)
{
    switch(width)
    {
        case "fit-content":
            return "w-fit";
        case "full":
            return "w-full";
    }
}
