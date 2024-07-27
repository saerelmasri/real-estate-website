export type Property = {
    id: number;
    name: string;
    propertyUse: string;
    price: number;
    size: number;
    location: string;
    imageNumber: number;
    readyToMove: boolean;
    latitude: number;
    longitude: number;
};

export type SelectComponentProp = {
    title: string;
    filter: string;
    value: string | number;
    onChange: (filter: string, value: string | number) => void;
};

export type FiltersTypes = {
    dataArray: (string | number)[];
};