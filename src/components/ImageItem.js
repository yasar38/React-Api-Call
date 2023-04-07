import { Card } from 'primereact/card';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';


function ImageItem({ image }) {
    console.log(image)
    const header = (
        <img alt="Card" src={image.urls.small} />
    );
    const footer = (
        <div className="flex flex-wrap justify-content-end gap-2">
            <Button label="Satın Al" icon="pi pi-check" />
        </div>
    );
    return <div>
        <Card title={image.user.name} subTitle={image.user.location} footer={footer} header={header} className="md:w-25rem">
            <p className="m-0">
                {image.alt_description}
            </p>
        </Card>
    </div>;
}
export default ImageItem;