export type ImageFormat = "landscape" | "portrait";

export interface ProjectImage {
    src: string;
    format: ImageFormat;
}

export interface ProjectPreview {
    id: string;
    title: string;
    type: string;
    format: ImageFormat;
    img: string;
    hoverImg: string;
    span: number;
}

export interface ProjectDetails {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    link?: string;
    services: string;
    client: string;
    year: string;
    images: ProjectImage[];
    concept: string;
    scope: string;
    previous: {
        title: string;
        subtitle1: string;
        subtitle2: string;
        format: ImageFormat;
        img: string;
        hoverImg: string;
        slug: string;
    };
    next: {
        title: string;
        subtitle1: string;
        subtitle2: string;
        format: ImageFormat;
        img: string;
        hoverImg: string;
        slug: string;
    };
}
