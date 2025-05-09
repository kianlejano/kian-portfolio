import { IconType } from 'react-icons';

export type SocialLink  = {
    name: string,
    url: string,
    icon: IconType,
}

export type TitleProps = {
    icon: IconType,
    description: string,
    bgColor?: string,
    textColor?: string,
    borderColor?: string,
}

export type Technology = {
    name: string,
    description?: string,
    logo: string,
}

export type TechStackType = {
    title: TitleProps,
    technologies: Technology[],
}

export type ProjectType = {
    name: string,
    pic: string,
    stack: string[],
    description: string,
    createdAt: string,
    link?: string,
    githubRepo?: string,
}

export type ProjectProp = {
    project: ProjectType
}

export type HeaderProp = {
    title: string,
}