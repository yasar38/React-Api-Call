import ImageItem from "./ImageItem";

function ImageList({ ImagesPlaceholder }) {
    return <div className="imageList">
        {ImagesPlaceholder.map((image, index) => {
            return <ImageItem key={index} image={image} />
        })}
    </div>;
}
export default ImageList;